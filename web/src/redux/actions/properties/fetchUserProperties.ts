import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

import { IProperty } from '../../../types/shared/Properties';

export const fetchUserPropertiesRequest = createAction('fetchUserPropertiesRequest');
export const fetchUserPropertiesSuccess = createAction<IProperty[]>('fetchUserPropertiesSuccess');
export const fetchUserPropertiesFailure = createAction('fetchUserPropertiesFailure');

export const fetchUserProperties =
    (params: FetchPropertiesRequest) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchUserPropertiesRequest());
        try {
            const { data } = await api.get<IProperty[]>('properties/filter', params);
            dispatch(fetchUserPropertiesSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchUserPropertiesFailure, e as APIError);
        }
    };

export interface FetchPropertiesRequest {
    currentEPCFilters: IEPCFilters[];
    potentialEPCFilters: IEPCFilters[];
    meesComplianceFilters: FilterByMEESCompliance[];
    propertyStatusFilters: FilterByPropertyStatus[];
}

export enum IEPCFilters {
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
