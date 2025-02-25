import logo from "../assets/logo.png";
import { navItems } from "../constants";
import React, { useState, useEffect } from "react";
import { ArrowUp, Menu, X } from "lucide-react";

const Navbar = () => {
    const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);
    const [showScrollTop, setShowScrollTop] = useState(false);

    // Show scroll-to-top button when user scrolls down
    useEffect(() => {
        const handleScroll = () => {
            setShowScrollTop(window.scrollY > 200);
        };
        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    // Disable body scroll when mobile menu is open
    useEffect(() => {
        document.body.style.overflow = mobileDrawerOpen ? "hidden" : "auto";
    }, [mobileDrawerOpen]);

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = document.querySelector("nav").offsetHeight;
            const offsetPosition =
                element.getBoundingClientRect().top +
                window.scrollY -
                navbarHeight -
                48;

            window.scrollTo({ top: offsetPosition, behavior: "smooth" });
            setMobileDrawerOpen(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({ top: 0, behavior: "smooth" });
        setShowScrollTop(false);
    };

    return (
        <>
            <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
                <div className="container px-4 mx-auto relative lg:text-sm">
                    <div className="flex justify-between items-center">
                        <div className="flex items-center flex-shrink-0">
                            <img
                                className="h-10 w-10 mr-2"
                                src={logo}
                                alt="Logo"
                            />
                            <button
                                onClick={scrollToTop}
                                className="text-xl tracking-tight text-white hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text transition-all duration-300"
                            >
                                More Wealth Creation
                            </button>
                        </div>

                        {/* Desktop Navigation */}
                        <ul className="hidden lg:flex ml-14 space-x-12">
                            {navItems.map((item, index) => (
                                <li key={index} className="relative group">
                                    <button
                                        onClick={() => scrollToSection(item.id)}
                                        className="py-2 text-white hover:text-orange-500 transition-all duration-300"
                                    >
                                        {item.label}
                                    </button>
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-800 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                                </li>
                            ))}
                        </ul>

                        {/* Hamburger Menu for Mobile */}
                        <button
                            className="lg:hidden"
                            onClick={() =>
                                setMobileDrawerOpen(!mobileDrawerOpen)
                            }
                        >
                            {mobileDrawerOpen ? (
                                <X className="w-6 h-6 text-white" />
                            ) : (
                                <Menu className="w-6 h-6 text-white" />
                            )}
                        </button>
                    </div>

                    {/* Mobile Menu Dropdown */}
                    <div
                        className={`lg:hidden absolute  left-0 right-0 bg-neutral-900 backdrop-blur-lg border-b border-neutral-700/0 rounded-b-2xl overflow-hidden transition-all duration-300 ${
                            mobileDrawerOpen ? "max-h-[400px]" : "max-h-0"
                        }`}
                    >
                        <div className="flex flex-col p-4">
                            {navItems.map((item, index) => (
                                <button
                                    key={index}
                                    onClick={() => scrollToSection(item.id)}
                                    className="w-full text-left py-3 px-4 text-white hover:border-orange-500 hover:bg-gradient-to-r hover:from-orange-500 hover:to-orange-800 hover:text-transparent hover:bg-clip-text border-2 border-transparent rounded-md transition-all duration-300"
                                >
                                    {item.label}
                                </button>
                            ))}
                        </div>
                    </div>
                </div>
            </nav>

            {/* Overlay for Mobile Menu */}
            <div
                className={`fixed inset-0 z-40 lg:hidden transition-opacity duration-300 ${
                    mobileDrawerOpen
                        ? "opacity-100 pointer-events-auto"
                        : "opacity-0 pointer-events-none"
                }`}
                onClick={() => setMobileDrawerOpen(false)}
            >
                <div className="absolute inset-0 bg-black/50" />
            </div>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`z-40 fixed bottom-8 right-8 p-4 rounded-full shadow-xl transition-all duration-300 backdrop-blur-md bg-white/20 ${
                    showScrollTop
                        ? "translate-y-0 opacity-100"
                        : "translate-y-20 opacity-0"
                } before:absolute before:inset-0 before:-z-10 before:rounded-full before:bg-gradient-to-br before:from-orange-400 before:to-red-700 before:blur-sm`}
            >
                <ArrowUp className="w-6 h-6 text-white" />
            </button>
        </>
    );
};

export default Navbar;
