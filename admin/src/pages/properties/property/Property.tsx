import React from 'react';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';
import ContentItem from '@components/layout/contentBlock/ContentItem';
import ContentRow from '@components/layout/contentBlock/ContentRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import Title from 'lib/src/components/typography/Title';
import { Property as PropertyResponse } from 'src/types/shared/Property';
import { User } from 'src/types/shared/User';
import PropertyStatusSelect from './PropertyStatusSelect';
import CreateHeader from '@components/layout/createHeader/CreateHeader';

interface Props {
    property: PropertyResponse;
    user: User;
}

const Property: React.FC<Props> = ({ property, user }) => {
    return (
        <>
            <CreateHeader>
                <Title>Property</Title>
            </CreateHeader>

            <PropertyStatusSelect property={property} />
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

                <LinkButton source="secondary" href={`/properties/${property.id}/edit-address`}>
                    Edit Address
                </LinkButton>
            </ContentBlock>
        </>
    );
};

export default Property;
