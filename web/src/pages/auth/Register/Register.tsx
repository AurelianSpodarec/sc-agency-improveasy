import { useEffect } from 'react';
import { useHistory } from 'react-router-dom';

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

import { AuthCard, AuthSection, AuthHeader, AuthSubHeader } from '../_components';

const Register = () => {
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
            <AuthHeader title="Register">
                <AuthSubHeader subtitle="Already have an account?" to="/auth/login" cta="Sign in" />
            </AuthHeader>

            <AuthSection>
                <Form
                    onSubmit={() => dispatch(postRegister(formState))}
                    isPosting={isPosting}
                    omitButtons
                >
                    <div>
                        <FormRow>
                            <TextInput
                                name="email"
                                type="email"
                                value={formState.email}
                                placeholder="Email address"
                                onChange={handleChange}
                                required
                            />
                        </FormRow>

                        <TextInput
                            name="firstName"
                            value={formState.firstName}
                            placeholder="First name"
                            onChange={handleChange}
                            required
                        />
                        <TextInput
                            name="lastName"
                            value={formState.lastName}
                            placeholder="Last name"
                            onChange={handleChange}
                            required
                        />

                        <FormRow>
                            <TextInput
                                name="phone"
                                value={formState.phone || ''}
                                type="text"
                                placeholder="Phone"
                                onChange={handleChange}
                            />
                        </FormRow>
                        <FormRow>
                            <TextInput
                                name="password"
                                value={formState.password}
                                placeholder="Password"
                                onChange={handleChange}
                                type="password"
                                required
                            />
                        </FormRow>
                    </div>

                    <div className="d-flex justify-between">
                        <div></div>
                        <ActionButton type="submit" className="winged" isPosting={isPosting}>
                            Register
                        </ActionButton>
                    </div>
                </Form>
            </AuthSection>
        </AuthCard>
    );
};

export default Register;
