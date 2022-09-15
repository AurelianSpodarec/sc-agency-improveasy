import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Login from '@pages/auth/Login/Login';
import Register from '@pages/auth/Register/Register';
import ForgotPassword from '@pages/auth/ForgotPassword/ForgotPassword';
import ResetPassword from '@pages/auth/ResetPassword/RegisterPassword';
import ConfirmEmail from '@pages/auth/ConfirmEmail/ConfirmEmail';

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
            {/* <Route exact path={`${path}/confirm-email/:token`}> */}
            <Route exact path={`${path}/confirm-email/`}>
                <ConfirmEmail />
            </Route>
        </Switch>
    );
};

export default AuthRoutes;
