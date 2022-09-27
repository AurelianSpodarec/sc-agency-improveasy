import { fetchPropertyRatingRecommendations } from '../../../../redux/actions/propertyRatingReccomendations/fetchPropertyRatingRecommendations';
import {
    getPropertyRatingRecommendationsIsFetching,
    getPropertyRatingRecommendationsFetchError,
    getPropertyRatingRecommendations,
} from '@selectors/propertyRatingRecommendations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { useAppSelector } from '../../../../redux/store';

const usePropertyRatingRecommendations = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    const isFetching = useSelector(getPropertyRatingRecommendationsIsFetching);
    const error = useSelector(getPropertyRatingRecommendationsFetchError);
    const recommendations = useAppSelector(state => getPropertyRatingRecommendations(state));

    useEffect(() => {
        dispatch(fetchPropertyRatingRecommendations(+id));
    }, [dispatch, id]);

    return { isFetching, error, recommendations, propertyID: id };
};

export default usePropertyRatingRecommendations;
