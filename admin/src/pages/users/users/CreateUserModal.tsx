import Modal from 'lib/src/components/modal/Modal';
import { convertEnumToDropdownOption, userRoles } from 'lib/src/shared/enums/dropdownEnums';
import useCreateUser from './hooks/useCreateUser';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import MultiSelect from 'lib/src/components/form/MultiSelect';

const roleOptions = convertEnumToDropdownOption(userRoles);

const CreateUserModal: React.FC<CreateUserProps> = ({ closeModal }) => {
    const {
        formState: { email, password, confirmPassword, firstName, lastName, roles },
        handleChange,
        handleSubmit,
        isPosting,
        validateConfirmPassword,
    } = useCreateUser(closeModal);

    return (
        <Modal title="Create User">
            <Form onSubmit={handleSubmit} isPosting={isPosting} onCancel={closeModal}>
                <FormRow>
                    <TextInput
                        type="Email"
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
                <FormRow>
                    <MultiSelect
                        name="roles"
                        value={roles}
                        options={roleOptions}
                        onChange={handleChange}
                        label=" roles"
                        required
                    />
                </FormRow>
            </Form>
        </Modal>
    );
};

interface CreateUserProps {
    closeModal: () => void;
}

export default CreateUserModal;
