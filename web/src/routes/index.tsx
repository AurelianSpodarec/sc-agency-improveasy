import { Switch, Route } from 'react-router-dom';


import AuthRoutes from './RouteAuth';
import SubRouter from './utils/SubRouter';
import DefaultRedirect from './utils/DefaultRedirect';
import RoutePages from './RoutePages';


const Routes: React.FC = () => (
    <Switch>


        <RoutePages />


        <SubRouter path="/auth">
            <AuthRoutes />
        </SubRouter>

        {/* Page 404 */}
        <DefaultRedirect to="/" />
    </Switch>
);

export default Routes;
