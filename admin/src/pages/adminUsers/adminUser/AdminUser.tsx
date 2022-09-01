import React from 'react';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';
import ContentItem from '@components/layout/contentBlock/ContentItem';
import ContentRow from '@components/layout/contentBlock/ContentRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import ButtonRow from 'lib/src/components/button/ButtonRow';
import Title from 'lib/src/components/typography/Title';
import { AdminUser } from 'src/types/shared/AdminUser';

const AdminUserComponent: React.FC<AdminUserProps> = ({ user }) => {
    if (!user) return null;

    const { id, firstName, lastName, email } = user;
    return (
        <>
            <Title>
                Admin - {firstName} {lastName}
            </Title>

            <ContentBlock>
                <ContentRow>
                    <ContentItem label="Name">
                        <p>{`${firstName} ${lastName}`}</p>
                    </ContentItem>
                    <ContentItem label="Email">
                        <p>
                            <a href={`mailto:${email}`}>{email}</a>
                        </p>
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

export default AdminUserComponent;
