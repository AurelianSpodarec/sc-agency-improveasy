import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { IUpdatePropertyAddress, IProperty } from 'src/types/shared/Properties';

export const updatePropertyAddressRequest = createAction('updatePropertyAddressRequest');
export const updatePropertyAddressSuccess = createAction<IProperty>('updatePropertyAddressSuccess');
export const updatePropertyAddressFailure = createAction('updatePropertyAddressFailure');

export const updatePropertyAddress =
    (id: number, postBody: IUpdatePropertyAddress) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(updatePropertyAddressRequest());
        try {
            const { data } = await api.put<IUpdatePropertyAddress, IProperty>(
                `properties/${id}/address`,
                postBody,
            );
            dispatch(updatePropertyAddressSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, updatePropertyAddressFailure, e as APIError);
        }
    };
