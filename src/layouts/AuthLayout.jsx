import React from 'react';
import Logo from '../components/Logo/Logo';
import { NavLink, Outlet } from 'react-router';
import authImg from "../assets/authImage.png"
import './roorlayout.css'

const AuthLayout = () => {
    return (
        <div className='mWidth container mx-auto p-4 sm:p-6 lg:p-8 bg-white'>
            <NavLink to="/"> <Logo></Logo></NavLink>
            <div className="min-h-screen flex flex-col lg:flex-row">

                {/* Left - Form */}
                <div className="w-full lg:w-1/2 flex items-center justify-center order-2 lg:order-1">
                    <div className="w-full max-w-md px-6">
                        <Outlet />
                    </div>
                </div>

                {/* Right - Image */}
                <div className="w-full lg:w-1/2 flex items-center justify-center order-1 lg:order-2 p-8">
                    <img
                        src={authImg}
                        alt="Authentication"
                        className="w-full h-full max-w-[650px] max-h-[650px] object-contain"
                    />
                </div>

            </div>
        </div>
    );
};

export default AuthLayout;