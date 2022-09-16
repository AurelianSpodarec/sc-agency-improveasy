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
import { useEffect } from 'react';

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

const useCreateProperty = () => {
    const history = useHistory();
    const dispatch = useDispatch();

    const isPosting = useSelector(selectPropertiesIsPosting);
    const postSuccess = useSelector(selectPropertiesPostSuccess);
    const prevPostSuccess = usePrevious(postSuccess);
    const error = useSelector(selectPropertiesError);

    const [formState, _handleChange] = useForm<ICreatePropertyForm>(initialForm);

    useEffect(() => {
        if (postSuccess && !prevPostSuccess) {
            history.push('/portal/properties');
        }
    }, [history, postSuccess, prevPostSuccess]);

    const closeModal = () => {
        history.push('/portal/properties');
    };

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

    const handleSubmit = () => {
        dispatch(postCreateUserProperty(formState));
    };

    return {
        formState,
        handleChange,
        closeModal,
        handleSubmit,
        isPosting,
        error,
    };
};

export default useCreateProperty;
