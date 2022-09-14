import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Login from '@pages/portal/auth/Login/Login';
import Register from '@pages/portal/auth/Register/Register';

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
            {/* 
            <Route exact path={`${path}/forgot-password`}>
                <ForgotPassword />
            </Route>
            <Route exact path={`${path}/reset-password/:token`}>
                <ResetPassword />
            </Route>
            <Route exact path={`${path}/confirm-email/:token`}>
                <ConfirmEmail />
            </Route> */}
        </Switch>
    );
};

export default AuthRoutes;
