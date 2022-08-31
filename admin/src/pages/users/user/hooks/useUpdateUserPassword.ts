import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import usePrevious from 'lib/src/hooks/usePrevious';
import useForm from 'lib/src/hooks/useForm';

import { updateUserPassword } from '@actions/users';
import { getUserIsPosting, getUserPostSuccess } from '@selectors/users';
import { useHistory } from 'react-router-dom';
import { CloseModal, HandleSubmit, ValidateConfirmPassword } from 'src/types/shared/Functions';

export default function useUpdateUserPassword(userID: number): UseUpdateUserPasswordReturn {
    const dispatch = useDispatch();
    const history = useHistory();

    const closeModal = useCallback(() => {
        history.replace(`/users/${userID}`);
    }, [history, userID]);

    const [formState, handleChange] = useForm({ password: '', confirmPassword: '' });

    const handleSubmit = useCallback(() => {
        dispatch(updateUserPassword(userID, formState));
    }, [dispatch, userID, formState]);

    const postSuccess = useSelector(getUserPostSuccess);
    const prevPostSuccess = usePrevious(postSuccess);
    const isPosting = useSelector(getUserIsPosting);

    const validateConfirmPassword = useCallback(() => {
        if (formState.password !== formState.confirmPassword) {
            return 'Passwords do not match.';
        }
    }, [formState.password, formState.confirmPassword]);

    useEffect(() => {
        if (!prevPostSuccess && postSuccess) {
            closeModal();
        }
    }, [postSuccess, prevPostSuccess, closeModal]);

    return {
        closeModal,
        handleSubmit,
        formState,
        handleChange,
        validateConfirmPassword,
        isPosting,
    };
}

interface FormState {
    password: string;
    confirmPassword: string;
}

interface UseUpdateUserPasswordReturn {
    closeModal: CloseModal;
    handleSubmit: HandleSubmit;
    formState: FormState;
    handleChange: <T>(name: 'password' | 'confirmPassword', value: T) => void;
    validateConfirmPassword: ValidateConfirmPassword;
    isPosting: boolean;
}
