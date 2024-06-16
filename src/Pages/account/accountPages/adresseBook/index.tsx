import { useSelector } from "react-redux";
import { RootState } from "../../../../redux/reducers/rootReducer";
import { useRef, useState } from "react";
import { updateProfile } from "../../../../services/auth/signin-service";

function AdressBook() {
    const user = useSelector((state: RootState) => state.user.profile);
    const userAccess = useSelector((state: RootState) => state.login.user?.access);
    const image = useSelector((state: RootState) => state.user.profile?.image);

    const [isLoading, setIsLoading] = useState(false);
    const [formData, setFormData] = useState({
        user: user?.user.id || '',
        country: user?.user.first_name || '',
        state: user?.user.last_name || '',
        city: user?.user.email || '',
        house_number: user?.user.phone || '',
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

    const handleSaveChanges = async () => {
        setIsLoading(true);
        const updatedFields: { [key: string]: string } = {};
        Object.keys(formData).forEach((key) => {
            if (formData[key as keyof typeof formData] !== initialData[key as keyof typeof formData]) {
                updatedFields[key] = String(formData[key as keyof typeof formData]);
            }
        });

        try {
            console.log('Profile updated successfully');
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
                    <img src={image} alt="" />
                </div>
                <h3>Welcome <span>{user?.user.first_name} {user?.user.last_name}</span></h3>
            </div>
            <div className="my-account-page">
                <div className="my-account-input">
                    <label htmlFor="last_name">Last Name</label>
                    <input
                        type="text"
                        name="country"
                        value={formData.country}
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
                        name="city"
                        value={formData.city}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="my-account-input">
                    <label htmlFor="state">State</label>
                    <input
                        type="text"
                        name="state"
                        value={formData.state}
                        onChange={handleInputChange}
                    />
                </div>
                <div className="my-account-input">
                    <label htmlFor="house_number">House Number</label>
                    <input
                        type="text"
                        name="house_number"
                        value={formData.house_number}
                        onChange={handleInputChange}
                    />
                </div>
            </div>
            {isLoading ? null : <button onClick={handleSaveChanges}>Save Changes</button>}
        </div>
    );
}

export default AdressBook;
