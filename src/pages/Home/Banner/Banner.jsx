import "react-responsive-carousel/lib/styles/carousel.min.css"; // requires a loader
import { Carousel } from 'react-responsive-carousel';
import bannerImg1 from "../../../assets/banner/banner1.png"
import bannerImg2 from "../../../assets/banner/banner2.png"
import bannerImg3 from "../../../assets/banner/banner3.png"
import vectorImg from "../../../assets/banner/Vector.png"
import dotLines from "../../../assets/bannerDot.png"
import Buttons from "./Buttons";

const Banner = () => {
    return (
        <Carousel
            autoPlay={true}
            infiniteLoop={true}
            showThumbs={false}
            interval={2000}
            className="bg-neutral shadow-sm rounded-xl mb-8 p-4 sm:p-6 lg:py-16 lg:px-24">
            {/* banner starts here 1 */}
            <div className="flex flex-col-reverse lg:flex-row justify-between">
                <div className="lg:w-3/5 xl:w-1/2 flex flex-col items-center lg:items-start lg:text-start text-center mt-8 lg:pr-4">

                    <img src={vectorImg} className="w-auto! h-auto" alt="" />

                    <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight text-secondary my-3">We Make Sure Your <span className="text-primary">Parcel Arrives</span> On Time – No Fuss.</h1>
                    <p className="lg:text-xs xl:text-base">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                    <Buttons></Buttons>
                    <img src={dotLines} className="w-36! h-auto mt-2" alt="" />
                </div>
                <div className="lg:w-2/5 xl:w-1/2 mt-8 flex justify-center xl:justify-end">
                    <img src={bannerImg1} className="w-96! md:w-auto!" alt="" />
                </div>

            </div>

            {/* Banner 2 starts here */}
            <div className="flex flex-col-reverse lg:flex-row justify-between">
                <div className="lg:w-3/5 xl:w-1/2 flex flex-col items-center lg:items-start lg:text-start text-center mt-8 lg:pr-4">

                    <img src={vectorImg} className="w-auto! h-auto" alt="" />

                    <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight text-secondary my-3">Fastest <span className="text-primary">Delivery</span> & Easy<span className="text-primary">Pickup</span></h1>
                    <p className="lg:text-xs xl:text-base">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                    <Buttons></Buttons>
                    <img src={dotLines} className="w-36! h-auto mt-2" alt="" />
                </div>
                <div className="lg:w-2/5 xl:w-1/2 mt-8 flex justify-center xl:justify-end">
                    <img src={bannerImg2} className="w-96! md:w-auto!" alt="" />
                </div>

            </div>

            {/* Banner 3 starts here */}
            <div className="flex flex-col-reverse lg:flex-row justify-between">
                <div className="lg:w-3/5 xl:w-1/2 flex flex-col items-center lg:items-start lg:text-start text-center mt-8 lg:pr-4">

                    <img src={vectorImg} className="w-auto! h-auto" alt="" />

                    <h1 className="text-3xl sm:text-4xl xl:text-5xl font-bold leading-tight text-secondary my-3">Delivery in <span className="text-primary">30 Minutes</span> at your  doorstep</h1>
                    <p className="lg:text-xs xl:text-base">Enjoy fast, reliable parcel delivery with real-time tracking and zero hassle. From personal packages to business shipments — we deliver on time, every time.</p>
                    <Buttons></Buttons>
                    <img src={dotLines} className="w-36! h-auto mt-2" alt="" />
                </div>
                <div className="lg:w-2/5 xl:w-1/2 mt-8 flex justify-center xl:justify-end">
                    <img src={bannerImg3} className="w-96! md:w-auto!" alt="" />
                </div>

            </div>

        </Carousel>
    );
};

export default Banner;