import Routes from './routes';

import useGlobalRedirect from 'lib/src/hooks/useGlobalRedirect';
import CreateModal from '@components/Modal/CreateModal';

const App = () => {
    useGlobalRedirect();
    return (
        <>
            <CreateModal />
            <Routes />
        </>
    )
};

export default App;
