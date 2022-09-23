import { Property } from '../../../types/shared/Property';
import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const editPropertyAccessDetailsRequest = createAction('editPropertyAccessDetailsRequest');
export const editPropertyAccessDetailsSuccess = createAction<Property>(
    'editPropertyAccessDetailsSuccess',
);
export const editPropertyAccessDetailsFailure = createAction<string>(
    'editPropertyAccessDetailsFailure',
);

export const editPropertyAccessDetails =
    (id: number, body: Request) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(editPropertyAccessDetailsRequest());

        try {
            const { data } = await api.put<Request, Property>(`properties/${id}/access`, body);
            dispatch(editPropertyAccessDetailsSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, editPropertyAccessDetailsFailure, e as APIError);
        }
    };

interface Request {
    firstName: string;
    lastName: string;
    email: string;
    preferredContactTime: string;
}
