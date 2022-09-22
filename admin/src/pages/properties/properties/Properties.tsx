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
        potentialEpcOptions,
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
                    options={potentialEpcOptions}
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
        heading: '',
        getValue: row => (
            <ButtonRow alignment="right">
                <LinkButton href={`/properties/${row.id}`}>View</LinkButton>
            </ButtonRow>
        ),
    },
];

export default Properties;
