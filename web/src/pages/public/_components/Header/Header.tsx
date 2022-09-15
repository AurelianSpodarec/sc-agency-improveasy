import { Link } from 'react-router-dom';

import useIsLoggedIn from 'lib/src/hooks/useIsLoggedIn';
import LinkButton from 'lib/src/components/button/LinkButton';

import { Input, Container } from '@components/ui';
import UserAvatar from '@components/UserAvatar/UserAvatar';
import { IconLogoPublic } from '@content/icons/logo/IconLogoPublic';
// import { IconMagnifyingGlass } from '@content/icons/IconMagnifyingGlass';
import HeaderDesktop from './Desktop/HeaderDesktop';
import HeaderMobile from './Mobile/HeaderMobile';

const Header = () => {
    const isLoggedIn = useIsLoggedIn();

    return (
        <header className="header header--public">
            <Container style={{ height: '100%' }}>
                <div className="header__inner d-flex justify-between items-center">
                    <div className="d-flex justify-between align-center w-full lg:w-auto">
                        <div className="header__logo">
                            <Link to="/">
                                <IconLogoPublic className="header__logo-img" />
                                <div className="sr-only">Public Header Logo</div>
                            </Link>
                        </div>

                        <HeaderDesktop />
                        <HeaderMobile />
                    </div>

                    <div className="d-flex">
                        <div className="hidden lg:block flex-row align-center">
                            {isLoggedIn ? (
                                <div className="d-flex justify-between align-center">
                                    {/* <div className="hidden lg:block">
                                        <Input
                                            placeholder="Search"
                                            className="input--search"
                                            name="@"
                                            icon={<IconMagnifyingGlass />}
                                        />
                                    </div> */}
                                    <UserAvatar />
                                </div>
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
