import { fetchUserProperties } from '@actions/properties/fetchUserProperties';
import {
    getPropertiesIsFetching,
    getPropertiesFetchError,
    getProperties,
} from './../../../../redux/selectors/properties';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';

const useFetchUserProperties = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();

    const isFetching = useSelector(getPropertiesIsFetching);
    const fetchError = useSelector(getPropertiesFetchError);
    const properties = useSelector(getProperties);

    useEffect(() => {
        dispatch(fetchUserProperties(+id));
    }, [id, dispatch]);

    return {
        isFetching,
        fetchError,
        properties,
    };
};

export default useFetchUserProperties;
