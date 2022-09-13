import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Login from '@pages/public/auth/login/Login';
import Register from '@pages/public/auth/register/Register';
import ConfirmEmail from '@pages/public/auth/confirmEmail/ConfirmEmail';
import ForgotPassword from '@pages/public/auth/forgotPassword/ForgotPassword';
import ResetPassword from '@pages/public/auth/resetPassword/ResetPassword';

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
