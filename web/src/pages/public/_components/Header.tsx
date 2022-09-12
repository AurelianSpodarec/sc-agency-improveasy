import { Link, useHistory } from 'react-router-dom';

import useIsLoggedIn from 'lib/src/hooks/useIsLoggedIn';

import LinkButton from 'lib/src/components/button/LinkButton';
import ActionButton from 'lib/src/components/button/ActionButton';
import { SyntheticEvent } from 'react';
import { clearJwtAndRefreshToken } from 'lib/src/utils/jwt';
import Container from '../../../components/ui/Container';

const Header = () => {
    const history = useHistory();
    const isLoggedIn = useIsLoggedIn();

    return (
        <header className="header header--public">
            <Container style={{ height: '100%' }}>
                <div className="header__inner flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <img src="/images/logo/WHITE_LOGO.svg" alt="sd" />
                        </Link>
                    </div>

                    <div className="userAvatar">
                        <img className="userAvatar__img" src="" />
                    </div>

                    <div className="profile flex-row align-center">
                        {isLoggedIn ? (
                            <ActionButton source="primary" onClick={logout} className="winged">
                                Logout
                            </ActionButton>
                        ) : (
                            <>
                                <LinkButton
                                    source="primary"
                                    href="/auth/register"
                                    className="winged"
                                >
                                    Get Started
                                </LinkButton>
                            </>
                        )}
                    </div>
                </div>
            </Container>
        </header>
    );

    function logout(e: SyntheticEvent) {
        e.preventDefault();
        clearJwtAndRefreshToken();
        history.replace('/');
    }
};

export default Header;
