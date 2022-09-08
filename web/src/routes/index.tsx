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
import WhyUs from '@pages/public/WhyUs';

// Dashboard
import PropertyList from '@pages/portal/Property/PropertyList/PropertyList';
import PropertyView from '@pages/portal/Property/PropertyView/PropertyView';

// Auth
import Login from '@pages/public/auth/login/Login';
import Register from '@pages/public/auth/register/Register';
import ConfirmEmail from '@pages/public/auth/confirmEmail/ConfirmEmail';

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

        <Route exact path="/why-us">
            <WhyUs />
        </Route>

        {/* Portal */}
        <Route exact path="/dashboard">
            <PropertyList />
        </Route>

        <Route exact path="/dashboard/properties">
            <PropertyList />
        </Route>

        <Route exact path="/dashboard/properties/:id">
            <PropertyView />
        </Route>

        {/* Auth */}
        <SubRouter path="/auth">
            <Switch>
                <Route exact path={`/auth/login`}>
                    <Login />
                </Route>
                <Route exact path={`/auth/register`}>
                    <Register />
                </Route>
                <Route exact path={`/auth/confirm-email`}>
                    <ConfirmEmail />
                </Route>
            </Switch>
        </SubRouter>

        <DefaultRedirect to="/" />
    </Switch>
);

export default Routes;
