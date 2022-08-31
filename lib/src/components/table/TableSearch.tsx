const TableSearch: React.FC<TableSearchProps> = ({ onChange, value }) => {
    return (
        <div className="table-search">
            <i className="icon fal fa-search"></i>
            <input type="text" onChange={handleChange} value={value} placeholder="Search..." />
        </div>
    );

    function handleChange(e: React.ChangeEvent<HTMLInputElement>) {
        e.preventDefault();
        onChange(e.target.value);
    }
};

interface TableSearchProps {
    onChange: (value: string) => void;
    value: string;
}

export default TableSearch;
