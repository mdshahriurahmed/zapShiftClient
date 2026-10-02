import { CiDeliveryTruck } from 'react-icons/ci';
import {
    FaMotorcycle,
    FaRegCreditCard,
    FaTasks,
    FaUsers
} from 'react-icons/fa';
import { Link, NavLink, Outlet } from 'react-router';
import useRole from '../hooks/useRole';
import { RiEBikeFill } from 'react-icons/ri';
import { SiGoogletasks } from 'react-icons/si';
import logoImg from '../assets/logo.png';
import './roorlayout.css';

const DashboardLayout = () => {
    const { role } = useRole();

    return (
        <div className="drawer lg:drawer-open mWidth container mx-auto bg-base-100">
            <input
                id="my-drawer-4"
                type="checkbox"
                className="drawer-toggle"
            />

            <div className="drawer-content">
                {/* Navbar */}
                <nav className="navbar w-full bg-white">
                    <label
                        htmlFor="my-drawer-4"
                        aria-label="open sidebar"
                        className="btn btn-square btn-ghost"
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            viewBox="0 0 24 24"
                            strokeLinejoin="round"
                            strokeLinecap="round"
                            strokeWidth="2"
                            fill="none"
                            stroke="currentColor"
                            className="my-1.5 inline-block size-4"
                        >
                            <path d="M4 4m0 2a2 2 0 0 1 2 -2h12a2 2 0 0 1 2 2v12a2 2 0 0 1 -2 2h-12a2 2 0 0 1 -2 -2z"></path>
                            <path d="M9 4v16"></path>
                            <path d="M14 10l2 2l-2 2"></path>
                        </svg>
                    </label>

                    <div className="px-4">
                        Zap Shift Dashboard
                    </div>
                </nav>

                <Outlet />
            </div>

            <div className="drawer-side is-drawer-close:overflow-visible">
                <label
                    htmlFor="my-drawer-4"
                    aria-label="close sidebar"
                    className="drawer-overlay"
                ></label>

                <div className="flex min-h-full flex-col items-start bg-white is-drawer-close:w-14 is-drawer-open:w-64">

                    <ul className="menu w-full grow text-gray-700">

                        {/* Logo */}
                        <li>
                            <Link to="/">
                                <img src={logoImg} alt="" />
                            </Link>
                        </li>

                        {/* Home */}
                        <li>
                            <Link
                                to="/dashboard"
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:tooltip-secondary "
                                data-tip="Homepage"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    fill="none"
                                    stroke="currentColor"
                                    className="my-1.5 inline-block size-4"
                                >
                                    <path d="M15 21v-8a1 1 0 0 0-1-1h-4a1 1 0 0 0-1 1v8"></path>
                                    <path d="M3 10a2 2 0 0 1 .709-1.528l7-5.999a2 2 0 0 1 2.582 0l7 5.999A2 2 0 0 1 21 10v9a2 2 0 0 1-2 2H5a2 2 0 0 1-2-2z"></path>
                                </svg>

                                <span className="is-drawer-close:hidden">
                                    Home page
                                </span>
                            </Link>
                        </li>

                        {/* My Parcels */}
                        <li>
                            <NavLink
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:tooltip-secondary"
                                data-tip="My Parcels"
                                to="/dashboard/my-parcels"
                            >
                                <CiDeliveryTruck />

                                <span className="is-drawer-close:hidden">
                                    My Parcels
                                </span>
                            </NavLink>
                        </li>

                        {/* Payment History */}
                        <li>
                            <NavLink
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:tooltip-secondary"
                                data-tip="Payment History"
                                to="/dashboard/payment-history"
                            >
                                <FaRegCreditCard />

                                <span className="is-drawer-close:hidden">
                                    Payment History
                                </span>
                            </NavLink>
                        </li>

                        {/* Rider Links */}
                        {role === 'rider' && (
                            <>
                                <li>
                                    <NavLink
                                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:tooltip-secondary"
                                        data-tip="Assigned Deliveries"
                                        to="/dashboard/assigned-deliveries"
                                    >
                                        <FaTasks />

                                        <span className="is-drawer-close:hidden">
                                            Assigned Deliveries
                                        </span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:tooltip-secondary"
                                        data-tip="Completed Deliveries"
                                        to="/dashboard/completed-deliveries"
                                    >
                                        <SiGoogletasks />

                                        <span className="is-drawer-close:hidden">
                                            Completed Deliveries
                                        </span>
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {/* Admin Links */}
                        {role === 'admin' && (
                            <>
                                <li>
                                    <NavLink
                                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:tooltip-secondary"
                                        data-tip="Approve Riders"
                                        to="/dashboard/approve-riders"
                                    >
                                        <FaMotorcycle />

                                        <span className="is-drawer-close:hidden">
                                            Approve Riders
                                        </span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:tooltip-secondary"
                                        data-tip="Assign Riders"
                                        to="/dashboard/assign-riders"
                                    >
                                        <RiEBikeFill />

                                        <span className="is-drawer-close:hidden">
                                            Assign Riders
                                        </span>
                                    </NavLink>
                                </li>

                                <li>
                                    <NavLink
                                        className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:tooltip-secondary"
                                        data-tip="Users Management"
                                        to="/dashboard/users-management"
                                    >
                                        <FaUsers />

                                        <span className="is-drawer-close:hidden">
                                            Users Management
                                        </span>
                                    </NavLink>
                                </li>
                            </>
                        )}

                        {/* Settings */}
                        <li>
                            <button
                                className="is-drawer-close:tooltip is-drawer-close:tooltip-right is-drawer-close:tooltip-secondary"
                                data-tip="Settings"
                            >
                                <svg
                                    xmlns="http://www.w3.org/2000/svg"
                                    viewBox="0 0 24 24"
                                    strokeLinejoin="round"
                                    strokeLinecap="round"
                                    strokeWidth="2"
                                    fill="none"
                                    stroke="currentColor"
                                    className="my-1.5 inline-block size-4"
                                >
                                    <path d="M20 7h-9"></path>
                                    <path d="M14 17H5"></path>
                                    <circle cx="17" cy="17" r="3"></circle>
                                    <circle cx="7" cy="7" r="3"></circle>
                                </svg>

                                <span className="is-drawer-close:hidden">
                                    Settings
                                </span>
                            </button>
                        </li>

                    </ul>
                </div>
            </div>
        </div>
    );
};

export default DashboardLayout;