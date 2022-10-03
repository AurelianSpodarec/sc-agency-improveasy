import { fetchPropertyRatingRecommendations } from '../../../../redux/actions/propertyRatingReccomendations/fetchPropertyRatingRecommendations';
import {
    getPropertyRatingRecommendationsIsFetching,
    getPropertyRatingRecommendationsFetchError,
    getPropertyRatingRecommendations,
} from '@selectors/propertyRatingRecommendations';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getProperty } from '@selectors/properties';
import { RootState } from '@reducers/index';

const usePropertyRatingRecommendations = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    const isFetching = useSelector(getPropertyRatingRecommendationsIsFetching);
    const error = useSelector(getPropertyRatingRecommendationsFetchError);
    const recommendations = useSelector(getPropertyRatingRecommendations);
    const property = useSelector((state: RootState) => getProperty(state, +id));
    const hasEPC = property?.hasEPC ?? false;

    useEffect(() => {
        dispatch(fetchPropertyRatingRecommendations(+id));
    }, [dispatch, id]);

    return { isFetching, error, recommendations, propertyID: id, hasEPC };
};

export default usePropertyRatingRecommendations;
