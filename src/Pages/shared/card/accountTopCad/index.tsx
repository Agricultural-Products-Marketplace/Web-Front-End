import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers/rootReducer';

interface AccountTopCardProps {
    initialImage: string | undefined;
}

const AccountTopCard: React.FC<AccountTopCardProps> = ({ initialImage }) => {
    const user = useSelector((state:RootState) => state.user.profile?.user);
    const [image, setImage] = useState<string | undefined>(initialImage);
    const fileInputRef = useRef<HTMLInputElement>(null);

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    return (
        <div className="admin-page-main-top">
            <img src={image} alt="" onClick={handleImageClick} style={{ cursor: 'pointer' }} />
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageChange}
            />
            <h3>Welcome <span>{user?.first_name} {user?.last_name}</span></h3>
        </div>
    );
};

export default AccountTopCard;
