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
import { useEffect, useCallback, useMemo } from 'react';
import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';
import { fetchPropertyRatingRecommendations } from '@actions/propertyRatingReccomendations';
import { isEmpty } from 'lib/src/utils/generic';

const useEditPropertyRating = (propertyRating?: PropertyRating) => {
    const { id } = useParams<{ id: string }>();

    const initialForm = useMemo(() => {
        return {
            dateOfInspection: propertyRating?.ratingCreatedOn
                ? new Date(propertyRating.ratingCreatedOn)
                : new Date(),
            validUntil: propertyRating?.certificateValidUntil
                ? new Date(propertyRating.certificateValidUntil)
                : new Date(new Date().setFullYear(new Date().getFullYear() + 10)),
            lmkKey: propertyRating?.lmkKey || '',
            currentEnergyEfficiency: propertyRating?.currentEnergyEfficiency || 0,
            potentialEnergyEfficiency: propertyRating?.potentialEnergyEfficiency || 0,
            builtForm: propertyRating?.builtForm || '',
            constructionAgeBand: propertyRating?.constructionAgeBand || '',
            wallDescription: propertyRating?.wallDescription || '',
            floorDescription: propertyRating?.floorDescription || '',
            propertyType: propertyRating?.propertyType || '',
        };
    }, [propertyRating]);

    const dispatch = useDispatch();
    const history = useHistory();

    const success = useSelector(getPropertyRatingsPostSuccess);
    const isPosting = useSelector(getPropertyRatingsIsPosting);
    const error = useSelector(getPropertyRatingsPostError);

    const [formState, handleChange, resetData] = useForm(initialForm);

    const handleSubmit = () => {
        dispatch(updatePropertyRating(+id, { ...formState, id: +id }));
    };

    const closeModal = useCallback(() => {
        history.replace(`/properties/${id}`);
    }, [id, history]);

    useEffect(() => {
        dispatch(fetchPropertyRating(+id));
    }, [dispatch, id]);

    useEffect(() => {
        if (!isEmpty(propertyRating)) {
            resetData(initialForm);
        }
    }, [propertyRating, initialForm, resetData]);

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
        propertyRating,
        formState,
        handleChange,
        handleSubmit,
        closeModal,
    };
};

export default useEditPropertyRating;
