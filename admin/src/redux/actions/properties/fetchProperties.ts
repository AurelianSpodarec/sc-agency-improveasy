import { Property } from '../../../types/shared/Property';
import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const fetchPropertiesRequest = createAction('fetchPropertiesRequest');
export const fetchPropertiesSuccess = createAction<PropertiesResponse>('fetchPropertiesSuccess');
export const fetchPropertiesFailure = createAction<string>('fetchPropertiesFailure');

export const fetchProperties =
    (params: FetchPropertiesRequest) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchPropertiesRequest());

        try {
            const { data } = await api.get<PropertiesResponse>('properties', params);

            dispatch(fetchPropertiesSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchPropertiesFailure, e as APIError);
        }
    };

export interface PropertiesResponse {
    items: Property[];
    itemCount: number;
}

export interface FetchPropertiesRequest {
    page: number;
    limit: number;
    searchTerm: string;

    currentEPCFilters: EpcRating[];
    potentialEPCFilters: EpcRating[];
    meesComplianceFilters: MEESCompliance[];
    propertyStatusFilters: PropertyStatus[];
}

export enum EpcRating {
    A = 1,
    B = 2,
    C = 3,
    D = 4,
    E = 5,
    F = 6,
    G = 7,
    None = 8,
}

export enum MEESCompliance {
    Compliant = 1,
    NonCompliant = 2,
    Unknown = 3,
}

export enum PropertyStatus {
    New = 1,
    Compliant = 2,
    NonCompliant = 3,
    RequestedEPC = 4,
    BookedEPC = 5,
}
