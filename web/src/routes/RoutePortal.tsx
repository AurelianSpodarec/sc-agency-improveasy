import { Switch, Route } from 'react-router-dom';

import PropertyList from '@pages/portal/Property/PropertyList/PropertyList';
import PropertyView from '@pages/portal/Property/PropertyView/PropertyView';
 

function RoutePages() {
    return (
        <>
            <Route exact path="/properties">
                <PropertyList />
            </Route>

            <Route exact path="/properties/:id">
                <PropertyView />
            </Route>

            <Route exact path="/properties/:id/tenants">
                <PropertyView />
            </Route>

            <Route exact path="/properties/:id/ecp-rating">
                <PropertyView />
            </Route>

            <Route exact path="/properties/:id">
                <PropertyView />
            </Route>         
        </>
    )
}

export default RoutePages;