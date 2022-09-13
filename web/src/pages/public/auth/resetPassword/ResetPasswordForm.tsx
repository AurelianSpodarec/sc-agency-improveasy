import Form from 'lib/src/components/form/Form';
import TextInput from 'lib/src/components/form/TextInput';
import FormRow from 'lib/src/components/form/FormRow';

interface Props {
    newPassword: string;
    isPosting: boolean;
    handleSubmit: () => void;
    handleChange: (name: 'newPassword', value: any) => void;
    error: string | null;
}

const ResetPasswordForm: React.FC<Props> = ({
    isPosting,
    error,
    newPassword,
    handleChange,
    handleSubmit,
}) => {
    return (
        <Form onSubmit={handleSubmit} isPosting={isPosting} error={error}>
            <FormRow>
                <TextInput
                    name="newPassword"
                    value={newPassword}
                    label="New Password"
                    onChange={handleChange}
                    type="password"
                    required
                />
            </FormRow>
        </Form>
    );
};

export default ResetPasswordForm;
