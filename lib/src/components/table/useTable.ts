import React, { useCallback, useEffect, useMemo, useState } from 'react';
import { DropdownOption } from '../../types/shared/DropdownOption';
import { Column } from '../../types/table';

export default function useTable<T>({ columns = [], rows = [], pageSizes = [] }: useTableProps<T>) {
    const [sortColumn, setSortColumn] = useState(columns.find(col => col.getSort));
    const [sortAsc, setSortAsc] = useState(true);
    const [searchTerm, setSearchTerm] = useState('');

    const filteredRows = useMemo(() => {
        const formatedTerm = searchTerm.replace(/\s/g, '').toLowerCase();
        if (!formatedTerm) return rows;

        return rows.filter(row =>
            columns
                .filter(col => col.searchable)
                .map(col => col.getValue(row))
                .join('')
                .replace(/\s/g, '')
                .toLowerCase()
                .includes(formatedTerm),
        );
    }, [searchTerm, rows]);

    const sortedRows = useMemo(() => {
        if (!sortColumn) return rows;
        if (sortAsc) return [...filteredRows].sort(sortColumn.getSort);
        return [...filteredRows].sort((a, b) => {
            if (!sortColumn.getSort) {
                return 0;
            }
            return sortColumn.getSort(a, b) * -1;
        });
    }, [sortColumn, filteredRows, sortAsc]);

    const [pageSize, setPageSize] = useState(pageSizes[0]);
    const [page, setPage] = useState(1);

    const maxPage = useMemo(() => Math.ceil(filteredRows.length / pageSize), [
        filteredRows,
        pageSize,
    ]);

    useEffect(() => {
        setPageSize(pageSizes[0]);
        setPage(1);
    }, [...pageSizes, setPageSize, setPage]);

    const paginatedRows = useMemo(() => {
        const startIndex = (page - 1) * pageSize;
        return sortedRows.slice(startIndex, startIndex + pageSize);
    }, [sortedRows, page, pageSize]);

    const handleSortClick = useCallback(
        (e: React.MouseEvent<HTMLTableCellElement>, col: Column<T>) => {
            e.preventDefault();

            const isSortable = col.getSort !== undefined;
            if (!isSortable) return;

            setPage(1);

            if (sortColumn?.key === col.key) {
                setSortAsc(prev => !prev);
            } else {
                setSortColumn(col);
                setSortAsc(true);
            }
        },
        [sortColumn],
    );

    const pageSizeOpts: DropdownOption<number>[] = useMemo(
        () => pageSizes.map<DropdownOption<number>>(ps => ({ label: ps.toString(), value: ps })),
        [...pageSizes],
    );

    const canSearch = useMemo(() => columns.some(col => col.searchable), [columns]);

    const paginationDescription = useMemo(() => {
        const rowCount = filteredRows.length;
        const startRow = rowCount ? (page - 1) * pageSize + 1 : 0;
        const endRow = startRow + pageSize > rowCount ? rowCount : startRow + pageSize - 1;

        return `${startRow}-${endRow} of ${rowCount}`;
    }, [filteredRows, page, pageSize]);

    const handleSetPage = useCallback(
        (size: number) => {
            setPageSize(size);
            setPage(1);
        },
        [pageSize],
    );
    return {
        paginatedRows,
        handleSortClick,
        sortColumn,
        sortAsc,
        setPage,
        page,
        pageSizeOpts,
        pageSize,
        setPageSize: handleSetPage,
        paginationDescription,
        maxPage,
        canSearch,
        searchTerm,
        setSearchTerm,
    };
}

interface useTableProps<T> {
    pageSizes: number[];
    rows: T[];
    columns: Column<T>[];
}
