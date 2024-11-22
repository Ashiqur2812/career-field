import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { sendEmailVerification } from 'firebase/auth';
import toast from 'react-hot-toast';
import Header from '../components/Header';
import { auth } from '../firebase_init';

const MyProfile = () => {
    const { user, updateUser } = useContext(AuthContext);
    // const [name, setName] = useState(user?.displayName || '');
    // const [photoURL, setPhotoURL] = useState(user?.photoURL || '');

    const handleUpdate = (e) => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const photo = form.get('photo');
        console.log(name, photo);
        updateUser({ displayName: name, photoURL: photo })
            .then(() => {
               
                toast.success('Profile updated successfully!');
            })
            .catch(error => {
                toast.error('Error updating profile: ' + error.message);
            });
    };

    return (
        <>
            <Header></Header>
            <div className="flex justify-center items-center h-screen bg-gray-100 mt-12">
                <div className="bg-white p-8 rounded-lg shadow-md w-full max-w-md">
                    <h2 className="text-2xl font-bold mb-6 text-center">My Profile</h2>
                    <div className="text-center mb-6">
                        {user?.photoURL && (
                            <img
                                src={user.photoURL}
                                alt=""
                                className="w-24 h-24 rounded-full mx-auto mb-4"
                            />
                        )}
                        <h3 className="text-xl font-semibold">{user?.displayName || 'Name not set'}</h3>
                        <p className="text-gray-600">{user?.email}</p>
                    </div>
                    <form onSubmit={handleUpdate}>
                        <div className="mb-4">
                            <label className="block text-gray-700">Name</label>
                            <input
                                type="text"
                                name="name"
                                className="input input-bordered w-full mt-2"
                                placeholder="Enter your full name"
                                required
                            />
                        </div>
                        <div className="mb-4">
                            <label className="block text-gray-700">Photo URL</label>
                            <input
                                type="text"
                                name="photo"
                                className="input input-bordered w-full mt-2"
                                placeholder="Enter the URL of your profile picture"
                            />
                        </div>
                        <button type="submit" className="btn btn-primary w-full mt-4">Update Profile</button>
                    </form>
                </div>
            </div>
        </>
    );
};

export default MyProfile;