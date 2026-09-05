const Services = () => {
    return (
        <section className="bg-secondary rounded-2xl px-5 py-12 md:px-10 md:py-16">
            <div className="mx-auto max-w-5xl ">

                {/* Section Header */}
                <div className="mx-auto mb-6 max-w-xl text-center">
                    <h2 className="mb-3 text-3xl font-bold text-white">
                        Our Services
                    </h2>

                    <p className="text-sm leading-6 text-white/70">
                        Enjoy fast, reliable parcel delivery with real-time tracking and
                        zero hassle. From personal packages to business shipments — we
                        deliver on time, every time.
                    </p>
                </div>

                {/* Services Grid */}
                <div className="grid grid-cols-1 gap-4 md:grid-cols-2 lg:grid-cols-3">

                    {/* Card 1 */}
                    <div className="min-h-[254px] rounded-2xl bg-neutral px-7 py-6 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-base-100">
                            <span className="text-3xl">📦</span>
                        </div>

                        <h3 className="mt-5 text-[17px] font-bold leading-5 text-secondary">
                            Express & Standard
                            <br />
                            Delivery
                        </h3>

                        <p className="mt-3 text-[13px] leading-[19px] text-secondary/70">
                            We deliver parcels within 24–72 hours in Dhaka, Chittagong,
                            Sylhet, Khulna, and Rajshahi. Express delivery available in
                            Dhaka within 4–6 hours from pick-up to drop-off.
                        </p>
                    </div>

                    {/* Card 2 */}
                    <div className="min-h-[254px] rounded-2xl bg-primary px-7 py-6 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-base-100">
                            <span className="text-3xl">📦</span>
                        </div>

                        <h3 className="mt-5 text-[17px] font-bold leading-5 text-secondary">
                            Nationwide Delivery
                        </h3>

                        <p className="mt-3 text-[13px] leading-[19px] text-secondary/70">
                            We deliver parcels nationwide with home delivery in every
                            district, ensuring your products reach customers within
                            48–72 hours.
                        </p>
                    </div>

                    {/* Card 3 */}
                    <div className="min-h-[254px] rounded-2xl bg-neutral px-7 py-6 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-base-100">
                            <span className="text-3xl">📦</span>
                        </div>

                        <h3 className="mt-5 text-[17px] font-bold leading-5 text-secondary">
                            Fulfillment Solution
                        </h3>

                        <p className="mt-3 text-[13px] leading-[19px] text-secondary/70">
                            We also offer customized service with inventory management
                            support, online order processing, packaging, and after sales
                            support.
                        </p>
                    </div>

                    {/* Card 4 */}
                    <div className="min-h-[254px] rounded-2xl bg-neutral px-7 py-6 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-base-100">
                            <span className="text-3xl">📦</span>
                        </div>

                        <h3 className="mt-5 text-[17px] font-bold leading-5 text-secondary">
                            Cash on Home Delivery
                        </h3>

                        <p className="mt-3 text-[13px] leading-[19px] text-secondary/70">
                            100% cash on delivery anywhere in Bangladesh with guaranteed
                            safety of your product.
                        </p>
                    </div>

                    {/* Card 5 */}
                    <div className="min-h-[254px] rounded-2xl bg-neutral px-7 py-6 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-base-100">
                            <span className="text-3xl">📦</span>
                        </div>

                        <h3 className="mt-5 text-[17px] font-bold leading-5 text-secondary">
                            Corporate Service / Contract
                            <br />
                            In Logistics
                        </h3>

                        <p className="mt-3 text-[13px] leading-[19px] text-secondary/70">
                            Customized corporate services which includes warehouse and
                            inventory management support.
                        </p>
                    </div>

                    {/* Card 6 */}
                    <div className="min-h-[254px] rounded-2xl bg-neutral px-7 py-6 text-center">
                        <div className="mx-auto flex h-16 w-16 items-center justify-center rounded-full bg-base-100">
                            <span className="text-3xl">📦</span>
                        </div>

                        <h3 className="mt-5 text-[17px] font-bold leading-5 text-secondary">
                            Parcel Return
                        </h3>

                        <p className="mt-3 text-[13px] leading-[19px] text-secondary/70">
                            Through our reverse logistics facility we allow end customers
                            to return or exchange their products with online business
                            merchants.
                        </p>
                    </div>

                </div>
            </div>
        </section>
    );
};

export default Services;