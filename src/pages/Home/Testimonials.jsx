import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";

import customer_top from "../../assets/customer-top.png";
import reviewQuote from "../../assets/reviewQuote.png";

const Testimonials = () => {
    return (
        <section className="w-full overflow-hidden mb-8 p-4 sm:p-6 lg:py-16 lg:px-24">

            {/* Top Illustration */}
            <div className="mb-4 flex justify-center">
                <img
                    src={customer_top}
                    alt=""
                    className="h-[75px] w-auto object-contain"
                />
            </div>

            {/* Heading */}
            <div className="mx-auto mb-7 w-full text-center">
                <h2 className="text-2xl font-bold text-secondary sm:text-3xl">
                    What our customers are sayings
                </h2>

                <p className="mx-auto mt-2 max-w-[550px] text-xs leading-5 text-secondary/60 sm:text-sm">
                    Enhance posture, mobility, and well-being effortlessly with Posture Pro.
                    Achieve proper alignment, reduce pain, and strengthen your body with ease!
                </p>
            </div>

            {/* Carousel */}
            <div className="w-full">
                <Swiper
                    modules={[Autoplay, Navigation, Pagination]}
                    loop={true}
                    centeredSlides={true}
                    slidesPerView="auto"
                    spaceBetween={24}
                    autoplay={{
                        delay: 3000,
                        disableOnInteraction: false,
                    }}
                    navigation={{
                        nextEl: ".testimonial-next",
                        prevEl: ".testimonial-prev",
                    }}
                    pagination={{
                        el: ".testimonial-pagination",
                        clickable: true,
                    }}
                    className="!overflow-visible"
                >

                    {/* Slide 01 */}
                    <SwiperSlide className="!h-auto !w-[calc(100vw-80px)] sm:!w-[500px] lg:!w-[570px]">
                        <div className="testimonial-card h-full rounded-2xl bg-neutral p-5 shadow-sm sm:p-6">

                            <img src={reviewQuote} alt="" />

                            <p className="text-xs leading-5 text-secondary/70 sm:text-sm">
                                A posture corrector works by providing support and gentle
                                alignment to your shoulders, back, and spine, encouraging you
                                to maintain proper posture throughout the day.
                            </p>

                            <div className="my-4 border-t border-dashed border-secondary/30" />

                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 shrink-0 rounded-full bg-base-200" />

                                <div>
                                    <h4 className="text-sm font-bold text-secondary">
                                        Awlad Hossin
                                    </h4>

                                    <p className="text-[11px] text-secondary/60">
                                        Senior Product Designer
                                    </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>


                    {/* Slide 02 */}
                    <SwiperSlide className="!h-auto !w-[calc(100vw-80px)] sm:!w-[500px] lg:!w-[570px]">
                        <div className="testimonial-card h-full rounded-2xl bg-neutral p-5 shadow-sm sm:p-6">

                            <img src={reviewQuote} alt="" />

                            <p className="text-xs leading-5 text-secondary/70 sm:text-sm">
                                This product has helped me improve my posture significantly.
                                It is comfortable, lightweight, and very easy to use throughout
                                the day.
                            </p>

                            <div className="my-4 border-t border-dashed border-secondary/30" />

                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 shrink-0 rounded-full bg-base-200" />

                                <div>
                                    <h4 className="text-sm font-bold text-secondary">
                                        Rasel Ahamed
                                    </h4>

                                    <p className="text-[11px] text-secondary/60">
                                        CTO
                                    </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>


                    {/* Slide 03 */}
                    <SwiperSlide className="!h-auto !w-[calc(100vw-80px)] sm:!w-[500px] lg:!w-[570px]">
                        <div className="testimonial-card h-full rounded-2xl bg-neutral p-5 shadow-sm sm:p-6">

                            <img src={reviewQuote} alt="" />

                            <p className="text-xs leading-5 text-secondary/70 sm:text-sm">
                                I noticed a real difference after using it consistently.
                                My back feels better and maintaining proper posture has become
                                much easier.
                            </p>

                            <div className="my-4 border-t border-dashed border-secondary/30" />

                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 shrink-0 rounded-full bg-base-200" />

                                <div>
                                    <h4 className="text-sm font-bold text-secondary">
                                        Nasir Uddin
                                    </h4>

                                    <p className="text-[11px] text-secondary/60">
                                        CEO
                                    </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>


                    {/* Slide 04 */}
                    <SwiperSlide className="!h-auto !w-[calc(100vw-80px)] sm:!w-[500px] lg:!w-[570px]">
                        <div className="testimonial-card h-full rounded-2xl bg-neutral p-5 shadow-sm sm:p-6">

                            <img src={reviewQuote} alt="" />

                            <p className="text-xs leading-5 text-secondary/70 sm:text-sm">
                                Very useful for everyday work. The support is comfortable and
                                helps me stay aware of my posture while working for long hours.
                            </p>

                            <div className="my-4 border-t border-dashed border-secondary/30" />

                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 shrink-0 rounded-full bg-base-200" />

                                <div>
                                    <h4 className="text-sm font-bold text-secondary">
                                        Awlad Hossin
                                    </h4>

                                    <p className="text-[11px] text-secondary/60">
                                        Product Designer
                                    </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>


                    {/* Slide 05 */}
                    <SwiperSlide className="!h-auto !w-[calc(100vw-80px)] sm:!w-[500px] lg:!w-[570px]">
                        <div className="testimonial-card h-full rounded-2xl bg-neutral p-5 shadow-sm sm:p-6">

                            <img src={reviewQuote} alt="" />

                            <p className="text-xs leading-5 text-secondary/70 sm:text-sm">
                                The product is simple to use and has made maintaining good
                                posture much easier during my daily activities.
                            </p>

                            <div className="my-4 border-t border-dashed border-secondary/30" />

                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 shrink-0 rounded-full bg-base-200" />

                                <div>
                                    <h4 className="text-sm font-bold text-secondary">
                                        Karim Hasan
                                    </h4>

                                    <p className="text-[11px] text-secondary/60">
                                        Manager
                                    </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>


                    {/* Slide 06 */}
                    <SwiperSlide className="!h-auto !w-[calc(100vw-80px)] sm:!w-[500px] lg:!w-[570px]">
                        <div className="testimonial-card h-full rounded-2xl bg-neutral p-5 shadow-sm sm:p-6">

                            <img src={reviewQuote} alt="" />

                            <p className="text-xs leading-5 text-secondary/70 sm:text-sm">
                                Comfortable, lightweight and effective. I would definitely
                                recommend it to anyone looking to improve their posture.
                            </p>

                            <div className="my-4 border-t border-dashed border-secondary/30" />

                            <div className="flex items-center gap-3">
                                <div className="h-9 w-9 shrink-0 rounded-full bg-base-200" />

                                <div>
                                    <h4 className="text-sm font-bold text-secondary">
                                        Sumaiya Akter
                                    </h4>

                                    <p className="text-[11px] text-secondary/60">
                                        Designer
                                    </p>
                                </div>
                            </div>

                        </div>
                    </SwiperSlide>

                </Swiper>
            </div>


            {/* Controls */}
            <div className="mt-5 flex items-center justify-center gap-3">

                {/* Previous */}
                <button
                    type="button"
                    className="testimonial-prev flex h-9 w-9 items-center justify-center rounded-full bg-neutral text-secondary shadow-sm transition hover:bg-primary"
                >
                    ←
                </button>

                {/* Pagination */}
                <div className="testimonial-pagination !static flex w-auto items-center justify-center gap-1" />

                {/* Next */}
                <button
                    type="button"
                    className="testimonial-next flex h-9 w-9 items-center justify-center rounded-full bg-primary text-secondary shadow-sm transition hover:bg-primary/80"
                >
                    →
                </button>

            </div>


            {/* Custom Swiper Styling */}
            <style jsx>{`
                .swiper-slide {
                    opacity: 0.22;
                    transform: scale(0.9);
                    transition:
                        opacity 0.4s ease,
                        transform 0.4s ease;
                }

                .swiper-slide-active {
                    opacity: 1;
                    transform: scale(1);
                }

                .testimonial-pagination .swiper-pagination-bullet {
                    width: 5px;
                    height: 5px;
                    opacity: 1;
                    background: #33929d;
                }

                .testimonial-pagination .swiper-pagination-bullet-active {
                    width: 6px;
                    height: 6px;
                    background: #03373d;
                }
            `}</style>

        </section>
    );
};

export default Testimonials;