import React, { useContext, useState } from "react";
import google from '../assets/google-logo.png';
import { Link, useNavigate } from "react-router-dom";
import { AuthContext } from "../provider/AuthProvider";
import toast from "react-hot-toast";

const Register = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, user, setUser, googleAuth } = useContext(AuthContext);
    const [error, setError] = useState({});
    const handleRegister = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const name = form.get('name');
        const email = form.get('email');
        const photo = form.get('photo');
        const password = form.get('password');

        setError(null);

        if (password.length < 6) {
            toast.error('Password must have at least 6 characters');
            return;
        }

        const passwordRegex = /^(?=.*[a-z])(?=.*[A-Z])/;
        if (!passwordRegex.test(password)) {
            toast.error("Password must contain at least one uppercase and one lowercase letter.");
            return;
        }


        createUser(email, password, {
            displayName: name,
            photoURL: photo,
        })
            .then(res => {
                setUser({ ...res.user, displayName: name, photoURL: photo });
                toast.success("Account created successfully!");
            })
            .catch(error => {
                setError(error.message);
                toast.error(error.message);
            });
    };

    return (
        <div className="flex items-center justify-center min-h-screen py-24 bg-gradient-to-br from-purple-500 to-pink-500 ">
            <div className="bg-white shadow-xl rounded-lg p-8 w-full max-w-lg">
                <h2 className="text-3xl font-bold text-center text-purple-700 mb-6">
                    Join CareerField
                </h2>
                <p className="text-sm text-center text-gray-500 mb-6">
                    Unlock your potential by creating an account.
                </p>
                <form onSubmit={handleRegister}>
                    <div className="mb-4">
                        <label htmlFor="name" className="block text-sm font-medium text-gray-700">
                            Full Name
                        </label>
                        <input
                            type="text"
                            name="name"
                            className="input input-bordered w-full mt-2"
                            placeholder="Enter your full name"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="email" className="block text-sm font-medium text-gray-700">
                            Email Address
                        </label>
                        <input
                            type="email"
                            name="email"
                            className="input input-bordered w-full mt-2"
                            placeholder="Enter your email"
                            required
                        />
                    </div>
                    <div className="mb-4">
                        <label htmlFor="photo" className="block text-sm font-medium text-gray-700">
                            Profile Picture URL
                        </label>
                        <input
                            type="text"
                            name="photo"
                            className="input input-bordered w-full mt-2"
                            placeholder="Enter the URL of your profile picture"
                        />
                    </div>
                    <div className="mb-4 relative">
                        <label htmlFor="password" className="block text-sm font-medium text-gray-700">
                            Password
                        </label>
                        <input
                            type={showPassword ? "text" : "password"}
                            name="password"
                            className="input input-bordered w-full mt-2"
                            placeholder="Enter your password"
                            required
                        />
                        <button
                            type="button"
                            className="absolute right-3 top-10 text-gray-600"
                            onClick={() => setShowPassword(!showPassword)}
                        >
                            {showPassword ? "🙈" : "👁️"}
                        </button>

                    </div>
                    <button className="btn btn-primary w-full mt-4">Create Account</button>
                </form>
                <div className="flex items-center my-6">
                    <div className="border-t flex-grow border-gray-300"></div>
                    <span className="px-4 text-sm text-gray-500">or</span>
                    <div className="border-t flex-grow border-gray-300"></div>
                </div>
                <button onClick={googleAuth} className="btn btn-outline w-full flex items-center justify-center">
                    <img
                        src={google}
                        alt=""
                        className="w-6 h-6 mr-2"
                    />
                    Sign up with Google
                </button>
                <p className="text-sm text-center mt-6">
                    Already have an account?{" "}
                    <Link to="/auth/login" className="text-purple-600 hover:underline">
                        Log in here
                    </Link>
                </p>
            </div>
        </div>
    );
};

export default Register;
