import be_a_merchant_bg from "../../assets/be-a-merchant-bg.png"
import location_merchant from "../../assets/location-merchant.png"

const MerchantBanner = () => {
    return (
        <section className="w-full mb-8 p-4 sm:p-6 lg:py-16 lg:px-24">
            <div
                className="relative w-full overflow-hidden rounded-[20px] bg-secondary">

                <img src={be_a_merchant_bg} alt="" className=" pointer-events-none absolute left-0 top-0 h-auto w-full opacity-80 object-cover" />

                <div className="relative z-10 flex w-full flex-col-reverse items-center px-6 py-7 sm:px-8 sm:py-8 md:px-10 md:py-9 lg:flex-row lg:px-12 lg:py-10"
                >
                    {/* ================= LEFT CONTENT ================= */}
                    <div className="flex w-full flex-col items-start lg:w-[58%]">
                        <h2 className="max-w-none text-2xl font-bold leading-tight text-white sm:text-3xl md:text-[32px] lg:text-[34px]">
                            Merchant and Customer Satisfaction
                            <br className="hidden sm:block" />
                            is Our First Priority
                        </h2>

                        <p className="mt-3 max-w-[560px] leading-5 text-white/75     sm:leading-6">
                            We offer the lowest delivery charge with the highest value along
                            with 100% safety of your product. Pathao courier delivers your
                            parcels in every corner of Bangladesh right on time.
                        </p>

                        {/* Buttons */}
                        <div className="mt-5 flex w-full flex-col gap-3 sm:w-auto sm:flex-row sm:items-center">
                            <button type="button" className="btn h-11 min-h-11 rounded-full border-none bg-primary px-6 text-sm font-semibold text-secondary shadow-none hover:bg-primary">
                                Become a Merchant
                            </button>

                            <button type="button" className="btn h-11 min-h-11 rounded-full border border-primary bg-transparent px-6 text-sm font-semibold text-primary shadow-none hover:bg-primary hover:text-secondary">
                                Earn with ZapShift Courier
                            </button>
                        </div>
                    </div>

                    {/* ================= RIGHT IMAGE ================= */}
                    <div className="mb-6 flex w-full items-center justify-center lg:mb-0 lg:w-[42%] lg:justify-end">
                        <div className="flex h-[180px] w-full max-w-[360px] items-center justify-center sm:h-[200px] md:h-[220px]">

                            <img src={location_merchant} alt="Merchant and Customer" className="h-full w-full object-contain"
                            />
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
};

export default MerchantBanner;