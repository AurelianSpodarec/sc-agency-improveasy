import { Column } from '../../types/table';
import TablePagination from './TablePagination';
import TableSearch from './TableSearch';
import useTable from './useTable';

const Table = <TColumn, TRow extends { key?: number; id: number }>({
    columns = [],
    rows = [],
    isLoading = false,
    pageSizes = [10, 25, 100],
    noDataMessage = 'There is no data to display',
}: TableProps<TRow>): JSX.Element => {
    const {
        paginatedRows,
        handleSortClick,
        sortColumn,
        sortAsc,
        page,
        setPage,
        maxPage,
        pageSizeOpts,
        pageSize,
        setPageSize,
        paginationDescription,
        searchTerm,
        setSearchTerm,
        canSearch,
    } = useTable<TRow>({
        columns,
        rows,
        pageSizes,
    });

    const isEmpty = !rows.length;

    return (
        <>
            {canSearch && !isEmpty && <TableSearch value={searchTerm} onChange={setSearchTerm} />}
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
                    {isEmpty && !isLoading && (
                        <tr className="no-data-row">
                            <td colSpan={columns.length}>{noDataMessage}</td>
                        </tr>
                    )}
                    {paginatedRows.map(row => (
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
        const { key, heading, getSort } = col;
        const canSort = getSort !== undefined;
        const isSorting = sortColumn?.key === key;

        return (
            <th
                key={key}
                className={canSort ? 'sortable' : ''}
                onClick={e => handleSortClick(e, col)}
            >
                {isSorting && sortAsc && <i className="fad fa-sort-up" />}
                {isSorting && !sortAsc && <i className="fad fa-sort-down" />}
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
}

export default Table;
