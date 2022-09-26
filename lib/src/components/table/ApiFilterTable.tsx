import { forwardRef, useImperativeHandle } from 'react';
import { Column } from '../../types/table';
import TablePagination from './TablePagination';
import TableSearch from './TableSearch';
import useApiFilterTable from './useApiFilterTable';

export interface ApiFilterTableHandle {
    setPageNumber:  (pageNum: number) => void;
    refreshData: () => void;
}

const ApiFilterTable = <TRow extends { key?: number; id: number }>({
    columns = [],
    rows = [],
    isLoading = false,
    pageSizes = [10, 25, 100],
    noDataMessage = 'There is no data to display',
    error,
    totalItems,
    fetchData
}: TableProps<TRow>, ref: React.Ref<ApiFilterTableHandle>): JSX.Element => {
    const {
        setPage,
        page,
        pageSizeOpts,
        pageSize,
        setPageSize,
        paginationDescription,
        searchTerm,
        setSearchTerm,
        maxPage
    } = useApiFilterTable<TRow>({
        rows,
        pageSizes,
        totalItems,
        fetchData
    });

    useImperativeHandle(ref, () : ApiFilterTableHandle => ({
        setPageNumber: (pageNum: number) => {
            setPage(pageNum);
        },
        refreshData: () => {
            if (page !== 1){
                setPage(1);
            }
            else {
                fetchData(page, pageSize, searchTerm);
            }
        }
      }));

    const isEmpty = !rows.length;

    return (
        <>
            {<TableSearch value={searchTerm} onChange={setSearchTerm} />}
            <table>
                <thead>
                    <tr>{columns.map(renderHeading)}</tr>
                </thead>
                <tbody>
                    {isLoading && (
                        <tr>
                            <td className="loading-row" colSpan={columns.length}>
                                <i className="fal fa-spinner fa-spin"></i>
                            </td>
                        </tr>
                    )}
                    {error && !isLoading  && (
                        <tr className="no-data-row">
                            <td colSpan={columns.length}>{error}</td>
                        </tr>
                    )}
                    {isEmpty && !isLoading && !error && (
                        <tr className="no-data-row">
                            <td colSpan={columns.length}>{noDataMessage}</td>
                        </tr>
                    )}
                    {rows.map(row => (
                        <tr key={row.key || row.id}>
                            {columns.map(col => (
                                <td key={col.key}>{col.getValue(row)}</td>
                            ))}
                        </tr>
                    ))}
                </tbody>
            </table>
            {!isEmpty && (
                <TablePagination
                    page={page}
                    setPage={setPage}
                    maxPage={maxPage}
                    pageSizeOpts={pageSizeOpts}
                    pageSize={pageSize}
                    setPageSize={setPageSize}
                    description={paginationDescription}
                />
            )}
        </>
    );

    function renderHeading(col: Column<TRow>) {
        const { key, heading } = col;
        return (
            <th key={key} >
                {heading}
            </th>
        );
    }
};

interface TableProps<T> {
    columns: Column<T>[];
    rows: T[];
    isLoading?: boolean;
    pageSizes?: number[];
    noDataMessage?: string;
    error?: string | null;
    totalItems: number;
    fetchData: (page: number, pageSize: number, searchTerm: string) => void;
}

export default forwardRef(ApiFilterTable) as <T>(
    props: TableProps<T> & { ref?: React.ForwardedRef<unknown> }
  ) => ReturnType<typeof ApiFilterTable>;
