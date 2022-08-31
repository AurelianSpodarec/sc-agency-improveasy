import { useCallback, useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';

import usePrevious from 'lib/src/hooks/usePrevious';
import { deleteAdminUser } from '@actions/adminUsers/deleteAdminUser';
import {
    getAdminUserIsPosting,
    getAdminUserPostSuccess,
    getAdminUsersPostError,
} from '@selectors/adminUsers';
import { useHistory } from 'react-router-dom';

export default function useDeleteAdmin(userID: number): UseDeleteAdminReturn {
    const dispatch = useDispatch();
    const history = useHistory();

    const deleteUser = useCallback(() => {
        dispatch(deleteAdminUser(userID));
    }, [dispatch, userID]);

    const isPosting = useSelector(getAdminUserIsPosting);
    const error = useSelector(getAdminUsersPostError);
    const successs = useSelector(getAdminUserPostSuccess);
    const prevSuccess = usePrevious(successs);

    useEffect(() => {
        if (!prevSuccess && successs) {
            history.replace('/admin-users');
        }
    }, [successs, prevSuccess, history]);

    return {
        deleteUser,
        isPosting,
        error,
    };
}

interface UseDeleteAdminReturn {
    deleteUser: () => void;
    isPosting: boolean;
    error: string | null;
}
