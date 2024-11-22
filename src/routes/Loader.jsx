import React from 'react';
import ReactLoading from "react-loading";

const Loader = () => {
    return (
        <div>
            <div className="flex items-center justify-center min-h-screen bg-gray-50">
                <ReactLoading type="bubbles" color="#6366F1" height={100} width={100} />
            </div>
        </div>
    );
};

export default Loader;