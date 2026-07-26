import React from 'react';
import Banner from '../Banner/Banner';

const Home = () => {
    return (
        <div>
            <div className='relative'>
                <Banner></Banner>
                <div className='absolute left-32 bottom-36'>
                    <button className="btn bg-primary rounded-full text-secondary px-7">Track Your Parcel</button>
                </div>
            </div>
        </div>
    );
};

export default Home;