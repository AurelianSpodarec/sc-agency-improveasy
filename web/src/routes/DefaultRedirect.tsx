import { Redirect, Route } from 'react-router-dom';

const DefaultRedirect: React.FC<DefaultRedirectProps> = ({ to }) => (
    <Route>
        <Redirect to={to} />
    </Route>
);

interface DefaultRedirectProps {
    to: string;
}

export default DefaultRedirect;
