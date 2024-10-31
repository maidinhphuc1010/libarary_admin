import React, { useState } from 'react';
import './ReaderManagement.css'; // Tạo file CSS nếu cần
import ReaderModal from './EditReaderModal'; // Tạo modal cho độc giả

const ReaderManagement = ({ readers, onAdd, onUpdate, onDelete }) => {
    const [showModal, setShowModal] = useState(false);
    const [currentReader, setCurrentReader] = useState(null);
    const [searchTerm, setSearchTerm] = useState('');
    const [currentPage, setCurrentPage] = useState(1);
    const readersPerPage = 5; // Số độc giả hiển thị mỗi trang

    const handleOpenModal = (reader = null) => {
        setCurrentReader(reader);
        setShowModal(true);
    };

    const handleCloseModal = () => {
        setCurrentReader(null);
        setShowModal(false);
    };

    const handleSave = (readerData) => {
        if (currentReader) {
            onUpdate(readerData);
        } else {
            onAdd({ ...readerData, id: Date.now() }); // Giả sử id là timestamp
        }
        handleCloseModal();
    };

    const filteredReaders = readers.filter(reader =>
        reader.name.toLowerCase().includes(searchTerm.toLowerCase()) ||
        reader.email.toLowerCase().includes(searchTerm.toLowerCase())
    );

    // Tính toán chỉ số bắt đầu và kết thúc cho trang hiện tại
    const indexOfLastReader = currentPage * readersPerPage;
    const indexOfFirstReader = indexOfLastReader - readersPerPage;
    const currentReaders = filteredReaders.slice(indexOfFirstReader, indexOfLastReader);

    // Tính toán số trang
    const totalPages = Math.ceil(filteredReaders.length / readersPerPage);

    return (
        <div className="reader-management">
            <h2>Quản Lý Độc Giả</h2>
            <div className="search-bar">
                <input
                    type="text"
                    placeholder="Tìm kiếm theo tên hoặc email..."
                    value={searchTerm}
                    onChange={(e) => setSearchTerm(e.target.value)}
                />
            </div>
            <button onClick={() => handleOpenModal()}>Thêm Độc Giả</button>
            <table>
                <thead>
                    <tr>
                        <th>ID</th>
                        <th>Tên</th>
                        <th>Email</th>
                        <th>Địa Chỉ</th>
                        <th>Số Điện Thoại</th>
                        <th>Hành Động</th>
                    </tr>
                </thead>
                <tbody>
                    {currentReaders.map(reader => (
                        <tr key={reader.id}>
                            <td>{reader.id}</td>
                            <td>{reader.name}</td>
                            <td>{reader.email}</td>
                            <td>{reader.address}</td>
                            <td>{reader.phone}</td>
                            <td>
                                <button onClick={() => handleOpenModal(reader)}>Sửa</button>
                                <button onClick={() => onDelete(reader.id)}>Xóa</button>
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
            {showModal && (
                <ReaderModal 
                    reader={currentReader} 
                    onClose={handleCloseModal} 
                    onSave={handleSave} 
                />
            )}
            <div className="pagination">
                <button onClick={() => setCurrentPage(prev => Math.max(prev - 1, 1))} disabled={currentPage === 1}>Trước</button>
                <span>Trang {currentPage} / {totalPages}</span>
                <button onClick={() => setCurrentPage(prev => Math.min(prev + 1, totalPages))} disabled={currentPage === totalPages}>Tiếp theo</button>
            </div>
        </div>
    );
};

export default ReaderManagement;