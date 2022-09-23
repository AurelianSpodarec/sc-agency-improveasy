import { convertEnumToDropdownOption } from 'lib/src/shared/enums/dropdownEnums';
import {
    getPropertiesIsFetching,
    getPropertiesFetchError,
    getProperties,
    getPropertiesItemCount,
} from './../../../../redux/selectors/properties';
import { useCallback, useRef, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useAppSelector } from '../../../../redux/store';
import useForm from 'lib/src/hooks/useForm';
import { fetchProperties, EpcRating, MEESCompliance, PropertyStatus } from '@actions/properties';
import { ApiFilterTableHandle } from 'lib/src/components/table/ApiFilterTable';

const epcFilterOptions = convertEnumToDropdownOption(EpcRating);
const meesComplianceOptions = convertEnumToDropdownOption(MEESCompliance);
const propertyStatusOptions = convertEnumToDropdownOption(PropertyStatus);

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
    const itemCount = useSelector(getPropertiesItemCount);

    const [formState, handleChange] = useForm(initialState);

    const handleFetch = useCallback(
        (page: number, pageSize: number, searchTerm: string) => {
            const params = { ...formState, page, limit: pageSize, searchTerm };
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
        propertyStatusOptions,
        itemCount,
    };
};

export default useFetchProperties;
