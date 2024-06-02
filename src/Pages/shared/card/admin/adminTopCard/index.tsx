import React from 'react';

interface AdminTopCardProps {
    title: string;
}

const AdminTopCard: React.FC<AdminTopCardProps> = ({ title }) => {
    return (
        <div className="admin-page-main-top">
            <h1>{title}</h1>
            <div className="admin-page-main-top-search">
                <i className="fa-solid fa-search"></i>
                <input type="text" placeholder="Search ..." />
            </div>
            <div className="admin-page-main-top-nav-icon">
                <a href="#"><i className="fa-solid fa-ellipsis-vertical"></i></a>
                <a href="#">
                    <div className="admin-page-main-top-nav-icon-notification">
                        <i className="fa-solid fa-bell"></i>
                        <sup>15</sup>
                    </div>
                </a>
                <a href="#"><i className="fa-solid fa-user"></i></a>
            </div>
        </div>
    );
}

export default AdminTopCard;
