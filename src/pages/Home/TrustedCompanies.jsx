import amazon from "../../assets/brands/amazon.png"
import casio from "../../assets/brands/casio.png"
import moonstar from "../../assets/brands/moonstar.png"
import randstat from "../../assets/brands/randstad.png"
import star from "../../assets/brands/star.png"
import start_people from "../../assets/brands/start_people.png"


const TrustedCompanies = () => {
    return (
        <section className="mb-8 p-4 sm:p-6 lg:py-16 lg:px-24">
            <div className=" ">
                <h2 className="mb-8 text-center text-xl font-bold text-secondary md:text-2xl">
                    We've helped thousands of sales teams
                </h2>

                <div className="flex flex-wrap items-center justify-center gap-x-12 gap-y-8 md:justify-between">
                    <img
                        src={casio}
                        alt="Casio"
                        className="h-6 w-auto object-contain"
                    />

                    <img
                        src={amazon}
                        alt="Amazon"
                        className="h-7 w-auto object-contain"
                    />

                    <img
                        src={moonstar}
                        alt="Moonstar"
                        className="h-7 w-auto object-contain"
                    />

                    <img
                        src={star}
                        alt="Star R"
                        className="h-7 w-auto object-contain"
                    />

                    <img
                        src={start_people}
                        alt="Startpeople"
                        className="h-7 w-auto object-contain"
                    />

                    <img
                        src={randstat}
                        alt="Randstad"
                        className="h-7 w-auto object-contain"
                    />
                </div>
            </div>
        </section>
    );
};

export default TrustedCompanies;