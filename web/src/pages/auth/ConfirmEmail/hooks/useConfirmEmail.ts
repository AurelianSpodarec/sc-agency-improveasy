import { postConfirmEmail } from '../../../../redux/actions/auth/postConfirmEmail';
import { useEffect } from 'react';
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

    const { token } = useParams<{ token: string }>();
    useEffect(() => {
        dispatch(postConfirmEmail(token));
    }, [token, dispatch, history]);

    const prevSuccess = usePrevious(success);
    useEffect(() => {
        if (!prevSuccess && success) {
            history.push('/dashboard');
        }
    }, [success, prevSuccess, history]);

    return {
        isPosting,
        error,
    };
};

export default useConfirmEmail;
