import React from 'react';
import { Link } from 'react-router-dom';

const NotFound = () => {
    return (
        <div className="flex flex-col items-center justify-center min-h-screen bg-blue-100 relative overflow-hidden">   
            <div className="relative w-48 h-48 mb-8">
                <div className="absolute w-32 h-32 bg-yellow-500 rounded-full animate-bounce"></div>
                <div className="absolute top-4 left-6 w-32 h-32 rounded-full bg-gray-800 shadow-lg flex items-center justify-center">
                    <div className="w-12 h-12 bg-white rounded-full absolute -top-6 -left-6"></div>
                    <div className="w-12 h-12 bg-white rounded-full absolute -top-6 -right-6"></div>
                    <div className="w-12 h-12 bg-white rounded-full absolute -bottom-6 left-1/2 transform -translate-x-1/2"></div>
                </div>
            </div>
            <h1 className="text-6xl font-bold text-gray-800 mb-2">404</h1>
            <p className="text-xl text-gray-600 mb-6">Oops! The Page is not found.</p>
            <Link
                to="/"
                className="bg-purple-600 text-white px-6 py-3 rounded-lg shadow-lg hover:bg-purple-700 transition duration-300"
            >
                Back to Home
            </Link>
            <div className="absolute bottom-0 left-1/4 w-1/2 h-10 bg-yellow-500"></div>
            <div className="absolute bottom-0 right-0 w-1/4 h-10 bg-black rotate-45"></div>
        </div>
    );
};

export default NotFound;
