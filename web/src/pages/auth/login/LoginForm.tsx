import ActionButton from 'lib/src/components/button/ActionButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import { CustomValidateFunction } from 'lib/src/types/shared/formValidation';
import { HandleSubmit } from 'src/types/shared/Functions';

const LoginForm: React.FC<LoginFormProps> = ({
    formState: { email, password },
    handleChange,
    handleSubmit,
    isPosting,
    customValidate,
}) => (
    <Form onSubmit={handleSubmit} isPosting={isPosting} omitButtons>
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
        <FormRow>
            <TextInput
                name="password"
                value={password}
                label="Password"
                onChange={handleChange}
                type="password"
                required
                customValidate={customValidate}
            />
        </FormRow>
        <ButtonRow alignment="right">
            <ActionButton icon="sign-in" isPosting={isPosting}>
                Login
            </ActionButton>
        </ButtonRow>
    </Form>
);

interface LoginFormProps {
    formState: { email: string; password: string };
    handleChange: <T>(name: 'email' | 'password', value: T) => void;
    handleSubmit: HandleSubmit;
    isPosting: boolean;
    customValidate: CustomValidateFunction<string>;
}
export default LoginForm;
