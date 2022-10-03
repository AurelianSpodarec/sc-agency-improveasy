import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';

import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';
import { PropertyRating } from 'src/types/shared/PropertyRating';

export const updatePropertyRatingRequest = createAction('updatePropertyRatingRequest');
export const updatePropertyRatingSuccess = createAction<PropertyRating>(
    'updatePropertyRatingSuccess',
);
export const updatePropertyRatingFailure = createAction<string>('updatePropertyRatingFailure');

export const updatePropertyRating =
    (propertyID: number, postBody: PostBody) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(updatePropertyRatingRequest());

        try {
            const { data } = await api.put<PostBody, PropertyRating>(
                `propertyRating/${propertyID}`,
                postBody,
            );

            dispatch(updatePropertyRatingSuccess(data));
        } catch (e) {
            handleApiErrors(dispatch, updatePropertyRatingFailure, e as APIError);
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
