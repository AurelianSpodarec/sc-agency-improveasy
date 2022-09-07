import Routes from './routes';

import Header from './components/header/Header';
import useGlobalRedirect from 'lib/src/hooks/useGlobalRedirect';

const App = () => {
    useGlobalRedirect();
    return (
        <div id="web-body" className="body">
            <Header />
            <div id="web-wrapper">
                <div className="container">
                    <Routes />
                </div>
            </div>
        </div>
    );
};

export default App;
