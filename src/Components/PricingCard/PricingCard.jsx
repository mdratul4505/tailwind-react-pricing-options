import React from 'react';
import PricingFeature from './PricingFeature';

const PricingCard = ({pricing}) => {
    const {name , price ,description ,features } = pricing
    return (
        <div className='border bg-lime-600 rounded-2xl p-4 flex flex-col'>
            <div >
            <h1 className="text-7xl">{name}</h1>
            <h3 className="text-3xl">{price}</h3>
        </div>

    
        <div className='bg-lime-400 p-4 rounded-2xl mt-8 flex-1'>
            <p>{description}</p>

            {
                features.map((feature , index) => <PricingFeature 
                key={index}
                feature = {feature}></PricingFeature>)
            }
        </div>

        <button className="btn w-full mt-5">subcribe</button>
        </div>
    );
};

export default PricingCard;