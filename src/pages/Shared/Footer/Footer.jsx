import { Link } from "react-router";
import Logo from "../../../components/Logo/Logo"
import linkedin from "../../../assets/social/linkedin.png"
import facebook from "../../../assets/social/facebook.png"
import twitter from "../../../assets/social/twitter.png"
import youtube from "../../../assets/social/youtube.png"

const Footer = () => {
    return (
        <footer className="bg-base-100 p-4 sm:p-6">
            <div className="mx-auto  rounded-[20px] bg-base-300 px-6 py-10 sm:px-10 sm:py-12">

                {/* Logo */}
                <div className="flex justify-center">
                    <Link
                        to="/"
                        className="text-2xl font-bold tracking-tight text-neutral"
                    >
                        <Logo></Logo>
                    </Link>
                </div>

                {/* Description */}
                <p className="mx-auto mt-3 max-w-xl text-center  leading-5 text-neutral/60 ">
                    Enjoy fast, reliable parcel delivery with real-time tracking and
                    zero hassle. From personal packages to business shipments — we
                    deliver on time, every time.
                </p>

                {/* Divider */}
                <div className="mx-auto mt-5 max-w-5xl border-t border-dashed border-secondary/40" />

                {/* Navigation */}
                <nav className="mt-5 flex flex-wrap justify-center gap-x-6 gap-y-3">
                    <Link
                        to="/services"
                        className=" text-neutral/80 transition hover:text-primary"
                    >
                        Services
                    </Link>

                    <Link
                        to="/coverage"
                        className=" text-neutral/80 transition hover:text-primary"
                    >
                        Coverage
                    </Link>

                    <Link
                        to="/about"
                        className=" text-neutral/80 transition hover:text-primary"
                    >
                        About Us
                    </Link>

                    <Link
                        to="/pricing"
                        className=" text-neutral/80 transition hover:text-primary"
                    >
                        Pricing
                    </Link>

                    <Link
                        to="/blog"
                        className=" text-neutral/80 transition hover:text-primary"
                    >
                        Blog
                    </Link>

                    <Link
                        to="/contact"
                        className=" text-neutral/80 transition hover:text-primary"
                    >
                        Contact
                    </Link>
                </nav>

                {/* Divider */}
                <div className="mx-auto mt-5 max-w-5xl border-t border-dashed border-secondary/40" />

                {/* Social Media */}
                <div className="mt-5 flex justify-center gap-3">

                    <Link to="#" aria-label="LinkedIn">
                        <img
                            src={linkedin}
                            alt="LinkedIn"
                            className="h-5 w-5 object-contain"
                        />
                    </Link>

                    <Link to="#" aria-label="X">
                        <img
                            src={twitter}
                            alt="X"
                            className="h-5 w-5 object-contain"
                        />
                    </Link>

                    <Link to="#" aria-label="Facebook">
                        <img
                            src={facebook}
                            alt="Facebook"
                            className="h-5 w-5 object-contain"
                        />
                    </Link>

                    <Link to="#" aria-label="YouTube">
                        <img
                            src={youtube}
                            alt="YouTube"
                            className="h-5 w-5 object-contain"
                        />
                    </Link>

                </div>
            </div>
        </footer>
    );
};

export default Footer;