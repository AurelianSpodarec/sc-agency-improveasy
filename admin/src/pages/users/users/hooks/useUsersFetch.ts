import { useEffect } from 'react';
import { useDispatch } from 'react-redux';
import { fetchAllUsers } from '@actions/users/fetchAllUsers';

const useUsersFetch = (): void => {
    const dispatch = useDispatch();
    useEffect(() => {
        dispatch(fetchAllUsers());
    }, [dispatch]);
};

export default useUsersFetch;
