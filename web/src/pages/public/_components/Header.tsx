import { Link, useHistory } from 'react-router-dom';

import useIsLoggedIn from 'lib/src/hooks/useIsLoggedIn';

import LinkButton from 'lib/src/components/button/LinkButton';
import ActionButton from 'lib/src/components/button/ActionButton';
import { SyntheticEvent } from 'react';
import { clearJwtAndRefreshToken } from 'lib/src/utils/jwt';
import Container from '../../../components/ui/Container';
import TextInput from 'lib/src/components/form/TextInput';
import { Input } from '@components/ui';

const Header = () => {
    const history = useHistory();
    const isLoggedIn = useIsLoggedIn();

    return (
        <header className="header header--public">
            <Container style={{ height: '100%' }}>
                <div className="header__inner d-flex justify-between items-center">
                    <div className="header__logo">
                        <Link to="/">
                            <img
                                className="header__logo-img"
                                src="/images/logo/WHITE_LOGO.svg"
                                alt="sd"
                            />
                            <div className="sr-only">Public Header Logo</div>
                        </Link>
                    </div>

                    <div className="d-flex">
                        <div className="userAvatar">
                            <img className="userAvatar__img" src="" alt="" />
                        </div>

                        <div>
                            <Input
                                placeholder="Search"
                                className="input--search"
                                name="@"
                                icon={<img src="/images/icons/SEARCH_ICON.svg" />}
                            />
                        </div>

                        <div className="profile flex-row align-center">
                            {isLoggedIn ? (
                                <div>User avatar</div>
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
