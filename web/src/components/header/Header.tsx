import { Link, useHistory } from 'react-router-dom';

import useIsLoggedIn from 'lib/src/hooks/useIsLoggedIn';

import LinkButton from 'lib/src/components/button/LinkButton';
import ActionButton from 'lib/src/components/button/ActionButton';
import { SyntheticEvent } from 'react';
import { clearJwtAndRefreshToken } from 'lib/src/utils/jwt';

const Header = () => {
    const history = useHistory();
    const isLoggedIn = useIsLoggedIn();

    return (
        <header className="header">
            <div className="container flex-row justify-between align-center">
                <div className="logo flex-row align-center">
                    <Link to="/">
                        <img alt="company logo" src="" />
                    </Link>
                </div>

                <div className="profile flex-row align-center">
                    {isLoggedIn ? (
                        <ActionButton source="secondary" onClick={logout} className="winged">
                            Logout
                        </ActionButton>
                    ) : (
                        <>
                            <LinkButton source="secondary" href="/auth/login" className="winged">
                                Login
                            </LinkButton>
                            <LinkButton source="secondary" href="/auth/register" className="winged">
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
