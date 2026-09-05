import Banner from '../Banner/Banner';
import DeliveryFeatures from '../DeliveryFeatures';
import FAQ from '../FAQ';
import HowWorks from '../HowWorks/HowWorks';
import MerchantBanner from '../MerchantBanner';
import Services from '../Services';
import Testimonials from '../Testimonials';
import TrustedCompanies from '../TrustedCompanies';


const Home = () => {
    return (
        <div >
            <div >
                <Banner></Banner>
                <HowWorks></HowWorks>
                <Services></Services>
                <TrustedCompanies></TrustedCompanies>
                <DeliveryFeatures></DeliveryFeatures>
                <MerchantBanner></MerchantBanner>
                <Testimonials></Testimonials>
                <FAQ></FAQ>

            </div>
        </div>
    );
};

export default Home;