import CoolCard from '@components/CoolCard';
import { Container, DataCheck, PageHeading, Section } from '@components/ui';
import Form from 'lib/src/components/form/Form';
import TextInput from 'lib/src/components/form/TextInput';
import ErrorModal from 'lib/src/components/modal/ErrorModal';
import SuccessModal from 'lib/src/components/modal/SuccessModal';
import MainPortal from '../_components/MainPortal';
import useEditAccountDetails from './_hooks/useEditAccountDetails';

const Profile = () => {
    const {
        form,
        handleChange,
        handleSubmit,
        isPosting,
        error,
        isFetching,
        showSuccessModal,
        setShowSuccessModal,
        showErrorModal,
        setShowErrorModal,
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
                                </Form>
                            </DataCheck>
                        </Section>
                    </CoolCard>
                </Container>
            </MainPortal>

            {showSuccessModal && (
                <SuccessModal
                    description="You have successfully updated your profile details"
                    closeModal={() => setShowSuccessModal(false)}
                    buttonClassName="winged"
                />
            )}

            {showErrorModal && (
                <ErrorModal closeModal={() => setShowErrorModal(false)} buttonClassName="winged" />
            )}
        </>
    );
};

export default Profile;
