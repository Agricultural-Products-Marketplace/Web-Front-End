import React, { useRef, useState } from 'react';
import { useSelector } from 'react-redux';
import { RootState } from '../../../../redux/reducers/rootReducer';
import { updateProfile } from '../../../../services/auth/signin-service';


function EditMyProfile() {
    const user = useSelector((state: RootState) => state.user.profile);
    const userAccess = useSelector((state: RootState) => state.login.user?.access);

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        username: user?.user.username || '',
        first_name: user?.user.first_name || '',
        last_name: user?.user.last_name || '',
        email: user?.user.email || '',
        phone: user?.user.phone || '',
    });
    const [initialData] = useState(formData);
    const handleRefresh = () => {
        window.location.reload();
      };

    const handleInputChange = (e: React.ChangeEvent<HTMLInputElement>) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });


        
    };

    const [image, setImage] = useState<string | undefined>(user?.image);
    const fileInputRef = useRef<HTMLInputElement>(null);
    const [imageFile, setImageFile] = useState<File | null>(null);

    const handleImageClick = () => {
        if (fileInputRef.current) {
            fileInputRef.current.click();
        }
    };

    const handleImageChange = (event: React.ChangeEvent<HTMLInputElement>) => {
        if (event.target.files && event.target.files[0]) {
            const file = event.target.files[0];
            setImageFile(file);
            const reader = new FileReader();
            reader.onload = () => {
                setImage(reader.result as string);
            };
            reader.readAsDataURL(file);
        }
    };

    const handleSaveChanges = async () => {
        setIsLoading(true);
        const updatedFields: { [key: string]: string } = {};
        Object.keys(formData).forEach((key) => {
            if (formData[key as keyof typeof formData] !== initialData[key as keyof typeof formData]) {
                updatedFields[key] = formData[key as keyof typeof formData];
            }
        });

        try {
            const updatedProfile = await updateProfile(updatedFields,userAccess,imageFile);
            console.log('Profile updated successfully', updatedProfile);
            handleRefresh();
            setIsLoading(false);
        } catch (error) {
            console.error('Error updating profile', error);
        }
    };

    return (
        <div className="admin-page-main my-profile-content">
            <div className="admin-page-main-top">
            <div>
            <img src={image} alt="" onClick={handleImageClick} style={{ cursor: 'pointer' }} />
            </div>
            <input
                type="file"
                ref={fileInputRef}
                style={{ display: 'none' }}
                onChange={handleImageChange}
            />
            <h3>Welcome <span>{formData.first_name} {formData.last_name}</span></h3>
        </div>
            <div className="my-account-page">
                <div className="my-account-input">
                    <label htmlFor="firstName">First Name</label>
                    <input
                        type="text"
                        name="first_name"
                        value={formData.first_name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="my-account-input">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        name="last_name"
                        value={formData.last_name}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="my-account-input">
                    <label htmlFor="username">User Name</label>
                    <input type="text" name="username" readOnly placeholder={user?.user.username} />
                </div>
                <div className="my-account-input">
                    <label htmlFor="email">Email</label>
                    <input type="text" name="email" readOnly placeholder={user?.user.email} />
                </div>
                <div className="my-account-input">
                    <label htmlFor="phone">Phone</label>
                    <input
                        type="text"
                        name="phone"
                        value={formData.phone}
                        onChange={handleInputChange}
                    />
                </div>
                {/* <div className="my-account-input">
                    <label htmlFor="gender">Gender</label>
                    {(user?.gender == null)?(
                        <div>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            onChange={handleInputChange}
                        />
                        <label htmlFor="gender">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            onChange={handleInputChange}
                        />
                        <label htmlFor="gender">Female</label>
                    </div>
                    ):(
                        <div>
                        <input
                            type="radio"
                            name="gender"
                            value="Male"
                            checked={user.gender === 'Male'}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="gender">Male</label>
                        <input
                            type="radio"
                            name="gender"
                            value="Female"
                            checked={user.gender === 'Female'}
                            onChange={handleInputChange}
                        />
                        <label htmlFor="gender">Female</label>
                    </div>
                    )}
                    
                </div> */}
                <div className="my-account-input">
                    <label htmlFor="about">About</label>
                    <input
                        type="text"
                        name="about"
                        value={''}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            {isLoading?(null):(<button onClick={handleSaveChanges}>Save Changes</button>)}
            
        </div>
    );
}

export default EditMyProfile;
