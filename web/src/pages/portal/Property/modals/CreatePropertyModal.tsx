import useCreateProperty from '@pages/portal/Property/hooks/useCreateProperty';

import Modal from 'lib/src/components/modal/Modal';
import Form from 'lib/src/components/form/Form';
import TextInput from 'lib/src/components/form/TextInput';
import FormField from 'lib/src/components/form/FormField';
import Checkbox from 'lib/src/components/form/Checkbox';

const CreatePropertyModal = () => {
    const {
        formState: {
            addressLine1,
            addressLine2,
            city,
            postcode,
            bypassEPC,
            useAccountDetailsForAccess,
            accessDetails: { firstName, lastName, email, phone },
        },
        handleChange,
        closeModal,
    } = useCreateProperty();

    return (
        <Modal title="Create Property">
            <Form onSubmit={() => console.log('submit')} onCancel={closeModal}>
                <FormField name="addressLine1" label="Address Line 1">
                    <TextInput
                        name="addressLine1"
                        value={addressLine1}
                        onChange={handleChange}
                        required
                    />
                </FormField>

                <FormField name="addressLine2" label="Address Line 2">
                    <TextInput
                        name="addressLine2"
                        value={addressLine2}
                        onChange={handleChange}
                        required
                    />
                </FormField>
                <FormField name="city" label="City">
                    <TextInput name="city" value={city} onChange={handleChange} required />
                </FormField>
                <FormField name="postcode" label="Postcode">
                    <TextInput name="postcode" value={postcode} onChange={handleChange} required />
                </FormField>
                <FormField name="bypassEPC" label="Bypass EPC">
                    <Checkbox name="bypassEPC" value={bypassEPC} onChange={handleChange} />
                </FormField>
                <FormField name="useAccountDetailsForAccess" label="Use Account Details for Access">
                    <Checkbox
                        name="useAccountDetailsForAccess"
                        value={useAccountDetailsForAccess}
                        onChange={handleChange}
                    />
                </FormField>
                {useAccountDetailsForAccess && (
                    <>
                        <FormField name="firstName" label="First Name">
                            <TextInput
                                name="firstName"
                                value={firstName}
                                onChange={handleChange}
                                required
                            />
                        </FormField>
                        <FormField name="lastName" label="Last Name">
                            <TextInput
                                name="lastName"
                                value={lastName}
                                onChange={handleChange}
                                required
                            />
                        </FormField>
                        <FormField name="email" label="Email">
                            <TextInput
                                name="email"
                                value={email}
                                onChange={handleChange}
                                required
                            />
                        </FormField>
                        <FormField name="phone" label="Phone">
                            <TextInput
                                name="phone"
                                value={phone}
                                onChange={handleChange}
                                required
                            />
                        </FormField>
                    </>
                )}
            </Form>
        </Modal>
    );
};

export default CreatePropertyModal;
