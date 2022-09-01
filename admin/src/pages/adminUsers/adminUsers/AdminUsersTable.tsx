import dayjs from 'dayjs';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import Table from 'lib/src/components/table/Table';
import { Column } from 'lib/src/types/table';
import { AdminUser } from 'src/types/shared/AdminUser';

const AdminUsersTable: React.FC<AdminUsersTableProps> = ({ adminUsers, isFetching }) => {
    return <Table columns={columns} rows={Object.values(adminUsers)} isLoading={isFetching} />;
};

const columns: Column<AdminUser>[] = [
    {
        key: 1,
        heading: 'Name',
        getValue: row => `${row.firstName} ${row.lastName}`,
        getSort: (a, b) => a.firstName.localeCompare(b.firstName),
        searchable: true,
    },
    {
        key: 2,
        heading: 'Created',
        getValue: row => dayjs(row.createdOn).format('DD-MM-YYYY'),
        getSort: (a, b) => new Date(a.createdOn).getTime() - new Date(b.createdOn).getTime(),
        searchable: true,
    },
    {
        key: 3,
        heading: 'Email',
        getValue: row => row.email,
        getSort: (a, b) => a.email.localeCompare(b.firstName),
    },
    {
        key: 4,
        heading: '',
        getValue: row => (
            <ButtonRow alignment="right">
                <LinkButton href={`/admin-users/${row.id}`}>View</LinkButton>
            </ButtonRow>
        ),
    },
];

interface AdminUsersTableProps {
    adminUsers: Record<number, AdminUser>;
    isFetching: boolean;
}

export default AdminUsersTable;
