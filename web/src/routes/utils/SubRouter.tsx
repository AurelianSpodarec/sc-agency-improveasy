import { Redirect, Route, useLocation } from 'react-router-dom';
import { getJwtToken, validateJWT } from 'lib/src/utils/jwt';

const SubRouter: React.FC<SubRouterProps> = ({ path, children, auth }) => {
    const location = useLocation();

    if (auth) {
        const token = getJwtToken();
        const isValidToken = token ? validateJWT(token) : null;

        if (!isValidToken) {
            return <Redirect to="/auth/login" from={location.pathname} />;
        }
    }
    return <Route path={path}>{children}</Route>;
};

interface SubRouterProps {
    children: React.ReactNode;
    path: string;
    auth?: boolean;
    exact?: boolean;
}
export default SubRouter;
