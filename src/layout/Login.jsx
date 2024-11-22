import React, { useContext, useRef, useState } from 'react';
import { Link, useLocation, useNavigate } from 'react-router-dom';
import google from '../assets/google-logo.png';
import { AuthContext } from '../provider/AuthProvider';
import toast from 'react-hot-toast';
import { sendPasswordResetEmail } from 'firebase/auth';
import { auth } from '../firebase_init';

const Login = () => {
    const [showPassword, setShowPassword] = useState(false);
    const { signInUser, setUser, googleAuth } = useContext(AuthContext);
    const emailRef = useRef();
    const [error, setError] = useState({});
    const location = useLocation();
    const navigate = useNavigate();

    const handleLogin = e => {
        e.preventDefault();
        const form = new FormData(e.target);
        const email = form.get('email');
        const password = form.get('password');
        console.log({ email, password });

        signInUser(email, password)
            .then(res => {
                setUser(res.user);
                toast.success('login successful');
                navigate(location?.state ? location.state : '/');
            })
            .catch(err => {
                setError({ ...error, login: err.code });
                toast.error(err.message)
            });
    };

    const handleForgotPassword = () => {
        console.log('Get me an email address', emailRef.current.value);
        const email = emailRef.current.value;
        if (!email) {
            toast.error('Please provide a valid email address');
        }
        else {
            sendPasswordResetEmail(auth,email)
                .then(() => {
                    toast.success('Password reset email sent. Please check your email');
                });
        }
    };

    return (
        <div>
            <div className="flex items-center justify-center h-screen bg-base-300">
                <div className="bg-white rounded-lg shadow-lg p-8 w-full max-w-md">
                    <h2 className="text-3xl font-bold text-center text-indigo-700 mb-6">
                        CareerField Login
                    </h2>
                    <form onSubmit={handleLogin}>
                        <div className="mb-4">
                            <label for="email" className="block text-sm font-medium text-gray-700">
                                Email Address
                            </label>
                            <input
                                ref={emailRef}
                                type="email"
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
                            {
                                error.login && (
                                    <label className='label text-sm text-rose-600'>
                                        {error.login}
                                    </label>
                                )
                            }
                            <label onClick={handleForgotPassword} className='label'>
                                <a href="#" className='label-text-alt link link-hover'>Forget password?</a>
                            </label>
                        </div>
                        <button className="btn btn-outline w-full mt-4">Login</button>
                    </form>
                    <button onClick={googleAuth} className="btn btn-outline w-full flex items-center justify-center mt-6">
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