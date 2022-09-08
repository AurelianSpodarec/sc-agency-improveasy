import Routes from './routes';

import useGlobalRedirect from 'lib/src/hooks/useGlobalRedirect';

const App = () => {
    useGlobalRedirect();
    return <Routes />
};

export default App;
