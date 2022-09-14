import { SyntheticEvent } from 'react';
import { Link, useHistory } from 'react-router-dom';

import useModal from './../../../context/useModal';

import IconLogoPortal from '@content/icons/logo/IconLogoPortal';

import ActionButton from 'lib/src/components/button/ActionButton';

import { Container } from '@components/ui';

const Header = () => {
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
                    <Link to="/" className="no-underline">
                        <div className="d-flex align-center space-x-6">
                            <IconLogoPortal className="header__logo-img" />
                            <span style={{ marginBottom: '0px' }} className="font-semibold">
                                MEES Compliance
                            </span>
                        </div>
                    </Link>

                    <div className="flex-row align-center">
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
};

export default Header;
