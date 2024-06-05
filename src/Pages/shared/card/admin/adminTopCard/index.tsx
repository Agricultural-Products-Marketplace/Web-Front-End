import React from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../../redux/reducers/rootReducer';

interface AdminTopCardProps {
    title: string;
}

const AdminTopCard: React.FC<AdminTopCardProps> = ({ title }) => {
    const user = useSelector((state:RootState)=>state.user.profile?.user);
    return (
        <div className="admin-page-main-top">
            <h1>{title}</h1>
            <h3>Welcome <span> {user?.first_name} {user?.last_name}</span></h3>
        </div>
    );
}

export default AdminTopCard;
