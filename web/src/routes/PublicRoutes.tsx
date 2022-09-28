import { Route, Switch, useRouteMatch } from 'react-router-dom';

import FAQ from '@pages/public/faq/FAQ';
import Home from '@pages/public/home/Home';
import MEES from '@pages/public/mees/MEES';
import WhyUse from '@pages/public/whyUse/WhyUse';

const PublicRoutes = () => {
    const { path } = useRouteMatch();
    return (
        <Switch>
            <Route exact path={`${path}`}>
                <Home />
            </Route>

            <Route exact path="/faq">
                <FAQ />
            </Route>

            <Route exact path="/mees">
                <MEES />
            </Route>

            <Route exact path="/why-use">
                <WhyUse />
            </Route>
        </Switch>
    );
};

export default PublicRoutes;
