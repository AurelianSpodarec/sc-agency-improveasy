import { useParams } from 'react-router-dom';
import {
    getPropertyRatingsIsFetching,
    getPropertyRatingsFetchError,
    getPropertyRating,
} from './../../../../redux/selectors/propertyRatings';
import { useSelector } from 'react-redux';
import { useAppSelector } from './../../../../redux/store';

const usePropertyRating = () => {
    const { id } = useParams<{ id: string }>();

    const isFetching = useSelector(getPropertyRatingsIsFetching);
    const error = useSelector(getPropertyRatingsFetchError);
    const propertyRating = useAppSelector(state => getPropertyRating(state, +id));

    return {
        isFetching,
        error,
        propertyRating,
    };
};

export default usePropertyRating;
