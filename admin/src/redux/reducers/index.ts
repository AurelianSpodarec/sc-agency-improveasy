import { combineReducers } from 'redux';

import fieldErrorsReducer from 'lib/src/redux/reducers/fieldErrors';
import redirectsReducer from 'lib/src/redux/reducers/redirects';
import darkModeReducer from 'lib/src/redux/reducers/darkMode';
import authReducer from './auth';
import adminUsersReducer from './adminUsers';
import usersReducer from './users';

const rootReducer = combineReducers({
    fieldErrorsReducer,
    authReducer,
    adminUsersReducer,
    usersReducer,
    redirectsReducer,
    darkModeReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
