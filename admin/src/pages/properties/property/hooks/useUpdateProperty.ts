import { useCallback, useEffect } from 'react';
import { useHistory } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';

import usePrevious from 'lib/src/hooks/usePrevious';
import useForm from 'lib/src/hooks/useForm';
import { userRoles } from 'lib/src/shared/enums/dropdownEnums';

import { updateUser } from '@actions/users';
import { getUserIsPosting, getUserPostSuccess, getUsersError } from '@selectors/users';
import { User } from 'src/types/shared/User';

export default function useUpdateUser({
    id,
    email,
    firstName,
    lastName,
    roles,
}: User): UseUpdateUserReturn {
    const dispatch = useDispatch();
    const history = useHistory();

    const isPosting = useSelector(getUserIsPosting);
    const error = useSelector(getUsersError);
    const postSuccess = useSelector(getUserPostSuccess);
    const prevPostSuccess = usePrevious(postSuccess);
    
    const [formState, handleChange] = useForm({ email, firstName, lastName, roles });
    
    
    const closeModal = useCallback(() => {
        history.replace(`/users/${id}`);
    }, [history, id]);

    const handleSubmit = useCallback(() => {
        dispatch(updateUser(id, formState));
    }, [dispatch, id, formState]);


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
    roles: userRoles[];
}

interface UseUpdateUserReturn {
    handleSubmit: () => void;
    formState: FormState;
    handleChange: <T>(name: 'firstName' | 'lastName' | 'email' | 'roles', value: T) => void;
    closeModal: () => void;
    isPosting: boolean;
    error: string | null;
}
