import React from 'react';

interface AdminTopCardProps {
    title: string;
}

const AdminTopCard: React.FC<AdminTopCardProps> = ({ title }) => {
    return (
        <div className="admin-page-main-top">
            <h1>{title}</h1>
            <h3>Welcome <span>Yosef Sahle</span></h3>
        </div>
    );
}

export default AdminTopCard;
