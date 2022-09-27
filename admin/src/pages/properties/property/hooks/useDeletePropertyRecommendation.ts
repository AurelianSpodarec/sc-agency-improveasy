import usePrevious from 'lib/src/hooks/usePrevious';
import { useParams, useHistory } from 'react-router-dom';
import {
    getPropertyRatingRecommendation,
    getPropertyRatingRecommendationsIsPosting,
    getPropertyRatingRecommendationsPostSuccess,
    getPropertyRatingRecommendationsPostError,
} from './../../../../redux/selectors/propertyRatingRecommendations';
import { useAppSelector } from './../../../../redux/store';
import { useDispatch, useSelector } from 'react-redux';
import { useCallback, useEffect } from 'react';
import { deletePropertyRatingRecommendation } from '@actions/propertyRatingReccomendations';

const useDeletePropertyRecommendation = () => {
    const history = useHistory();
    const dispatch = useDispatch();
    const { id, recommendationID } = useParams<{ id: string; recommendationID: string }>();

    const isPosting = useSelector(getPropertyRatingRecommendationsIsPosting);
    const error = useSelector(getPropertyRatingRecommendationsPostError);
    const success = useSelector(getPropertyRatingRecommendationsPostSuccess);
    const recommendation = useAppSelector(state =>
        getPropertyRatingRecommendation(state, +recommendationID),
    );
    const handleSubmit = () => {
        dispatch(deletePropertyRatingRecommendation(+recommendationID));
    };

    const closeModal = useCallback(() => {
        history.replace(`/properties/${id}`);
    }, [id, history]);

    const prevSuccess = usePrevious(success);
    useEffect(() => {
        if (!prevSuccess && success) {
            closeModal();
        }
    }, [closeModal, prevSuccess, success]);

    return {
        recommendation,
        handleSubmit,
        closeModal,
        isPosting,
        error,
    };
};

export default useDeletePropertyRecommendation;
