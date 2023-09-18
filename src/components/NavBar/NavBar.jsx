import { useState } from 'react';
import { AiOutlineMenu, AiOutlineClose } from 'react-icons/ai';
import Link from '../Link/Link';

const NavBar = () => {
    const [open, setOpen] = useState(false)
    const routes = [
        { id: 1, name: 'Home', path: '/' },
        { id: 2, name: 'About', path: '/about' },
        { id: 3, name: 'Contact', path: '/contact' },
        { id: 4, name: 'ProductDetail', path: '/products/:id' },
        { id: 5, name: 'NotFound', path: '*' }
    ];


    return (
        <nav >
            <div className='md:hidden' onClick={() => setOpen(!open)}>
                {
                    open == true ? < AiOutlineClose className='text-3xl cursor-pointer' /> : <AiOutlineMenu className='text-3xl md:hidden cursor-pointer'></AiOutlineMenu>
                }

            </div>
            <ul className={`md:flex duration-1000 absolute md:sticky ${open ? "top-16" : "-top-60"} bg-white px-6 shadow-lg`}>
                {routes.map(route => <Link key={route.id} route={route}></Link>)}
            </ul>
        </nav >
    );
};

export default NavBar;