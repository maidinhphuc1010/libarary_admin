import React from 'react';
import { BrowserRouter as Router } from 'react-router-dom';
import Sidebar from './components/Sidebar/Sidebar';
import Navbar from './components/Navbar/Navbar';
import AppRoutes from './AppRoutes';
import useBooks from './hooks/useBooks';
import useBorrows from './hooks/useBorrows';
import useEmployees from './hooks/useEmployees';
import useReaders from './hooks/useReaders';
import './App.css';

const App = () => {
    const { books, handleAddBook, handleUpdateBook, handleDeleteBook } = useBooks();
    const { borrows, handleAddBorrow, markAsReturned, markAsNotReturned, handleUpdateBorrow, handleDeleteBorrow } = useBorrows();
    const { employees, handleAddEmployee, handleUpdateEmployee, handleDeleteEmployee } = useEmployees();
    const { readers, handleAddReader, handleUpdateReader, handleDeleteReader } = useReaders();

    return (
        <Router>
            <div className="app">
                <Sidebar />
                <Navbar />
                <div className="content">
                    <AppRoutes
                        books={books}
                        borrows={borrows}
                        employees={employees}
                        readers={readers}
                        // Passing all the handlers to the routes
                        handleAddBook={handleAddBook}
                        handleUpdateBook={handleUpdateBook}
                        handleDeleteBook={handleDeleteBook}
                        handleAddBorrow={handleAddBorrow}
                        handleUpdateBorrow={handleUpdateBorrow}
                        handleDeleteBorrow={handleDeleteBorrow}
                        markAsReturned={markAsReturned}
                        markAsNotReturned={markAsNotReturned}
                        handleAddEmployee={handleAddEmployee}
                        handleUpdateEmployee={handleUpdateEmployee}
                        handleDeleteEmployee={handleDeleteEmployee}
                        handleAddReader={handleAddReader}
                        handleUpdateReader={handleUpdateReader}
                        handleDeleteReader={handleDeleteReader}
                    />
                </div>
            </div>
        </Router>
    );
};

export default App;
