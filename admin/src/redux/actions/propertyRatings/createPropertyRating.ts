import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { PropertyRating } from 'src/types/shared/PropertyRating';

export const createPropertyRatingRequest = createAction('createPropertyRatingRequest');
export const createPropertyRatingSuccess = createAction<PropertyRating>(
    'createPropertyRatingSuccess',
);
export const createPropertyRatingFailure = createAction<string>('createPropertyRatingFailure');

export const createPropertyRating =
    (propertyID: number, postBody: PostBody) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(createPropertyRatingRequest());

        try {
            const { data } = await api.post<PostBody, PropertyRating>(
                `propertyRating/${propertyID}/create`,
                postBody,
            );

            dispatch(createPropertyRatingSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, createPropertyRatingFailure, e as APIError);
        }
    };

interface PostBody {
    id: number;
    dateOfInspection: Date;
    validUntil: Date;
    lmkKey: string;
    currentEnergyEfficiency: number;
    potentialEnergyEfficiency: number;
}
