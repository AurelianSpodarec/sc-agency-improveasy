import { convertEnumToDropdownOption } from 'lib/src/shared/enums/dropdownEnums';
import {
    getPropertiesIsFetching,
    getPropertiesFetchError,
    getProperties,
} from './../../../../redux/selectors/properties';
import { useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../../../redux/store';
import useForm from 'lib/src/hooks/useForm';
import {
    fetchProperties,
    FilterByCurrentEPC,
    FilterByMEESCompliance,
    FilterByPotentialEPC,
    FilterByPropertyStatus,
} from '@actions/properties';
import { ApiFilterTableHandle } from 'lib/src/components/table/ApiFilterTable';

const epcFilterOptions = convertEnumToDropdownOption(FilterByCurrentEPC);
const meesComplianceOptions = convertEnumToDropdownOption(FilterByMEESCompliance);
const potentialEpcOptions = convertEnumToDropdownOption(FilterByPotentialEPC);
const propertyStatusOptions = convertEnumToDropdownOption(FilterByPropertyStatus);

const initialState = {
    currentEPCFilters: [],
    potentialEPCFilters: [],
    meesComplianceFilters: [],
    propertyStatusFilters: [],
};

const useFetchProperties = () => {
    const dispatch = useDispatch();

    const tableRef = useRef<ApiFilterTableHandle>(null);

    const isFetching = useSelector(getPropertiesIsFetching);
    const fetchError = useSelector(getPropertiesFetchError);
    const properties = useAppSelector(getProperties);

    const [formState, handleChange] = useForm(initialState);

    const handleFetch = useCallback(
        (page: number, pageSize: number, searchTerm: string) => {
            const params = { ...formState, page, limit: pageSize };
            dispatch(fetchProperties(params));
        },
        [dispatch, formState],
    );

    useEffect(() => {
        tableRef.current?.refreshData();
    }, [formState]);

    return {
        isFetching,
        fetchError,
        properties,
        handleFetch,
        formState,
        handleChange,
        tableRef,
        epcFilterOptions,
        meesComplianceOptions,
        potentialEpcOptions,
        propertyStatusOptions,
    };
};

export default useFetchProperties;
