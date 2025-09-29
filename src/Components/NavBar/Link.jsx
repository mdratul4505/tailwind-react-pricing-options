import React from 'react';

const Link = ({route}) => {
    return (
        <>
    
            <li className='flex hover:bg-yellow-400 ml-9'><a href={route.path}>{route.name}</a></li>
        
        </>
    );
};

export default Link;