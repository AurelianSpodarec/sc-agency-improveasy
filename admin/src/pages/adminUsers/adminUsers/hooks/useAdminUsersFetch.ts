import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllAdminUsers } from '@actions/adminUsers/fetchAllAdminUsers';

const useAdminUsersFetch = (): void => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllAdminUsers());
    }, [dispatch]);
};

export default useAdminUsersFetch;
