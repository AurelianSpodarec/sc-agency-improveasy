import { createAction } from '@reduxjs/toolkit';

export const setRedirectUrl = createAction<string | null>('setRedirectUrl');
