import { Route, Switch, useRouteMatch } from 'react-router-dom';
import DefaultRedirect from './DefaultRedirect';
import Properties from '@pages/properties/properties/Properties';
import PropertyContainer from '@pages/properties/property/PropertyContainer';

const PropertiesRoutes: React.FC = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`}>
                <Properties />
            </Route>
            <Route exact path={`${path}/:id`}>
                <PropertyContainer />
            </Route>
            <Route exact path={`${path}/:id/edit-address`}>
                <PropertyContainer showEditAddressModel />
            </Route>
            <Route exact path={`${path}/:id/edit-access-details`}>
                <PropertyContainer showEditAccessDetailsModel />
            </Route>
            <DefaultRedirect to="/" />
        </Switch>
    );
};

export default PropertiesRoutes;
