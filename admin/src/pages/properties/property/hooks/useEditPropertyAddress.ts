import { editPropertyAddress } from './../../../../redux/actions/properties/editPropertyAddress';
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

const useEditPropertyAddress = ({ property }: { property: Property }) => {
    const dispatch = useDispatch();
    const history = useHistory();

    const isPosting = useSelector(getPropertiesIsPosting);
    const error = useSelector(getPropertiesPostError);
    const success = useSelector(getPropertiesPostSuccess);

    const { addressLine1, addressLine2, city, postcode } = property;
    const [formState, handleChange] = useForm({
        addressLine1,
        addressLine2,
        city,
        postcode,
    });

    const closeModal = useCallback(() => {
        history.replace(`/properties/${property.id}`);
    }, [property.id, history]);

    const handleSubmit = () => {
        dispatch(editPropertyAddress(property.id, formState));
    };

    const prevSuccess = usePrevious(success);
    useEffect(() => {
        if (!prevSuccess && success) {
            closeModal();
        }
    }, [prevSuccess, success, closeModal]);

    return { closeModal, handleSubmit, isPosting, error, formState, handleChange };
};

export default useEditPropertyAddress;
