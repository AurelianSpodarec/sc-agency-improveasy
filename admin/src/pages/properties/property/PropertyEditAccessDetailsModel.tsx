import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import Modal from 'lib/src/components/modal/Modal';
import React from 'react';
import { Property } from 'src/types/shared/Property';
import useEditPropertyAccessDetails from './hooks/useEditPropertyAccessDetails';

interface Props {
    property: Property;
}

const PropertyEditAccessDetailsModel: React.FC<Props> = ({ property }) => {
    const { closeModal, handleSubmit, isPosting, error, formState, handleChange } =
        useEditPropertyAccessDetails({ property });

    return (
        <Modal title="Update Access Details" size="small">
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
                <FormRow>
                    <TextInput
                        name="preferredContactTime"
                        value={formState.preferredContactTime}
                        onChange={handleChange}
                        label="Preferred contact time"
                        required
                    />
                </FormRow>
            </Form>
        </Modal>
    );
};

export default PropertyEditAccessDetailsModel;
