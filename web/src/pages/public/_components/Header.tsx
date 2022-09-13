import { SyntheticEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useIsLoggedIn from 'lib/src/hooks/useIsLoggedIn';
import LinkButton from 'lib/src/components/button/LinkButton';
import { clearJwtAndRefreshToken } from 'lib/src/utils/jwt';

import { Input, Container } from '@components/ui';
import { IconLogoPublic } from './../../../_content/icons/logo/IconLogoPublic';
import { IconMagnifyingGlass } from '@content/icons/IconMagnifyingGlass';
import UserAvatar from '@components/UserAvatar/UserAvatar';

const Header = () => {
    const history = useHistory();
    const isLoggedIn = useIsLoggedIn();

    return (
        <header className="header header--public">
            <Container style={{ height: '100%' }}>
                <div className="header__inner d-flex justify-between items-center">
                    <div className="header__logo">
                        <Link to="/">
                            <IconLogoPublic className="header__logo-img" />
                            <div className="sr-only">Public Header Logo</div>
                        </Link>
                    </div>

                    <div className="d-flex">
                        <div className="userAvatar">
                            <img className="userAvatar__img" src="" alt="" />
                        </div>

                        <div className="hidden lg:block">
                            <Input
                                placeholder="Search"
                                className="input--search"
                                name="@"
                                icon={<IconMagnifyingGlass />}
                            />
                        </div>

                        <div className="hidden md:block flex-row align-center">
                            {isLoggedIn ? (
                                <UserAvatar />
                            ) : (
                                <>
                                    <LinkButton
                                        source="primary"
                                        href="/auth/login"
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
};

export default Header;
