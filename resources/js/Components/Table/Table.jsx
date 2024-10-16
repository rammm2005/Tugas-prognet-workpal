import React, { useState, useEffect } from 'react';
import { FiEdit, FiTrash, FiEye, FiPlusCircle } from 'react-icons/fi';

const Table = ({ columns, data, onEdit, onDelete, onShow, onCreate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [filteredData, setFilteredData] = useState(data);
    const [sortConfig, setSortConfig] = useState({ key: '', direction: 'asc' });
    const [currentPage, setCurrentPage] = useState(0);
    const rowsPerPage = 5;
    const [visibleColumns, setVisibleColumns] = useState(columns.map(() => true));
    const [showColumnSettings, setShowColumnSettings] = useState(false);
    const [, set] = useState(
        columns.reduce((widths, column) => {
            widths[column.accessor] = column.defaultWidth || 150;
            return widths;
        }, {})
    );

    useEffect(() => {
        const results = data.filter((row) =>
            row.name?.toLowerCase().includes(searchTerm.toLowerCase())
        );

        if (sortConfig.key) {
            results.sort((a, b) => {
                if (a[sortConfig.key] < b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? -1 : 1;
                }
                if (a[sortConfig.key] > b[sortConfig.key]) {
                    return sortConfig.direction === 'asc' ? 1 : -1;
                }
                return 0;
            });
        }

        setFilteredData(results);
    }, [searchTerm, data, sortConfig]);

    const requestSort = (key) => {
        let direction = 'asc';
        if (sortConfig.key === key && sortConfig.direction === 'asc') {
            direction = 'desc';
        }
        setSortConfig({ key, direction });
    };

    const handlePageChange = (newPage) => {
        setCurrentPage(newPage);
    };

    const firstRowIndex = currentPage * rowsPerPage;
    const lastRowIndex = firstRowIndex + rowsPerPage;
    const currentRows = filteredData.slice(firstRowIndex, lastRowIndex);

    const toggleColumnVisibility = (index) => {
        setVisibleColumns((prev) => {
            const newVisible = [...prev];
            newVisible[index] = !newVisible[index];
            return newVisible;
        });
    };

    const handleResize = (columnAccessor, newWidth) => {
        set((prevWidths) => ({
            ...prevWidths,
            [columnAccessor]: Math.max(newWidth, 50),
        }));
    };

    const handleMouseDown = (e, columnAccessor) => {
        e.preventDefault();
        const startX = e.clientX;
        const startWidth = [columnAccessor];

        const handleMouseMove = (moveEvent) => {
            const newWidth = startWidth + (moveEvent.clientX - startX);
            handleResize(columnAccessor, newWidth);
        };

        const handleMouseUp = () => {
            document.removeEventListener('mousemove', handleMouseMove);
            document.removeEventListener('mouseup', handleMouseUp);
        };

        document.addEventListener('mousemove', handleMouseMove);
        document.addEventListener('mouseup', handleMouseUp);
    };

    return (
        <div className="w-full">
            <input
                type="text"
                className="border border-slate-300 px-3 py-2 mb-4 w-full rounded"
                placeholder="Search..."
                value={searchTerm}
                onChange={(e) => setSearchTerm(e.target.value)}
            />

            <div className="flex justify-end mb-2">
                <button
                    className="text-blue-500 hover:text-blue-600"
                    onClick={() => setShowColumnSettings(!showColumnSettings)}
                >
                    Toggle Columns
                </button>
            </div>

            {showColumnSettings && (
                <div className="bg-white shadow-lg rounded-lg p-6 mb-4">
                    <h3 className="text-lg font-semibold mb-4">Select Visible Columns</h3>
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
                        {columns.map((column, index) => (
                            <div key={index} className="flex items-center">
                                <input
                                    type="checkbox"
                                    id={column.label}
                                    checked={visibleColumns[index]}
                                    onChange={() => toggleColumnVisibility(index)}
                                    className="form-checkbox h-5 w-5 text-blue-600"
                                />
                                <label className="ml-3 text-gray-700" htmlFor={column.label}>{column.label}</label>
                            </div>
                        ))}
                    </div>
                    <div className="flex justify-end mt-6">
                        <button
                            className="bg-blue-500 text-white px-4 py-2 rounded hover:bg-blue-600 focus:outline-none"
                            onClick={() => setShowColumnSettings(false)}
                        >
                            Done
                        </button>
                    </div>
                </div>
            )}


            <table className="w-full text-left table-auto">
                <thead>
                    <tr>
                        {columns.map((column, index) => (
                            visibleColumns[index] && (
                                <th
                                    key={index}
                                    className="border border-slate-300 px-4 py-2 cursor-pointer"
                                    style={{ width: `${[column.accessor]}px`, position: 'relative', minWidth: '30px' }}
                                    onClick={() => requestSort(column.accessor)}
                                >
                                    {column.label} {sortConfig.key === column.accessor ? (sortConfig.direction === 'asc' ? '↑' : '↓') : ''}
                                    <div
                                        onMouseDown={(e) => handleMouseDown(e, column.accessor)}
                                        style={{
                                            display: 'inline-block',
                                            width: '5px',
                                            cursor: 'col-resize',
                                            position: 'absolute',
                                            right: 0,
                                            top: 0,
                                            bottom: 0,
                                        }}
                                    ></div>
                                </th>
                            )
                        ))}
                        <th className="border border-slate-300 px-4 py-2">Actions</th>
                    </tr>
                </thead>
                <tbody>
                    {currentRows.length > 0 ? (
                        currentRows.map((row, rowIndex) => (
                            <tr key={rowIndex}>
                                {columns.map((column, colIndex) => (
                                    visibleColumns[colIndex] && (
                                        <td key={colIndex} className="border border-slate-300 px-4 py-2">
                                            {column.render ? column.render(row) : row[column.accessor]}
                                        </td>
                                    )
                                ))}
                                <td className="border border-slate-300 px-4 py-2 flex space-x-2">
                                    <button
                                        className="text-blue-500 hover:text-blue-600"
                                        onClick={() => onShow(row)}
                                    >
                                        <FiEye size={20} />
                                    </button>
                                    <button
                                        className="text-yellow-500 hover:text-yellow-600"
                                        onClick={() => onEdit(row)}
                                    >
                                        <FiEdit size={20} />
                                    </button>
                                    <button
                                        className="text-red-500 hover:text-red-600"
                                        onClick={() => onDelete(row.id)}
                                    >
                                        <FiTrash size={20} />
                                    </button>
                                </td>
                            </tr>
                        ))
                    ) : (
                        <tr>
                            <td colSpan={columns.length + 1} className="text-center py-4">
                                No data found.
                            </td>
                        </tr>
                    )}
                </tbody>
            </table>

            <div className="flex justify-between mt-4">
                <button
                    className="bg-gray-300 px-4 py-2 rounded"
                    onClick={() => handlePageChange(Math.max(0, currentPage - 1))}
                    disabled={currentPage === 0}
                >
                    Previous
                </button>
                <button
                    className="bg-gray-300 px-4 py-2 rounded"
                    onClick={() => handlePageChange(Math.min(Math.ceil(filteredData.length / rowsPerPage) - 1, currentPage + 1))}
                    disabled={currentPage >= Math.ceil(filteredData.length / rowsPerPage) - 1}
                >
                    Next
                </button>
            </div>

            {onCreate && (
                <div className="flex justify-end mt-4">
                    <button
                        className="bg-green-500 text-white px-4 py-2 rounded hover:bg-green-600 flex items-center"
                        onClick={onCreate}
                    >
                        <FiPlusCircle size={20} className="mr-2" />
                        Create New
                    </button>
                </div>
            )}
        </div>
    );
};

export default Table;
