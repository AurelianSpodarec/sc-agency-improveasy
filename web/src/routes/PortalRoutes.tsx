import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Properties from '@pages/portal/properties/properties/Properties';
import Property from '@pages/portal/properties/property/Property';
import SurveyRequest from '@pages/portal/surveyRequest/SurveyRequest';

const PortalRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`}>
                <Properties />
            </Route>

            <Route exact path={`${path}/survey-request/:propertyID`}>
                <SurveyRequest />
            </Route>

            <Route exact path={`${path}/properties`}>
                <Properties />
            </Route>

            <Route exact path={`${path}/properties/create`}>
                <Properties showCreateModal />
            </Route>

            <Route exact path={`${path}/properties/:id`}>
                <Property />
            </Route>

            <Route exact path={`${path}/profile`}></Route>
        </Switch>
    );
};

export default PortalRoutes;
