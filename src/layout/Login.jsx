import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import google from '../assets/google-logo.png';
const Login = () => {
    const [showPassword, setShowPassword] = useState(false);

    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-base-300">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
                        CareerField Login
                    </h2>
                    <form>
                        <div className="mb-4">
                            <label for="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                type="email"
                                id="email"
                                name="email"
                                className="input input-bordered w-full mt-2"
                                placeholder="Enter your email"
                                required
                            />
                        </div>

                        <div className="mb-4 relative">
                            <label for="password" className="block text-sm font-medium text-gray-700">
                                Password
                            </label>
                            <input
                                type={showPassword ? "text" : "password"}
                                id="password"
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
                        <button className="btn btn-outline w-full mt-4">Login</button>
                    </form>
                    <button className="btn btn-outline w-full flex items-center justify-center mt-6">
                        <img
                            src={google}
                            alt=""
                            className="w-6 h-6"
                        />
                        Continue with Google
                    </button>
                    <p className="text-sm text-center mt-6">
                        Don’t have an account?
                        <Link to="/auth/register" className="text-indigo-600 hover:underline">
                            Sign up here
                        </Link>
                    </p>
                </div>
            </div>
        </div>
    );
};

export default Login;