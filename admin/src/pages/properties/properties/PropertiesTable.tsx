import dayjs from 'dayjs';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import Table from 'lib/src/components/table/Table';
import { User } from 'src/types/shared/User';
import { userRoleNames } from 'lib/src/shared/enums/dropdownEnums';

const UsersTable: React.FC<UsersTableProps> = ({ users, isFetching }) => {
    return <Table columns={columns} rows={Object.values(users)} isLoading={isFetching} />;
};

interface UsersTableProps {
    users: Record<number, User>;
    isFetching: boolean;
}

const columns = [
    {
        key: 1,
        heading: 'Name',
        getValue: (row: User) => `${row.firstName} ${row.lastName}`,
        getSort: (a: User, b: User) => a.firstName.localeCompare(b.firstName),
    },
    {
        key: 2,
        heading: 'Created',
        getValue: (row: User) => dayjs(row.createdOn).format('DD-MM-YYYY'),
        getSort: (a: User, b: User) =>
            new Date(a.createdOn).getTime() - new Date(b.createdOn).getTime(),
    },
    {
        key: 3,
        heading: 'Email',
        getValue: (row: User) => row.email,
    },
    {
        key: 4,
        heading: 'Roles',
        getValue: (row: User) =>
            row.roles.map(roleEnum => userRoleNames[roleEnum] || '').join(', '),
    },
    {
        key: 5,
        heading: '',
        getValue: (row: User) => (
            <ButtonRow alignment="right">
                <LinkButton href={`/users/${row.id}`}>View</LinkButton>
            </ButtonRow>
        ),
    },
];

export default UsersTable;
