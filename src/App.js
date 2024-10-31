import React, { useState, useEffect } from 'react';
import { BrowserRouter as Router, Route, Routes } from 'react-router-dom';
import AddBook from './components/AddBook/AddBook';
import BookList from './components/BookList/BookList';
import EditBook from './components/EditBook/EditBook';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import ChangePassword from './components/ChangePassword/ChangePassword';
import BorrowForm from './components/BorrowForm/BorrowForm';
import StoredBorrows from './components/StoredBorrows/StoredBorrows';
import EmployeeManagement from './components/EmployeeManagement/EmployeeManagement'; // Quản lý nhân viên
import ReaderManagement from './components/ReaderManagement/ReaderManagement'; // Quản lý độc giả
import Home from './pages/Home';
import './App.css';

const App = () => {
    const [books, setBooks] = useState([]);
    const [borrows, setBorrows] = useState([]);
    const [employees, setEmployees] = useState([]); // Trạng thái cho nhân viên
    const [readers, setReaders] = useState([]); // Thêm trạng thái cho độc giả

    useEffect(() => {
        const storedBooks = localStorage.getItem('books');
        const storedBorrows = localStorage.getItem('borrows');
        const storedEmployees = localStorage.getItem('employees'); // Dữ liệu nhân viên từ local storage
        const storedReaders = localStorage.getItem('readers'); // Dữ liệu độc giả từ local storage
        
        if (storedBooks) {
            setBooks(JSON.parse(storedBooks));
        }
        
        if (storedBorrows) {
            setBorrows(JSON.parse(storedBorrows));
        }

        if (storedEmployees) {
            setEmployees(JSON.parse(storedEmployees)); // Cập nhật trạng thái nhân viên
        }

        if (storedReaders) {
            setReaders(JSON.parse(storedReaders)); // Cập nhật trạng thái độc giả
        }
    }, []);

    const handleAddEmployee = (newEmployee) => {
        const updatedEmployees = [...employees, newEmployee];
        setEmployees(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    };

    const handleUpdateEmployee = (updatedEmployee) => {
        const updatedEmployees = employees.map(employee =>
            employee.id === updatedEmployee.id ? updatedEmployee : employee
        );
        setEmployees(updatedEmployees);
        localStorage.setItem('employees', JSON.stringify(updatedEmployees));
    };

    const handleDeleteEmployee = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa nhân viên này?')) {
            const updatedEmployees = employees.filter(employee => employee.id !== id);
            setEmployees(updatedEmployees);
            localStorage.setItem('employees', JSON.stringify(updatedEmployees));
        }
    };

    const handleAddReader = (newReader) => {
        const updatedReaders = [...readers, newReader];
        setReaders(updatedReaders);
        localStorage.setItem('readers', JSON.stringify(updatedReaders));
    };

    const handleUpdateReader = (updatedReader) => {
        const updatedReaders = readers.map(reader =>
            reader.id === updatedReader.id ? updatedReader : reader
        );
        setReaders(updatedReaders);
        localStorage.setItem('readers', JSON.stringify(updatedReaders));
    };

    const handleDeleteReader = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa độc giả này?')) {
            const updatedReaders = readers.filter(reader => reader.id !== id);
            setReaders(updatedReaders);
            localStorage.setItem('readers', JSON.stringify(updatedReaders));
        }
    };

    const handleAddBook = (newBook) => {
        const updatedBooks = [...books, newBook];
        setBooks(updatedBooks);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
    };

    const handleUpdateBook = (updatedBook) => {
        const updatedBooks = books.map(book =>
            book.id === updatedBook.id ? updatedBook : book
        );
        setBooks(updatedBooks);
        localStorage.setItem('books', JSON.stringify(updatedBooks));
    };

    const handleDeleteBook = (id) => {
        if (window.confirm('Bạn có chắc chắn muốn xóa sách này?')) {
            const updatedBooks = books.filter(book => book.id !== id);
            setBooks(updatedBooks);
            localStorage.setItem('books', JSON.stringify(updatedBooks));
        }
    };

    const handleAddBorrow = (newBorrow) => {
        const updatedBorrows = [...borrows, newBorrow];
        setBorrows(updatedBorrows);
        localStorage.setItem('borrows', JSON.stringify(updatedBorrows));
    };

    const markAsReturned = (id) => {
        const updatedBorrows = borrows.map(borrow =>
            borrow.id === id ? { ...borrow, isReturned: true } : borrow
        );
        setBorrows(updatedBorrows);
        localStorage.setItem('borrows', JSON.stringify(updatedBorrows));
    };

    const markAsNotReturned = (id) => {
        const updatedBorrows = borrows.map(borrow =>
            borrow.id === id ? { ...borrow, isReturned: false } : borrow
        );
        setBorrows(updatedBorrows);
        localStorage.setItem('borrows', JSON.stringify(updatedBorrows));
    };

    return (
        <Router>
            <div className="app">
                <Sidebar />
                <Navbar />
                <div className="content">
                    <Routes>
                        <Route path="/" element={<Home />} />
                        <Route path="/books" element={<BookList books={books} onDelete={handleDeleteBook} />} />
                        <Route path="/add-book" element={<AddBook onAdd={handleAddBook} />} />
                        <Route path="/edit-book/:id" element={<EditBook books={books} onUpdate={handleUpdateBook} />} />
                        <Route path="/change-password" element={<ChangePassword />} />
                        <Route path="/borrow" element={<BorrowForm onAddBorrow={handleAddBorrow} />} />
                        <Route 
                            path="/stored-borrows" 
                            element={
                                <StoredBorrows 
                                    borrows={borrows} 
                                    setBorrows={setBorrows} 
                                    onReturn={markAsReturned} 
                                    onNotReturned={markAsNotReturned} 
                                />
                            } 
                        />
                        <Route 
                            path="/employees" 
                            element={
                                <EmployeeManagement 
                                    employees={employees} 
                                    onAdd={handleAddEmployee} 
                                    onUpdate={handleUpdateEmployee} 
                                    onDelete={handleDeleteEmployee} 
                                />
                            } 
                        />
                        <Route 
                            path="/readers" 
                            element={
                                <ReaderManagement 
                                    readers={readers} 
                                    onAdd={handleAddReader} 
                                    onUpdate={handleUpdateReader} 
                                    onDelete={handleDeleteReader} 
                                />
                            } 
                        />
                    </Routes>
                </div>
            </div>
        </Router>
    );
};

export default App;
