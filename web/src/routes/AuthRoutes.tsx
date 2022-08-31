import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Login from '@pages/auth/login/Login';
import Register from '@pages/auth/register/Register';
import DefaultRedirect from './DefaultRedirect';

const AuthRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}/login`}>
                <Login />
            </Route>
            <Route exact path={`${path}/register`}>
                <Register />
            </Route>
            <DefaultRedirect to="/" />
        </Switch>
    );
};

export default AuthRoutes;
