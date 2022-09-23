import {
    getProperty,
    getPropertiesIsFetching,
    getPropertiesFetchError,
} from './../../../../redux/selectors/properties';
import { useAppSelector } from './../../../../redux/store';

import { fetchProperty } from '@actions/properties';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const useFetchProperty = () => {
    const dispatch = useDispatch();
    const { id } = useParams<{ id: string }>();

    const property = useAppSelector(state => getProperty(state, +id));
    const isFetching = useSelector(getPropertiesIsFetching);
    const fetchError = useSelector(getPropertiesFetchError);

    useEffect(() => {
        dispatch(fetchProperty(+id));
    }, [dispatch, id]);

    return { property, isFetching, fetchError };
};

export default useFetchProperty;
