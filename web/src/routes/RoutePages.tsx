import { Switch, Route } from 'react-router-dom';

import Home from '@pages/public/home/Home';
import FAQ from '@pages/public/faq/FAQ';
import MEES from '@pages/public/mees/MEES';
import WhyUse from '@pages/public/whyUse/WhyUse';

function RoutePages() {
    return (
        <Switch>
            <Route exact path="/">
                <Home />
            </Route>

            <Route exact path="/faq">
                <FAQ />
            </Route>

            <Route exact path="/mees">
                <MEES />
            </Route>

            <Route exact path="/why-us">
                <WhyUse />
            </Route>
        </Switch>
    );
}

export default RoutePages;
