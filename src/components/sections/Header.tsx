"use client";

import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { AnimatePresence, motion } from "framer-motion";
import { ChevronDown, Menu, X } from "lucide-react";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";

const shopDropdownItems = [
    {
        title: "Daily Ultimate Essentials",
        description: "All-in-one supplement with 92 nutrient-rich ingredients in one delicious drink.",
        image: "https://im8health.com/cdn/shop/files/DUE-thumb.png?v=1762223928&width=600",
        href: "#",
        bgColor: "bg-gradient-to-r from-red-50 to-orange-50",
    },
    {
        title: "Daily Ultimate Longevity",
        description: "Scientifically formulated to support all 12 hallmarks of aging.",
        image: "https://im8health.com/cdn/shop/files/DUL-thumb.png?v=1762223929&width=600",
        href: "#",
        bgColor: "bg-gradient-to-r from-red-50 to-orange-50",
    },
    {
        title: "The Beckham Stack",
        description: "Daily Ultimate Essentials and Daily Ultimate Longevity set.",
        image: "https://im8health.com/cdn/shop/files/navbar_bstack_50dfae75-582e-400b-bce4-77aa74faa198.png?v=1762223932&width=600",
        href: "#",
        bgColor: "bg-im8-bright-red",
        isHighlighted: true,
    },
    {
        title: "Wall of Health",
        subtitle: "Reviews",
        image: "https://im8health.com/cdn/shop/files/nav_wallofhealth.png?v=1736149918&width=600",
        href: "#",
        bgColor: "bg-gradient-to-r from-red-50 to-orange-50",
    },
    {
        title: "Merchandise",
        subtitle: "Shop",
        image: "https://im8health.com/cdn/shop/files/nav-d-merch-04.png?v=1732028322&width=600",
        href: "#",
        bgColor: "bg-gradient-to-r from-red-50 to-orange-50",
    },
];

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

const discoverDropdownItems = [
    { label: "About Us", href: "#" },
    { label: "Our Impact", href: "#" },
    { label: "Quality and Standards", href: "#" },
    { label: "The Healthspan Blog", href: "#" },
];

