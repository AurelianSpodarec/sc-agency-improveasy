import React from 'react';

import Title from 'lib/src/components/typography/Title';
import { userRoles, enumKeys } from 'lib/src/shared/enums/dropdownEnums';

import ButtonRow from 'lib/src/components/button/ButtonRow';
import ContentBlock from '@components/layout/contentBlock/ContentBlock';
import ContentItem from '@components/layout/contentBlock/ContentItem';
import ContentRow from '@components/layout/contentBlock/ContentRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import { User as UserTypes } from 'src/types/shared/User';

const userRolesLookup = enumKeys(userRoles);

const User: React.FC<UserProps> = ({ user }) => {
    if (!user) return null;

    const { id, firstName, lastName, email, roles } = user;
    return (
        <>
            <Title>
                Property - {firstName} {lastName}
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
                    <ContentItem label="Roles">
                        <p>{roles.map(role => userRolesLookup[role]).join(', ')}</p>
                    </ContentItem>
                </ContentRow>
            </ContentBlock>

            <ButtonRow alignment="left">
                <LinkButton source="secondary" href={`/users/${id}/edit`}>
                    Edit
                </LinkButton>
                <LinkButton source="secondary" href={`/users/${id}/edit-password`}>
                    Edit password
                </LinkButton>
                <LinkButton source="negative" href={`/users/${id}/delete`}>
                    Delete
                </LinkButton>
            </ButtonRow>
        </>
    );
};

interface UserProps {
    user: UserTypes | undefined;
}
export default User;
