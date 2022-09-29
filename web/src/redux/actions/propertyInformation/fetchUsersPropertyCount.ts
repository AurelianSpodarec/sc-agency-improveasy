import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const fetchUsersPropertyCountRequest = createAction('fetchUsersPropertyCountRequest');
export const fetchUsersPropertyCountSuccess = createAction<number>(
    'fetchUsersPropertyCountSuccess',
);
export const fetchUsersPropertyCountFailure = createAction('fetchUsersPropertyCountFailure');

export const fetchUsersPropertyCount =
    () =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchUsersPropertyCountRequest());
        try {
            const { data }: IPropertyCountResponse = await api.get(
                'properties/user/property-count',
            );
            dispatch(fetchUsersPropertyCountSuccess(data.propertyCount));
        } catch (e) {
            handleApiErrors(dispatch, fetchUsersPropertyCountFailure, e as APIError);
        }
    };

interface IPropertyCountResponse {
    data: { propertyCount: number };
}
