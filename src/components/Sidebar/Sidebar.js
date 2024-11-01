
import React, { useState } from 'react';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faHome, faUser, faBook, faChartBar, faChevronDown, faChevronUp } from '@fortawesome/free-solid-svg-icons';
import { Link } from 'react-router-dom'; 
import './Sidebar.css';

const Sidebar = () => {
    const [openSubmenu, setOpenSubmenu] = useState(null);

    const toggleSubmenu = (submenu) => {
        setOpenSubmenu(openSubmenu === submenu ? null : submenu);
    };

    return (
        <div className="sidebar">
            <h2>Menu</h2>
            <ul>
                <li>
                    <Link to="/">
                        <FontAwesomeIcon icon={faHome} className="icon" />
                        <span>Trang chủ</span>
                    </Link>
                </li>
                <li>
                    <a href="#" onClick={() => toggleSubmenu('books')}>
                        <FontAwesomeIcon icon={faBook} className="icon" />
                        <span>Sách</span>
                        <FontAwesomeIcon 
                            icon={openSubmenu === 'books' ? faChevronUp : faChevronDown} 
                            className="submenu-icon" 
                        />
                    </a>
                    {openSubmenu === 'books' && (
                        <ul className="submenu">
                            <li><Link to="/books">Toàn bộ sách</Link></li>
                            <li><Link to="/add-book">Thêm Sách</Link></li>
                            <li><Link to="/borrow">Lập Phiếu Mượn</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <a href="#" onClick={() => toggleSubmenu('profile')}>
                        <FontAwesomeIcon icon={faUser} className="icon" />
                        <span>Quản Lý</span>
                        <FontAwesomeIcon 
                            icon={openSubmenu === 'profile' ? faChevronUp : faChevronDown} 
                            className="submenu-icon" 
                        />
                    </a>
                    {openSubmenu === 'profile' && (
                        <ul className="submenu">
                            <li><Link to="/employees">Hồ Sơ Nhân Viên</Link></li>
                            <li><Link to="/readers">Hồ Sơ Độc Giả</Link></li>
                            <li><Link to="/stored-borrows">Quản Lý Phiếu Mượn</Link></li>
                        </ul>
                    )}
                </li>
                <li>
                    <a href="#" onClick={() => toggleSubmenu('statistics')}>
                        <FontAwesomeIcon icon={faChartBar} className="icon" />
                        <span>Thống Kê</span>
                        <FontAwesomeIcon 
                            icon={openSubmenu === 'statistics' ? faChevronUp : faChevronDown} 
                            className="submenu-icon" 
                        />
                    </a>
                    {openSubmenu === 'statistics' && (
                        <ul className="submenu">
                            <li><Link to="/Statistics">Thống Kê Nhanh</Link></li>
                            <li><Link to="/reader-ranking">Top Độc Giả</Link></li>
                            <li><Link to="/book-ranking">Top Sách Yêu Thích</Link></li>
                        </ul>
                    )}
                </li>
            </ul>
        </div>
    );
};

export default Sidebar;
