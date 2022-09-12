import ActionButton from 'lib/src/components/button/ActionButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import { Link } from 'react-router-dom';
import { HandleSubmit } from 'src/types/shared/Functions';

const RegisterForm: React.FC<RegisterFormProps> = ({
    formState: { firstName, lastName, email, password, phone },
    handleChange,
    handleSubmit,
    isPosting,
}): JSX.Element => (
    <Form onSubmit={handleSubmit} isPosting={isPosting} omitButtons>
        <div>
            <FormRow>
                <TextInput
                    name="firstName"
                    value={firstName}
                    label="First name"
                    onChange={handleChange}
                    required
                />
            </FormRow>
            <FormRow>
                <TextInput
                    name="lastName"
                    value={lastName}
                    label="Last name"
                    onChange={handleChange}
                    required
                />
            </FormRow>
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
                />
            </FormRow>
            <FormRow>
                <TextInput
                    name="phone"
                    value={phone}
                    label="Phone"
                    onChange={handleChange}
                    required
                />
            </FormRow>
        </div>
        <div className="d-flex justify-between">
            <p>
                Already have an account? <Link to="/auth/login">Log in</Link>
            </p>
            <ActionButton isPosting={isPosting}>Register</ActionButton>
        </div>
    </Form>
);

interface RegisterFormProps {
    formState: {
        firstName: string;
        lastName: string;
        email: string;
        password: string;
        phone: string;
    };
    handleChange: <T>(
        name: 'email' | 'password' | 'firstName' | 'lastName' | 'phone',
        value: T,
    ) => void;
    handleSubmit: HandleSubmit;
    isPosting: boolean;
}

export default RegisterForm;
