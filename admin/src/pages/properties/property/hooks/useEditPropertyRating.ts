import { updatePropertyRating } from './../../../../redux/actions/propertyRatings/updatePropertyRating';
import { PropertyRating } from './../../../../types/shared/PropertyRating';
import { useParams, useHistory } from 'react-router-dom';
import { fetchPropertyRating } from './../../../../redux/actions/propertyRatings/fetchPropertyRating';
import {
    getPropertyRatingsIsPosting,
    getPropertyRatingsPostError,
    getPropertyRatingsPostSuccess,
} from './../../../../redux/selectors/propertyRatings';
import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useCallback } from 'react';
import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';

const useEditPropertyRating = (propertyRating: PropertyRating) => {
    const { id } = useParams<{ id: string }>();

    const dispatch = useDispatch();
    const history = useHistory();

    const success = useSelector(getPropertyRatingsPostSuccess);
    const isPosting = useSelector(getPropertyRatingsIsPosting);
    const error = useSelector(getPropertyRatingsPostError);

    const [formState, handleChange] = useForm({
        currentRating: propertyRating.currentRating,
        potentialRating: propertyRating.potentialRating,
        dateOfInstpection: new Date(propertyRating.ratingCreatedOn),
        validUntil: new Date(propertyRating.certificateValidUntil),
        certificateNumber: propertyRating.certificateNumber,
        currentEnergyEfficiency: propertyRating.currentEnergyEfficiency,
        potentialEnergyEfficiency: propertyRating.potentialEnergyEfficiency,
    });

    const handleSubmit = () => {
        dispatch(updatePropertyRating(+id, { ...formState, id: +id }));
    };

    const closeModal = useCallback(() => {
        history.replace(`/properties/${id}`);
    }, [id, history]);

    useEffect(() => {
        dispatch(fetchPropertyRating(+id));
    }, [dispatch, id]);

    const prevSuccess = usePrevious(success);
    useEffect(() => {
        if (!prevSuccess && success) {
            closeModal();
        }
    }, [prevSuccess, success, dispatch, closeModal]);

    return {
        isPosting,
        error,
        propertyRating,
        formState,
        handleChange,
        handleSubmit,
        closeModal,
    };
};

export default useEditPropertyRating;
