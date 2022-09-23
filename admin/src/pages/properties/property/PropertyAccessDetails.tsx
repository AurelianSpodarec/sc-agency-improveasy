import React from 'react';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';
import ContentItem from '@components/layout/contentBlock/ContentItem';
import ContentRow from '@components/layout/contentBlock/ContentRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import Title from 'lib/src/components/typography/Title';
import { Property as PropertyResponse } from 'src/types/shared/Property';
import { User } from 'src/types/shared/User';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import dayjs from 'dayjs';

interface Props {
    property: PropertyResponse;
    user: User;
}

const PropertyAccessDetails: React.FC<Props> = ({ property, user }) => {
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
                        <p>
                            {property.accessDetails.preferredContactTime
                                ? dayjs(property.accessDetails.preferredContactTime).toString()
                                : ''}
                        </p>
                    </ContentItem>
                </ContentRow>
            </ContentBlock>

            <ButtonRow alignment="left">
                <LinkButton source="secondary" href={`/properties/${property.id}/edit`}>
                    Edit Access Details
                </LinkButton>
            </ButtonRow>
        </>
    );
};

export default PropertyAccessDetails;
