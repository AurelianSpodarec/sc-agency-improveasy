import { Switch, Route } from 'react-router-dom';

import Home from '@pages/public/home/Home';
import AuthRoutes from './AuthRoutes';
import SubRouter from './SubRouter';
import DefaultRedirect from './DefaultRedirect';

const Routes: React.FC = () => (
    <Switch>
        <Route exact path="/">
            <Home />
        </Route>
        <SubRouter path="/auth">
            <AuthRoutes />
        </SubRouter>
        <DefaultRedirect to="/" />
    </Switch>
);

export default Routes;
