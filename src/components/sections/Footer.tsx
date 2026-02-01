"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/Button";

const footerLinks = {
    shop: {
        title: "SHOP",
        links: [
            { label: "Premium Core Nutrition", href: "#" },
            { label: "The Beckham Stack", href: "#" },
            { label: "Merchandise", href: "#" },
            { label: "Shop All", href: "#" },
        ]
    },
    company: {
        title: "COMPANY",
        links: [
            { label: "About Us", href: "#" },
            { label: "Science", href: "#" },
            { label: "Impact", href: "#" },
        ]
    },
    learn: {
        title: "LEARN",
        links: [
            { label: "Reviews", href: "#" },
            { label: "Ingredients", href: "#" },
            { label: "Quality and Standards", href: "#" },
            { label: "IM8 Inner Circle", href: "#" },
            { label: "IM8 vs AG1 Next Gen", href: "#" },
            { label: "IM8 vs Live it Up Super Greens", href: "#" },
            { label: "IM8 vs Bloom Greens & Superfoods", href: "#" },
            { label: "IM8 vs Huel Daily Greens", href: "#" },
        ]
    },
    support: {
        title: "SUPPORT",
        links: [
            { label: "FAQs", href: "#" },
            { label: "Track My Order", href: "#" },
            { label: "Returns / Exchanges", href: "#" },
            { label: "Contact Us", href: "#" },
        ]
    },
    community: {
        title: "IM8 COMMUNITY",
        links: [
            { label: "Instagram", href: "#" },
            { label: "Facebook", href: "#" },
            { label: "TikTok", href: "#" },
            { label: "YouTube", href: "#" },
            { label: "Pinterest", href: "#" },
        ]
    }
};

