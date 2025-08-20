    'use client';

    import React, { useState } from 'react';
    import Link from 'next/link';
    import './navbar.css';

    const menuItems = [
    { name: 'Home', href: '/' },
    { name: 'About Us', href: '/about' },
    { name: 'Contact', href: '/Contact' },
    {
        name: 'Solutions',
        href: '/solutions',
        dropdown: [
        { name: 'Battery Storage', href: '/solutions/battery-storage' },
        { name: 'Solar Integration', href: '/solutions/solar-integration' },
        { name: 'EV Charging', href: '/solutions/ev-charging' },
        ],
    },
    { name: 'Brand', href: '/brand' },
    ];

    const MenuItem = () => {
    const [openDropdown, setOpenDropdown] = useState<string | null>(null);
    const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
    const [mobileDropdown, setMobileDropdown] = useState<string | null>(null);

    const toggleMobileMenu = () => setIsMobileMenuOpen((prev) => !prev);

    // For mobile dropdown toggle
    const handleMobileDropdown = (name: string) => {
        setMobileDropdown((prev) => (prev === name ? null : name));
    };

    return (
        <nav className="navbar">
         
        <div className="flex justify-center  items-center px-4 sm:px-6 relative"> {/* Changed to justify-center */}
            {/* Logo or Brand (optional) */}
            <div className=" logo font-bold text-2xl ">
                    EShElL<br></br>
            </div>
            {/* Hamburger Menu for Mobile */}
            <button
            className="hamburger sm:hidden"
            onClick={toggleMobileMenu}
            aria-label="Toggle menu"
            >
            <span />
            <span />
            <span />
            </button>
           
            {/* Navbar Menu */}
            <ul className={`navbar-menu${isMobileMenuOpen ? ' open' : ''}`}>
            {menuItems.map((item) => (
                <li
                key={item.name}
                className={`navbar-item${item.dropdown ? ' has-dropdown' : ''}${isMobileMenuOpen && item.dropdown && mobileDropdown === item.name ? ' open' : ''}`}
                onMouseEnter={() => !isMobileMenuOpen && item.dropdown && setOpenDropdown(item.name)}
                onMouseLeave={() => !isMobileMenuOpen && item.dropdown && setOpenDropdown(null)}
                >
                <Link
                    href={item.href}
                    className="navbar-link"
                    onClick={() => {
                    if (isMobileMenuOpen && item.dropdown) {
                        handleMobileDropdown(item.name);
                    } else if (isMobileMenuOpen) {
                        setIsMobileMenuOpen(false);
                    }
                    }}
                >
                    {item.name}
                </Link>
                {item.dropdown && (
                    <div
                    className="dropdown-menu"
                    style={{
                        display:
                        (isMobileMenuOpen && mobileDropdown === item.name) ||
                        (!isMobileMenuOpen && openDropdown === item.name)
                            ? 'flex'
                            : 'none',
                    }}
                    >
                    {item.dropdown.map((drop) => (
                        <Link
                        key={drop.name}
                        href={drop.href}
                        className="dropdown-link"
                        onClick={() => setIsMobileMenuOpen(false)}
                        >
                        {drop.name}
                        </Link>
                    ))}
                    </div>
                )}
                </li>
            ))}
            </ul>
        </div>
        </nav>
    );
    };

    export default MenuItem;