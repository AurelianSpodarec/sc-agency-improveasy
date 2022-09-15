import { Switch, Route } from 'react-router-dom';
import DefaultRedirect from './utils/DefaultRedirect';
import SubRouter from './utils/SubRouter';

// import RouteAuth from './RouteAuth';
// import RoutePages from './RoutePages';
// import RoutePortal from './RoutePortal';

// Public
import Home from '@pages/public/Home';
import FAQ from '@pages/public/FAQ';
import MEES from '@pages/public/MEES';
import Process from '@pages/public/Process';
import WhyUse from '@pages/public/WhyUse';

// Dashboard
import PropertyList from '@pages/portal/Property/PropertyList/PropertyList';
import PropertyView from '@pages/portal/Property/PropertyView/PropertyView';

import AuthRoutes from './AuthRoutes';

const Routes: React.FC = () => (
    <Switch>
        {/* Public */}
        <Route exact path="/">
            <Home />
        </Route>

        <Route exact path="/faq">
            <FAQ />
        </Route>

        <Route exact path="/mees">
            <MEES />
        </Route>

        <Route exact path="/process">
            <Process />
        </Route>

        <Route exact path="/why-use">
            <WhyUse />
        </Route>

        {/* Portal */}
        <Route exact path="/portal">
            <PropertyList />
        </Route>

        <Route exact path="/portal/properties">
            <PropertyList />
        </Route>

        <Route exact path="/portal/properties/create">
            <PropertyList showCreateModal />
        </Route>

        <Route exact path="/portal/properties/:id">
            <PropertyView />
        </Route>

        {/* Auth */}
        <SubRouter path="/auth">
            <AuthRoutes />
        </SubRouter>

        <DefaultRedirect to="/" />
    </Switch>
);

export default Routes;
