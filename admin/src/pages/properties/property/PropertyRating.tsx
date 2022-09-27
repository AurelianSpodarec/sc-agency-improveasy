import React from 'react';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';
import ContentItem from '@components/layout/contentBlock/ContentItem';
import ContentRow from '@components/layout/contentBlock/ContentRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import { Property as PropertyResponse } from 'src/types/shared/Property';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import usePropertyRating from './hooks/usePropertyRating';
import DataCheck from '@components/common/DataCheck';
import dayjs from 'dayjs';

interface Props {
    property: PropertyResponse;
}

const PropertyRating: React.FC<Props> = ({ property }) => {
    const { isFetching, error, propertyRating } = usePropertyRating();

    return (
        <ContentBlock>
            <CreateHeader>Rating</CreateHeader>
            <DataCheck isFetching={isFetching} error={error} dataExists={!!propertyRating}>
                <ContentRow>
                    <ContentItem label="Certificate Number">
                        <p>{propertyRating?.certificateNumber}</p>
                    </ContentItem>
                    <ContentItem label="Certificate Valid Until">
                        <p>
                            {propertyRating?.certificateValidUntil
                                ? dayjs(propertyRating?.certificateValidUntil).format('DD/MM/YYYY')
                                : '-'}
                        </p>
                    </ContentItem>
                </ContentRow>
                <ContentRow>
                    <ContentItem label="Current Rating">
                        <p>{propertyRating?.currentRating}</p>
                    </ContentItem>
                    <ContentItem label="Potential Rating">
                        <p>{propertyRating?.potentialRating}</p>
                    </ContentItem>
                </ContentRow>
                <ContentRow>
                    <ContentItem label="Current Energy Rating">
                        <p>{propertyRating?.currentEnergyEfficiency}</p>
                    </ContentItem>
                    <ContentItem label="Potential Energy Rating">
                        <p>{propertyRating?.potentialEnergyEfficiency}</p>
                    </ContentItem>
                </ContentRow>

                <LinkButton source="secondary" href={`/properties/${property.id}/edit-rating`}>
                    Edit
                </LinkButton>
            </DataCheck>
        </ContentBlock>
    );
};

export default PropertyRating;
