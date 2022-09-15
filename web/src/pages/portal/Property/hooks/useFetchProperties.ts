import { useDispatch, useSelector } from 'react-redux';
import { selectProperties } from '@selectors/properties';
import { useEffect } from 'react';
import { fetchUserProperties } from '@actions/properties/fetchUserProperties';

const useFetchProperties = () => {
    const dispatch = useDispatch();
    const properties = Object.values(useSelector(selectProperties));

    useEffect(() => {
        dispatch(fetchUserProperties());
    }, []);

    return { properties };
};

export default useFetchProperties;
