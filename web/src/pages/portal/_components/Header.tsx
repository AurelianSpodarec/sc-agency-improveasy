import { Link } from 'react-router-dom';

import IconLogoPortal from '@content/icons/logo/epc-builder-logo.png';

import LinkButton from 'lib/src/components/button/LinkButton';

import { Container } from '@components/ui';
import UserAvatar from '@components/UserAvatar/UserAvatar';

const Header = () => {
    return (
        <header className="header header--portal">
            <Container style={{ height: '100%' }}>
                <div className="header__inner flex justify-between items-center">
                    <Link to="/" className="no-underline">
                        <div className="d-flex align-center space-x-6">
                            <img src={IconLogoPortal} alt="logo" className="header__logo-img" />
                        </div>
                    </Link>

                    <div className="block">
                        <div className="flex-row space-x-4">
                            <div className="flex-row align-center">
                                <LinkButton
                                    href="/portal/properties/create"
                                    className="winged"
                                    icon="home"
                                >
                                    Create Property
                                </LinkButton>
                            </div>
                            <UserAvatar />
                        </div>
                    </div>
                </div>
            </Container>
        </header>
    );
};

export default Header;
