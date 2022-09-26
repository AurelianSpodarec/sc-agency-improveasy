import React from 'react';

import Title from 'lib/src/components/typography/Title';

import ButtonRow from 'lib/src/components/button/ButtonRow';
import ContentBlock from '@components/layout/contentBlock/ContentBlock';
import ContentItem from '@components/layout/contentBlock/ContentItem';
import ContentRow from '@components/layout/contentBlock/ContentRow';
import LinkButton from 'lib/src/components/button/LinkButton';
import { User as UserTypes } from 'src/types/shared/User';
import dayjs from 'dayjs';

const User: React.FC<UserProps> = ({ user }) => {
    if (!user) return null;

    const { id, firstName, lastName, phone, email, isConfirmed, createdOn } = user;
    return (
        <>
            <Title>
                Property Owner - {firstName} {lastName}
            </Title>

            <ContentBlock>
                <ContentRow>
                    <ContentItem label="Name">
                        <p>{`${firstName} ${lastName}`}</p>
                    </ContentItem>
                </ContentRow>
                <ContentRow>
                    <ContentItem label="Email">
                        <p>
                            <a href={`mailto:${email}`}>{email}</a>
                        </p>
                    </ContentItem>
                    <ContentItem label="Phone">
                        <p>{phone ? phone : '-'}</p>
                    </ContentItem>
                </ContentRow>
                <ContentRow>
                    <ContentItem label="Registered on">
                        <p>{dayjs(createdOn).format('DD/MM/YYYY')}</p>
                    </ContentItem>
                    <ContentItem label="Is Confirmed">
                        <p>{isConfirmed ? 'Yes' : 'No'}</p>
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
