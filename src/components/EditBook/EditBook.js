import React, { useState } from 'react';
import { useNavigate, useParams } from 'react-router-dom';
import './EditBook.css';

const EditBook = ({ books, onUpdate }) => {
    const { id } = useParams();
    const navigate = useNavigate();

    // Tìm sách theo ID
    const bookToEdit = books.find(book => book.id === Number(id));
    const [title, setTitle] = useState(bookToEdit.title);
    const [author, setAuthor] = useState(bookToEdit.author);
    const [year, setYear] = useState(bookToEdit.year);
    const [genre, setGenre] = useState(bookToEdit.genre);
    const [publisher, setPublisher] = useState(bookToEdit.publisher);
    const [quantity, setQuantity] = useState(bookToEdit.quantity);
    const [description, setDescription] = useState(bookToEdit.description);

    const handleSubmit = (event) => {
        event.preventDefault();
        
        const updatedBook = {
            id: bookToEdit.id,
            title,
            author,
            year,
            genre,
            publisher,
            quantity,
            description,
            dateAdded: bookToEdit.dateAdded, // Giữ nguyên ngày thêm
        };

        onUpdate(updatedBook); // Gọi hàm cập nhật
        navigate('/books'); // Chuyển hướng về danh sách sách
    };

    return (
        <div className="edit-book">
            <h2>Chỉnh Sửa Sách</h2>
            <form onSubmit={handleSubmit}>
                <label>Tiêu đề:</label>
                <input
                    type="text"
                    value={title}
                    onChange={(e) => setTitle(e.target.value)}
                    required
                />
                
                <label>Tác giả:</label>
                <input
                    type="text"
                    value={author}
                    onChange={(e) => setAuthor(e.target.value)}
                    required
                />
                
                <label>Năm xuất bản:</label>
                <input
                    type="text"
                    value={year}
                    onChange={(e) => setYear(e.target.value)}
                    required
                />
                
                <label>Thể loại:</label>
                <input
                    type="text"
                    value={genre}
                    onChange={(e) => setGenre(e.target.value)}
                    required
                />
                
                <label>Nhà xuất bản:</label>
                <input
                    type="text"
                    value={publisher}
                    onChange={(e) => setPublisher(e.target.value)}
                    required
                />
                
                <label>Số lượng:</label>
                <input
                    type="number"
                    value={quantity}
                    onChange={(e) => setQuantity(e.target.value)}
                    required
                />
                
                <label>Mô tả:</label>
                <textarea
                    value={description}
                    onChange={(e) => setDescription(e.target.value)}
                />
                
                <button type="submit">Cập Nhật</button>
                <button type="button" onClick={() => navigate('/books')}>Quay lại</button> {/* Nút quay lại */}
            </form>
        </div>
    );
};

export default EditBook;
