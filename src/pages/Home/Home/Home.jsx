import Banner from '../Banner/Banner';
import DeliveryFeatures from '../DeliveryFeatures';
import HowWorks from '../HowWorks/HowWorks';
import Services from '../Services';
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

            </div>
        </div>
    );
};

export default Home;