import { fetchSingleUser } from '@actions/users/fetchSingleUser';
import { useEffect } from 'react';
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom';
import { getUser, getUsersError, getUsersIsFetching } from '@selectors/users';
import { useAppSelector } from '../../../../redux/store';

const useFetchUser = () => {
    const { id } = useParams<{ id: string }>();
    const dispatch = useDispatch();

    const isFetching = useSelector(getUsersIsFetching);
    const error = useSelector(getUsersError);
    const user = useAppSelector(state => getUser(state, +id));

    useEffect(() => {
        dispatch(fetchSingleUser(+id));
    }, [id, dispatch]);

    return {
        isFetching,
        error,
        user,
    };
};

export default useFetchUser;
