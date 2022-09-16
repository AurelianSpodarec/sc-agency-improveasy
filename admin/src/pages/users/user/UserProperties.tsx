import React from 'react';

import ContentBlock from '@components/layout/contentBlock/ContentBlock';

import CreateHeader from '@components/layout/createHeader/CreateHeader';
import DataCheck from '@components/common/DataCheck';

const UserProperties: React.FC = () => {
    return (
        <ContentBlock>
            <CreateHeader>Promo Code Usages</CreateHeader>

            <DataCheck error={null} isFetching={false} dataExists>
                <p>Hello</p>
            </DataCheck>
        </ContentBlock>
    );
};

export default UserProperties;
