import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import Modal from 'lib/src/components/modal/Modal';
import { AdminUser } from 'src/types/shared/AdminUser';

import useUpdateAdmin from './hooks/useUpdateAdmin';

const UpdateAdminModal: React.FC<UpdateAdminProps> = ({ user }) => {
    const {
        handleSubmit,
        handleChange,
        closeModal,
        isPosting,
        // error,
        formState: { email, firstName, lastName },
    } = useUpdateAdmin(user);

    return (
        <Modal title="Update admin" size="small">
            <Form onCancel={closeModal} onSubmit={handleSubmit} isPosting={isPosting}>
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
            </Form>
        </Modal>
    );
};

interface UpdateAdminProps {
    user: AdminUser;
}

export default UpdateAdminModal;
