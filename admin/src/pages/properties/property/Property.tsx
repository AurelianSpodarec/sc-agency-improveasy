import React from 'react';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';
import ContentItem from '@components/layout/contentBlock/ContentItem';
import ContentRow from '@components/layout/contentBlock/ContentRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import Title from 'lib/src/components/typography/Title';
import { Property as PropertyResponse } from 'src/types/shared/Property';
import { User } from 'src/types/shared/User';

interface Props {
    property: PropertyResponse;
    user: User;
}

const Property: React.FC<Props> = ({ property, user }) => {
    return (
        <>
            <Title>Property</Title>

            <ContentBlock>
                <ContentRow>
                    <ContentItem label="Owner">
                        <p>
                            {user.firstName} {user.lastName}
                        </p>
                    </ContentItem>
                </ContentRow>
                <ContentRow>
                    <ContentItem label="Address Line 1">
                        <p>{property.addressLine1}</p>
                    </ContentItem>
                    <ContentItem label="Address Line 2">
                        <p>{property.addressLine2}</p>
                    </ContentItem>
                </ContentRow>
                <ContentRow>
                    <ContentItem label="City">
                        <p>{property.city}</p>
                    </ContentItem>
                    <ContentItem label="Postcode">
                        <p>{property.postcode}</p>
                    </ContentItem>
                </ContentRow>
            </ContentBlock>

            <ButtonRow alignment="left">
                <LinkButton source="secondary" href={`/properties/${property.id}/edit`}>
                    Edit
                </LinkButton>
                <LinkButton source="secondary" href={`/properties/${property.id}/edit-password`}>
                    Edit password
                </LinkButton>
                <LinkButton source="negative" href={`/properties/${property.id}/delete`}>
                    Delete
                </LinkButton>
            </ButtonRow>
        </>
    );
};

export default Property;
