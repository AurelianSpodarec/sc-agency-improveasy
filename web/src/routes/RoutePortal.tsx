import { Switch, Route } from 'react-router-dom';

import PropertyList from '@pages/portal/Property/PropertyList/PropertyList';
import PropertyView from '@pages/portal/Property/PropertyView/PropertyView';
 

function RoutePortal() {
    return (
        <>
            <Route exact path="/dashboard">
                <PropertyList />
            </Route>

            {/* <Route exact path="/dashboard/properties">
                <PropertyList />
            </Route>

            <Route exact path="/dashboard/properties/:id">
                <PropertyView />
            </Route>

            <Route exact path="/dashboard/properties/:id/tenants">
                <PropertyView />
            </Route>

            <Route exact path="/dashboard/properties/:id/ecp-rating">
                <PropertyView />
            </Route>

            <Route exact path="/dashboard/properties/:id">
                <PropertyView />
            </Route>          */}
        </>
    )
}

export default RoutePortal;