import { combineReducers } from 'redux';

import fieldErrorsReducer from 'lib/src/redux/reducers/fieldErrors';
import redirectsReducer from 'lib/src/redux/reducers/redirects';
import darkModeReducer from 'lib/src/redux/reducers/darkMode';
import authReducer from './auth';
import adminUsersReducer from './adminUsers';
import usersReducer from './users';
import propertiesReducer from './properties';
import improvementTypesReducer from './improvementTypes';
import propertyRatingsReducer from './propertyRatings';
import propertyRatingRecommendationsReducer from './propertyRatingRecommendations';

const rootReducer = combineReducers({
    fieldErrorsReducer,
    authReducer,
    adminUsersReducer,
    usersReducer,
    redirectsReducer,
    darkModeReducer,
    propertiesReducer,
    improvementTypesReducer,
    propertyRatingsReducer,
    propertyRatingRecommendationsReducer,
});

export type RootState = ReturnType<typeof rootReducer>;

export default rootReducer;
