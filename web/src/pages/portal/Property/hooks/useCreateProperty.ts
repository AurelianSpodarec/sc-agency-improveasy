import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';

import { ICreatePropertyForm } from '../../../../types/shared/Properties';

import { postCreateUserProperty } from '@actions/properties/postCreateUserProperty';
import {
    selectPropertiesError,
    selectPropertiesIsPosting,
    selectPropertiesPostSuccess,
} from '@selectors/properties';

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
    },
};

enum ModalContent {
    Form = 1,
    EPCSearchComplete,
}

const useCreateProperty = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const isPosting = useSelector(selectPropertiesIsPosting);
    const prevIsPosting = usePrevious(isPosting);
    const postSuccess = useSelector(selectPropertiesPostSuccess);
    const prevPostSuccess = usePrevious(postSuccess);
    const error = useSelector(selectPropertiesError);

    const [formState, _handleChange] = useForm<ICreatePropertyForm>(initialForm);
    const [modalContent, setModalContent] = useState<ModalContent>(1);

    const closeModal = useCallback(() => {
        history.push('/portal/properties');
    }, [history]);

    const handleChange = (name: keyof ICreatePropertyForm, value: string | number | boolean) => {
        if (name.includes('accessDetails')) {
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
            if (error) {
                console.log(error);
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
    ]);

    const handleSubmit = () => {
        dispatch(postCreateUserProperty(formState));
    };

    const handleContinueAnyway = () => {
        handleChange('bypassEPC', true);

        handleSubmit();
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
        handleContinueAnyway,
    };
};

export default useCreateProperty;
