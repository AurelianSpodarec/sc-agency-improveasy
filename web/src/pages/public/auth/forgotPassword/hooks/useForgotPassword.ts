import { postSendForgotPassword } from '../../../../../redux/actions/auth/postSendForgotPassword';
import { getAuthError } from '../../../../../redux/selectors/auth';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';
import { getAuthIsPosting, getAuthPostSuccess } from '@selectors/auth';

const useForgotPassword = () => {
    const dispatch = useDispatch();
    const isPosting = useSelector(getAuthIsPosting);
    const postSuccess = useSelector(getAuthPostSuccess);
    const error = useSelector(getAuthError);
    const [showSuccess, setShowSuccess] = useState(false);

    const [formState, handleChange] = useForm({
        email: '',
    });

    const prevPostSuccess = usePrevious(postSuccess);
    useEffect(() => {
        if (!prevPostSuccess && postSuccess) {
            setShowSuccess(true);
        }
    }, [postSuccess, prevPostSuccess]);

    const handleSubmit = () => {
        dispatch(postSendForgotPassword(formState.email));
    };

    return {
        formState,
        handleChange,
        isPosting,
        error,
        handleSubmit,
        showSuccess,
    };
};

export default useForgotPassword;
