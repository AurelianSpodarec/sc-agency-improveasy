import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { postRegister } from '@actions/auth/postRegister';
import { getAuthIsPosting, getAuthPostSuccess } from '@selectors/auth';

import RegisterForm from './RegisterForm';

const RegisterFormContainer: React.FC = (): JSX.Element => {
    const dispatch = useDispatch();
    const history = useHistory();
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
        <RegisterForm
            handleChange={handleChange}
            formState={formState}
            handleSubmit={handleSubmit}
            isPosting={isPosting}
        />
    );

    function handleSubmit() {
        dispatch(postRegister(formState));
    }
};

export default RegisterFormContainer;
