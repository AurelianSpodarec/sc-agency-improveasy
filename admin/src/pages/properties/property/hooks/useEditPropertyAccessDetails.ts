import { editPropertyAccessDetails } from './../../../../redux/actions/properties/editPropertyAccessDetails';
import usePrevious from 'lib/src/hooks/usePrevious';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Property } from 'src/types/shared/Property';
import {
    getPropertiesIsPosting,
    getPropertiesPostError,
    getPropertiesPostSuccess,
} from '@selectors/properties';
import { useCallback, useEffect, useState } from 'react';
import useForm from 'lib/src/hooks/useForm';
import { User } from 'src/types/shared/User';

const useEditPropertyAccessDetails = ({ property, user }: { property: Property; user: User }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const isPosting = useSelector(getPropertiesIsPosting);
    const error = useSelector(getPropertiesPostError);
    const success = useSelector(getPropertiesPostSuccess);

    const [useOwnerDetails, setUseOwnerDetails] = useState(false);

    const { firstName, lastName, email, phone, preferredContactTime } = property.accessDetails;
    const [formState, handleFormChange, resetForm] = useForm({
        firstName,
        lastName,
        email,
        phone,
        preferredContactTime,
    });

    const closeModal = useCallback(() => {
        history.replace(`/properties/${property.id}`);
    }, [property.id, history]);

    const handleSubmit = () => {
        dispatch(editPropertyAccessDetails(property.id, formState));
    };

    const handleChange = useCallback(
        <T>(name: keyof typeof formState, value: T) => {
            handleFormChange(name, value);
        },
        [handleFormChange],
    );

    const prevSuccess = usePrevious(success);
    useEffect(() => {
        if (!prevSuccess && success) {
            closeModal();
        }
    }, [prevSuccess, success, closeModal]);

    useEffect(() => {
        if (useOwnerDetails) {
            resetForm({
                firstName: user.firstName,
                lastName: user.lastName,
                email: user.email,
                phone: user.phone || '',
                preferredContactTime: '',
            });
        }
    }, [useOwnerDetails, resetForm, user]);

    return {
        closeModal,
        handleSubmit,
        isPosting,
        error,
        formState,
        handleChange,
        setUseOwnerDetails,
        useOwnerDetails,
    };
};

export default useEditPropertyAccessDetails;
