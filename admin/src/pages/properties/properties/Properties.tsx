import Title from 'lib/src/components/typography/Title';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import React from 'react';
import useFetchProperties from './hooks/useFetchProperties';
import Table from 'lib/src/components/table/Table';
import { TableColumns } from 'src/types/table';
import { Property } from 'src/types/shared/Property';

const Properties: React.FC = () => {
    const { isFetching, fetchError, properties } = useFetchProperties();
    console.log({ fetchError });
    return (
        <>
            <CreateHeader>
                <Title>Properties</Title>
            </CreateHeader>
            <Table isLoading={isFetching} error={fetchError} rows={properties} columns={columns} />
        </>
    );
};

const columns: TableColumns<Property> = [
    {
        key: 1,
        heading: 'Address line 1',
        getValue: row => row.addressLine1,
    },
];

export default Properties;
