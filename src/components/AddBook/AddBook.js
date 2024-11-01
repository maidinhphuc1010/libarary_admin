
import React, { useState } from 'react';
import { useNavigate } from 'react-router-dom';
import './AddBook.css';

const AddBook = ({ onAdd }) => {
    const [title, setTitle] = useState('');
    const [author, setAuthor] = useState('');
    const [year, setYear] = useState('');
    const [genre, setGenre] = useState('');
    const [publisher, setPublisher] = useState('');
    const [quantity, setQuantity] = useState('');
    const [description, setDescription] = useState('');
    const navigate = useNavigate();

    const handleSubmit = (event) => {
        event.preventDefault();

        const newBook = {
            id: Date.now(),
            title,
            author,
            year,
            genre,
            publisher,
            quantity,
            description,
            dateAdded: new Date().toISOString(),
        };

        if (onAdd) {
            onAdd(newBook);
        }

        navigate('/books');

        setTitle('');
        setAuthor('');
        setYear('');
        setGenre('');
        setPublisher('');
        setQuantity('');
        setDescription('');
    };

    return (
        <div className="add-book">
            <h2>Thêm Sách</h2>
            <form onSubmit={handleSubmit}>
                <label>
                    Tiêu đề:
                    <input
                        type="text"
                        placeholder="Tiêu đề"
                        value={title}
                        onChange={(e) => setTitle(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Tác giả:
                    <input
                        type="text"
                        placeholder="Tác giả"
                        value={author}
                        onChange={(e) => setAuthor(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Năm xuất bản:
                    <input
                        type="text"
                        placeholder="Năm xuất bản"
                        value={year}
                        onChange={(e) => setYear(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Thể loại:
                    <input
                        type="text"
                        placeholder="Thể loại"
                        value={genre}
                        onChange={(e) => setGenre(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Nhà xuất bản:
                    <input
                        type="text"
                        placeholder="Nhà xuất bản"
                        value={publisher}
                        onChange={(e) => setPublisher(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Số lượng:
                    <input
                        type="number"
                        placeholder="Số lượng"
                        value={quantity}
                        onChange={(e) => setQuantity(e.target.value)}
                        required
                    />
                </label>
                <label>
                    Mô tả:
                    <textarea
                        placeholder="Mô tả"
                        value={description}
                        onChange={(e) => setDescription(e.target.value)}
                    />
                </label>
                <button type="submit">Thêm Sách</button>
            </form>
            <button className="back-btn" onClick={() => navigate('/books')}>Quay lại</button>
        </div>
    );
};

export default AddBook;
