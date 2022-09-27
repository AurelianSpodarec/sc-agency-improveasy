import { PropertyStatus } from '@actions/properties';
import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const updatePropertyStatusRequest = createAction('updatePropertyStatusRequest');
export const updatePropertyStatusSuccess = createAction<UpdatePropertyStatusRequest>(
    'updatePropertyStatusSuccess',
);
export const updatePropertyStatusFailure = createAction<string>('updatePropertyStatusFailure');

export const updatePropertyStatus =
    (id: number, statusType: PropertyStatus) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(updatePropertyStatusRequest());

        try {
            const body = { id, statusType };
            await api.patch<UpdatePropertyStatusRequest, unknown>(`properties/${id}/status`, body);

            dispatch(updatePropertyStatusSuccess(body));
        } catch (e) {
            handleApiErrors(dispatch, updatePropertyStatusFailure, e as APIError);
        }
    };

export interface UpdatePropertyStatusRequest {
    id: number;
    statusType: PropertyStatus;
}
