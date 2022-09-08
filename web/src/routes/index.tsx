import { Switch, Route } from 'react-router-dom';
import DefaultRedirect from './utils/DefaultRedirect';
import SubRouter from './utils/SubRouter';

import AuthRoutes from './RouteAuth';
import RoutePages from './RoutePages';
import RoutePortal from './RoutePortal';

const Routes: React.FC = () => (
    <Switch>
        {/* <RoutePages /> */}
        <RoutePortal />

        <SubRouter path="/auth">
            <AuthRoutes />
        </SubRouter>

        <DefaultRedirect to="/" />
    </Switch>
);

export default Routes;