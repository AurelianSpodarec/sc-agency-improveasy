import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';

import {
    ICreatePropertyForm,
    ICreatePropertyRequest,
    ModalContent,
} from '../../../../types/shared/Properties';

import { postCreateUserProperty } from '@actions/properties/postCreateUserProperty';
import {
    selectLastCreatedPropertyId,
    selectPropertiesError,
    selectPropertiesIsPosting,
    selectPropertiesPostSuccess,
    selectSingleProperty,
} from '@selectors/properties';
import { RootState } from '@reducers/index';
import { selectAccountDetails } from '@selectors/account';

const initialForm: ICreatePropertyForm = {
    addressLine1: '',
    addressLine2: '',
    city: '',
    postcode: '',
    bypassEPC: false,
    useAccountDetailsForAccess: false,
    accessDetails: {
        firstName: '',
        lastName: '',
        email: '',
        phone: '',
        preferredContactTime: null,
    },
};

const useCreateProperty = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const isPosting = useSelector(selectPropertiesIsPosting);
    const prevIsPosting = usePrevious(isPosting);
    const postSuccess = useSelector(selectPropertiesPostSuccess);
    const prevPostSuccess = usePrevious(postSuccess);
    const error = useSelector(selectPropertiesError);
    const accountDetails = useSelector(selectAccountDetails);

    const [formState, _handleChange] = useForm<ICreatePropertyForm>(initialForm);
    const [modalContent, setModalContent] = useState<ModalContent>(1);

    const lastCreatedPropertyId = useSelector(selectLastCreatedPropertyId);
    const lastCreatedProperty = useSelector((state: RootState) =>
        selectSingleProperty(state, lastCreatedPropertyId || 0),
    );

    const closeModal = useCallback(() => {
        history.push('/portal/properties');
    }, [history]);

    const handleChange = (
        name: keyof ICreatePropertyForm,
        value: string | number | boolean | Date | null,
    ) => {
        if (name === 'useAccountDetailsForAccess') {
            if (formState.useAccountDetailsForAccess) {
                _handleChange('useAccountDetailsForAccess', false);
                _handleChange('accessDetails', {
                    firstName: '',
                    lastName: '',
                    email: '',
                    phone: '',
                });
            } else {
                _handleChange('useAccountDetailsForAccess', true);
                _handleChange('accessDetails', {
                    firstName: accountDetails?.firstName,
                    lastName: accountDetails?.lastName,
                    email: accountDetails?.email,
                    phone: accountDetails?.phone,
                });
            }
        } else if (name.includes('accessDetails')) {
            const accessDetailsName = name.split('.')[1];

            _handleChange('accessDetails', {
                ...formState.accessDetails,
                [accessDetailsName]: value,
            });
        } else {
            _handleChange(name, value);
        }
    };

    useEffect(() => {
        if (!isPosting && prevIsPosting) {
            if (error && error.includes('404')) {
                setModalContent(ModalContent.EPCFailure);
            }
        }

        if (postSuccess && !prevPostSuccess) {
            if (lastCreatedProperty.hasEPC) {
                setModalContent(ModalContent.EPCSuccess);
            } else {
                closeModal();
            }
        }
    }, [
        postSuccess,
        prevPostSuccess,
        closeModal,
        formState.bypassEPC,
        error,
        isPosting,
        prevIsPosting,
        lastCreatedProperty,
    ]);

    const handleSubmit = (bypassEPC?: true) => {
        const postBody: ICreatePropertyRequest = {
            ...formState,
            bypassEPC: bypassEPC || formState.bypassEPC,
        };

        dispatch(postCreateUserProperty(postBody));
    };

    return {
        formState,
        handleChange,
        closeModal,
        handleSubmit,
        isPosting,
        error,
        modalContent,
        setModalContent,
        lastCreatedProperty,
    };
};

export default useCreateProperty;
