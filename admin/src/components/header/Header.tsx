import { Link } from 'react-router-dom';

import Oak from 'lib/src/_content/logos/oak.png';
import useDarkMode from 'lib/src/hooks/useDarkMode';
import ToggleSwitch from 'lib/src/components/form/ToggleSwitch';

const Header: React.FC = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <header className="header">
            <div className="logo">
                <Link to="/" className="logo">
                    <img alt="company logo" src={Oak} />
                </Link>
            </div>
            <div className="dark-mode-switch">
                <ToggleSwitch
                    label="Dark mode"
                    name="darkmode"
                    onChange={() => setDarkMode(!darkMode)}
                    value={darkMode}
                    textColour="white"
                />
            </div>
        </header>
    );
};

export default Header;
