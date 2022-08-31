import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { postLogin } from '@actions/auth/postLogin';
import { getAuthIsPosting, getAuthPostSuccess } from '@selectors/auth';

import LoginForm from './LoginForm';

const LoginFormContainer: React.FC = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isPosting = useSelector(getAuthIsPosting);
    const postSuccess = useSelector(getAuthPostSuccess);

    const [formState, handleChange] = useForm({
        email: '',
        password: '',
    });

    const prevPostSuccess = usePrevious(postSuccess);
    useEffect(() => {
        if (!prevPostSuccess && postSuccess) {
            history.push('/');
        }
    }, [postSuccess, prevPostSuccess, history]);

    const customValidate = useCallback(() => {
        // eslint-disable-next-line
    }, [formState.email]);

    return (
        <LoginForm
            handleChange={handleChange}
            formState={formState}
            handleSubmit={handleSubmit}
            isPosting={isPosting}
            customValidate={customValidate}
        />
    );

    function handleSubmit() {
        dispatch(postLogin(formState));
    }
};

export default LoginFormContainer;
