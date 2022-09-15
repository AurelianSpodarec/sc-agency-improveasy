import React, { ReactNode } from 'react';

import { Loading } from '@components/ui';

const DataCheck: React.FC<DataCheckProps> = ({
    children,
    dataExists,
    isFetching,
    error,
    errorMessage = 'There was an error retrieving the data.',
    noDataMessage = 'There is no data to display.',
}) => {
    if (error)
        return (
            <div className="flex flex-row align-center justify-center">
                <p>{errorMessage}</p>
            </div>
        );
    if (isFetching && !dataExists)
        return (
            <div className="flex flex-row align-center justify-center">
                <Loading />
            </div>
        );
    if (!dataExists) return <p>{noDataMessage}</p>;
    return <>{children}</>;
};

interface DataCheckProps {
    children: ReactNode;
    dataExists: boolean;
    isFetching: boolean;
    error: string | null;
    errorMessage?: string;
    noDataMessage?: string;
}

export default DataCheck;
