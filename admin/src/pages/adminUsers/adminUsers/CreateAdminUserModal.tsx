import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';

import Modal from 'lib/src/components/modal/Modal';
import useCreateAdmin from './hooks/useCreateAdmin';

const CreateAdminUserModal: React.FC = () => {
    const {
        isPosting,
        // error,
        handleChange,
        handleSubmit,
        validateConfirmPassword,
        closeModal,
        formState: { email, firstName, lastName, password, confirmPassword },
    } = useCreateAdmin();

    return (
        <Modal title="Create Admin">
            <Form onSubmit={handleSubmit} isPosting={isPosting} onCancel={closeModal}>
                <FormRow>
                    <TextInput
                        type="email"
                        name="email"
                        value={email}
                        onChange={handleChange}
                        label="Email address"
                        required
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        name="firstName"
                        value={firstName}
                        onChange={handleChange}
                        label="First name"
                        required
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        name="lastName"
                        value={lastName}
                        onChange={handleChange}
                        label="Last Name"
                        required
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        name="password"
                        value={password}
                        onChange={handleChange}
                        label="Password"
                        type="password"
                        required
                    />
                </FormRow>
                <FormRow>
                    <TextInput
                        name="confirmPassword"
                        value={confirmPassword}
                        onChange={handleChange}
                        label="Confirm Password"
                        type="password"
                        customValidate={validateConfirmPassword}
                        required
                    />
                </FormRow>
            </Form>
        </Modal>
    );
};

export default CreateAdminUserModal;
