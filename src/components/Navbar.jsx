import logo from "../assets/logo.png";
import { navItems } from "../constants";
import React, { useState, useEffect } from "react";
import { ArrowUp } from "lucide-react";

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

    const scrollToSection = (sectionId) => {
        const element = document.getElementById(sectionId);
        if (element) {
            const navbarHeight = document.querySelector("nav").offsetHeight;
            const additionalOffset = 48; // Add extra padding from the navbar
            const elementPosition = element.getBoundingClientRect().top;
            const offsetPosition =
                elementPosition +
                window.scrollY -
                navbarHeight -
                additionalOffset;

            window.scrollTo({
                top: offsetPosition,
                behavior: "smooth",
            });
            setMobileDrawerOpen(false);
        }
    };

    const scrollToTop = () => {
        window.scrollTo({
            top: 0,
            behavior: "smooth",
        });
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
                                onClick={() => scrollToTop()}
                                className="text-xl tracking-tight hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text transition-all duration-300"
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
                                        className={`py-2 text-white hover:text-orange-500 transition-all duration-300`}
                                    >
                                        {item.label}
                                    </button>
                                    <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-800 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                                </li>
                            ))}
                        </ul>

                        {/* Hamburger Menu */}
                        <div className="lg:hidden">
                            <button
                                onClick={() =>
                                    setMobileDrawerOpen(!mobileDrawerOpen)
                                }
                                className="relative w-6 h-6 focus:outline-none"
                            >
                                <span
                                    className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                                        mobileDrawerOpen
                                            ? "rotate-45 translate-y-0"
                                            : "-translate-y-1"
                                    }`}
                                />
                                <span
                                    className={`absolute left-0 top-1/2 w-6 h-0.5 bg-current transform transition-all duration-300 ${
                                        mobileDrawerOpen
                                            ? "-rotate-45 translate-y-0"
                                            : "translate-y-1"
                                    }`}
                                />
                            </button>
                        </div>
                    </div>

                    {/* Mobile Navigation Drawer */}
                    {mobileDrawerOpen && (
                        <div
                            className={`fixed right-0 top-0 w-full bg-neutral-900 transform transition-all  duration-300 ease-in-out ${
                                mobileDrawerOpen
                                    ? "translate-y-16 opacity-100"
                                    : ""
                            }`}
                        >
                            <ul className="p-12 flex flex-col items-center space-y-8">
                                {navItems.map((item, index) => (
                                    <li
                                        key={index}
                                        className="relative group w-full text-center"
                                    >
                                        <button
                                            onClick={() =>
                                                scrollToSection(item.id)
                                            }
                                            className="py-2 hover:bg-gradient-to-r hover:from-orange-500 hover:to-red-800 hover:text-transparent hover:bg-clip-text transition-all duration-300"
                                        >
                                            {item.label}
                                        </button>
                                        <span className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-gradient-to-r from-orange-500 to-red-800 group-hover:w-full group-hover:left-0 transition-all duration-300" />
                                    </li>
                                ))}
                            </ul>
                        </div>
                    )}
                </div>
            </nav>

            {/* Scroll to Top Button */}
            <button
                onClick={scrollToTop}
                className={`z-40 fixed bottom-8 right-8 p-4 rounded-full shadow-xl transition-all duration-300 backdrop-blur-md bg-white/20 border-2 border-transparent ${
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
