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
                        name="addressLine1"
                        value={formState.addressLine1}
                        onChange={handleChange}
                        label="Address line 1"
                        required
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        name="addressLine2"
                        value={formState.addressLine2}
                        onChange={handleChange}
                        label="Address line 2"
                        required
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        name="city"
                        value={formState.city}
                        onChange={handleChange}
                        label="City"
                        required
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        name="postcode"
                        value={formState.postcode}
                        onChange={handleChange}
                        label="Postcode"
                        required
                    />
                </FormRow>
            </Form>
        </Modal>
    );
};

export default PropertyEditAddressModal;
