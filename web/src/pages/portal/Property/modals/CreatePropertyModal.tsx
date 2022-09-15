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
                <TextInput
                    name="addressLine1"
                    value={addressLine1}
                    onChange={handleChange}
                    placeholder="Address Line 1"
                    className="winged"
                    required
                />

                <TextInput
                    name="addressLine2"
                    value={addressLine2}
                    onChange={handleChange}
                    placeholder="Address Line 2"
                    className="winged"
                />
                <TextInput
                    name="city"
                    value={city}
                    onChange={handleChange}
                    placeholder="City"
                    className="winged"
                    required
                />
                <TextInput
                    name="postcode"
                    value={postcode}
                    onChange={handleChange}
                    placeholder="Postcode"
                    className="winged"
                    required
                />
                <Checkbox
                    name="bypassEPC"
                    value={bypassEPC}
                    onChange={handleChange}
                    label="Bypass EPC"
                />
                <Checkbox
                    name="useAccountDetailsForAccess"
                    value={useAccountDetailsForAccess}
                    onChange={handleChange}
                    label="Use Account Details for Access"
                />
                {useAccountDetailsForAccess && (
                    <>
                        <TextInput
                            name="firstName"
                            value={firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            className="winged"
                            required
                        />
                        <TextInput
                            name="lastName"
                            value={lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            className="winged"
                            required
                        />
                        <TextInput
                            name="email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="winged"
                            required
                        />
                        <TextInput
                            name="phone"
                            value={phone}
                            onChange={handleChange}
                            placeholder="Phone"
                            className="winged"
                            required
                        />
                    </>
                )}
            </Form>
        </Modal>
    );
};

export default CreatePropertyModal;
