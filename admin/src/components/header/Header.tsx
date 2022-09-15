import { Link } from 'react-router-dom';

import useDarkMode from 'lib/src/hooks/useDarkMode';
import ToggleSwitch from 'lib/src/components/form/ToggleSwitch';
import IconLogo from '@content/_icons/IconLogo';

const Header: React.FC = () => {
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <header className="header">
            <div className="logo">
                <Link to="/" className="logo">
                    <IconLogo />
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
