import { Link, NavLink } from "react-router";
import Logo from "../../../components/Logo/Logo";
import useAuth from "../../../hooks/useAuth";
import useRole from "../../../hooks/useRole";


const NavBar = () => {

    const { user, logOut } = useAuth();
    const { role } = useRole();

    const handleLogOut = () => {
        logOut()
            .then()
            .catch(error => {
                console.log(error)
            })
    }

    const links = <>
        <li><NavLink to="">Services</NavLink></li>
        <li><NavLink to="/coverage">Coverage</NavLink></li>
        {
            user && <>

                <li><NavLink to="/dashboard">Dashboard</NavLink></li>
            </>
        }
        <li><NavLink to="">About Us</NavLink></li>
        <li><NavLink to="/send-parcel">Send Parcel</NavLink></li>
        <li><NavLink to="">Pricing</NavLink></li>

    </>
    return (
        <div className="navbar bg-neutral shadow-sm rounded-xl mb-8 py-3 lg:px-8 px-2">
            <div className="navbar-start">
                <div className="dropdown">
                    <div tabIndex={0} role="button" className="btn-ghost mr-4 lg:hidden">
                        <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor"> <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" /> </svg>
                    </div>
                    <ul
                        tabIndex="-1"
                        className="menu menu-sm dropdown-content bg-neutral rounded-box z-1 mt-3 w-52 p-2 shadow">
                        {links}
                    </ul>
                </div>
                <NavLink to="/">{<Logo></Logo>}</NavLink>
            </div>
            <div className="navbar-center hidden lg:flex">
                <ul className="menu menu-horizontal px-1 text-lg">
                    {links}
                </ul>
            </div>
            <div className="navbar-end ">
                {
                    user ?
                        <a onClick={handleLogOut} className="btn bg-white border-primary shadow-none">Log Out</a>
                        : <Link className='btn bg-white border-primary shadow-none' to="/login">Log in</Link>
                }
                {role === 'user' && (
                    <Link
                        className='btn btn-primary text-black mx-4'
                        to="/rider">Be a Rider</Link>
                )}


            </div>
        </div>
    );
};

export default NavBar;