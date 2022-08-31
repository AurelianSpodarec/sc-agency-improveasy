import { createReducer, PayloadAction } from '@reduxjs/toolkit';

import { setRedirectUrl } from '../actions/redirects';

interface RedirectState {
    path: string | null;
}
const initialState: RedirectState = {
    path: null,
};

export default createReducer(initialState, {
    [setRedirectUrl.type]: handleSetRedirectUrl,
});

function handleSetRedirectUrl(state: RedirectState, action: PayloadAction<string>) {
    state.path = action.payload;
}
