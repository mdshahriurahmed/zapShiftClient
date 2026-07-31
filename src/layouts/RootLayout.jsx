import { Outlet } from 'react-router';
import Footer from '../pages/Shared/Footer/Footer';
import NavBar from '../pages/Shared/Navbar/NavBar';
import './roorlayout.css'

const RootLayout = () => {
    return (
        <div className='mWidth container mx-auto p-4 sm:p-6 lg:p-8 bg-base-100 '>
            <NavBar></NavBar>
            <Outlet></Outlet>
            <Footer></Footer>
        </div>
    );
};

export default RootLayout;