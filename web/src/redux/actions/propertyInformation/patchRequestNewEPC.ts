import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const patchRequestNewEPCRequest = createAction('patchRequestNewEPCRequest');
export const patchRequestNewEPCSuccess = createAction('patchRequestNewEPCSuccess');
export const patchRequestNewEPCFailure = createAction('patchRequestNewEPCFailure');

export const patchRequestNewEPC =
    (propertyID: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(patchRequestNewEPCRequest());
        try {
            await api.patch(`propertyContact/epc/${propertyID}`, {});
            dispatch(patchRequestNewEPCSuccess());
        } catch (e) {
            handleApiErrors(dispatch, patchRequestNewEPCFailure, e as APIError);
        }
    };
