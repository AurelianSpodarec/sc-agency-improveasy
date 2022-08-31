import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import Modal from 'lib/src/components/modal/Modal';
import React from 'react';
import { AdminUser } from 'src/types/shared/AdminUser';
import useUpdateAdminPassword from './hooks/useUpdateAdminPassword';

const UpdateAdminPasswordModal: React.FC<UpdateAdminPasswordProps> = ({ user: { id } }) => {
    const {
        formState: { password, confirmPassword },
        handleChange,
        validateConfirmPassword,
        handleSubmit,
        // error,
        // isPosting,
        closeModal,
    } = useUpdateAdminPassword(id);

    return (
        <Modal title="Update password" size="small">
            <Form onCancel={closeModal} onSubmit={handleSubmit}>
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

interface UpdateAdminPasswordProps {
    user: AdminUser;
}

export default UpdateAdminPasswordModal;
