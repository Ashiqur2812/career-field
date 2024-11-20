import React from 'react';
import { Outlet } from 'react-router-dom';
import Header from '../components/Header';

const AuthLayout = () => {
    return (
        <div>
            <div className='h-16'>
                <Header></Header>
            </div>
           <div>
                <Outlet></Outlet>
           </div>
        </div>
    );
};

export default AuthLayout;