import Checkbox from 'lib/src/components/form/Checkbox';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import Modal from 'lib/src/components/modal/Modal';
import React from 'react';
import { Property } from 'src/types/shared/Property';
import { User } from 'src/types/shared/User';
import useEditPropertyAccessDetails from './hooks/useEditPropertyAccessDetails';

interface Props {
    property: Property;
    user: User;
}

const PropertyEditAccessDetailsModel: React.FC<Props> = ({ property, user }) => {
    const {
        closeModal,
        handleSubmit,
        isPosting,
        error,
        formState,
        handleChange,
        setUseOwnerDetails,
        useOwnerDetails,
    } = useEditPropertyAccessDetails({ property, user });

    return (
        <Modal title="Update Access Details" size="small">
            <Form onCancel={closeModal} onSubmit={handleSubmit} isPosting={isPosting} error={error}>
                <FormRow>
                    <Checkbox
                        name="unused-name"
                        value={useOwnerDetails}
                        onChange={(_, val) => {
                            console.log({ useOwnerDetails, val });
                            setUseOwnerDetails(val);
                        }}
                        placeholder="Use owner details?"
                    />
                </FormRow>
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
                        type="phone"
                        name="phone"
                        value={formState.phone}
                        onChange={handleChange}
                        label="Phone"
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
