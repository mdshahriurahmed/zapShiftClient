import livetracking from "../../assets/live-tracking.png"
import safe_delivery from "../../assets/safe-delivery.png"

const DeliveryFeatures = () => {
    return (
        <section className="w-full mb-8 p-4 sm:p-6 lg:py-16 lg:px-24">
            {/* Top dotted line */}
            <div className="mb-5 w-full border-t border-dashed border-secondary  sm:mb-6" />

            <div className="flex w-full flex-col gap-4 sm:gap-5 my-20">
                {/* ================= FEATURE 01 ================= */}
                <div className="w-full rounded-[22px] bg-neutral px-5 py-6 sm:px-7 md:px-8 lg:px-10 lg:py-7">
                    <div className="flex w-full flex-col items-center gap-5 md:flex-row md:gap-7 lg:gap-9">

                        {/* Image */}
                        <div className="flex w-full shrink-0 items-center justify-center md:w-[175px] lg:w-[190px]">
                            <div className="flex h-[145px] w-[160px] items-center justify-center">
                                <img
                                    src={livetracking}
                                    alt="Live Parcel Tracking"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Divider + Content */}
                        <div className="w-full border-t border-dashed border-secondary/40 pt-5 md:border-l md:border-t-0 md:py-2 md:pl-7 lg:pl-9">
                            <h3 className="text-lg font-bold text-secondary sm:text-xl lg:text-[21px]">
                                Live Parcel Tracking
                            </h3>

                            <p className="mt-2    leading-6 text-secondary/65">
                                Stay updated in real-time with our live parcel tracking feature.
                                From pick-up to delivery, monitor your shipment&apos;s journey
                                and get instant status updates for complete peace of mind.
                            </p>
                        </div>

                    </div>
                </div>


                {/* ================= FEATURE 02 ================= */}
                <div className="w-full rounded-[22px] bg-neutral px-5 py-6 sm:px-7 md:px-8 lg:px-10 lg:py-7">
                    <div className="flex w-full flex-col items-center gap-5 md:flex-row md:gap-7 lg:gap-9">

                        {/* Image */}
                        <div className="flex w-full shrink-0 items-center justify-center md:w-[175px] lg:w-[190px]">
                            <div className="flex h-[145px] w-[160px] items-center justify-center">
                                <img
                                    src={safe_delivery}
                                    alt="100% Safe Delivery"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Divider + Content */}
                        <div className="w-full border-t border-dashed border-secondary/40 pt-5 md:border-l md:border-t-0 md:py-2 md:pl-7 lg:pl-9">
                            <h3 className="text-lg font-bold text-secondary sm:text-xl lg:text-[21px]">
                                100% Safe Delivery
                            </h3>

                            <p className="mt-2    leading-6 text-secondary/65">
                                We ensure your parcels are handled with the utmost care and
                                delivered securely to their destination. Our reliable process
                                guarantees safe and damage-free delivery every time.
                            </p>
                        </div>

                    </div>
                </div>


                {/* ================= FEATURE 03 ================= */}
                <div className="w-full rounded-[22px] bg-neutral px-5 py-6 sm:px-7 md:px-8 lg:px-10 lg:py-7">
                    <div className="flex w-full flex-col items-center gap-5 md:flex-row md:gap-7 lg:gap-9">

                        {/* Image */}
                        <div className="flex w-full shrink-0 items-center justify-center md:w-[175px] lg:w-[190px]">
                            <div className="flex h-[145px] w-[160px] items-center justify-center">
                                <img
                                    src={safe_delivery}
                                    alt="24/7 Call Center Support"
                                    className="h-full w-full object-contain"
                                />
                            </div>
                        </div>

                        {/* Divider + Content */}
                        <div className="w-full border-t border-dashed border-secondary/40 pt-5 md:border-l md:border-t-0 md:py-2 md:pl-7 lg:pl-9">
                            <h3 className="text-lg font-bold text-secondary sm:text-xl lg:text-[21px]">
                                24/7 Call Center Support
                            </h3>

                            <p className="mt-2    leading-6 text-secondary/65">
                                Our dedicated support team is available around the clock to
                                assist you with any questions, updates, or delivery
                                concerns—anytime you need us.
                            </p>
                        </div>

                    </div>
                </div>
            </div>

            {/* Bottom dotted line */}
            <div className="mt-5 w-full border-t border-dashed border-secondary/40 sm:mt-6" />
        </section>
    );
};

export default DeliveryFeatures;