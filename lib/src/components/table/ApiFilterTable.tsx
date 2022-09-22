import { forwardRef, useImperativeHandle } from 'react';
import { Column } from '../../types/table';
import TablePagination from './TablePagination';
import TableSearch from './TableSearch';
import useApiFilterTable from './useApiFilterTable';

const ApiFilterTable = <TRow extends { key?: number; id: number }>({
    columns = [],
    rows = [],
    isLoading = false,
    pageSizes = [10, 25, 100],
    noDataMessage = 'There is no data to display',
    error,
    maxPage,
    fetchData
}: TableProps<TRow>, ref: any): JSX.Element => {
    const {
        setPage,
        page,
        pageSizeOpts,
        pageSize,
        setPageSize,
        paginationDescription,
        searchTerm,
        setSearchTerm,
    } = useApiFilterTable<TRow>({
        rows,
        pageSizes,
        fetchData
    });

    useImperativeHandle(ref, () => ({
        setPageNumber(pageNum: number){
            setPage(pageNum);
        }
      }));

    const isEmpty = !rows.length;

    return (
        <>
            {!isEmpty && <TableSearch value={searchTerm} onChange={setSearchTerm} />}
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
    maxPage: number;
    fetchData: (page: number, pageSize: number, searchTerm: string) => void;
}

export default forwardRef(ApiFilterTable) as <T>(
    props: TableProps<T> & { ref?: React.ForwardedRef<unknown> }
  ) => ReturnType<typeof ApiFilterTable>;
