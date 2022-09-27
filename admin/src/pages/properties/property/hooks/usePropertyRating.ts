import { useParams } from 'react-router-dom';
import { fetchPropertyRating } from './../../../../redux/actions/propertyRatings/fetchPropertyRating';
import {
    getPropertyRatingsIsFetching,
    getPropertyRatingsError,
    getPropertyRating,
} from './../../../../redux/selectors/propertyRatings';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from './../../../../redux/store';
import { useEffect } from 'react';

const usePropertyRating = () => {
    const { id } = useParams<{ id: string }>();

    const dispatch = useDispatch();
    const isFetching = useSelector(getPropertyRatingsIsFetching);
    const error = useSelector(getPropertyRatingsError);
    const propertyRating = useAppSelector(state => getPropertyRating(state, +id));

    useEffect(() => {
        dispatch(fetchPropertyRating(+id));
    }, [dispatch, id]);

    return {
        isFetching,
        error,
        propertyRating,
    };
};

export default usePropertyRating;
