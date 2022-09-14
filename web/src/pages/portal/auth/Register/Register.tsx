import { useEffect } from 'react';
import { Link, useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { postRegister } from '@actions/auth/postRegister';
import { getAuthIsPosting, getAuthPostSuccess } from '@selectors/auth';

import ActionButton from 'lib/src/components/button/ActionButton';
import Form from 'lib/src/components/form/Form';
import FormRow from 'lib/src/components/form/FormRow';
import TextInput from 'lib/src/components/form/TextInput';
import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';

import { HandleSubmit } from 'src/types/shared/Functions';
import AuthCard from '../_components/authCard';
import AuthHeader from '../_components/authHeader';

const Register: React.FC = (): JSX.Element => {
    const history = useHistory();

    const dispatch = useDispatch();
    const isPosting = useSelector(getAuthIsPosting);
    const postSuccess = useSelector(getAuthPostSuccess);

    const [formState, handleChange] = useForm({
        firstName: '',
        lastName: '',
        email: '',
        password: '',
        phone: '',
    });

    const prevPostSuccess = usePrevious(postSuccess);
    useEffect(() => {
        if (!prevPostSuccess && postSuccess) {
            history.push('/auth/confirm-email');
        }
    }, [postSuccess, prevPostSuccess, history]);

    return (
        <AuthCard>
            <AuthHeader title="Login" />
            <Form
                onSubmit={() => dispatch(postRegister(formState))}
                isPosting={isPosting}
                omitButtons
            >
                <div>
                    <FormRow>
                        <TextInput
                            name="firstName"
                            value={formState.firstName}
                            label="First name"
                            onChange={handleChange}
                            required
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            name="lastName"
                            value={formState.lastName}
                            label="Last name"
                            onChange={handleChange}
                            required
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            name="email"
                            type="email"
                            value={formState.email}
                            label="Email address"
                            onChange={handleChange}
                            required
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            name="password"
                            value={formState.password}
                            label="Password"
                            onChange={handleChange}
                            type="password"
                            required
                        />
                    </FormRow>
                    <FormRow>
                        <TextInput
                            name="phone"
                            value={formState.phone}
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
        </AuthCard>
    );
};

export default Register;

interface RegisterProps {
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
