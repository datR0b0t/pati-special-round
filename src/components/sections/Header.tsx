"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, User, X } from "lucide-react";
import Link from "next/link";
import { useEffect, useState } from "react";
import Image from "next/image";
const leftNavItems = [
    { label: "Shop", href: "#", hasDropdown: true },
    { label: "Science", href: "#science" },
    { label: "The Beckham Stack", href: "#beckham-stack" },
    { label: "Welcome from David", href: "#welcome" },
];
const logoRed = "https://im8health.com/cdn/shop/files/Header-Logo-New.svg?v=1729066833&width=190";
const logoWhite = "https://im8health.com/cdn/shop/files/Header_White_logo.png?v=1731856481&width=1328";
const rightNavItems = [
    { label: "Reviews", href: "#reviews" },
    { label: "Ingredients", href: "#ingredients" },
    { label: "Discover", href: "#", hasDropdown: true },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartCount] = useState(1);
    const [showStickyBar, setShowStickyBar] = useState(false);

    useEffect(() => {
        const handleScroll = () => {
            // Show sticky bar after scrolling past ~100px (header height)
            setShowStickyBar(window.scrollY > 500);
        };

        window.addEventListener("scroll", handleScroll);
        return () => window.removeEventListener("scroll", handleScroll);
    }, []);

    return (
        <>
            {/* Sticky Top Bar - appears when scrolling */}
            <AnimatePresence>
                {showStickyBar && (
                    <motion.div
                        initial={{ y: -100, opacity: 0 }}
                        animate={{ y: 0, opacity: 1 }}
                        exit={{ y: -100, opacity: 0 }}
                        transition={{ duration: 0.3, ease: "easeOut" }}
                        className="fixed top-0 left-0 right-0 z-[60] bg-im8-dark-red"
                    >
                        <Container className="flex items-center justify-between py-4">
                            {/* Logo */}
                            <Link href="/" className="hidden md:flex md:flex-shrink-0">
                                <Image src={logoWhite} alt="Logo" width={100} height={100} />
                            </Link>

                            {/* Promo Text */}
                            <div className="flex-1 items-center justify-center">
                                <p className="text-sm lg:text-base md:block text-white text-center font-quantico tracking-wide">
                                    <span className="font-bold">2026 STARTS NOW:</span> 35% OFF — Feel Like Yourself Again
                                </p>
                            </div>

                            {/* CTA Button */}
                            <Button variant="secondary" size="sm" className="btn-shine bg-im8-bright-red text-white whitespace-nowrap w-[20vw] sm:w-[13vw] md:w-[15vw] min-w-[100px] max-w-[300px]text-xs md:text-sm lg:text-xl h-13 font-bold">
                                GET STARTED
                            </Button>
                        </Container>
                    </motion.div>
                )}
            </AnimatePresence>

            {/* Top Promo Banner */}
            <div className="bg-im8-bright-red text-white py-2 text-center text-sm font-medium font-quantico tracking-widest uppercase">
                2026 STARTS NOW: <br className="sm:hidden" /> 35% OFF — Feel Like Yourself Again
            </div>

            {/* Main Navigation */}
            <header className=" top-0 z-50 w-full bg-white">
                <Container className="flex h-12 items-center justify-between">
                    {/* Mobile Menu Button */}
                    <button
                        className="lg:hidden text-im8-dark-red z-50 relative"
                        onClick={() => setIsOpen(!isOpen)}
                        aria-label={isOpen ? "Close menu" : "Open menu"}
                    >
                        {isOpen ? <X className="h-6 w-6" /> : <Menu className="h-6 w-6" />}
                    </button>

                    {/* Left Navigation */}
                    <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6">
                        {leftNavItems.map((item) => (
                            <Link
                                key={item.label}
                                href={item.href}
                                className="group relative flex items-center gap-1 text-sm xl:text-base font-medium text-im8-dark-red"
                            >
                                <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-im8-dark-red after:transition-transform after:duration-300 after:ease-bounce-in group-hover:after:scale-x-100">
                                    {item.label}
                                </span>
                                {item.hasDropdown && <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />}
                            </Link>
                        ))}
                    </nav>

                    {/* Center Logo */}
                    <Link
                        href="/"
                        className="absolute left-1/2 -translate-x-1/2 text-xl font-serif font-bold text-white tracking-widest z-50"
                    >

                        <img src={logoRed} alt="IM8 Logo" className="h-6 w-auto" />

                    </Link>

                    {/* Right Navigation + Icons */}
                    <div className="flex items-center gap-6">
                        <nav className="hidden lg:flex items-center gap-3 xl:gap-5 2xl:gap-6">
                            {rightNavItems.map((item) => (
                                <Link
                                    key={item.label}
                                    href={item.href}
                                    className="group flex items-center gap-1 text-sm xl:text-base font-medium text-im8-dark-red transition-colors"
                                >
                                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-im8-dark-red after:transition-transform after:duration-300 after:ease-bounce-in group-hover:after:scale-x-100">
                                        {item.label}
                                    </span>
                                    {item.hasDropdown && <ChevronDown className="h-4 w-4 transition-transform duration-300 group-hover:rotate-180" />}
                                </Link>
                            ))}
                        </nav>

                        {/* Icons */}
                        <div className="flex items-center gap-4 text-white">
                            <button className="hidden lg:block hover:text-white/80 transition-colors" aria-label="Account">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M3 30C3 22.82 8.82 17 16 17C23.18 17 29 22.82 29 30" stroke="#50000B" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
                                    <path d="M16 17C20.1421 17 23.5 13.6421 23.5 9.5C23.5 5.35786 20.1421 2 16 2C11.8579 2 8.5 5.35786 8.5 9.5C8.5 13.6421 11.8579 17 16 17Z" stroke="#50000B" strokeWidth="2" strokeMiterlimit="10" strokeLinecap="square"></path>
                                </svg>
                            </button>
                            <button className="relative hover:text-white/80 transition-colors" aria-label="Cart">
                                <svg width="32" height="32" viewBox="0 0 32 32" fill="none" xmlns="http://www.w3.org/2000/svg" aria-hidden="true">
                                    <path d="M5.45011 5.45011L16 1.08232L26.5499 5.45011L30.9177 16L26.5499 26.5499L16 30.9177L5.45011 26.5499L1.08232 16L5.45011 5.45011Z" stroke="#50000B" strokeWidth="2"></path>
                                </svg>
                                <span className="absolute inset-0 flex items-center justify-center text-xs font-medium text-im8-dark-red">
                                    {cartCount}
                                </span>
                            </button>
                        </div>
                    </div>

                    {/* Mobile Menu Overlay */}
                    <AnimatePresence>
                        {isOpen && (
                            <motion.div
                                initial={{ opacity: 0, y: -20 }}
                                animate={{ opacity: 1, y: 0 }}
                                exit={{ opacity: 0, y: -20 }}
                                transition={{ duration: 0.2 }}
                                className="absolute top-full left-0 w-full bg-im8-dark-red border-b border-white/10 shadow-xl lg:hidden flex flex-col py-6 px-6 gap-4"
                            >
                                <nav className="flex flex-col gap-3 text-base font-medium text-white">
                                    {/* Left nav items */}
                                    {leftNavItems.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-between py-2 border-b border-white/10 hover:text-white/80 transition-colors"
                                        >
                                            {item.label}
                                            {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                                        </Link>
                                    ))}

                                    {/* Right nav items */}
                                    {rightNavItems.map((item) => (
                                        <Link
                                            key={item.label}
                                            href={item.href}
                                            onClick={() => setIsOpen(false)}
                                            className="flex items-center justify-between py-2 border-b border-white/10 hover:text-white/80 transition-colors"
                                        >
                                            {item.label}
                                            {item.hasDropdown && <ChevronDown className="h-4 w-4" />}
                                        </Link>
                                    ))}

                                    {/* Account link for mobile */}
                                    <Link
                                        href="#"
                                        onClick={() => setIsOpen(false)}
                                        className="flex items-center gap-2 py-2 hover:text-white/80 transition-colors"
                                    >
                                        <User className="h-5 w-5" /> Account
                                    </Link>
                                </nav>
                            </motion.div>
                        )}
                    </AnimatePresence>
                </Container>
            </header>

            {/* Backdrop for closing menu when clicking outside */}
            {isOpen && (
                <div
                    className="fixed inset-0 z-40 bg-black/20 lg:hidden"
                    onClick={() => setIsOpen(false)}
                />
            )}
        </>
    );
}
