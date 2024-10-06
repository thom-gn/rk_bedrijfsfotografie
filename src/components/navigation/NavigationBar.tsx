"use client"
import React, { useState, useEffect } from 'react';
import styles from './NavBar.module.css'; // Importing the CSS Module
import Button from '../button/Button';

export default function NavBar() {
    // State to toggle between transparent and sticky styles
    const [isScrolled, setIsScrolled] = useState(false);

    useEffect(() => {
        // Handler to manage scroll event
        const handleScroll = () => {
            const offset = window.scrollY; // Get scroll position
            setIsScrolled(offset > 200);   // Toggle state based on scroll position (e.g., 200px)
        };

        // Add event listener on scroll
        window.addEventListener('scroll', handleScroll);

        return () => {
            // Clean up the event listener
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return (
        <nav
            className={`${styles.nav} ${isScrolled ? styles.opaque + ' bg-white shadow-md py-6' : styles.transparent + ' bg-transparent py-4'} fixed top-0 left-0 w-full z-50 transition-all duration-300 ease-in-out`}
        >
            <section>
            <div className="container mx-auto px-4 flex items-center justify-between">
                {/* Logo / Brand */}
                <a href="#" className="text-xl font-bold text-white-800">RK Bedrijfsfotografie</a>

                {/* Links (hidden on mobile, visible on desktop) */}
                <div className={`${styles.navigationContainer} hidden md:flex space-x-6`}>
                    <a href="#home" className={`${styles.a} text-white-600`}>Home</a>
                    <a href="#about" className={`${styles.a} text-white-600`}>About</a>
                    <a href="#services" className={`${styles.a} text-white-600`}>Services</a>
                    <a href="#portfolio" className={`${styles.a} text-white-600`}>Portfolio</a>
                    <a href="#contact" className={`${styles.a} text-white-600`}>Contact</a>
                </div>

                {/* CTA button */}
                <div className="hidden md:block">
                    <Button
                        text="Maak een afspraak"
                        transparent={!isScrolled}
                    />
                </div>
            </div>
            </section>
        </nav>
    );
}
