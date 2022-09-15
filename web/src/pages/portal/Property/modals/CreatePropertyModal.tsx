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
                <FormField name="addressLine1">
                    <TextInput
                        name="addressLine1"
                        value={addressLine1}
                        onChange={handleChange}
                        placeholder="Address Line 1"
                        className="winged"
                        required
                    />
                </FormField>

                <FormField name="addressLine2">
                    <TextInput
                        name="addressLine2"
                        value={addressLine2}
                        onChange={handleChange}
                        placeholder="Address Line 2"
                        className="winged"
                        required
                    />
                </FormField>
                <FormField name="city">
                    <TextInput
                        name="city"
                        value={city}
                        onChange={handleChange}
                        placeholder="City"
                        className="winged"
                        required
                    />
                </FormField>
                <FormField name="postcode">
                    <TextInput
                        name="postcode"
                        value={postcode}
                        onChange={handleChange}
                        placeholder="Postcode"
                        className="winged"
                        required
                    />
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
                        <FormField name="firstName">
                            <TextInput
                                name="firstName"
                                value={firstName}
                                onChange={handleChange}
                                placeholder="First Name"
                                className="winged"
                                required
                            />
                        </FormField>
                        <FormField name="lastName">
                            <TextInput
                                name="lastName"
                                value={lastName}
                                onChange={handleChange}
                                placeholder="Last Name"
                                className="winged"
                                required
                            />
                        </FormField>
                        <FormField name="email">
                            <TextInput
                                name="email"
                                value={email}
                                onChange={handleChange}
                                placeholder="Email"
                                className="winged"
                                required
                            />
                        </FormField>
                        <FormField name="phone">
                            <TextInput
                                name="phone"
                                value={phone}
                                onChange={handleChange}
                                placeholder="Phone"
                                className="winged"
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
