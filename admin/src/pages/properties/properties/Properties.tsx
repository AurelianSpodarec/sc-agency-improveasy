import Title from 'lib/src/components/typography/Title';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import React from 'react';
import useFetchProperties from './hooks/useFetchProperties';
import ApiFilterTable from 'lib/src/components/table/ApiFilterTable';
import { TableColumns } from 'src/types/table';
import { Property } from 'src/types/shared/Property';
import MultiSelect from 'lib/src/components/form/MultiSelect';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import dayjs from 'dayjs';
import MEESRating from 'lib/src/components/mees/MEESRating';
import { PropertyStatus } from '@actions/properties';

const Properties: React.FC = () => {
    const {
        isFetching,
        fetchError,
        properties,
        handleFetch,
        formState,
        handleChange,
        tableRef,
        epcFilterOptions,
        meesComplianceOptions,
        propertyStatusOptions,
        itemCount,
    } = useFetchProperties();

    return (
        <>
            <CreateHeader>
                <Title>Properties</Title>
            </CreateHeader>

            <div className="table-filters">
                <MultiSelect
                    name="currentEPCFilters"
                    value={formState.currentEPCFilters}
                    options={epcFilterOptions}
                    onChange={handleChange}
                    label="Current EPC"
                    placeholder="All"
                />
                <MultiSelect
                    name="potentialEPCFilters"
                    value={formState.potentialEPCFilters}
                    options={epcFilterOptions}
                    onChange={handleChange}
                    label="Potential EPC"
                    placeholder="All"
                />
                <MultiSelect
                    name="meesComplianceFilters"
                    value={formState.meesComplianceFilters}
                    options={meesComplianceOptions}
                    onChange={handleChange}
                    label="MEES Complience"
                    placeholder="All"
                />
                <MultiSelect
                    name="propertyStatusFilters"
                    value={formState.propertyStatusFilters}
                    options={propertyStatusOptions}
                    onChange={handleChange}
                    label="Property Status"
                    placeholder="All"
                />
            </div>

            <ApiFilterTable
                ref={tableRef}
                isLoading={isFetching}
                error={fetchError}
                rows={properties}
                columns={columns}
                totalItems={itemCount}
                fetchData={handleFetch}
            />
        </>
    );
};

const columns: TableColumns<Property> = [
    {
        key: 0,
        heading: 'Owner',
        getValue: row => row.userFullName,
    },
    {
        key: 1,
        heading: 'Address line 1',
        getValue: row => row.addressLine1,
    },
    {
        key: 2,
        heading: 'Address line 2',
        getValue: row => row.addressLine2,
    },
    {
        key: 3,
        heading: 'Postcode',
        getValue: row => row.postcode,
    },
    {
        key: 4,
        heading: 'Current EPC',
        getValue: row => row.currentEPCRating,
    },
    {
        key: 5,
        heading: 'Potential EPC',
        getValue: row => row.potentialEPCRating,
    },
    {
        key: 6,
        heading: 'MEES compliance',
        getValue: row => (
            <div style={{ height: '20%', width: '20%' }}>
                <MEESRating mees={row.status === PropertyStatus.Compliant} />
            </div>
        ),
    },
    {
        key: 7,
        heading: 'Last updated',
        getValue: row => dayjs(row.statusUpdatedOn).format('DD/MM/YYYY'),
    },
    {
        key: 8,
        heading: '',
        getValue: row => (
            <ButtonRow alignment="right">
                <LinkButton href={`/properties/${row.id}`}>View</LinkButton>
            </ButtonRow>
        ),
    },
];

export default Properties;
