import booking from "../../../assets/bookingIcon.png"
const HowWorks = () => {
    return (
        <div className="mb-8 p-1 sm:p-6 lg:py-16 lg:px-24">
            <h1 className="text-3xl font-bold text-secondary text-center">How it Works</h1>
            <div className="mt-9 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 xl:grid-cols-4  justify-items-center gap-5">
                {/* card 1 */}
                <div className="h-64 w-64 2xl:w-72 p-9 bg-white rounded-2xl shadow p-1.5">
                    <img src={booking} alt="" />
                    <h1 className="text-secondary font-bold text-xl my-3">Booking Pick & Drop</h1>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                {/* card 2 */}
                <div className="h-64 w-64 2xl:w-72 p-9 bg-white rounded-2xl shadow p-1.5">
                    <img src={booking} alt="" />
                    <h1 className="text-secondary font-bold text-xl my-3">Booking Pick & Drop</h1>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                {/* card 3 */}
                <div className="h-64 w-64 2xl:w-72 p-9 bg-white rounded-2xl shadow p-1.5">
                    <img src={booking} alt="" />
                    <h1 className="text-secondary font-bold text-xl my-3">Booking Pick & Drop</h1>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
                {/* card 4 */}
                <div className="h-64 w-64 2xl:w-72 p-9 bg-white rounded-2xl shadow p-1.5">
                    <img src={booking} alt="" />
                    <h1 className="text-secondary font-bold text-xl my-3">Booking Pick & Drop</h1>
                    <p>From personal packages to business shipments — we deliver on time, every time.</p>
                </div>
            </div>
        </div>
    );
};

export default HowWorks;