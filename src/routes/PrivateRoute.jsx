import React, { useContext } from 'react';
import { AuthContext } from '../provider/AuthProvider';
import { Navigate, useLocation } from 'react-router-dom';
import Loader from './Loader';

const PrivateRoute = ({ children }) => {
    const location = useLocation();
    console.log(location);
    const { user, loading } = useContext(AuthContext);

    if (loading) {
        return <Loader></Loader>;
    }
    if (user && user?.email) {
        return children;
    }
    return <Navigate state={location.path} to='/auth/login'></Navigate>;


};

export default PrivateRoute;