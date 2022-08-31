import Routes from './routes';

import Header from './components/header/Header';
import useGlobalRedirect from 'lib/src/hooks/useGlobalRedirect';
import useDarkMode from 'lib/src/hooks/useDarkMode';

const App: React.FC = () => {
    useGlobalRedirect();
    const [darkMode] = useDarkMode();
    return (
        <div id="web-body" className="body" data-theme={darkMode ? 'dark' : 'light'}>
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
