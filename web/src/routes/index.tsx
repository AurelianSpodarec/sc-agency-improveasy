import { Switch } from 'react-router-dom';
import DefaultRedirect from './utils/DefaultRedirect';
import SubRouter from './utils/SubRouter';

import AuthRoutes from './AuthRoutes';
import PortalRoutes from './PortalRoutes';
import PublicRoutes from './PublicRoutes';

const Routes = () => (
    <Switch>
        <SubRouter path="/portal" auth>
            <PortalRoutes />
        </SubRouter>

        <SubRouter path="/auth">
            <AuthRoutes />
        </SubRouter>

        <SubRouter path="/">
            <PublicRoutes />
        </SubRouter>

        <DefaultRedirect to="/" />
    </Switch>
);

export default Routes;
