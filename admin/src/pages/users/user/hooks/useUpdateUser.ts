import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import usePrevious from 'lib/src/hooks/usePrevious';
import useForm from 'lib/src/hooks/useForm';

import { updateUser } from '@actions/users';
import { getUserIsPosting, getUserPostSuccess, getUsersPostError } from '@selectors/users';
import { useHistory } from 'react-router-dom';
import { User } from 'src/types/shared/User';

export default function useUpdateUser({ id, email, firstName, lastName, phone }: User) {
    const dispatch = useDispatch();
    const history = useHistory();

    const closeModal = useCallback(() => {
        history.replace(`/users/${id}`);
    }, [history, id]);

    const [formState, handleChange] = useForm({ email, firstName, lastName, phone: phone || '' });

    const handleSubmit = useCallback(() => {
        dispatch(updateUser(id, formState));
    }, [dispatch, id, formState]);

    const isPosting = useSelector(getUserIsPosting);
    const error = useSelector(getUsersPostError);
    const postSuccess = useSelector(getUserPostSuccess);
    const prevPostSuccess = usePrevious(postSuccess);

    useEffect(() => {
        if (!prevPostSuccess && postSuccess) {
            closeModal();
        }
    }, [postSuccess, prevPostSuccess, closeModal]);

    return {
        handleSubmit,
        formState,
        handleChange,
        closeModal,
        isPosting,
        error,
    };
}
