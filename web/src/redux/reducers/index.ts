import { combineReducers } from 'redux';

import authReducer from './auth';
import propertiesReducer from './properties';
import propertyInformationReducer from './propertyInformation';

import darkModeReducer from 'lib/src/redux/reducers/darkMode';
import fieldErrorsReducer from 'lib/src/redux/reducers/fieldErrors';
import redirectsReducer from 'lib/src/redux/reducers/redirects';
import postcodeFinderReducer from './postcodeFinder';
import accountReducer from './account';

const rootReducer = combineReducers({
    accountReducer,
    authReducer,
    darkModeReducer,
    fieldErrorsReducer,
    redirectsReducer,
    postcodeFinderReducer,
    propertiesReducer,
    propertyInformationReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
