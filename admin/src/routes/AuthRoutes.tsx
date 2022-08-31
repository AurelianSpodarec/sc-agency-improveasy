import { Route, Switch, useRouteMatch } from 'react-router-dom';
import Login from '@pages/auth/login/Login';
import DefaultRedirect from './DefaultRedirect';

const AuthRoutes: React.FC = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}/login`}>
                <Login />
            </Route>
            <DefaultRedirect to={`${path}/login`} />
        </Switch>
    );
};

export default AuthRoutes;
