"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/Button";

// Longevity benefits data
const longevityBenefits = [
    {
        id: "cellular-foundation",
        title: "Cellular Foundation Builder",
        description:
            "Provides therapeutic doses of two critical longevity amino acids that naturally decline with age, supporting cellular protection and longevity pathways.",
        expandedContent: "Our Cellular Foundation Builder includes L-Glycine and L-Proline in therapeutic doses. These amino acids are essential for collagen synthesis, mitochondrial function, and cellular repair processes that naturally decline as we age. Clinical studies show these compounds support healthy aging at the cellular level.",
    },
    {
        id: "cellular-protection",
        title: "Cellular Protection Activator (Senolytics)",
        description:
            "Triple senolytic complex that targets cellular senescence—one of the primary hallmarks of aging—through complementary compounds that eliminate 'zombie cells'.",
        expandedContent: "Features Fisetin, Quercetin, and Apigenin—three powerful senolytic compounds that work synergistically to identify and clear senescent cells. These 'zombie cells' accumulate with age and secrete inflammatory factors. Our triple complex supports the body's natural cellular cleanup processes.",
    },
    {
        id: "nmn-nad",
        title: "NMN NAD+ Energy Booster",
        description:
            "Combines the most direct NAD+ precursor with a mitochondrial biogenesis promoter for comprehensive cellular energy support and DNA repair.",
        expandedContent: "Contains pharmaceutical-grade NMN (Nicotinamide Mononucleotide) paired with PQQ (Pyrroloquinoline Quinone). NMN is the most efficient precursor to NAD+, a critical coenzyme that declines with age. PQQ promotes the creation of new mitochondria, supporting cellular energy production and cognitive function.",
    },
    {
        id: "metabolic-activator",
        title: "Metabolic AMPK/SIRT1 Activator",
        description:
            "Enhanced bioavailability metabolic support combined with powerful antioxidant protection for optimal metabolic function and cellular stress response.",
        expandedContent: "Features Berberine HCL with enhanced absorption and Trans-Resveratrol. Berberine activates AMPK, the body's metabolic master switch, supporting healthy glucose metabolism and energy balance. Resveratrol activates sirtuins (SIRT1), longevity proteins that regulate cellular health and stress resistance.",
    },
    {
        id: "cellular-renewal",
        title: "Cellular Renewal Activator",
        description:
            "Dual autophagy-promoting complex that supports the body's natural cellular recycling and renewal processes for healthy aging.",
        expandedContent: "Combines Spermidine and Urolithin A to activate autophagy—the body's cellular cleanup and recycling system. Spermidine is found in foods like aged cheese and natto, while Urolithin A is a postbiotic that supports mitochondrial health. Together, they promote cellular renewal and longevity.",
    },
];

