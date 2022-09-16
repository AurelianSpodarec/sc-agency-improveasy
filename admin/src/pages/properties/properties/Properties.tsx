import Title from 'lib/src/components/typography/Title';
import CreateHeader from '@components/layout/createHeader/CreateHeader';
import React from 'react';
import useFetchProperties from './hooks/useFetchProperties';

const Properties: React.FC = () => {
    const { isFetching, fetchError, properties } = useFetchProperties();

    return (
        <>
            <CreateHeader>
                <Title>Properties</Title>
            </CreateHeader>
        </>
    );
};

export default Properties;
