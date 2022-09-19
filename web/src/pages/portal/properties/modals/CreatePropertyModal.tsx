import useCreateProperty from '@pages/portal/properties/hooks/useCreateProperty';

import Modal from 'lib/src/components/modal/Modal';
import Form from 'lib/src/components/form/Form';
import TextInput from 'lib/src/components/form/TextInput';
import Checkbox from 'lib/src/components/form/Checkbox';
import ModalHeader from '@pages/portal/modals/ModalHeader';

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
        <Modal>
            <ModalHeader text="Create Property" closeModal={closeModal} />
            <Form
                onSubmit={() => console.log('submit')}
                buttonAlignment="center"
                submitButtonClassName="winged"
            >
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
                    leftPlaceholder="Bypass EPC"
                    className="justify-center"
                />
                <Checkbox
                    name="useAccountDetailsForAccess"
                    value={useAccountDetailsForAccess}
                    onChange={handleChange}
                    leftPlaceholder="Use Account Details for Access"
                    className="justify-center"
                />
                {useAccountDetailsForAccess && (
                    <>
                        <TextInput
                            name="accessDetails.firstName"
                            value={firstName}
                            onChange={handleChange}
                            placeholder="First Name"
                            className="winged"
                            required
                        />
                        <TextInput
                            name="accessDetails.lastName"
                            value={lastName}
                            onChange={handleChange}
                            placeholder="Last Name"
                            className="winged"
                            required
                        />
                        <TextInput
                            name="accessDetails.email"
                            value={email}
                            onChange={handleChange}
                            placeholder="Email"
                            className="winged"
                            required
                        />
                        <TextInput
                            name="accessDetails.phone"
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