// Benefit Card Component
function LongevityBenefitCard({
    benefit,
    isExpanded,
    onToggle,
    isLast,
}: {
    benefit: (typeof longevityBenefits)[0];
    isExpanded: boolean;
    onToggle: () => void;
    isLast?: boolean;
}) {
    // Image URLs for each benefit type
    const benefitImages: Record<string, string> = {
        "cellular-foundation": "https://im8health.com/cdn/shop/files/cellular_foundation.png?v=1759887442",
        "cellular-protection": "https://im8health.com/cdn/shop/files/cellular_protection.jpg?v=1759887442",
        "nmn-nad": "https://im8health.com/cdn/shop/files/energy_booster_png.png?v=1759887442",
        "metabolic-activator": "https://im8health.com/cdn/shop/files/metabolic_activator.png?v=1759887441",
        "cellular-renewal": "https://im8health.com/cdn/shop/files/cellular_renewal.png?v=1759887442",
    };

    return (
        <div
            className={`py-6 ${!isLast ? "border-b border-gray-200" : ""} cursor-pointer transition-all duration-300`}
            onClick={onToggle}
        >
            <div className="flex items-start gap-5">
                {/* Icon Circle with Image */}
                <div className="w-16 h-16 flex-shrink-0 rounded-full overflow-hidden bg-gray-100 shadow-sm">
                    <Image
                        src={benefitImages[benefit.id] || "https://im8health.com/cdn/shop/files/Ellipse_4_d334c6c4-179f-41a4-860e-1838e8ff1974.png?v=1727626483"}
                        alt={benefit.title}
                        width={80}
                        height={80}
                        className="w-full h-full object-cover"
                    />
                </div>

                {/* Content */}
                <div className="flex-1 min-w-0 pt-1">
                    <h4 className="text-im8-dark-red font-semibold text-base md:text-lg mb-1">
                        {benefit.title}
                    </h4>
                    <p className="text-gray-500 text-xs md:text-sm leading-relaxed">
                        {benefit.description}
                    </p>
                </div>

                {/* Plus Button */}
                <button
                    className="flex-shrink-0 w-6 h-6 text-im8-dark-red flex items-center justify-center transition-all duration-300 hover:scale-110 mt-2"
                    aria-label={isExpanded ? "Collapse" : "Expand"}
                >
                    <svg
                        className={`w-5 h-5 transition-transform duration-300 ${isExpanded ? "rotate-45" : ""}`}
                        fill="none"
                        stroke="currentColor"
                        strokeWidth={1.5}
                        viewBox="0 0 24 24"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            d="M12 4v16m8-8H4"
                        />
                    </svg>
                </button>
            </div>

            {/* Expanded Content */}
            <div
                className={`grid transition-all duration-300 ease-out ${isExpanded ? "grid-rows-[1fr] opacity-100 mt-4" : "grid-rows-[0fr] opacity-0"
                    }`}
            >
                <div className="overflow-hidden">
                    <div className="ml-[84px]">
                        <div className="bg-gradient-to-r from-red-50 to-transparent p-4 rounded-lg border-l-4 border-im8-bright-red">
                            <p className="text-gray-600 text-xs md:text-sm leading-relaxed">
                                {benefit.expandedContent}
                            </p>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}

export function DailyLongevity() {
    const [expandedBenefit, setExpandedBenefit] = useState<string | null>(null);

    const toggleBenefit = (id: string) => {
        setExpandedBenefit(expandedBenefit === id ? null : id);
    };

    return (
        <section className="hidden md:block relative">
            <div className="flex">
                {/* Left Side - Sticky Image Background with Text Overlay */}
                <div className="w-1/2 sticky top-20 h-screen">
                    {/* Background Image */}
                    <div className="absolute inset-0">
                        <Image
                            src="https://im8health.com/cdn/shop/files/202510_bstack-longevity_ingredients.jpg?v=1760075528&width=1296"
                            alt="Daily Ultimate Longevity Product"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Text Content Overlay */}
                    <div className="relative z-10 p-8 lg:p-12 xl:p-16 h-full flex items-start">
                        <div className="max-w-md">
                            <h2 className="text-3xl md:text-4xl font-serif text-im8-dark-red mb-6">
                                Daily Ultimate Longevity
                            </h2>
                            <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-6">
                                Designed for cellular longevity, this advanced formula
                                targets all 12 hallmarks of aging with five synergistic
                                complexes. Our NMN NAD+ Energy Booster, Cellular
                                Foundation Builder, Cellular Protection Activator,
                                Metabolic AMPK/SIRT1 Activator, and Cellular Renewal
                                Activator work together to enhance mitochondrial
                                function, promote autophagy, and deliver comprehensive
                                age-defying benefits in one delicious daily drink.*
                            </p>
                            <Button variant="default" size="lg">
                                See Full Ingredients
                            </Button>
                        </div>
                    </div>
                </div>

                {/* Right Side - Scrollable Benefits List */}
                <div className="w-1/2 bg-white">
                    <div className="w-full max-w-xl mx-auto px-8 lg:px-12 xl:px-16 py-16">
                        {longevityBenefits.map((benefit, index) => (
                            <LongevityBenefitCard
                                key={benefit.id}
                                benefit={benefit}
                                isExpanded={expandedBenefit === benefit.id}
                                onToggle={() => toggleBenefit(benefit.id)}
                                isLast={index === longevityBenefits.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
