import { useDispatch, useSelector } from 'react-redux';
import { useEffect } from 'react';

import {
    selectProperties,
    selectPropertiesError,
    selectPropertiesIsFetching,
} from '@selectors/properties';

import { fetchUserProperties } from '@actions/properties/fetchUserProperties';

const useFetchProperties = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector(selectPropertiesIsFetching);
    const error = useSelector(selectPropertiesError);

    const properties = Object.values(useSelector(selectProperties));

    useEffect(() => {
        dispatch(fetchUserProperties());
    }, []);

    return { properties, isFetching, error };
};

export default useFetchProperties;
