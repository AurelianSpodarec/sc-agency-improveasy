import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import usePrevious from 'lib/src/hooks/usePrevious';
import useForm from 'lib/src/hooks/useForm';

import { updateUser } from '@actions/users';
import { getUserIsPosting, getUserPostSuccess, getUsersPostError } from '@selectors/users';
import { useHistory } from 'react-router-dom';
import { User } from 'src/types/shared/User';

export default function useUpdateUser({
    id,
    email,
    firstName,
    lastName,
}: User): UseUpdateUserReturn {
    const dispatch = useDispatch();
    const history = useHistory();

    const closeModal = useCallback(() => {
        history.replace(`/users/${id}`);
    }, [history, id]);

    const [formState, handleChange] = useForm({ email, firstName, lastName });

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

interface FormState {
    email: string;
    firstName: string;
    lastName: string;
}

interface UseUpdateUserReturn {
    handleSubmit: () => void;
    formState: FormState;
    handleChange: <T>(name: 'firstName' | 'lastName' | 'email', value: T) => void;
    closeModal: () => void;
    isPosting: boolean;
    error: string | null;
}
