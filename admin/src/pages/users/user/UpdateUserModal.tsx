import React from 'react';

import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import Modal from 'lib/src/components/modal/Modal';

import { User } from 'src/types/shared/User';
import useUpdateUser from './hooks/useUpdateUser';

const UpdateUserModal: React.FC<UpdateUserProps> = ({ user }) => {
    const {
        handleSubmit,
        handleChange,
        closeModal,
        isPosting,
        formState,
        formState: { email, phone, firstName, lastName },
    } = useUpdateUser(user);
    console.log(formState);
    return (
        <Modal title="Update user" size="small">
            <Form onCancel={closeModal} onSubmit={handleSubmit} isPosting={isPosting}>
                <FormRow>
                    <TextInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        label="Email address"
                        placeholder="Email address"
                        required
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        name="phone"
                        value={phone}
                        onChange={handleChange}
                        label="Phone"
                        placeholder="Phone"
                        required
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                        label="First name"
                        placeholder="First name"
                        required
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                        label="Last Name"
                        placeholder="Last Name"
                        required
                    />
                </FormRow>
            </Form>
        </Modal>
    );
};

interface UpdateUserProps {
    user: User;
}

export default UpdateUserModal;
