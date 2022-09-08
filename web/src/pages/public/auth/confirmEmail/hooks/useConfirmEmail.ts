import useForm from 'lib/src/hooks/useForm';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';

import { getAuthIsPosting, getAuthPostSuccess } from '@selectors/auth';
import usePrevious from 'lib/src/hooks/usePrevious';

const useConfirmEmaiml = () => {
    const dispatch = useDispatch();
    const history = useHistory();
    const isPosting = useSelector(getAuthIsPosting);
    const success = useSelector(getAuthPostSuccess);

    const [formData, handleChange] = useForm({ code: '' });

    const prevSuccess = usePrevious(success);
    useEffect(() => {
        if (!prevSuccess && success) {
            history.push('/portal');
        }
    }, [success, prevSuccess, history]);

    const handleSubmit = () => {};

    return {
        isPosting,
        handleSubmit,
        formData,
        handleChange,
    };
};

export default useConfirmEmaiml;
