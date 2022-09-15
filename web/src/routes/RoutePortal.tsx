import { Switch, Route } from 'react-router-dom';

import PropertyList from '@pages/portal/Property/PropertyList/PropertyList';
import PropertyView from '@pages/portal/Property/PropertyView/PropertyView';

function RoutePortal() {
    return (
        <Switch>
            <Route exact path="/portal">
                <PropertyList />
            </Route>

            <Route exact path="/portal/properties">
                <PropertyList />
            </Route>

            <Route exact path="/portal/properties/:id">
                <PropertyView />
            </Route>

            {/* 


            <Route exact path="/dashboard/properties/:id/tenants">
                <PropertyView />
            </Route>

            <Route exact path="/dashboard/properties/:id/ecp-rating">
                <PropertyView />
            </Route>

            <Route exact path="/dashboard/properties/:id">
                <PropertyView />
            </Route>          */}
        </Switch>
    );
}

export default RoutePortal;
