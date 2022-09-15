import { useSelector } from 'react-redux';

import useUsersFetch from './hooks/useUsersFetch';
import { getUsers, getUsersIsFetching } from '@selectors/users';
import UsersTable from './UsersTable';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import Title from 'lib/src/components/typography/Title';

const Users: React.FC = () => {
    useUsersFetch();
    const users = useSelector(getUsers);
    const isFetching = useSelector(getUsersIsFetching);

    return (
        <>
            <CreateHeader>
                <Title>Property Owners</Title>
            </CreateHeader>

            <UsersTable users={users} isFetching={isFetching} />
        </>
    );
};

export default Users;