export function Header() {
    const [isOpen, setIsOpen] = useState(false);
    const [cartCount] = useState(1);
    const [showStickyBar, setShowStickyBar] = useState(false);
    const [showShopDropdown, setShowShopDropdown] = useState(false);
    const [showDiscoverDropdown, setShowDiscoverDropdown] = useState(false);

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
            <div className={`bg-im8-bright-red text-white py-2 text-center text-sm font-medium font-quantico tracking-widest uppercase ${isOpen ? 'fixed top-0 left-0 right-0 z-[101]' : ''}`}>
                2026 STARTS NOW: <br className="sm:hidden" /> 35% OFF — Feel Like Yourself Again
            </div>

            {/* Main Navigation */}
            <header className={`top-0 z-50 w-full bg-white ${isOpen ? 'fixed left-0 right-0 z-[101]' : ''}`} style={isOpen ? { top: '2rem' } : {}}>
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
                            <div
                                key={item.label}
                                className="relative"
                                onMouseEnter={() => item.label === "Shop" && setShowShopDropdown(true)}
                                onMouseLeave={() => item.label === "Shop" && setShowShopDropdown(false)}
                            >
                                <Link
                                    href={item.href}
                                    className="group relative flex items-center gap-1 text-sm xl:text-base font-medium text-im8-dark-red"
                                >
                                    <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-im8-dark-red after:transition-transform after:duration-300 after:ease-bounce-in group-hover:after:scale-x-100">
                                        {item.label}
                                    </span>
                                    {item.hasDropdown && <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${item.label === "Shop" && showShopDropdown ? "rotate-180" : ""}`} />}
                                </Link>

                                {/* Shop Dropdown */}
                                {item.label === "Shop" && (
                                    <AnimatePresence>
                                        {showShopDropdown && (
                                            <motion.div
                                                initial={{ opacity: 0, y: 10 }}
                                                animate={{ opacity: 1, y: 0 }}
                                                exit={{ opacity: 0, y: 10 }}
                                                transition={{ duration: 0.2 }}
                                                className="absolute top-full left-0 pt-2 z-50"
                                            >
                                                <div className="bg-white rounded-2xl shadow-2xl border border-gray-100 p-3 w-[380px] space-y-2">
                                                    {shopDropdownItems.map((dropItem, index) => (
                                                        <Link key={index} href={dropItem.href} className="block">
                                                            <div className="rounded-xl overflow-hidden hover:shadow-md transition-shadow">
                                                                <Image
                                                                    src={dropItem.image}
                                                                    alt={dropItem.title}
                                                                    width={360}
                                                                    height={100}
                                                                    className="w-full h-auto object-cover"
                                                                />
                                                            </div>
                                                        </Link>
                                                    ))}
                                                </div>
                                            </motion.div>
                                        )}
                                    </AnimatePresence>
                                )}
                            </div>
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
                                <div
                                    key={item.label}
                                    className="relative"
                                    onMouseEnter={() => item.label === "Discover" && setShowDiscoverDropdown(true)}
                                    onMouseLeave={() => item.label === "Discover" && setShowDiscoverDropdown(false)}
                                >
                                    <Link
                                        href={item.href}
                                        className="group flex items-center gap-1 text-sm xl:text-base font-medium text-im8-dark-red transition-colors"
                                    >
                                        <span className="relative after:absolute after:bottom-0 after:left-0 after:h-[2px] after:w-full after:origin-center after:scale-x-0 after:bg-im8-dark-red after:transition-transform after:duration-300 after:ease-bounce-in group-hover:after:scale-x-100">
                                            {item.label}
                                        </span>
                                        {item.hasDropdown && <ChevronDown className={`h-4 w-4 transition-transform duration-300 ${item.label === "Discover" && showDiscoverDropdown ? "rotate-180" : ""}`} />}
                                    </Link>

                                    {/* Discover Dropdown */}
                                    {item.label === "Discover" && (
                                        <AnimatePresence>
                                            {showDiscoverDropdown && (
                                                <motion.div
                                                    initial={{ opacity: 0, y: 10 }}
                                                    animate={{ opacity: 1, y: 0 }}
                                                    exit={{ opacity: 0, y: 10 }}
                                                    transition={{ duration: 0.2 }}
                                                    className="absolute top-full right-0 pt-2 z-50"
                                                >
                                                    <div className="bg-white rounded-xl shadow-2xl border border-gray-100 py-3 w-[220px]">
                                                        {discoverDropdownItems.map((dropItem, index) => (
                                                            <Link
                                                                key={index}
                                                                href={dropItem.href}
                                                                className="block px-5 py-2.5 text-im8-dark-red font-medium hover:bg-red-50 transition-colors"
                                                            >
                                                                {dropItem.label}
                                                            </Link>
                                                        ))}
                                                    </div>
                                                </motion.div>
                                            )}
                                        </AnimatePresence>
                                    )}
                                </div>
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
                                initial={{ x: "-100%" }}
                                animate={{ x: 0 }}
                                exit={{ x: "-100%" }}
                                transition={{ duration: 0.3, ease: "easeOut" }}
                                className="fixed top-[calc(2rem+48px)] left-0 w-full h-[calc(100vh-2rem-48px)] bg-im8-cream z-[100] lg:hidden overflow-y-auto"
                            >


                                {/* Product Cards */}
                                <div className="px-4 py-4 space-y-3">
                                    {/* IM8: The New Gold Standard */}
                                    <Link href="#" onClick={() => setIsOpen(false)} className="block">
                                        <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-3 flex items-center justify-between">
                                            <div className="bg-im8-dark-red text-white text-xs font-semibold px-4 py-2 rounded-full">
                                                IM8: The New Gold Standard
                                            </div>
                                            <div className="flex items-center gap-2">
                                                <Image
                                                    src="https://im8health.com/cdn/shop/files/DUE-thumb.png?v=1762223928&width=600"
                                                    alt="IM8"
                                                    width={40}
                                                    height={40}
                                                    className="w-10 h-10 object-cover rounded"
                                                />
                                                <span className="text-xs text-gray-500">vs</span>
                                                <div className="w-10 h-10 rounded bg-green-600 flex items-center justify-center">
                                                    <span className="text-white text-[8px] font-bold text-center">Green<br />Powders</span>
                                                </div>
                                            </div>
                                        </div>
                                    </Link>

                                    {/* Daily Ultimate Essentials */}
                                    <Link href="#" onClick={() => setIsOpen(false)} className="block">
                                        <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-4 flex items-center justify-between">
                                            <div>
                                                <h3 className="text-xl font-serif text-im8-dark-red">Daily Ultimate<br />Essentials</h3>
                                                <p className="text-xs text-gray-600 mt-2 max-w-[180px]">All-in-one supplement with 92 nutrient-rich ingredients in one delicious drink.</p>
                                            </div>
                                            <Image
                                                src="https://im8health.com/cdn/shop/files/DUE-thumb.png?v=1762223928&width=600"
                                                alt="Daily Ultimate Essentials"
                                                width={100}
                                                height={80}
                                                className="w-24 h-auto object-cover rounded"
                                            />
                                        </div>
                                    </Link>

                                    {/* Daily Ultimate Longevity */}
                                    <Link href="#" onClick={() => setIsOpen(false)} className="block">
                                        <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-4 flex items-center justify-between">
                                            <div>
                                                <h3 className="text-xl font-serif text-im8-dark-red">Daily Ultimate<br />Longevity</h3>
                                                <p className="text-xs text-gray-600 mt-2 max-w-[180px]">Scientifically formulated to support all 12 hallmarks of aging.</p>
                                            </div>
                                            <Image
                                                src="https://im8health.com/cdn/shop/files/DUL-thumb.png?v=1762223929&width=600"
                                                alt="Daily Ultimate Longevity"
                                                width={100}
                                                height={80}
                                                className="w-24 h-auto object-cover rounded"
                                            />
                                        </div>
                                    </Link>

                                    {/* The Beckham Stack */}
                                    <Link href="#" onClick={() => setIsOpen(false)} className="block">
                                        <div className="bg-im8-bright-red rounded-xl p-4 flex items-center justify-between">
                                            <div>
                                                <h3 className="text-xl font-serif text-white">The Beckham<br />Stack</h3>
                                                <p className="text-xs text-white/80 mt-2 max-w-[180px]">Daily Ultimate Essentials and Daily Ultimate Longevity set.</p>
                                            </div>
                                            <Image
                                                src="https://im8health.com/cdn/shop/files/navbar_bstack_50dfae75-582e-400b-bce4-77aa74faa198.png?v=1762223932&width=600"
                                                alt="The Beckham Stack"
                                                width={100}
                                                height={80}
                                                className="w-24 h-auto object-cover rounded"
                                            />
                                        </div>
                                    </Link>

                                    {/* Wall of Health */}
                                    <Link href="#" onClick={() => setIsOpen(false)} className="block">
                                        <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-4 flex items-center justify-between">
                                            <div>
                                                <span className="text-xs font-medium text-im8-bright-red">Reviews</span>
                                                <h3 className="text-xl font-serif text-im8-dark-red">Wall of Health</h3>
                                            </div>
                                            <Image
                                                src="https://im8health.com/cdn/shop/files/nav_wallofhealth.png?v=1736149918&width=600"
                                                alt="Wall of Health"
                                                width={100}
                                                height={80}
                                                className="w-24 h-auto object-cover rounded"
                                            />
                                        </div>
                                    </Link>

                                    {/* Merchandise */}
                                    <Link href="#" onClick={() => setIsOpen(false)} className="block">
                                        <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-4 flex items-center justify-between">
                                            <div>
                                                <span className="text-xs font-medium text-im8-bright-red">Shop</span>
                                                <h3 className="text-xl font-serif text-im8-dark-red">Merchandise</h3>
                                            </div>
                                            <Image
                                                src="https://im8health.com/cdn/shop/files/nav-d-merch-04.png?v=1732028322&width=600"
                                                alt="Merchandise"
                                                width={100}
                                                height={80}
                                                className="w-24 h-auto object-cover rounded"
                                            />
                                        </div>
                                    </Link>

                                    {/* Shop All */}
                                    <Link href="#" onClick={() => setIsOpen(false)} className="block">
                                        <div className="bg-gradient-to-r from-red-100 to-orange-100 rounded-xl p-4 flex items-center justify-between">
                                            <div>
                                                <span className="text-xs font-medium text-im8-bright-red">Shop</span>
                                                <h3 className="text-xl font-serif text-im8-dark-red">All</h3>
                                            </div>
                                            <Image
                                                src="https://im8health.com/cdn/shop/files/DUE-thumb.png?v=1762223928&width=600"
                                                alt="Shop All"
                                                width={100}
                                                height={80}
                                                className="w-24 h-auto object-cover rounded"
                                            />
                                        </div>
                                    </Link>
                                </div>

                                {/* Navigation Links */}
                                <div className="px-4 pb-8">
                                    {[
                                        "Welcome from David",
                                        "About Us",
                                        "Science",
                                        "Ingredients",
                                        "Quality and Standards",
                                        "IM8 Inner Circle",
                                        "FAQs",
                                        "The Healthspan Blog",
                                    ].map((linkLabel) => (
                                        <Link
                                            key={linkLabel}
                                            href="#"
                                            onClick={() => setIsOpen(false)}
                                            className="block py-3 text-im8-dark-red font-medium border-b border-gray-200"
                                        >
                                            {linkLabel}
                                        </Link>
                                    ))}

                                    {/* Currency Selector */}
                                    <div className="py-3 text-im8-bright-red font-medium border-b border-gray-200">
                                        HKD ▾
                                    </div>
                                </div>
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
