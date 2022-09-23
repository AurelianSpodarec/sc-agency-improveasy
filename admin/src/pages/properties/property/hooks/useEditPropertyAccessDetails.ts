import usePrevious from 'lib/src/hooks/usePrevious';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { Property } from 'src/types/shared/Property';
import {
    getPropertiesIsPosting,
    getPropertiesPostError,
    getPropertiesPostSuccess,
} from '@selectors/properties';
import { useCallback, useEffect } from 'react';
import useForm from 'lib/src/hooks/useForm';

const useEditPropertyAccessDetails = ({ property }: { property: Property }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const isPosting = useSelector(getPropertiesIsPosting);
    const error = useSelector(getPropertiesPostError);
    const success = useSelector(getPropertiesPostSuccess);

    const { firstName, lastName, email, phone, preferredContactTime } = property.accessDetails;
    const [formState, handleChange] = useForm({
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
        console.log('submit');
    };

    const prevSuccess = usePrevious(success);
    useEffect(() => {
        if (!prevSuccess && success) {
            closeModal();
        }
    }, [prevSuccess, success, closeModal]);

    return { closeModal, handleSubmit, isPosting, error, formState, handleChange };
};

export default useEditPropertyAccessDetails;
