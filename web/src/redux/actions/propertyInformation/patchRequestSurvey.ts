import { createAction } from '@reduxjs/toolkit';
import { APIError } from 'lib/src/types/APIError';
import { api, handleApiErrors } from 'lib/src/utils/api';
import { AppDispatch } from 'src/redux/store';

export const patchRequestSurveyRequest = createAction('patchRequestSurveyRequest');
export const patchRequestSurveySuccess = createAction('patchRequestSurveySuccess');
export const patchRequestSurveyFailure = createAction('patchRequestSurveyFailure');

export const patchRequestSurvey =
    (propertyID: number) =>
    async (dispatch: AppDispatch): Promise<void> => {
        dispatch(patchRequestSurveyRequest());
        try {
            await api.patch(`propertyContact/survey/${propertyID}`, {});
            dispatch(patchRequestSurveySuccess());
        } catch (e) {
            handleApiErrors(dispatch, patchRequestSurveyFailure, e as APIError);
        }
    };
