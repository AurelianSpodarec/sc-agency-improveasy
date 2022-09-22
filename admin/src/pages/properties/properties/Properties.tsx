import Title from 'lib/src/components/typography/Title';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import React, { useRef } from 'react';
import useFetchProperties from './hooks/useFetchProperties';
import ApiFilterTable, { ApiFilterTableHandle } from 'lib/src/components/table/ApiFilterTable';
import { TableColumns } from 'src/types/table';
import { Property } from 'src/types/shared/Property';

const Properties: React.FC = () => {
    const { isFetching, fetchError, properties, handleFetch } = useFetchProperties();
    const tableRef = useRef<ApiFilterTableHandle>(null);

    return (
        <>
            <CreateHeader>
                <Title>Properties</Title>
            </CreateHeader>
            <ApiFilterTable
                ref={tableRef}
                isLoading={isFetching}
                error={fetchError}
                rows={properties}
                columns={columns}
                maxPage={10}
                fetchData={handleFetch}
            />
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
