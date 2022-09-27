import React from 'react';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';
import ContentItem from '@components/layout/contentBlock/ContentItem';
import ContentRow from '@components/layout/contentBlock/ContentRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import { Property as PropertyResponse } from 'src/types/shared/Property';
import CreateHeader from '@components/layout/createHeader/CreateHeader';

interface Props {
    property: PropertyResponse;
}

const PropertyAccessDetails: React.FC<Props> = ({ property }) => {
    const { firstName, lastName, email, phone } = property.accessDetails;

    return (
        <>
            <ContentBlock>
                <CreateHeader>Access Details</CreateHeader>
                <ContentRow>
                    <ContentItem label="First Name">
                        <p>{firstName}</p>
                    </ContentItem>
                    <ContentItem label="Last Name">
                        <p>{lastName}</p>
                    </ContentItem>
                </ContentRow>
                <ContentRow>
                    <ContentItem label="Email">
                        <p>{email}</p>
                    </ContentItem>
                    <ContentItem label="Phone">
                        <p>{phone}</p>
                    </ContentItem>
                </ContentRow>
                <ContentRow>
                    <ContentItem label="Preferred Contact Time">
                        <p>{property.accessDetails.preferredContactTime || ' - '}</p>
                    </ContentItem>
                </ContentRow>
                <LinkButton
                    source="secondary"
                    href={`/properties/${property.id}/edit-access-details`}
                >
                    Edit
                </LinkButton>
            </ContentBlock>
        </>
    );
};

export default PropertyAccessDetails;
