import { combineReducers } from 'redux';

import authReducer from './auth';
import darkModeReducer from 'lib/src/redux/reducers/darkMode';
import fieldErrorsReducer from 'lib/src/redux/reducers/fieldErrors';
import redirectsReducer from 'lib/src/redux/reducers/redirects';

const rootReducer = combineReducers({
    authReducer,
    darkModeReducer,
    fieldErrorsReducer,
    redirectsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
