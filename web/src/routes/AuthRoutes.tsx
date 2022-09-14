import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Login from '@pages/portal/auth/Login/Login';
import Register from '@pages/portal/auth/Register/Register';
import ForgotPassword from '@pages/portal/auth/ForgotPassword/ForgotPassword';
import ResetPassword from '@pages/portal/auth/ResetPassword/RegisterPassword';
import ConfirmEmail from '@pages/portal/auth/ConfirmEmail/ConfirmEmail';

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
            <Route exact path={`${path}/forgot-password`}>
                <ForgotPassword />
            </Route>

            <Route exact path={`${path}/reset-password/:token`}>
                <ResetPassword />
            </Route>
            <Route exact path={`${path}/confirm-email/:token`}>
                <ConfirmEmail />
            </Route>
        </Switch>
    );
};

export default AuthRoutes;
