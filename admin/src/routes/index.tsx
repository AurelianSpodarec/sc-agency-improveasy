import { Switch } from 'react-router-dom';

import AdminUsersRoutes from './AdminUsersRoutes';
import AuthRoutes from './AuthRoutes';
import SubRouter from './SubRouter';
import UsersRoutes from './UsersRoutes';
import DefaultRedirect from './DefaultRedirect';
import PropertiesRoutes from './ProperitesRoutes';

const Routes: React.FC = () => (
    <Switch>
        <SubRouter path="/auth">
            <AuthRoutes />
        </SubRouter>
        <SubRouter path="/users" auth>
            <UsersRoutes />
        </SubRouter>
        <SubRouter path="/admin-users" auth>
            <AdminUsersRoutes />
        </SubRouter>
        <SubRouter path="/properties" auth>
            <PropertiesRoutes />
        </SubRouter>
        <DefaultRedirect to="properties" />
    </Switch>
);

export default Routes;
