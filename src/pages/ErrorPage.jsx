import { useNavigate } from "react-router";
import error404Img from "../assets/notfound.png"
const ErrorPage = () => {
    const navigate = useNavigate();

    return (
        <div className="min-h-screen bg-[#EAECED] px-4 py-4">
            <div className="flex min-h-[373px] flex-col items-center justify-center rounded-[18px] bg-white px-6 text-center">

                <img
                    src={error404Img}
                    alt="Error 404"
                    className="w-[150px] sm:w-[170px]"
                />

                <h1 className="mt-2 text-[32px] font-extrabold leading-none text-[#181818] sm:text-[36px]">
                    Error 404
                </h1>

                <button
                    onClick={() => navigate("/")}
                    className="mt-9 rounded-[7px] bg-[#CAEB66] px-4 py-2 text-[10px] font-semibold text-[#03373D] transition hover:brightness-95"
                >
                    Go Home
                </button>

            </div>
        </div>
    );
};

export default ErrorPage;