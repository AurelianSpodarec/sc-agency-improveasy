import { getAuthError, getAuthIsConfirmed } from './../../../../../redux/selectors/auth';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';
import { postLogin } from '@actions/auth/postLogin';
import { getAuthIsPosting, getAuthPostSuccess } from '@selectors/auth';

const useLogin = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isPosting = useSelector(getAuthIsPosting);
    const postSuccess = useSelector(getAuthPostSuccess);
    const error = useSelector(getAuthError);
    const isConfirmed = useSelector(getAuthIsConfirmed);

    const [formState, handleChange] = useForm({
        email: '',
        password: '',
    });

    const prevPostSuccess = usePrevious(postSuccess);
    useEffect(() => {
        if (!prevPostSuccess && postSuccess) {
            if (isConfirmed) {
                history.push('/dashboard');
            } else {
                history.push('/auth/confirm-email');
            }
        }
    }, [postSuccess, prevPostSuccess, isConfirmed, history]);

    const customValidate = useCallback(() => {
        // eslint-disable-next-line
    }, [formState.email]);

    const handleSubmit = () => {
        dispatch(postLogin(formState));
    };

    return {
        formState,
        handleChange,
        handleSubmit,
        isPosting,
        customValidate,
        error,
    };
};

export default useLogin;
