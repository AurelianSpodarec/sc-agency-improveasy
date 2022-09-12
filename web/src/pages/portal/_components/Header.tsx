import { Link, useHistory } from 'react-router-dom';

import useModal from './../../../context/useModal';

import ActionButton from 'lib/src/components/button/ActionButton';
import { SyntheticEvent } from 'react';
import { clearJwtAndRefreshToken } from 'lib/src/utils/jwt';
import { Container } from '@components/ui';

import logo from '@content/logo/WHITE_LOGO.svg';

const Header = () => {
    const history = useHistory();
    const modalContext = useModal();

    function handlerCreateProperty(e: any) {
        //@ts-ignore
        e.preventDefault(); //@ts-ignore
        modalContext.setConfig({
            // id,
            type: 'createProperty',
            option: 'createProperty',
            description: 'Hiskdjskdjsdksjdi',
            inputs: [
                {
                    col: 'w-full',
                    name: 'email',
                    type: 'email',
                    placeholder: 'Email',
                },
                {
                    col: 'w-full',
                    name: 'firstName',
                    type: 'text',
                    placeholder: 'First Name',
                },
                {
                    col: 'w-full',
                    name: 'lastName',
                    type: 'text',
                    placeholder: 'Last Name',
                },
                {
                    col: 'w-full',
                    name: 'password',
                    type: 'password',
                    placeholder: 'Password',
                },
                {
                    col: 'w-full',
                    name: 'confirmPassword',
                    type: 'password',
                    placeholder: 'Confirm Password',
                },
            ], // @ts-ignore
            onAction: (...args) => createProperty(...args),
        }); // @ts-ignore
        modalContext.open('createProperty');
    }

    return (
        <header className="header header--portal">
            <Container style={{ height: '100%' }}>
                <div className="header__inner flex justify-between items-center">
                    <div>
                        <Link to="/">
                            <img src={logo} alt="sd" />
                        </Link>
                    </div>
                    <div className="profile flex-row align-center">
                        <ActionButton
                            onClick={e => handlerCreateProperty(e)}
                            className="winged"
                            icon="home"
                        >
                            Create Property
                        </ActionButton>
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
