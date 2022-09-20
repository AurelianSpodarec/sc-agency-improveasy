import { combineReducers } from 'redux';

import authReducer from './auth';
import propertiesReducer from './properties';

import darkModeReducer from 'lib/src/redux/reducers/darkMode';
import fieldErrorsReducer from 'lib/src/redux/reducers/fieldErrors';
import redirectsReducer from 'lib/src/redux/reducers/redirects';
import postcodeFinderReducer from './postcodeFinder';

const rootReducer = combineReducers({
    authReducer,
    propertiesReducer,
    darkModeReducer,
    fieldErrorsReducer,
    redirectsReducer,
    postcodeFinderReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
