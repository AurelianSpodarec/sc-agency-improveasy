import { createPropertyRating } from './../../../../redux/actions/propertyRatings/createPropertyRating';
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
import { fetchPropertyRatingRecommendations } from '@actions/propertyRatingReccomendations';

const useEditPropertyRating = () => {
    const { id } = useParams<{ id: string }>();

    const dispatch = useDispatch();
    const history = useHistory();

    const success = useSelector(getPropertyRatingsPostSuccess);
    const isPosting = useSelector(getPropertyRatingsIsPosting);
    const error = useSelector(getPropertyRatingsPostError);

    const [formState, handleChange] = useForm({
        dateOfInspection: new Date(),
        validUntil: new Date(new Date().setFullYear(new Date().getFullYear() + 10)),
        lmkKey: '',
        certificateNumber: '',
        currentEnergyEfficiency: 0,
        potentialEnergyEfficiency: 0,
        builtForm: '',
        constructionAgeBand: '',
        wallDescription: '',
        floorDescription: '',
        propertyType: '',
    });

    const handleSubmit = () => {
        dispatch(createPropertyRating(+id, { ...formState, id: +id }));
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
            dispatch(fetchPropertyRatingRecommendations(+id));
            closeModal();
        }
    }, [prevSuccess, success, dispatch, closeModal, id]);

    return {
        isPosting,
        error,
        formState,
        handleChange,
        handleSubmit,
        closeModal,
    };
};

export default useEditPropertyRating;
