import { useCallback, useEffect, useState } from 'react';
import { useHistory } from 'react-router-dom';

import { useDispatch, useSelector } from 'react-redux';
import { postLogin } from '@actions/auth/postLogin';
import { resendConfirmEmail } from '@actions/auth/resendConfirmEmail';
import { getAuthIsPosting, getAuthPostSuccess } from '@selectors/auth';
import { getAuthError, getAuthIsConfirmed } from '@selectors/auth';

import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';

const useLogin = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isPosting = useSelector(getAuthIsPosting);
    const postSuccess = useSelector(getAuthPostSuccess);
    const error = useSelector(getAuthError);
    const isConfirmed = useSelector(getAuthIsConfirmed);

    const [showConfirmEmail, setShowConfirmEmail] = useState(false);

    const [formState, onChange] = useForm({
        email: '',
        password: '',
    });

    const handleChange = (name: keyof typeof formState, value: any) => {
        if (name === 'email') {
            setShowConfirmEmail(false);
        }
        onChange(name, value);
    };

    const prevPostSuccess = usePrevious(postSuccess);
    useEffect(() => {
        if (!prevPostSuccess && postSuccess) {
            if (isConfirmed) {
                history.push('/dashboard');
            } else {
                setShowConfirmEmail(true);
            }
        }
    }, [postSuccess, prevPostSuccess, isConfirmed, history, showConfirmEmail]);

    const customValidate = useCallback(() => {
        // eslint-disable-next-line
    }, [formState.email]);

    const handleSubmit = () => {
        const a = dispatch(postLogin(formState));
    };

    const resendEmail = () => {
        dispatch(resendConfirmEmail(formState.email));
    };

    return {
        formState,
        handleChange,
        handleSubmit,
        isPosting,
        customValidate,
        error,
        showConfirmEmail,
        resendEmail,
    };
};

export default useLogin;
