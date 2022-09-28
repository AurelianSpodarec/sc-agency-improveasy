import { Switch } from 'react-router-dom';
import DefaultRedirect from './utils/DefaultRedirect';
import SubRouter from './utils/SubRouter';

import AuthRoutes from './AuthRoutes';
import PortalRoutes from './PortalRoutes';
import PublicRoutes from './PublicRoutes';

const Routes: React.FC = () => (
    <Switch>
        {/* Public */}
        <SubRouter path="/">
            <PublicRoutes />
        </SubRouter>

        {/* Portal */}
        <SubRouter path="/portal">
            <PortalRoutes />
        </SubRouter>

        {/* Auth */}
        <SubRouter path="/auth">
            <AuthRoutes />
        </SubRouter>

        <DefaultRedirect to="/" />
    </Switch>
);

export default Routes;
