import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';

import { createAdminUser } from '@actions/adminUsers/postCreateAdminUser';
import {
    getAdminUserIsPosting,
    getAdminUserPostSuccess,
    getAdminUsersError,
} from '@selectors/adminUsers';
import { useHistory } from 'react-router-dom';
import { CloseModal, HandleSubmit, ValidateConfirmPassword } from 'src/types/shared/Functions';

const initialFormData: FormState = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
};

export default function useCreateAdmin(): UseCreateAdminReturn {
    const dispatch = useDispatch();
    const history = useHistory();

    const isPosting = useSelector(getAdminUserIsPosting);
    const postSuccess = useSelector(getAdminUserPostSuccess);
    const error = useSelector(getAdminUsersError);

    const [formState, handleChange] = useForm(initialFormData);

    const validateConfirmPassword = useCallback(
        (confirmPassword: string) => {
            if (formState.password !== confirmPassword) {
                return 'Passwords do not match.';
            }
        },
        [formState.password],
    );

    const handleSubmit = useCallback(() => {
        dispatch(createAdminUser(formState));
    }, [dispatch, formState]);

    const closeModal = useCallback(() => {
        history.push('/admin-users');
    }, [history]);

    const prevPostSuccess = usePrevious(postSuccess);
    useEffect(() => {
        if (!prevPostSuccess && postSuccess) {
            closeModal();
        }
    }, [prevPostSuccess, postSuccess, closeModal]);

    return {
        isPosting,
        error,
        formState,
        handleChange,
        handleSubmit,
        validateConfirmPassword,
        closeModal,
    };
}

interface FormState {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
}

interface UseCreateAdminReturn {
    isPosting: boolean;
    error: string | null;
    formState: FormState;
    handleChange: <T>(name: keyof FormState, value: T) => void;
    handleSubmit: HandleSubmit;
    validateConfirmPassword: ValidateConfirmPassword;
    closeModal: CloseModal;
}
