import { Route, Switch, useRouteMatch } from 'react-router-dom';
import UserContainer from '@pages/users/user/UserContainer';
import Users from '@pages/users/users/Users';
import DefaultRedirect from './DefaultRedirect';

const UsersRoutes: React.FC = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`}>
                <Users />
            </Route>
            <Route exact path={`${path}/:id`}>
                <UserContainer />
            </Route>
            <Route exact path={`${path}/:id/:action`}>
                <UserContainer />
            </Route>
            <DefaultRedirect to={path} />
        </Switch>
    );
};

export default UsersRoutes;
