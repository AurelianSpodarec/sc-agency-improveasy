import { useDispatch, useSelector } from 'react-redux';
import { useEffect, useState } from 'react';
import useForm from 'lib/src/hooks/useForm';

import {
    selectProperties,
    selectPropertiesError,
    selectPropertiesIsFetching,
} from '@selectors/properties';

import { fetchUserProperties } from '@actions/properties/fetchUserProperties';
import { FetchPropertiesRequest } from 'src/types/shared/Properties';

const useFetchProperties = () => {
    const dispatch = useDispatch();
    const isFetching = useSelector(selectPropertiesIsFetching);
    const error = useSelector(selectPropertiesError);

    const [searchTerm, setSearchTerm] = useState('');

    const initialForm = {
        currentEPCFilters: [],
        potentialEPCFilters: [],
        meesComplianceFilters: [],
        propertyStatusFilters: [],
    };

    const [form, _handleChange, resetData] = useForm<FetchPropertiesRequest>(initialForm);

    const properties = Object.values(useSelector(selectProperties));

    const filteredProperties = properties.filter(property => {
        return Object.values(property).some(value => {
            if (typeof value === 'string') {
                return value.toLowerCase().includes(searchTerm.toLowerCase());
            }
            return false;
        });
    });

    useEffect(() => {
        dispatch(fetchUserProperties(form));
    }, [dispatch, form]);

    const handleClearFilters = () => {
        resetData(initialForm);
        setSearchTerm('');
    };

    const handleChange = (name: keyof FetchPropertiesRequest, value: number) => {
        const currentFilters: number[] = form[name];

        if (currentFilters.includes(value)) {
            const newFilters = [...form[name]].filter(filter => filter !== value);

            _handleChange(name, newFilters);
        } else {
            _handleChange(name, [...form[name], value]);
        }
    };

    return {
        properties: filteredProperties,
        isFetching,
        error,
        searchTerm,
        setSearchTerm,
        handleClearFilters,
        form,
        handleChange,
    };
};

export default useFetchProperties;
