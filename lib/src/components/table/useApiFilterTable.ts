import usePrevious from '../../hooks/usePrevious';
import { useCallback, useEffect, useMemo, useState, useRef } from 'react';
import { DropdownOption } from '../../types/shared/DropdownOption';

export default function useApiFilterTable<T>({ 
    rows = [], 
    pageSizes = [],
    fetchData ,
    totalItems
}: useApiFilterTableProps<T>) {
    const [pageSize, setPageSize] = useState(pageSizes[0] || 10);
    const [page, setPage] = useState(1);
    const [searchTerm, setSearchTerm] = useState('');

    useEffect(() => {
        setPageSize(pageSizes[0]);
        setPage(1);
    }, [...pageSizes, setPageSize, setPage]);

    const prevSearchTerm = usePrevious(searchTerm);
    const searchTimeout = useRef<number | null>(null);
    useEffect(() => {
        if (searchTerm !== prevSearchTerm){
            window.clearTimeout(searchTimeout.current || 0);
            searchTimeout.current = window.setTimeout(() => {
                setPage(1);
                fetchData(1, pageSize, searchTerm);
            }, 1000);
        }
        else {
            fetchData(page, pageSize, searchTerm);
        }
    }, [prevSearchTerm, searchTerm, page, pageSize]);

    const pageSizeOpts: DropdownOption<number>[] = useMemo(
        () => pageSizes.map<DropdownOption<number>>(ps => ({ label: ps.toString(), value: ps })),
        [...pageSizes],
    );

    const maxPage = useMemo(() => Math.ceil(totalItems / pageSize), [
        totalItems,
        pageSize,
    ]);

    const paginationDescription = useMemo(() => {
        const startRow = totalItems ? (page - 1) * pageSize + 1 : 0;
        const endRow = startRow + pageSize > totalItems ? totalItems : startRow + pageSize - 1;

        return `${startRow}-${endRow} of ${totalItems}`;
    }, [rows, page, pageSize]);

    const handleSetPageSize = useCallback(
        (size: number) => {
            setPageSize(size);
            setPage(1);
        },
        [pageSize],
    );

    return {
        setPage,
        page,
        pageSizeOpts,
        pageSize,
        setPageSize: handleSetPageSize,
        paginationDescription,
        searchTerm,
        setSearchTerm,
        maxPage,
        
    };
}

interface useApiFilterTableProps<T> {
    rows: T[];
    pageSizes: number[];
    fetchData: (page: number, pageSize: number, searchTerm: string) => void;
    totalItems: number;
}
