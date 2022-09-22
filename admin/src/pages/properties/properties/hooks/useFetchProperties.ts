import {
    getPropertiesIsFetching,
    getPropertiesFetchError,
    getProperties,
} from './../../../../redux/selectors/properties';
import { useEffect, useCallback } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../../../redux/store';
import {
    fetchProperties,
    FetchPropertiesRequest,
    FilterByCurrentEPC,
    FilterByMEESCompliance,
    FilterByPotentialEPC,
    FilterByPropertyStatus,
} from '@actions/properties';
import useForm from 'lib/src/hooks/useForm';

const initialState = {
    currentEPCFilters: [],
    potentialEPCFilters: [],
    meesComplianceFilters: [],
    propertyStatusFilters: [],
};

const useFetchProperties = () => {
    const dispatch = useDispatch();

    const isFetching = useSelector(getPropertiesIsFetching);
    const fetchError = useSelector(getPropertiesFetchError);
    const properties = useAppSelector(getProperties);

    const [formState, handleChange] = useForm(initialState);

    const handleFetch = useCallback(
        (page: number, pageSize: number, searchTerm: string) => {
            const params = { ...initialState, page, limit: pageSize };
            dispatch(fetchProperties(params));
        },
        [dispatch],
    );

    return {
        isFetching,
        fetchError,
        properties,
        handleFetch,
    };
};

export default useFetchProperties;
