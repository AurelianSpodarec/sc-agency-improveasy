import { Switch, Route } from 'react-router-dom';

import Home from '@pages/public/Home';
import FAQ from '@pages/public/FAQ';
import MEES from '@pages/public/MEES';
import Process from '@pages/public/Process';
import WhyUse from '@pages/public/WhyUse';

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

            <Route exact path="/process">
                <Process />
            </Route>

            <Route exact path="/why-us">
                <WhyUse />
            </Route>
        </Switch>
    );
}

export default RoutePages;
