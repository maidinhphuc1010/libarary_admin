import React from 'react';
import './TopReaders.css'; 

const TopReaders = () => {
    const readers = [
        {
            id: 1,
            name: 'Nguyễn Văn Nam',
            borrowedBooks: 15,
            image: 'https://via.placeholder.com/80',
            email: 'nguyenvannam@example.com',
            membershipDate: '2022-01-15',
        },
        {
            id: 2,
            name: 'Trần Thị Minh',
            borrowedBooks: 12,
            image: 'https://via.placeholder.com/80',
            email: 'tranminh@example.com',
            membershipDate: '2021-05-20',
        },
        {
            id: 3,
            name: 'Lê Văn Hoa',
            borrowedBooks: 10,
            image: 'https://via.placeholder.com/80',
            email: 'levanhoa@example.com',
            membershipDate: '2020-10-10',
        },
        {
            id: 4,
            name: 'Phạm Thị Mai',
            borrowedBooks: 8,
            image: 'https://via.placeholder.com/80',
            email: 'phamtmai@example.com',
            membershipDate: '2023-03-05',
        },
        {
            id: 5,
            name: 'Ngô Văn Vui',
            borrowedBooks: 5,
            image: 'https://via.placeholder.com/80',
            email: 'ngovui@example.com',
            membershipDate: '2022-07-30',
        },
    ];

    return (
        <div className="top-readers">
            <h2>Top Độc Giả</h2>
            <table>
                <thead>
                    <tr>
                        <th>Hình Ảnh</th>
                        <th>ID</th>
                        <th>Tên Độc Giả</th>
                        <th>Email</th>
                        <th>Số Lượng Sách Mượn</th>
                        <th>Ngày Tham Gia</th>
                    </tr>
                </thead>
                <tbody>
                    {readers.map(reader => (
                        <tr key={reader.id}>
                            <td>
                                <img src={reader.image} alt={reader.name} />
                            </td>
                            <td>{reader.id}</td>
                            <td>{reader.name}</td>
                            <td>{reader.email}</td>
                            <td>{reader.borrowedBooks}</td>
                            <td>{new Date(reader.membershipDate).toLocaleDateString()}</td>
                        </tr>
                    ))}
                </tbody>
            </table>
        </div>
    );
};

export default TopReaders;
