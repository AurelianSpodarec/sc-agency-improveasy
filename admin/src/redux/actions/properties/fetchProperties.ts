import { Property } from '../../../types/shared/Property';
import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const fetchPropertiesRequest = createAction('fetchPropertiesRequest');
export const fetchPropertiesSuccess = createAction<Property[]>('fetchPropertiesSuccess');
export const fetchPropertiesFailure = createAction<string>('fetchPropertiesFailure');

export const fetchProperties =
    (params: FetchPropertiesRequest) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchPropertiesRequest());

        try {
            const { data } = await api.get<PropertiesResponse>('properties', params);

            dispatch(fetchPropertiesSuccess(data.items));
        } catch (e) {
            handleApiErrors(dispatch, fetchPropertiesFailure, e as APIError);
        }
    };

interface PropertiesResponse {
    items: Property[];
    itemCount: number;
}

export interface FetchPropertiesRequest {
    page: number;
    limit: number;

    currentEPCFilters: FilterByCurrentEPC[];
    potentialEPCFilters: FilterByPotentialEPC[];
    meesComplianceFilters: FilterByMEESCompliance[];
    propertyStatusFilters: FilterByPropertyStatus[];
}

export enum FilterByCurrentEPC {
    All = 1,
    A = 2,
    B = 3,
    C = 4,
    D = 5,
    E = 6,
    F = 7,
    G = 8,
    None = 9,
}

export enum FilterByPotentialEPC {
    All = 1,
    A = 2,
    B = 3,
    C = 4,
    D = 5,
    E = 6,
    F = 7,
    G = 8,
    None = 9,
}

export enum FilterByMEESCompliance {
    All = 1,
    Compliant = 2,
    NonCompliant = 3,
    Unknown = 4,
}

export enum FilterByPropertyStatus {
    All = 1,
    New = 2,
    Compliant = 3,
    NonCompliant = 4,
    RequestedEPC = 5,
    BookedEPC = 6,
}
