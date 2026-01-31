"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { useState } from "react";

const ageDecades = [
    {
        id: "30s",
        label: "30s",
        title: "Early Decline (30-39)",
        subtitle: "Proactive intervention",
        image: "https://im8health.com/cdn/shop/files/tavi.jpg?v=1758027278&width=1200",
        negatives: [
            "5% decline in cellular energy",
            "First signs of DNA damage",
            "Muscle mass begins declining",
            "Metabolism slows 2-3%"
        ],
        benefits: [
            "Prevents early cellular energy decline",
            "Protects against initial DNA damage",
            "Maintains muscle mass and metabolism",
            "Establishes strong longevity foundation"
        ]
    },
    {
        id: "40s",
        label: "40s",
        title: "Accelerated Aging (40-49)",
        subtitle: "Active longevity support",
        image: "https://im8health.com/cdn/shop/files/mona.jpg?v=1758027276&width=1200",
        negatives: [
            "15% cellular energy loss",
            "Telomere shortening accelerates",
            "Hormone production declines",
            "Inflammation increases"
        ],
        benefits: [
            "Restores cellular energy production",
            "Supports telomere maintenance",
            "Reduces inflammatory markers"
        ]
    },
    {
        id: "50s",
        label: "50s",
        title: "Critical Intervention (50-59)",
        subtitle: "Comprehensive intervention",
        image: "https://im8health.com/cdn/shop/files/elisa.jpg?v=1758117522&width=1200",
        negatives: [
            "25% cellular energy decline",
            "Senescent cells accumulate",
            "Autophagy efficiency drops",
            "Chronic inflammation rises"
        ],
        benefits: [
            "Dramatically boosts cellular energy",
            "Eliminates accumulated senescent cells",
            "Enhances autophagy and cellular cleanup",
            "Combats chronic inflammation"
        ]
    },
    {
        id: "60+",
        label: "60+",
        title: "Maintenance Mode (60+)",
        subtitle: "Damage control & support",
        image: "https://im8health.com/cdn/shop/files/jeremy.jpg?v=1758027278&width=1200",
        negatives: [
            "35%+ energy decline",
            "Multiple aging pathways active",
            "Increased disease risk",
            "Reduced regenerative capacity"
        ],
        benefits: [
            "Maximizes remaining cellular function",
            "Targets multiple aging pathways simultaneously",
            "Supports disease resistance",
            "Enhances regenerative capacity"
        ]
    }
];

// Decade Card Component
function DecadeCard({ decade, isActive }: { decade: typeof ageDecades[0]; isActive: boolean }) {
    return (
        <div
            className={`bg-white rounded-2xl shadow-2xl overflow-hidden transition-all duration-500 ease-out ${isActive
                ? "opacity-100 translate-y-0 scale-100"
                : "opacity-0 translate-y-4 scale-95 absolute pointer-events-none"
                }`}
        >
            <div className="flex flex-col md:flex-row">
                {/* Image */}
                <div className="relative w-full md:w-1/4 aspect-[3/4] min-h-[300px] md:min-h-[400px]">
                    <Image
                        src={decade.image}
                        alt={decade.title}
                        fill
                        className="object-cover transition-transform duration-700 ease-out"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 p-6 md:p-10">
                    {/* Title */}
                    <div className="text-center mb-8">
                        <h3 className="text-2xl md:text-3xl font-serif font-bold text-im8-dark-red mb-2">
                            {decade.title}
                        </h3>
                        <p className="text-im8-bright-red font-medium">
                            {decade.subtitle}
                        </p>
                    </div>

                    {/* Two Column Layout */}
                    <div className="grid grid-cols-1 md:grid-cols-2 gap-6 md:gap-10">
                        {/* What's Happening */}
                        <div>
                            <h4 className="font-bold text-im8-dark-red mb-4">
                                What&apos;s Happening in Your Body:
                            </h4>
                            <ul className="space-y-3">
                                {decade.negatives.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 animate-fade-in"
                                        style={{ animationDelay: `${index * 100}ms` }}
                                    >
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-gray-200 flex items-center justify-center">
                                            <svg className="w-3 h-3 text-gray-500" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M6 18L18 6M6 6l12 12" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>

                        {/* IM8 Benefits */}
                        <div className="bg-red-50 rounded-xl p-5 border border-red-100">
                            <h4 className="font-bold text-im8-dark-red mb-4">
                                IM8 Longevity Benefits:
                            </h4>
                            <ul className="space-y-3">
                                {decade.benefits.map((item, index) => (
                                    <li
                                        key={index}
                                        className="flex items-start gap-3 animate-fade-in"
                                        style={{ animationDelay: `${index * 100 + 200}ms` }}
                                    >
                                        <span className="flex-shrink-0 w-5 h-5 rounded-full bg-im8-bright-red flex items-center justify-center">
                                            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                            </svg>
                                        </span>
                                        <span className="text-gray-700 text-sm">{item}</span>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function BodyDecades() {
    const [selectedDecade, setSelectedDecade] = useState("30s");

    return (
        <section className="relative py-16 md:py-24 overflow-hidden">
            {/* Video Background */}
            <video
                autoPlay
                loop
                muted
                playsInline
                className="absolute inset-0 w-full h-full object-cover"
            >
                <source
                    src="https://im8health.com/cdn/shop/videos/c/vp/f6faa8b06aba4747a6c8d415d93387fe/f6faa8b06aba4747a6c8d415d93387fe.HD-720p-3.0Mbps-56404788.mp4?v=0"
                    type="video/mp4"
                />
            </video>

            {/* Red Overlay */}
            <div className="absolute inset-0 bg-im8-dark-red/70" />

            <Container className="relative z-10">
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-im8-cream uppercase tracking-wide mb-4">
                        Your Body Through The Decades
                    </h2>
                    <p className="text-im8-cream/80 text-sm md:text-base max-w-2xl mx-auto">
                        See how aging affects your body at different life stages and why early intervention matters
                    </p>
                </div>

                {/* Decade Tabs */}
                <div className="flex justify-center mb-10">
                    <div className="inline-flex bg-im8-cream/90 backdrop-blur-sm rounded-full p-1 shadow-lg">
                        {ageDecades.map((decade) => (
                            <button
                                key={decade.id}
                                onClick={() => setSelectedDecade(decade.id)}
                                className={`px-6 py-2.5 rounded-full text-sm font-medium transition-all duration-300 ${selectedDecade === decade.id
                                    ? "bg-im8-dark-red text-white shadow-md scale-105"
                                    : "text-im8-dark-red hover:bg-im8-dark-red/10"
                                    }`}
                            >
                                {decade.label}
                            </button>
                        ))}
                    </div>
                </div>

                {/* Cards Container */}
                <div className="relative">
                    {ageDecades.map((decade) => (
                        <DecadeCard
                            key={decade.id}
                            decade={decade}
                            isActive={selectedDecade === decade.id}
                        />
                    ))}
                </div>
            </Container>
        </section>
    );
}
