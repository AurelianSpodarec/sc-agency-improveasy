import CoolCard from '@components/CoolCard';
import { Container, DataCheck, PageHeading, Section } from '@components/ui';
import Form from 'lib/src/components/form/Form';
import TextInput from 'lib/src/components/form/TextInput';
import NumberInput from 'lib/src/components/form/NumberInput';
import MainPortal from '../_components/MainPortal';
import useEditAccountDetails from './_hooks/useEditAccountDetails';

const Profile = () => {
    const { form, handleChange, handleSubmit, isPosting, error, isFetching } =
        useEditAccountDetails();

    const { firstName, lastName, email, phone } = form;
    return (
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
                                <NumberInput
                                    name="phone"
                                    value={!!phone ? +phone : null}
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
    );
};

export default Profile;
