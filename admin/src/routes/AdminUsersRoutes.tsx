import { Switch, Route, useRouteMatch } from 'react-router-dom';

import AdminUserContainer from '@pages/adminUsers/adminUser/AdminUserContainer';
import AdminUsers from '@pages/adminUsers/adminUsers/AdminUsers';
import DefaultRedirect from './DefaultRedirect';

const AdminUsersRoutes: React.FC = () => {
    const { path } = useRouteMatch();

    return (
        <Switch>
            <Route exact path={path}>
                <AdminUsers />
            </Route>
            <Route exact path={`${path}/create`}>
                <AdminUsers showCreateModal />
            </Route>
            <Route exact path={`${path}/:id`}>
                <AdminUserContainer />
            </Route>
            <Route exact path={`${path}/:id/:action`}>
                <AdminUserContainer />
            </Route>
            <DefaultRedirect to={path} />
        </Switch>
    );
};

export default AdminUsersRoutes;
