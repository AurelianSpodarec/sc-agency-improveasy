import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Login from '@pages/auth/login/Login';
import Register from '@pages/auth/register/Register';
import DefaultRedirect from './utils/DefaultRedirect';
import ConfirmEmail from '@pages/auth/confirmEmail/ConfirmEmail';

const RouteAuth = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}/login`}>
                <Login />
            </Route>
            <Route exact path={`${path}/register`}>
                <Register />
            </Route>
            <Route exact path={`${path}/confirm-email`}>
                <ConfirmEmail />
            </Route>
            <DefaultRedirect to="/" />
        </Switch>
    );
};

export default RouteAuth;
