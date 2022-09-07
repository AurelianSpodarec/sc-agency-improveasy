import { Route, Switch, useRouteMatch } from 'react-router-dom';

import Login from '@pages/public/auth/login/Login';
import Register from '@pages/public/auth/register/Register';
import ConfirmEmail from '@pages/public/auth/confirmEmail/ConfirmEmail';

const RouteAuth = () => {
    const { path } = useRouteMatch();
    return (
        <>
            <Route exact path={`${path}/login`}>
                <Login />
            </Route>
            <Route exact path={`${path}/register`}>
                <Register />
            </Route>
            <Route exact path={`${path}/confirm-email`}>
                <ConfirmEmail />
            </Route>
        </>
    );
};

export default RouteAuth;
