import useForm from 'lib/src/hooks/useForm';
import usePrevious from 'lib/src/hooks/usePrevious';
import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useHistory } from 'react-router-dom';
import { createUser } from '@actions/users/postCreateUser';
import { getUserIsPosting, getUserPostSuccess, getUsersError } from '@selectors/users';
import { CloseModal, HandleSubmit, ValidateConfirmPassword } from 'src/types/shared/Functions';
import { userRoles } from 'lib/src/shared/enums/dropdownEnums';

const initialState: FormState = {
    email: '',
    password: '',
    confirmPassword: '',
    firstName: '',
    lastName: '',
    roles: [],
};

export default function useCreateUser(closeModal: CloseModal): UseCreateUserReturn {
    const dispatch = useDispatch();
    const history = useHistory();
    const [formState, handleChange] = useForm(initialState);

    const validateConfirmPassword = useCallback(
        (confirmPassword: string) => {
            if (formState.password !== confirmPassword) {
                return 'Passwords do not match.';
            }
        },
        [formState.password],
    );

    const handleSubmit = useCallback(() => {
        dispatch(createUser(formState));
        history.push('/users');
    }, [dispatch, history, formState]);

    const isPosting = useSelector(getUserIsPosting);
    const error = useSelector(getUsersError);
    const postSuccess = useSelector(getUserPostSuccess);
    const prevPostSuccess = usePrevious(postSuccess);

    useEffect(() => {
        if (!prevPostSuccess && postSuccess) {
            closeModal();
        }
    }, [postSuccess, prevPostSuccess, closeModal]);

    return {
        formState,
        handleChange,
        handleSubmit,
        isPosting,
        error,
        validateConfirmPassword,
    };
}
interface FormState {
    email: string;
    password: string;
    confirmPassword: string;
    firstName: string;
    lastName: string;
    roles: userRoles[];
}

interface UseCreateUserReturn {
    formState: FormState;
    handleChange: <T>(name: keyof FormState, value: T) => void;
    handleSubmit: HandleSubmit;
    isPosting: boolean;
    error: string | null;
    validateConfirmPassword: ValidateConfirmPassword;
}
