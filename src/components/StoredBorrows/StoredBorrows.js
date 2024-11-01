import React, { useState } from 'react';
import './StoredBorrows.css';
import EditBorrowModal from './EditBorrowModal';
import { Link } from 'react-router-dom';

const StoredBorrows = ({ borrows, setBorrows, onReturn, onNotReturned }) => {
    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 5; 
    const totalPages = Math.ceil(borrows.length / itemsPerPage);
    const [isModalOpen, setIsModalOpen] = useState(false);
    const [selectedBorrow, setSelectedBorrow] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePreviousPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    const indexOfLastBorrow = currentPage * itemsPerPage;
    const indexOfFirstBorrow = indexOfLastBorrow - itemsPerPage;

    const filteredBorrows = borrows.filter(borrow => 
        borrow.borrowerPhone.includes(searchTerm)
    );

    const currentBorrows = filteredBorrows.slice(indexOfFirstBorrow, indexOfLastBorrow);
    const totalFilteredPages = Math.ceil(filteredBorrows.length / itemsPerPage);

    const handleEdit = (id) => {
        const borrowToEdit = borrows.find(borrow => borrow.id === id);
        setSelectedBorrow(borrowToEdit);
        setIsModalOpen(true);
    };

    const handleSave = (updatedBorrow) => {
        const updatedBorrows = borrows.map(borrow =>
            borrow.id === updatedBorrow.id ? updatedBorrow : borrow
        );

        setBorrows(updatedBorrows);
        setIsModalOpen(false);
        localStorage.setItem('borrows', JSON.stringify(updatedBorrows));
    };

    const handleDelete = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa phiếu mượn này?')) {
            const updatedBorrows = borrows.filter(borrow => borrow.id !== id);
            setBorrows(updatedBorrows);
            localStorage.setItem('borrows', JSON.stringify(updatedBorrows));
        }
    };

    return (
        <div className="stored-borrows">
            <h2>Quản Lý Phiếu Mượn</h2>
            <input
                type="text"
                placeholder="Tìm kiếm theo số điện thoại..."
                value={searchTerm}
                onChange={(e) => {
                    setSearchTerm(e.target.value);
                    setCurrentPage(1);
                }}
            />
            <table>
                <thead>
                    <tr>
                        <th>Mã Phiếu</th>
                        <th>Mã Sách</th>
                        <th>Tên Người Mượn</th>
                        <th>Số Điện Thoại</th>
                        <th>Email</th>
                        <th>Ngày Mượn</th>
                        <th>Ngày Trả Dự Kiến</th>
                        <th>Trạng Thái</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {currentBorrows.map((borrow) => (
                        <tr key={borrow.id}>
                            <td>{borrow.id}</td>
                            <td>{borrow.bookId}</td>
                            <td>{borrow.borrowerName}</td>
                            <td>{borrow.borrowerPhone}</td>
                            <td>{borrow.borrowerEmail}</td>
                            <td>{borrow.borrowDate}</td>
                            <td>{borrow.dueDate}</td>
                            <td>{borrow.isReturned ? "Đã Trả" : "Chưa Trả"}</td>
                            <td>
                                <div className="button-group">
                                    {borrow.isReturned ? (
                                        <button onClick={() => onNotReturned(borrow.id)}>Đánh Dấu Chưa Trả</button>
                                    ) : (
                                        <button onClick={() => onReturn(borrow.id)}>Đánh Dấu Đã Trả</button>
                                    )}
                                    <button onClick={() => handleEdit(borrow.id)}>Chỉnh Sửa</button>
                                    <button onClick={() => handleDelete(borrow.id)}>Xóa</button>
                                </div>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={handlePreviousPage} disabled={currentPage === 1}>Trước</button>
                <span>Trang {currentPage} / {totalFilteredPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalFilteredPages}>Sau</button>
            </div>
            {isModalOpen && (
                <EditBorrowModal 
                    borrow={selectedBorrow} 
                    onSave={handleSave} 
                    onClose={() => setIsModalOpen(false)} 
                />
            )}
        </div>
    );
};

export default StoredBorrows;
