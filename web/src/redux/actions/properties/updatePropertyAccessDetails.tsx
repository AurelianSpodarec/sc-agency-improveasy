import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { IProperty, IUpdatePropertyAccessDetailsForm } from 'src/types/shared/Properties';

export const updatePropertyAccessDetailsRequest = createAction(
    'updatePropertyAccessDetailsRequest',
);
export const updatePropertyAccessDetailsSuccess = createAction<IProperty>(
    'updatePropertyAccessDetailsSuccess',
);
export const updatePropertyAccessDetailsFailure = createAction(
    'updatePropertyAccessDetailsFailure',
);

export const updatePropertyAccessDetails =
    (id: number, postBody: IUpdatePropertyAccessDetailsForm) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(updatePropertyAccessDetailsRequest());
        try {
            const { data } = await api.put<IUpdatePropertyAccessDetailsForm, IProperty>(
                `properties/${id}/access`,
                postBody,
            );
            dispatch(updatePropertyAccessDetailsSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, updatePropertyAccessDetailsFailure, e as APIError);
        }
    };
