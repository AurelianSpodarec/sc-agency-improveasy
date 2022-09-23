import React from 'react';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';
import ContentItem from '@components/layout/contentBlock/ContentItem';
import ContentRow from '@components/layout/contentBlock/ContentRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import Title from 'lib/src/components/typography/Title';
import { AdminUser } from 'src/types/shared/AdminUser';

const Property: React.FC<AdminUserProps> = () => {
    const id = 1;
    return (
        <>
            <Title>Property</Title>

            <ContentBlock>
                <ContentRow>
                    <ContentItem label="Name">
                        <p>Test</p>
                    </ContentItem>
                </ContentRow>
            </ContentBlock>

            <ButtonRow alignment="left">
                <LinkButton source="secondary" href={`/admin-users/${id}/edit`}>
                    Edit
                </LinkButton>
                <LinkButton source="secondary" href={`/admin-users/${id}/edit-password`}>
                    Edit password
                </LinkButton>
                <LinkButton source="negative" href={`/admin-users/${id}/delete`}>
                    Delete
                </LinkButton>
            </ButtonRow>
        </>
    );
};

interface AdminUserProps {
    user: AdminUser | undefined;
}

export default Property;
