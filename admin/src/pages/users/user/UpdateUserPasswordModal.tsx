import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import Modal from 'lib/src/components/modal/Modal';
import React from 'react';
import { User } from 'src/types/shared/User';
import useUpdateUserPassword from './hooks/useUpdateUserPassword';

const UpdateUserPasswordModal: React.FC<UpdateUserModalProps> = ({ user: { id } }) => {
    const {
        formState: { password, confirmPassword },
        handleChange,
        validateConfirmPassword,
        handleSubmit,
        isPosting,
        closeModal,
    } = useUpdateUserPassword(id);

    return (
        <Modal title="Update password" size="small">
            <Form onCancel={closeModal} onSubmit={handleSubmit} isPosting={isPosting}>
                <FormRow>
                    <TextInput
                        required
                        type="password"
                        name="password"
                        value={password}
                        onChange={handleChange}
                        label="Password"
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        required
                        type="password"
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        customValidate={validateConfirmPassword}
                        label="Confirm password"
                    />
                </FormRow>
            </Form>
        </Modal>
    );
};

interface UpdateUserModalProps {
    user: User;
}

export default UpdateUserPasswordModal;
