import React from 'react';
import './TopFavoriteBooks.css'; 

const TopFavoriteBooks = () => {
    const favoriteBooks = [
        {
            id: 1,
            title: 'Số Đỏ',
            author: 'Vũ Trọng Phụng',
            genre: 'Hài hước',
            image: 'https://via.placeholder.com/80',
            likes: 150,
            rating: 4.5, 
        },
        {
            id: 2,
            title: 'Nhà Giả Kim',
            author: 'Paulo Coelho',
            genre: 'Tiểu thuyết',
            image: 'https://via.placeholder.com/80',
            likes: 200,
            rating: 5.0, 
        },
        {
            id: 3,
            title: 'Đi Tìm Lẽ Sống',
            author: 'Viktor Frankl',
            genre: 'Tâm lý',
            image: 'https://via.placeholder.com/80',
            likes: 120,
            rating: 4.0, 
        },
        {
            id: 4,
            title: 'Bảy Thói Quen Của Người Thành Đạt',
            author: 'Stephen R. Covey',
            genre: 'Tự lực',
            image: 'https://via.placeholder.com/80',
            likes: 90,
            rating: 4.8, 
        },
        {
            id: 5,
            title: 'Khi Hơi Thở Hóa Thinh Không',
            author: 'Paul Kalanithi',
            genre: 'Tự truyện',
            image: 'https://via.placeholder.com/80',
            likes: 80,
            rating: 4.2, 
        },
    ];

    const sortedBooks = favoriteBooks.sort((a, b) => b.likes - a.likes);

    return (
        <div className="top-favorite-books">
            <h2>Top Sách Yêu Thích</h2>
            <table>
                <thead>
                    <tr>
                        <th>Hình Ảnh</th>
                        <th>ID</th>
                        <th>Tên Sách</th>
                        <th>Tác Giả</th>
                        <th>Thể Loại</th>
                        <th>Số Lượng Yêu Thích</th>
                        <th>Đánh Giá</th> 
                    </tr>
                </thead>
                <tbody>
                    {sortedBooks.map(book => (
                        <tr key={book.id}>
                            <td>
                                <img src={book.image} alt={book.title} />
                            </td>
                            <td>{book.id}</td>
                            <td>{book.title}</td>
                            <td>{book.author}</td>
                            <td>{book.genre}</td>
                            <td>{book.likes}</td>
                            <td>
                                {Array.from({ length: 5 }, (_, index) => (
                                    <span key={index} className={index < book.rating ? 'star filled' : 'star'}>★</span>
                                ))}
                            </td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopFavoriteBooks;
