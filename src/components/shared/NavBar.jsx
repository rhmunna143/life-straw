// NavBar.js

import { useState } from 'react';
import { Link } from 'react-router-dom';
import logo from '../../assets/logo.png';
import Container from './Container';
import cartIcon from '../../assets/icons/ic_outline-shopping-bag.svg';
import Search from '../home/search/Search';

const NavBar = () => {
    const [menuOpen, setMenuOpen] = useState(false);

    const handleMenuToggle = () => {
        setMenuOpen(!menuOpen);
    };

    return (
        <nav className='lg:fixed left-0 right-0 bg-white z-[1000]'>
            <Container>
                <div className="bg-bg flex flex-col lg:flex-row flex-wrap justify-between items-center">
                    <div className="logo">
                        <Link to="/">
                            <img className="h-24 w-40" src={logo} alt="logo" />
                        </Link>
                    </div>

                    <div className="menu flex flex-col md:flex-row gap-4 items-center">
                        <div
                            className={`menu-1 bg-primary flex flex-col gap-4 py-3 px-8 rounded-[33px] ${menuOpen ? 'block' : 'hidden md:block'
                                } md:flex md:flex-row`}
                        >
                            <Link to="/shop" className="text-white font-medium no-underline">
                                Shop
                            </Link>
                            <Link to="/technology" className="text-white font-medium no-underline">
                                Technology
                            </Link>
                            <Link to="/support" className="text-white font-medium no-underline">
                                Support
                            </Link>
                            <Link to="/corporate-sales" className="text-white font-medium no-underline">
                                Corporate Sales
                            </Link>
                        </div>

                        <div className="menu-2 bg-primaryBg py-3 h-5 pl-11 pr-5 rounded-[33px] flex items-center gap-4">
                            <Search />
                            <Link to={"/cart"}>
                                <img src={cartIcon} alt="cart icon" />
                            </Link>

                            {/* Hamburger menu button for small devices */}
                            <div
                                className="md:hidden cursor-pointer"
                                onClick={handleMenuToggle}
                            >
                                <svg
                                    className="h-6 w-6 text-[#4D6067]"
                                    fill="none"
                                    stroke="currentColor"
                                    viewBox="0 0 24 24"
                                    xmlns="http://www.w3.org/2000/svg"
                                >
                                    <path
                                        strokeLinecap="round"
                                        strokeLinejoin="round"
                                        strokeWidth="2"
                                        d="M4 6h16M4 12h16m-7 6h7"
                                    ></path>
                                </svg>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </nav>
    );
};

export default NavBar;