import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import Modal from 'lib/src/components/modal/Modal';
import React from 'react';
import { Property } from 'src/types/shared/Property';
import useEditPropertyAddress from './hooks/useEditPropertyAddress';

interface Props {
    property: Property;
}

const PropertyEditAddressModal: React.FC<Props> = ({ property }) => {
    const { closeModal, handleSubmit, isPosting, error, formState, handleChange } =
        useEditPropertyAddress({ property });

    return (
        <Modal title="Update address" size="small">
            <Form onCancel={closeModal} onSubmit={handleSubmit} isPosting={isPosting} error={error}>
                <FormRow>
                    <TextInput
                        name="firstName"
                        value={formState.firstName}
                        onChange={handleChange}
                        label="First name"
                        required
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        name="lastName"
                        value={formState.lastName}
                        onChange={handleChange}
                        label="Last name"
                        required
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        type="email"
                        name="email"
                        value={formState.email}
                        onChange={handleChange}
                        label="Email address"
                        required
                    />
                </FormRow>
            </Form>
        </Modal>
    );
};

export default PropertyEditAddressModal;
