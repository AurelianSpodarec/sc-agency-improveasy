import {
    getPropertiesIsFetching,
    getPropertiesFetchError,
    getProperties,
} from './../../../../redux/selectors/properties';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../../../redux/store';
import { fetchProperties } from '@actions/properties';

const useFetchProperties = () => {
    const dispatch = useDispatch();

    const isFetching = useSelector(getPropertiesIsFetching);
    const fetchError = useSelector(getPropertiesFetchError);
    const properties = useAppSelector(getProperties);

    useEffect(() => {
        dispatch(fetchProperties());
    }, [dispatch]);

    return {
        isFetching,
        fetchError,
        properties,
    };
};

export default useFetchProperties;
