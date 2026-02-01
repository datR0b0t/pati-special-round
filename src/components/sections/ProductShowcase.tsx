"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";

const essentialsBenefits = [
    "Mental clarity & focus",
    "Better sleep quality",
    "Instant energy boost",
    "Digestive health support"
];

const longevityBenefits = [
    "Cellular aging protection",
    "Senescent cell elimination",
    "DNA repair & telomere support",
    "Autophagy enhancement"
];

export function ProductShowcase() {
    return (
        <section
            className="hidden md:block py-16 md:py-24 relative overflow-hidden"
            style={{
                background: 'linear-gradient(135deg, #a40011 0%, #b50503 30%, #dc4b0f 60%, #E78D2D 100%)'
            }}
        >
            <Container>
                <div className="grid grid-cols-1 lg:grid-cols-3 gap-8 items-center">
                    {/* Left Side - For Today */}
                    <div className="text-white ml-50 order-2 lg:order-1">
                        {/* Badge */}
                        <div className="inline-block mb-4">
                            <span className="border border-white/50 text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full">
                                For Today
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-serif uppercase tracking-wide mb-3">
                            Daily Ultimate<br />Essentials
                        </h3>

                        {/* Subtitle */}
                        <p className="text-white/80 text-sm mb-4">
                            Immediate wellness & performance
                        </p>

                        {/* Benefits */}
                        <ul className="space-y-2">
                            {essentialsBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-white/90">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>

                    {/* Center - Product Sachets */}
                    <div className="relative h-80 md:h-[550px] order-1 lg:order-2">
                        <Image
                            src="https://im8health.com/cdn/shop/files/Sachet-Float-Camera-2_RGB_2_aba39778-02fc-46ba-976f-d0653ac10128.png?v=1759902111"
                            alt="IM8 Daily Ultimate Products"
                            fill
                            className="object-contain"
                        />
                    </div>

                    {/* Right Side - For Tomorrow */}
                    <div className="text-white order-3 lg:text-left">
                        {/* Badge */}
                        <div className="inline-block mb-4">
                            <span className="border border-white/50 text-white text-xs uppercase tracking-widest px-4 py-2 rounded-full">
                                For Tomorrow
                            </span>
                        </div>

                        {/* Title */}
                        <h3 className="text-xl md:text-2xl font-serif uppercase tracking-wide mb-3">
                            Daily Ultimate<br />Longevity
                        </h3>

                        {/* Subtitle */}
                        <p className="text-white/80 text-sm mb-4">
                            Long-term aging optimization
                        </p>

                        {/* Benefits */}
                        <ul className="space-y-2">
                            {longevityBenefits.map((benefit, index) => (
                                <li key={index} className="flex items-center gap-2 text-sm text-white/90">
                                    <span className="w-1.5 h-1.5 bg-white rounded-full flex-shrink-0" />
                                    {benefit}
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </Container>
        </section>
    );
}
