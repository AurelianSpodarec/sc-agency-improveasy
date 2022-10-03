import React from 'react';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';
import ContentItem from '@components/layout/contentBlock/ContentItem';
import ContentRow from '@components/layout/contentBlock/ContentRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import { Property as PropertyResponse } from 'src/types/shared/Property';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import usePropertyRating from './hooks/usePropertyRating';
import dayjs from 'dayjs';
import ButtonRow from 'lib/src/components/button/ButtonRow';

interface Props {
    property: PropertyResponse;
}

const PropertyRating: React.FC<Props> = ({ property }) => {
    const { propertyRating } = usePropertyRating();

    return (
        <ContentBlock>
            <CreateHeader>Rating</CreateHeader>

            <ContentRow>
                <ContentItem label="LMK Key">
                    <p>{propertyRating?.lmkKey || 'N/A'}</p>
                </ContentItem>
                <ContentItem label="Certificate Valid Until">
                    <p>
                        {propertyRating?.certificateValidUntil
                            ? dayjs(propertyRating?.certificateValidUntil).format('DD/MM/YYYY')
                            : 'N/A'}
                    </p>
                </ContentItem>
            </ContentRow>
            <ContentRow>
                <ContentItem label="Certificate Number">
                    <p>{propertyRating?.certificateNumber || 'N/A'}</p>
                </ContentItem>
            </ContentRow>
            <ContentRow>
                <ContentItem label="Current Rating">
                    <p>{propertyRating?.currentRating || 'N/A'}</p>
                </ContentItem>
                <ContentItem label="Potential Rating">
                    <p>{propertyRating?.potentialRating || 'N/A'}</p>
                </ContentItem>
            </ContentRow>
            <ContentRow>
                <ContentItem label="Current Energy Rating">
                    <p>{propertyRating?.currentEnergyEfficiency || 'N/A'}</p>
                </ContentItem>
                <ContentItem label="Potential Energy Rating">
                    <p>{propertyRating?.potentialEnergyEfficiency || 'N/A'}</p>
                </ContentItem>
            </ContentRow>

            <ContentRow>
                <ContentItem label="Built Form">
                    <p>{propertyRating?.builtForm || 'N/A'}</p>
                </ContentItem>
                <ContentItem label="Construction Age Band">
                    <p>{propertyRating?.constructionAgeBand || 'N/A'}</p>
                </ContentItem>
            </ContentRow>
            <ContentRow>
                <ContentItem label="Wall Description">
                    <p>{propertyRating?.wallDescription || 'N/A'}</p>
                </ContentItem>
                <ContentItem label="Floor Description">
                    <p>{propertyRating?.floorDescription || 'N/A'}</p>
                </ContentItem>
            </ContentRow>

            <ContentRow>
                <ContentItem label="Property Type">
                    <p>{propertyRating?.propertyType || 'N/A'}</p>
                </ContentItem>
                <ContentItem label="Manual Entry?">
                    <p>{propertyRating?.isManualEntry ? 'Yes' : 'No'}</p>
                </ContentItem>
            </ContentRow>
            <br />
            <ButtonRow alignment="left">
                <LinkButton source="primary" href={`/properties/${property.id}/create-rating`}>
                    Create
                </LinkButton>
                <LinkButton source="secondary" href={`/properties/${property.id}/edit-rating`}>
                    Edit
                </LinkButton>
            </ButtonRow>
        </ContentBlock>
    );
};

export default PropertyRating;
