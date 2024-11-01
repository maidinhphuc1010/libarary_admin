import React from 'react';
import { FaBook, FaUser, FaClipboardList, FaFileAlt, FaChartBar, FaUsers } from 'react-icons/fa';
import { Link } from 'react-router-dom';
import './AdminDashboard.css';

const sections = [
  {
    title: "Sách",
    items: [
      { icon: <FaBook />, label: "Toàn Bộ Sách", path: "/books" },
      { icon: <FaBook />, label: "Thêm Sách", path: "/add-book" },
      { icon: <FaFileAlt />, label: "Lập phiếu mượn", path: "/borrow" },
    ]
  },
  {
    title: "Quản lý",
    items: [
      { icon: <FaUsers />, label: "Hồ sơ nhân viên", path: "/employees" },
      { icon: <FaUser />, label: "Hồ sơ độc giả", path: "/readers" },
      { icon: <FaFileAlt />, label: "Quản lý phiếu mượn", path: "/stored-borrows" },
    ]
  },
  {
    title: "Thống kê",
    items: [
      { icon: <FaChartBar />, label: "Thống kê nhanh", path: "/statistics" },
      { icon: <FaUsers />, label: "Bảng xếp Hạng Độc Giả", path: "/reader-ranking" },
      { icon: <FaBook/>, label: "Bảng xếp Hạng Sách", path: "/book-ranking" },
    ]
  }
];

function AdminDashboard() {
  return (
    <div className="AdminDashboard">
      <main>
        {sections.map((section, index) => (
          <div className="section" key={index}>
            <h2>{section.title}</h2>
            <div className="grid-container">
              {section.items.map((item, idx) => (
                <Link to={item.path} className="card" key={idx}>
                  {item.icon}
                  <span className="icon-label">{item.label}</span>
                </Link>
              ))}
            </div>
          </div>
        ))}
      </main>
    </div>
  );
}

export default AdminDashboard;
