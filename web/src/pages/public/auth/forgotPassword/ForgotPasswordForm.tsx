import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';

interface Props {
    email: string;
    isPosting: boolean;
    handleSubmit: () => void;
    handleChange: (name: 'email', value: any) => void;
    error: string | null;
}

const ForgotPasswordForm: React.FC<Props> = ({
    email,
    handleChange,
    handleSubmit,
    isPosting,
    error,
}) => {
    return (
        <Form onSubmit={handleSubmit} isPosting={isPosting} error={error}>
            <FormRow>
                <TextInput
                    name="email"
                    type="email"
                    value={email}
                    label="Email address"
                    onChange={handleChange}
                    required
                />
            </FormRow>
        </Form>
    );
};

export default ForgotPasswordForm;
