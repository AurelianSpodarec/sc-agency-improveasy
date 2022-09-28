import { combineReducers } from 'redux';

import authReducer from './auth';
import propertiesReducer from './properties';
import propertyInformationReducer from './propertyInformation';

import darkModeReducer from 'lib/src/redux/reducers/darkMode';
import fieldErrorsReducer from 'lib/src/redux/reducers/fieldErrors';
import redirectsReducer from 'lib/src/redux/reducers/redirects';
import postcodeFinderReducer from './postcodeFinder';
import accountReducer from './account';
import { logout } from '@actions/auth';

const combinedReducer = combineReducers({
    accountReducer,
    authReducer,
    darkModeReducer,
    fieldErrorsReducer,
    redirectsReducer,
    postcodeFinderReducer,
    propertiesReducer,
    propertyInformationReducer,
});

const rootReducer = (state: RootState | undefined, action: any) => {
    if (action.type === logout.type) {
        state = undefined;
    }
    return combinedReducer(state, action);
};

export type RootState = ReturnType<typeof combinedReducer>;

export default rootReducer;
