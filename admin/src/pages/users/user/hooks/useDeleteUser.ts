import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import usePrevious from 'lib/src/hooks/usePrevious';
import { deleteUser } from '@actions/users/deleteUser';
import { getUserPostSuccess, getUserIsPosting, getUsersPostError } from '@selectors/users';
import { useHistory } from 'react-router-dom';

export default function useDeleteUser(userID: number): UseDeleteUserReturn {
    const dispatch = useDispatch();
    const history = useHistory();

    const handleSubmit = useCallback(() => {
        dispatch(deleteUser(userID));
    }, [dispatch, userID]);

    const isPosting = useSelector(getUserIsPosting);
    const error = useSelector(getUsersPostError);
    const deleteSuccess = useSelector(getUserPostSuccess);
    const prevDeleteSuccess = usePrevious(deleteSuccess);

    useEffect(() => {
        if (!prevDeleteSuccess && deleteSuccess) {
            history.replace('/users');
        }
    }, [deleteSuccess, prevDeleteSuccess, history]);

    return {
        handleSubmit,
        isPosting,
        error,
    };
}

interface UseDeleteUserReturn {
    handleSubmit: () => void;
    isPosting: boolean;
    error: string | null;
}
