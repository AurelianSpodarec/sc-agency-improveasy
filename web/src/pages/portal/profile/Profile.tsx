import { useHistory } from 'react-router-dom';
import useEditAccountDetails from './_hooks/useEditAccountDetails';

import CoolCard from '@components/CoolCard';
import { Container, DataCheck, PageHeading, Section } from '@components/ui';

import ActionButton from 'lib/src/components/button/ActionButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import LinkButton from 'lib/src/components/button/LinkButton';

import Form from 'lib/src/components/form/Form';
import TextInput from 'lib/src/components/form/TextInput';

import MainPortal from '../_components/MainPortal';

import ErrorModal from 'lib/src/components/modal/ErrorModal';
import UpdatePasswordModal from './modals/UpdatePasswordModal';

const Profile = ({ showPasswordModal }: IProps) => {
    const history = useHistory();

    const {
        form,
        handleChange,
        handleSubmit,
        isPosting,
        error,
        isFetching,
        showErrorModal,
        setShowErrorModal,
        postSuccess,
        hasChanged,
    } = useEditAccountDetails();

    const { firstName, lastName, email, phone } = form;

    return (
        <>
            <MainPortal>
                <Container size="lg" style={{ margin: '50px auto' }}>
                    <CoolCard>
                        <Section>
                            <div className="flex-row justify-center">
                                <PageHeading title="Profile" />
                            </div>
                            <DataCheck
                                dataExists={!!firstName || !!lastName}
                                isFetching={isFetching}
                                error={error}
                            >
                                <Form
                                    onSubmit={handleSubmit}
                                    buttonClassName="winged"
                                    isPosting={isPosting}
                                    error={error}
                                    omitButtons
                                >
                                    <TextInput
                                        name="firstName"
                                        value={firstName}
                                        placeholder="First Name"
                                        onChange={handleChange}
                                        className="winged font-sm"
                                    />
                                    <TextInput
                                        name="lastName"
                                        value={lastName}
                                        placeholder="Last Name"
                                        onChange={handleChange}
                                        className="winged font-sm"
                                    />
                                    <TextInput
                                        name="phone"
                                        value={phone || ''}
                                        placeholder="Phone"
                                        onChange={handleChange}
                                        className="winged font-sm"
                                    />
                                    <TextInput
                                        name="email"
                                        value={email}
                                        placeholder="Email"
                                        onChange={handleChange}
                                        className="winged font-sm"
                                    />
                                    <br />
                                    <ButtonRow alignment="right">
                                        <LinkButton
                                            source="positive"
                                            className="winged"
                                            href="/portal/profile/change-password"
                                        >
                                            Change Password
                                        </LinkButton>
                                        <ActionButton
                                            className="winged"
                                            success={!hasChanged && postSuccess}
                                            type="submit"
                                            disabled={!hasChanged}
                                        >
                                            Save
                                        </ActionButton>
                                    </ButtonRow>
                                </Form>
                            </DataCheck>
                        </Section>
                    </CoolCard>
                </Container>
            </MainPortal>

            {showErrorModal && (
                <ErrorModal closeModal={() => setShowErrorModal(false)} buttonClassName="winged" />
            )}

            {showPasswordModal && (
                <UpdatePasswordModal closeModal={() => history.push('/portal/profile')} />
            )}
        </>
    );
};

interface IProps {
    showPasswordModal?: boolean;
}

export default Profile;
