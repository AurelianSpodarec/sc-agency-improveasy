import React from 'react';

export interface Column<T> {
    heading: string;
    key: number;
    getSort?: (a: T, b: T) => number;
    getValue: (row: T) => React.ReactNode;
    searchable?: boolean;
}
