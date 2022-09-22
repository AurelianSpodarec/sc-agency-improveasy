import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

import { IEPC } from '../../../types/shared/Properties';

export const fetchPropertyEPCRatingRequest = createAction('fetchPropertyEPCRatingRequest');
export const fetchPropertyEPCRatingSuccess = createAction<IEPC>('fetchPropertyEPCRatingSuccess');
export const fetchPropertyEPCRatingFailure = createAction('fetchPropertyEPCRatingFailure');

export const fetchPropertyEPCRating =
    (id: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(fetchPropertyEPCRatingRequest());
        try {
            const { data } = await api.get<IEPC>(`propertyRatings/${id}`);
            dispatch(fetchPropertyEPCRatingSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, fetchPropertyEPCRatingFailure, e as APIError);
        }
    };
