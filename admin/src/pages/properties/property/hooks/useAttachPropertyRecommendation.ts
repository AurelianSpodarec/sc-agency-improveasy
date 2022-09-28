import { getImprovementTypes } from './../../../../redux/selectors/improvementTypes';
import { PropertyRating } from 'src/types/shared/PropertyRating';
import { createPropertyRatingRecommendation } from './../../../../redux/actions/propertyRatingReccomendations/createPropertyRatingRecommendation';
import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';
import { useHistory } from 'react-router-dom';
import {
    getPropertyRatingRecommendationsIsPosting,
    getPropertyRatingRecommendationsPostSuccess,
    getPropertyRatingRecommendationsPostError,
} from './../../../../redux/selectors/propertyRatingRecommendations';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect, useState } from 'react';
import { createRecommendationImprovementType } from '@actions/propertyRatingReccomendations/createRecommendationImprovementType';

const useAttachPropertyRecommendation = (rating: PropertyRating) => {
    const history = useHistory();
    const dispatch = useDispatch();

    const isPosting = useSelector(getPropertyRatingRecommendationsIsPosting);
    const error = useSelector(getPropertyRatingRecommendationsPostError);
    const success = useSelector(getPropertyRatingRecommendationsPostSuccess);
    const improvementTypes = useSelector(getImprovementTypes);

    const [formState, handleChange] = useForm<{
        improvementTypeID: number | null;
        improvementType: string;
    }>({
        improvementTypeID: null,
        improvementType: '',
    });

    const [showFreeInput, setShowFreeInput] = useState(false);

    const handleSubmit = () => {
        const improvementTypeID = formState.improvementTypeID as number;

        if (showFreeInput) {
            dispatch(createRecommendationImprovementType(rating.id, formState.improvementType));
        } else {
            dispatch(createPropertyRatingRecommendation(rating.id, improvementTypeID));
        }
    };

    const closeModal = useCallback(() => {
        history.replace(`/properties/${rating.propertyID}`);
    }, [rating?.propertyID, history]);

    const prevSuccess = usePrevious(success);

    useEffect(() => {
        if (!prevSuccess && success) {
            closeModal();
        }
    }, [closeModal, prevSuccess, success]);

    const improvementTypeOptions = improvementTypes.map(({ name, id }) => ({
        label: name,
        value: id,
    }));

    return {
        handleChange,
        handleSubmit,
        closeModal,
        isPosting,
        error,
        improvementTypeOptions,
        formState,
        isSubmitDisabled: !formState.improvementTypeID && !formState.improvementType,
        showFreeInput,
        setShowFreeInput,
    };
};

export default useAttachPropertyRecommendation;
