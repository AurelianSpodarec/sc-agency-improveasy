import { postResetPassword } from './../../../../../redux/actions/auth/postResetPassword';
import useForm from 'lib/src/hooks/useForm';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory, useParams } from 'react-router-dom';

import { getAuthIsPosting, getAuthPostSuccess, getAuthConfirmEmailError } from '@selectors/auth';
import usePrevious from 'lib/src/hooks/usePrevious';

const useConfirmEmail = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isPosting = useSelector(getAuthIsPosting);
    const success = useSelector(getAuthPostSuccess);
    const error = useSelector(getAuthConfirmEmailError);

    const [showSuccess, setShowSuccess] = useState(false);

    const [formState, handleChange] = useForm({ newPassword: '' });

    const { token } = useParams<{ token: string }>();

    const prevSuccess = usePrevious(success);
    useEffect(() => {
        if (!prevSuccess && success) {
            setShowSuccess(true);
        }
    }, [success, prevSuccess, history]);

    const handleSubmit = () => {
        console.log('hihi');
        dispatch(postResetPassword(token, formState.newPassword));
    };

    return {
        isPosting,
        error,
        handleChange,
        formState,
        handleSubmit,
        showSuccess,
    };
};

export default useConfirmEmail;
