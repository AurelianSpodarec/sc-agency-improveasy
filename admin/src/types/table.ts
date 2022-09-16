export interface Column<T> {
    heading: string;
    key: number;
    getSort?: (a: T, b: T) => number;
    getValue: (row: T) => string | React.ReactElement;
    searchable?: boolean;
}

export type TableColumns<T> = Column<T>[];
