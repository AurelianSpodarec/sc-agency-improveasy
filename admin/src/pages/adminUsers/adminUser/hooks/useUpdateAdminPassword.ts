import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import usePrevious from 'lib/src/hooks/usePrevious';
import useForm from 'lib/src/hooks/useForm';

import { updateAdminUserPassword } from '@actions/adminUsers';
import { getAdminUserPostSuccess } from '@selectors/adminUsers';
import { useHistory } from 'react-router-dom';

export default function useUpdateAdminPassword(userID: number): UpdateAdminPasswordReturn {
    const dispatch = useDispatch();
    const history = useHistory();

    const closeModal = useCallback(() => {
        history.replace(`/admin-users/${userID}`);
    }, [history, userID]);

    const [formState, handleChange] = useForm({ password: '', confirmPassword: '' });

    const handleSubmit = useCallback(() => {
        dispatch(updateAdminUserPassword(userID, formState));
    }, [dispatch, userID, formState]);

    const postSuccess = useSelector(getAdminUserPostSuccess);
    const prevPostSuccess = usePrevious(postSuccess);

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
    };
}

interface FormState {
    password: string;
    confirmPassword: string;
}

interface UpdateAdminPasswordReturn {
    closeModal: () => void;
    handleSubmit: () => void;
    formState: FormState;
    handleChange: <T>(name: 'password' | 'confirmPassword', value: T) => void;
    validateConfirmPassword: () => string | undefined;
}
