import React from 'react';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';

import CreateHeader from '@components/layout/createHeader/CreateHeader';
import useFetchPropertyRecommendations from './hooks/usePropertyRatingRecommendations';
import Table from 'lib/src/components/table/Table';
import { TableColumns } from 'src/types/table';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import { PropertyRatingRecomendation } from 'src/types/shared/PropertyRatingRecomendation';

const PropertyRecommendations: React.FC = () => {
    const { isFetching, error, recommendations, propertyID } = useFetchPropertyRecommendations();

    const columns: TableColumns<PropertyRatingRecomendation> = [
        {
            key: 1,
            heading: 'Description',
            getValue: row => row.improvementDescription,
        },
        {
            key: 2,
            heading: 'Step',
            getValue: row => `${row.step}`,
        },
        {
            key: 3,
            heading: 'Is Completed?',
            getValue: row => (row.completed ? 'Yes' : 'No'),
        },
        {
            key: 4,
            heading: '',
            getValue: row => (
                <ButtonRow alignment="right">
                    <LinkButton
                        source="negative"
                        href={`/properties/${propertyID}/delete-recommendation/${row.id}`}
                    >
                        Delete
                    </LinkButton>
                </ButtonRow>
            ),
        },
    ];

    return (
        <ContentBlock>
            <CreateHeader>Recommendations</CreateHeader>

            <Table
                columns={columns}
                rows={recommendations}
                isLoading={isFetching}
                error={error}
                pageSizes={[10, 25, 50]}
            />
        </ContentBlock>
    );
};

export default PropertyRecommendations;
