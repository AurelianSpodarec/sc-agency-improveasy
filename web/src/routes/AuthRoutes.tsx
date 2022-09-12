import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Login from '@pages/public/auth/login/Login';
import Register from '@pages/public/auth/register/Register';
import ConfirmEmail from '@pages/public/auth/confirmEmail/ConfirmEmail';

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
            <Route exact path={`${path}/confirm-email/:token`}>
                <ConfirmEmail />
            </Route>
        </Switch>
    );
};

export default AuthRoutes;
