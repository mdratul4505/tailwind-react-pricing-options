import React, { useState } from 'react';
import Link from './Link';
import { Menu, X } from 'lucide-react';
const navigationData = [
    {
        id: 1,
        name: "Home",
        path: "/"
    },
    {
        id: 2,
        name: "About",
        path: "/about"
    },
    {
        id: 3,
        name: "Services",
        path: "/services"
    },
    {
        id: 4,
        name: "Blog",
        path: "/blog"
    },
    {
        id: 5,
        name: "Contact",
        path: "/contact"
    }
];

// export default navigationData;


const NavBar = () => {

    const [ open , setOpen] = useState(false)

    const links = navigationData.map(route => <Link key={route.id} route={route}></Link>)

    return (
        <>
            <nav className='flex justify-between m-8'>

                <button className='flex' onClick={() => setOpen(!open)}>
                    { open ? <X className='md:hidden'></X> : <Menu className='md:hidden'></Menu>}

                    <ul className={`md:hidden absolute duration-1000 bg-amber-200 ${open ? 'top-8' : '-top-80'}`}>
                        {links}
                    </ul>
                    

                <h4 className='ml-5 md:ml-0' > My Navbar</h4>
                </button>

                <ul className='md:flex  hidden '>
                    {
                        links
                    }

                </ul>

                <button className='btn'>sign in</button>



                {/* <ul className='flex gap-3'>
                
                    {
                        navigationData.map(route => <li key={route.id}><a href={route.path}>{route.name}</a></li>)
                    }

            </ul> */}










                {/* <ul className='flex gap-3'>
                <li><a href="/">Home</a></li>
                <li><a href="/about">About</a></li>
                <li><a href="/blog">Blog</a></li>
                
            </ul> */}
            </nav>
        </>
    );
};

export default NavBar;