import {
    getPropertiesIsFetching,
    getPropertiesFetchError,
    getProperties,
} from './../../../../redux/selectors/properties';
import { useEffect } from 'react';
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

const initialState: FetchPropertiesRequest = {
    page: 1,
    limit: 25,
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

    useEffect(() => {
        dispatch(fetchProperties(initialState));
    }, [dispatch, formState]);

    return {
        isFetching,
        fetchError,
        properties,
    };
};

export default useFetchProperties;
