import { Check } from 'lucide-react';
import React from 'react';

const PricingFeature = ({feature}) => {
    console.log(feature)
    return (
        <div >
            <p className='flex mt-4'> <Check className='mr-4'></Check> {feature}</p>
        </div>
    );
};

export default PricingFeature;