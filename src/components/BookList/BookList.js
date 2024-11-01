
import React, { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import './BookList.css';

const BookList = ({ books, onDelete, onUpdate }) => {
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const [booksPerPage] = useState(5);


    const filteredBooks = books.filter(book =>
        book.title.toLowerCase().includes(searchTerm.toLowerCase()) ||
        book.author.toLowerCase().includes(searchTerm.toLowerCase())
    );

    const indexOfLastBook = currentPage * booksPerPage;
    const indexOfFirstBook = indexOfLastBook - booksPerPage;
    const currentBooks = filteredBooks.slice(indexOfFirstBook, indexOfLastBook);
    const totalPages = Math.ceil(filteredBooks.length / booksPerPage);

    const handleNextPage = () => {
        if (currentPage < totalPages) {
            setCurrentPage(currentPage + 1);
        }
    };

    const handlePrevPage = () => {
        if (currentPage > 1) {
            setCurrentPage(currentPage - 1);
        }
    };

    return (
        <div className="book-list">
            <h2>Danh Sách Sách</h2>
            <div className="navigation">
                <div className="search-container">
                    <input
                        type="text"
                        placeholder="Tìm kiếm sách..."
                        value={searchTerm}
                        onChange={(e) => setSearchTerm(e.target.value)}
                        className="search-input"
                    />
                </div>
            </div>
            <table>
                <thead>
                    <tr>
                        <th>Tiêu đề</th>
                        <th>Tác giả</th>
                        <th>Năm xuất bản</th>
                        <th>Thể loại</th>
                        <th>Nhà xuất bản</th>
                        <th>Số lượng</th>
                        <th>Mô tả</th>
                        <th>Ngày thêm</th>
                        <th>Hành động</th> 
                    </tr>
                </thead>
                <tbody>
                    {currentBooks.map((book) => (
                        <tr key={book.id}>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.year}</td>
                            <td>{book.genre}</td>
                            <td>{book.publisher}</td>
                            <td>{book.quantity}</td>
                            <td>{book.description}</td>
                            <td>{book.dateAdded}</td>
                            <td>
                                <Link to={`/edit-book/${book.id}`} className="edit-btn">Chỉnh sửa</Link>
                                <button className="delete-btn" onClick={() => onDelete(book.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            <div className="pagination">
                <button onClick={handlePrevPage} disabled={currentPage === 1}>Trước</button>
                <span>{currentPage} / {totalPages}</span>
                <button onClick={handleNextPage} disabled={currentPage === totalPages}>Tiếp</button>
            </div>
        </div>
    );
};

export default BookList;
