import { Switch } from 'react-router-dom';

import AdminUsersRoutes from './AdminUsersRoutes';
import AuthRoutes from './AuthRoutes';
import SubRouter from './SubRouter';
import UsersRoutes from './UsersRoutes';
import Dashboard from '@pages/dashboard/Dashboard';
import DefaultRedirect from './DefaultRedirect';

const Routes: React.FC = () => (
    <Switch>
        <SubRouter exact path="/" auth>
            <Dashboard />
        </SubRouter>
        <SubRouter path="/auth">
            <AuthRoutes />
        </SubRouter>
        <SubRouter path="/users" auth>
            <UsersRoutes />
        </SubRouter>
        <SubRouter path="/admin-users" auth>
            <AdminUsersRoutes />
        </SubRouter>
        <DefaultRedirect to="/" />
    </Switch>
);

export default Routes;
