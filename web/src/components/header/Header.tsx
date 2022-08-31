import { Link, useHistory } from 'react-router-dom';

import Oak from 'lib/src/_content/logos/oak.png';
import useIsLoggedIn from 'lib/src/hooks/useIsLoggedIn';
import useDarkMode from 'lib/src/hooks/useDarkMode';

import LinkButton from 'lib/src/components/button/LinkButton';
import ActionButton from 'lib/src/components/button/ActionButton';
import ToggleSwitch from 'lib/src/components/form/ToggleSwitch';
import { SyntheticEvent } from 'react';
import { clearJwtAndRefreshToken } from 'lib/src/utils/jwt';

const Header = (): JSX.Element => {
    const history = useHistory();
    const isLoggedIn = useIsLoggedIn();
    const [darkMode, setDarkMode] = useDarkMode();

    return (
        <header className="header">
            <div className="container flex-row justify-between align-center">
                <div className="logo flex-row align-center">
                    <Link to="/">
                        <img alt="company logo" src={Oak} />
                    </Link>
                </div>

                <div className="profile flex-row align-center">
                    <ToggleSwitch
                        label="Dark mode"
                        name="darkmode"
                        onChange={() => setDarkMode(!darkMode)}
                        value={darkMode}
                        textColour="white"
                    />

                    {isLoggedIn ? (
                        <ActionButton source="secondary" onClick={logout}>
                            Logout
                        </ActionButton>
                    ) : (
                        <>
                            <LinkButton source="secondary" href="/auth/login">
                                Login
                            </LinkButton>
                            <LinkButton source="secondary" href="/auth/register">
                                Register
                            </LinkButton>
                        </>
                    )}
                </div>
            </div>
        </header>
    );

    function logout(e: SyntheticEvent) {
        e.preventDefault();
        clearJwtAndRefreshToken();
        history.replace('/');
    }
};

export default Header;
