import amazon from "../../assets/brands/amazon.png";
import casio from "../../assets/brands/casio.png";
import moonstar from "../../assets/brands/moonstar.png";
import randstat from "../../assets/brands/randstad.png";
import star from "../../assets/brands/star.png";
import start_people from "../../assets/brands/start_people.png";

import "swiper/css";
import { Swiper, SwiperSlide } from "swiper/react";
import { Autoplay } from "swiper/modules";

const brandLogos = [
    amazon,
    casio,
    moonstar,
    randstat,
    star,
    start_people,
    amazon,
    casio,
    moonstar,
    randstat,
    star,
    start_people,
];

const TrustedCompanies = () => {
    return (
        <section className=" p-4 sm:p-6 lg:py-16 ">
            <div>
                <h2 className="mb-8 text-center text-xl font-bold text-secondary md:text-2xl">
                    We've helped thousands of sales teams
                </h2>

                <Swiper
                    modules={[Autoplay]}
                    loop={true}
                    slidesPerView={6}
                    spaceBetween={0}
                    speed={8000}
                    autoplay={{
                        delay: 0,
                        disableOnInteraction: false,
                        pauseOnMouseEnter: false,
                    }}
                    allowTouchMove={false}
                    loopAdditionalSlides={6}
                    breakpoints={{
                        0: {
                            slidesPerView: 2,
                        },
                        640: {
                            slidesPerView: 3,
                        },
                        1024: {
                            slidesPerView: 6,
                        },
                    }}
                >
                    {brandLogos.map((logo, index) => (
                        <SwiperSlide key={index}>
                            <img
                                src={logo}
                                alt=""
                                className="mx-auto"
                            />
                        </SwiperSlide>
                    ))}
                </Swiper>
            </div>
        </section>
    );
};

export default TrustedCompanies;