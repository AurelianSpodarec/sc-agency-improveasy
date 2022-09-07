import Routes from './routes';

import Header from './components/header/Header';
import { Footer } from './components';
import useGlobalRedirect from 'lib/src/hooks/useGlobalRedirect';

const App = () => {
    useGlobalRedirect();
    return (
        <>
            <Routes />
        </>
    );
};

export default App;
