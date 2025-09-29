import React, { use } from 'react';
import PricingCard from '../PricingCard/PricingCard';
import DaisyPricing from '../DaisyPricing/DaisyPricing';

const PricingOPrion = ({ PricingPromice }) => {
    const PricingData = use(PricingPromice);
    console.log(PricingData)
    return (
        <>
            <h2 className='text-6xl'>Get our membersheep</h2>

            <div className='grid gap-5 md:gird-cols-2 lg:grid-cols-3'>
                {/* {
                    PricingData.map(pricing => <PricingCard
                         key={pricing.id} 
                          pricing={pricing}></PricingCard>)
                } */}

                {
                    PricingData.map(pricing  => <DaisyPricing
                        key={pricing.id}
                        pricing = {pricing}></DaisyPricing>)
                }
            </div>
        </>
    );
};

export default PricingOPrion;