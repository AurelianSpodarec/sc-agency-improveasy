import { getAuthError } from './../../../../../redux/selectors/auth';
import { postConfirmEmail } from './../../../../../redux/actions/auth/postConfirmEmail';
import useForm from 'lib/src/hooks/useForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getAuthIsPosting, getAuthPostSuccess } from '@selectors/auth';
import usePrevious from 'lib/src/hooks/usePrevious';
import useQuery from 'lib/src/hooks/useQuery';

const useConfirmEmail = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isPosting = useSelector(getAuthIsPosting);
    const success = useSelector(getAuthPostSuccess);
    const error = useSelector(getAuthError);

    console.log({ error });

    const tokenParam = useQuery('token');

    const [formData, handleChange] = useForm({ code: '' });

    useEffect(() => {
        if (tokenParam) {
            handleChange('code', tokenParam);
        }
    }, [tokenParam, handleChange]);

    const prevSuccess = usePrevious(success);
    useEffect(() => {
        if (!prevSuccess && success) {
            history.push('/portal');
        }
    }, [success, prevSuccess, history]);

    const handleSubmit = () => {
        dispatch(postConfirmEmail(formData.code));
    };

    return {
        isPosting,
        handleSubmit,
        formData,
        handleChange,
        error,
    };
};

export default useConfirmEmail;
