import { Property } from '../../../types/shared/Property';
import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const editPropertyAddressRequest = createAction('editPropertyAddressRequest');
export const editPropertyAddressSuccess = createAction<Property>('editPropertyAddressSuccess');
export const editPropertyAddressFailure = createAction<string>('editPropertyAddressFailure');

export const editPropertyAddress =
    (id: number, body: Request) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(editPropertyAddressRequest());

        try {
            const { data } = await api.put<Request, Property>(`properties/${id}/address`, body);
            dispatch(editPropertyAddressSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, editPropertyAddressFailure, e as APIError);
        }
    };

interface Request {
    addressLine1: string;
    addressLine2: string;
    city: string;
    postcode: string;
}
