import React from 'react';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';

import CreateHeader from '@components/layout/createHeader/CreateHeader';
import useFetchUserProperties from './hooks/useFetchUserProperties';
import Table from 'lib/src/components/table/Table';
import { Property } from 'src/types/shared/Property';
import { TableColumns } from 'src/types/table';

const UserProperties: React.FC = () => {
    const { isFetching, fetchError, properties } = useFetchUserProperties();

    return (
        <ContentBlock>
            <CreateHeader>Properties</CreateHeader>

            <Table
                columns={columns}
                rows={properties}
                isLoading={isFetching}
                error={fetchError}
                pageSizes={[10, 25, 50]}
            />
        </ContentBlock>
    );
};

const columns: TableColumns<Property> = [
    {
        key: 1,
        heading: 'Address line 1',
        getValue: row => row.addressLine1,
    },
];

export default UserProperties;
