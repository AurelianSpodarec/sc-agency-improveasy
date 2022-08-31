import MiniSelect from '../form/MiniSelect';
import { DropdownOption } from '../../types/shared/DropdownOption';

const TablePagination: React.FC<TablePaginationProps> = ({
    page,
    setPage,
    maxPage,
    pageSizeOpts,
    pageSize,
    setPageSize,
    description,
}) => {
    return (
        <div className="table-pagination">
            <div className="page-selection">
                <label className="title">Rows per page</label>
                <MiniSelect
                    name="pageSize"
                    options={pageSizeOpts}
                    value={pageSize}
                    onChange={(_: string, val: number) => setPageSize(val)}
                />
                <label className="count">{description}</label>
            </div>
            <ul className="page-links">
                <li>
                    <button type="button" disabled={page === 1} onClick={() => setPage(1)}>
                        <i className="fal fa-chevron-double-left"></i>
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        disabled={page === 1}
                        onClick={() => setPage(prev => prev - 1)}
                    >
                        <i className="fal fa-chevron-left"></i>
                    </button>
                </li>

                <li>
                    <button
                        type="button"
                        disabled={page === maxPage}
                        onClick={() => setPage(prev => prev + 1)}
                    >
                        <i className="fal fa-chevron-right"></i>
                    </button>
                </li>
                <li>
                    <button
                        type="button"
                        disabled={page === maxPage}
                        onClick={() => setPage(maxPage)}
                    >
                        <i className="fal fa-chevron-double-right"></i>
                    </button>
                </li>
            </ul>
        </div>
    );
};

interface TablePaginationProps {
    page: number;
    // either a page, or a func to adjust the page based on previous page
    setPage: (getPage: number | ((prev: number) => number)) => void;
    maxPage: number;
    pageSizeOpts: DropdownOption<number>[];
    pageSize: number;
    setPageSize: (size: number) => void;
    description?: string;
}

export default TablePagination;