export function Footer() {
    const [email, setEmail] = useState("");
    const [openSection, setOpenSection] = useState<string | null>(null);

    const toggleSection = (title: string) => {
        setOpenSection(openSection === title ? null : title);
    };

    return (
        <footer>
            {/* Mobile Newsletter Section */}
            <div className="md:hidden relative py-12 px-6 overflow-hidden">
                {/* Video Background */}
                <video
                    autoPlay
                    loop
                    muted
                    playsInline
                    className="absolute inset-0 w-full h-full object-cover"
                >
                    <source src="https://im8health.com/cdn/shop/videos/c/vp/fbf49de132784b63b1209cf9f32ce77d/fbf49de132784b63b1209cf9f32ce77d.HD-720p-2.1Mbps-33478040.mp4?v=0" type="video/mp4" />
                </video>
                {/* Overlay for readability */}
                <div className="absolute inset-0 bg-white/30" />

                {/* Content */}
                <div className="relative z-10">
                    <h2 className="text-2xl md:text-3xl font-serif italic text-im8-dark-red text-center mb-8">
                        Join the community for exclusive wellness insights
                    </h2>
                    <div className="space-y-4 max-w-sm mx-auto">
                        <input
                            type="email"
                            value={email}
                            onChange={(e) => setEmail(e.target.value)}
                            placeholder="EMAIL ADDRESS"
                            className="w-full bg-white border border-gray-300 text-im8-dark-red placeholder-gray-500 px-4 py-3 rounded-full text-sm focus:outline-none focus:border-im8-dark-red"
                        />
                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full bg-im8-bright-red text-white hover:bg-im8-dark-red uppercase tracking-wider"
                        >
                            Join Now
                        </Button>
                    </div>
                    <p className="text-im8-dark-red/70 text-xs text-center mt-4">
                        *By joining, you&apos;ll receive our wellness insights and can unsubscribe anytime.
                    </p>
                </div>
            </div>

            {/* Mobile Accordion Navigation */}
            <div className="md:hidden bg-im8-dark-red py-10 px-6">
                <div className="space-y-0">
                    {Object.values(footerLinks).map((section) => (
                        <div key={section.title} className="border-b border-white/20">
                            <button
                                onClick={() => toggleSection(section.title)}
                                className="w-full flex justify-between items-center py-4 text-left"
                            >
                                <span className="text-im8-pink font-semibold uppercase tracking-wider">
                                    {section.title}
                                </span>
                                <span
                                    className={`text-im8-pink text-xl transition-transform duration-300 ${openSection === section.title ? "rotate-45" : "rotate-0"
                                        }`}
                                >
                                    +
                                </span>
                            </button>
                            <div
                                className={`grid transition-all duration-300 ease-in-out ${openSection === section.title ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                    }`}
                            >
                                <div className="overflow-hidden">
                                    <ul className="space-y-2 pb-4">
                                        {section.links.map((link) => (
                                            <li key={link.label}>
                                                <a
                                                    href={link.href}
                                                    className="text-white/70 text-sm hover:text-white transition-colors"
                                                >
                                                    {link.label}
                                                </a>
                                            </li>
                                        ))}
                                    </ul>
                                </div>
                            </div>
                        </div>
                    ))}
                </div>

                {/* Mobile Logo */}
                <div className="flex justify-center mt-8">
                    <Image
                        src="https://im8health.com/cdn/shop/files/IM8_Logo-R_Pink.svg?v=1729137155&width=900"
                        alt="IM8 Logo"
                        width={300}
                        height={100}
                        className="w-full max-w-xs opacity-80"
                    />
                </div>

                {/* Mobile Copyright */}
                <div className="text-white/50 text-xs text-center mt-6">
                    © 2026 IM8® • Privacy Policy • Terms of Service
                </div>
            </div>

            {/* Desktop Footer */}
            <div className="hidden md:block bg-im8-dark-red pt-16 pb-10 md:pb-30">
                <Container>
                    {/* Navigation Links */}
                    <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-6 gap-8 mb-12">
                        {Object.values(footerLinks).map((section) => (
                            <div key={section.title}>
                                <h4 className="text-im8-pink text-sm font-semibold mb-4 uppercase tracking-wider">
                                    {section.title}
                                </h4>
                                <ul className="space-y-2">
                                    {section.links.map((link) => (
                                        <li key={link.label}>
                                            <a
                                                href={link.href}
                                                className="text-white/70 text-sm hover:text-white transition-colors"
                                            >
                                                {link.label}
                                            </a>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        ))}

                        {/* Newsletter Signup - Desktop */}
                        <div className="col-span-2 md:border-l md:border-white/20 md:pl-8 md:col-span-3 lg:col-span-1">
                            <h4 className="text-im8-pink text-sm font-semibold mb-4 uppercase tracking-wider">
                                Join the Community for Exclusive Wellness Insights
                            </h4>
                            <div className="space-y-3">
                                <input
                                    type="email"
                                    value={email}
                                    onChange={(e) => setEmail(e.target.value)}
                                    placeholder="EMAIL ADDRESS"
                                    className="w-full bg-white border border-black text-im8-dark-red placeholder-black/70 px-4 py-2 rounded-full text-sm focus:outline-none focus:border-black"
                                />
                                <Button
                                    variant="primary"
                                    size="lg"
                                    className="w-full bg-im8-bright-red text-white hover:bg-im8-red hover:shadow-lg hover:shadow-im8-red/50 uppercase tracking-wider"
                                >
                                    Join Now
                                </Button>
                            </div>
                            <p className="text-white/50 text-xs mt-3">
                                *By joining, you&apos;ll receive our wellness insights and can unsubscribe anytime.
                            </p>
                        </div>
                    </div>

                    {/* Large Logo */}
                    <div className="flex justify-center">
                        <Image
                            src="https://im8health.com/cdn/shop/files/IM8_Logo-R_Pink.svg?v=1729137155&width=900"
                            alt="IM8 Logo"
                            width={800}
                            height={200}
                            className="w-full max-w-4xl opacity-80"
                        />
                    </div>
                    {/* Copyright */}
                    <div className="text-white/50 text-xs mt-8">
                        © 2025 IM8 • Privacy Policy • Terms of Service
                    </div>

                    {/* Disclaimer */}
                    <div className="border border-white/20 rounded-lg p-4 mt-12 mb-2">
                        <p className="text-white/70 text-xs text-center leading-relaxed">
                            *These statements have not been evaluated by the Food and Drug Administration. This product is not intended to diagnose, treat, cure or prevent any disease.
                        </p>
                    </div>

                    <p className="text-white/50 text-xs text-center">
                        **Free Welcome Kit available for new subscribers only
                    </p>

                </Container>
            </div>
        </footer>
    );
}
