import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import MultiSelect from 'lib/src/components/form/MultiSelect';
import TextInput from 'lib/src/components/form/TextInput';
import Modal from 'lib/src/components/modal/Modal';
import React from 'react';
import { User } from 'src/types/shared/User';
import { userRoles } from 'lib/src/shared/enums/dropdownEnums';

import useUpdateUser from './hooks/useUpdateUser';

const userRoleOptions = Object.entries(userRoles).map(([key, value]) => ({
    value: +value,
    label: key,
}));

const UpdateUserModal: React.FC<UpdateUserProps> = ({ user }) => {
    const {
        handleSubmit,
        handleChange,
        closeModal,
        isPosting,
        formState: { email, firstName, lastName, roles },
    } = useUpdateUser(user);

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
                <FormRow>
                    <MultiSelect
                        name="roles"
                        value={roles}
                        options={userRoleOptions}
                        onChange={handleChange}
                        label="User roles"
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
