import { Switch, Route } from 'react-router-dom';
import DefaultRedirect from './utils/DefaultRedirect';
import SubRouter from './utils/SubRouter';

// import RouteAuth from './RouteAuth';
// import RoutePages from './RoutePages';
// import RoutePortal from './RoutePortal';

// Public
import Home from '@pages/public/home/Home';
import FAQ from '@pages/public/faq/FAQ';
import MEES from '@pages/public/mees/MEES';
import Process from '@pages/public/process/Process';
import WhyUse from '@pages/public/whyUse/WhyUse';

// Dashboard
import Properties from '@pages/portal/properties/properties/Properties';
import Property from '@pages/portal/properties/property/Property';

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
            <Properties />
        </Route>

        <Route exact path="/portal/properties">
            <Properties />
        </Route>

        <Route exact path="/portal/properties/create">
            <Properties showCreateModal />
        </Route>

        <Route exact path="/portal/properties/:id">
            <Property />
        </Route>

        {/* Auth */}
        <SubRouter path="/auth">
            <AuthRoutes />
        </SubRouter>

        <DefaultRedirect to="/" />
    </Switch>
);

export default Routes;
