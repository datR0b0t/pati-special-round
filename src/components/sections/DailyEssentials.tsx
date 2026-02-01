"use client";

import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/Button";
// Benefit data with icons representing each category
const benefits = [
    {
        id: "vitamins",
        title: "Vitamins & Minerals",
        description:
            "Essential vitamins like B-complex and minerals such as zinc and calcium to boost daily energy and immunity.",
        expandedContent: "Our comprehensive vitamin and mineral blend includes Vitamin A, C, D3, E, K2, and the full B-complex spectrum. Key minerals include zinc for immune function, calcium for bone health, magnesium for muscle function, and iron for energy production. Each ingredient is optimally dosed based on clinical research.",
        color: "from-green-100 to-green-50",
    },
    {
        id: "superfoods",
        title: "Raw Superfoods, Greens, and More",
        description:
            "Powerful raw superfoods deliver antioxidants for natural detoxification and immune support.",
        expandedContent: "Features organic spirulina, chlorella, wheatgrass, and barley grass for alkalizing benefits. Antioxidant-rich berries including acai, goji, and blueberry provide cellular protection. Added mushroom complex with reishi, lion's mane, and cordyceps for adaptogenic support.",
        color: "from-emerald-100 to-emerald-50",
    },
    {
        id: "probiotics",
        title: "Prebiotics, probiotics and postbiotics",
        description:
            "A balanced biotic trio of inulin, lactobacillus, and postbiotics to promote a healthy gut and boost immunity.",
        expandedContent: "10 billion CFU of diverse probiotic strains including Lactobacillus acidophilus, Bifidobacterium lactis, and Lactobacillus rhamnosus. Prebiotic fiber from chicory root inulin feeds beneficial bacteria. Postbiotic compounds support gut barrier integrity and immune modulation.",
        color: "from-pink-100 to-pink-50",
    },
    {
        id: "heart",
        title: "Heart Health Support",
        description:
            "100 mg of CoQ10, along with magnesium and K2, to energize and protect your heart.",
        expandedContent: "CoQ10 (Ubiquinol form) supports cellular energy production in heart tissue. Vitamin K2 (MK-7) directs calcium to bones and away from arteries. Omega-3 fatty acids from fish oil reduce inflammation. Added hawthorn berry extract for traditional cardiovascular support.",
        color: "from-red-100 to-red-50",
    },
    {
        id: "joint",
        title: "Joint and Muscle Health Support",
        description:
            "1,000 mg MSM plus turmeric and ginger support inflammation for improved joint flexibility and comfort.",
        expandedContent: "MSM (Methylsulfonylmethane) provides sulfur for connective tissue repair. Turmeric extract with 95% curcuminoids and black pepper for enhanced absorption. Ginger root extract for natural anti-inflammatory benefits. Added glucosamine and chondroitin for cartilage support.",
        color: "from-amber-100 to-amber-50",
    },
    {
        id: "electrolytes",
        title: "Hydra Electrolytes",
        description:
            "Replenish key electrolytes—sodium, potassium, and magnesium—to maintain hydration and energy throughout the day.",
        expandedContent: "Balanced electrolyte formula with sodium, potassium, magnesium, and chloride in optimal ratios. Supports proper muscle contractions and nerve signaling. Helps maintain fluid balance during physical activity. Enhanced with trace minerals for complete hydration support.",
        color: "from-cyan-100 to-cyan-50",
    },
    {
        id: "CRT8",
        title: "Adaptogens",
        description:
            "Adaptogens like ashwagandha and rhodiola support stress resistance and overall well-being.",
        expandedContent: "Ashwagandha (KSM-66®) clinically proven to reduce cortisol and stress. Rhodiola rosea enhances mental performance and reduces fatigue. Holy basil (Tulsi) supports emotional well-being. Eleuthero root for sustained energy without stimulants.",
        color: "from-indigo-100 to-indigo-50",
    }
];

// Benefit Card Component
function BenefitCard({
    benefit,
    isExpanded,
    onToggle,
    isLast,
}: {
    benefit: (typeof benefits)[0];
    isExpanded: boolean;
    onToggle: () => void;
    isLast?: boolean;
}) {
    // Image URLs for each benefit type
    const benefitImages: Record<string, string> = {
        vitamins: "https://im8health.com/cdn/shop/files/Ellipse_4_d334c6c4-179f-41a4-860e-1838e8ff1974.png?v=1727626483",
        superfoods: "https://im8health.com/cdn/shop/files/Ellipse_4_1.png?v=1727626571",
        probiotics: "https://im8health.com/cdn/shop/files/Ellipse_4_2.png?v=1727626621",
        heart: "https://im8health.com/cdn/shop/files/Ellipse_4_3.png?v=1727626666",
        joint: "https://im8health.com/cdn/shop/files/Ellipse_4_4.png?v=1727626715",
        electrolytes: "https://im8health.com/cdn/shop/files/Ellipse_4_5.png?v=1727626743",
        CRT8: "https://im8health.com/cdn/shop/files/Ellipse_4_6.png?v=1727626799",
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
                        src={benefitImages[benefit.id] || "/images/placeholder.png"}
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

export function DailyEssentials() {
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
                            src="https://im8health.com/cdn/shop/files/Rectangle_144433598-min.jpg?v=1727625348&width=1296"
                            alt="Daily Ultimate Essentials Product"
                            fill
                            className="object-cover object-center"
                        />
                    </div>

                    {/* Text Content Overlay */}
                    <div className="relative z-10 p-8 lg:p-12 xl:p-16 h-full flex items-start">
                        <div className="max-w-md">
                            <h2 className="text-3xl md:text-4xl font-serif text-im8-dark-red mb-6">
                                Daily Ultimate Essentials
                            </h2>
                            <p className="text-gray-700 text-xs md:text-sm leading-relaxed mb-6">
                                IM8 Daily Ultimate Essentials contains 92
                                nutrient-rich ingredients, clinical doses of
                                CoQ10 for heart health and MSM for joints and
                                muscle. The formula features a pioneering blend
                                of pre-, pro-, and postbiotics to optimize gut
                                health and nutrient absorption. Combined with
                                essential vitamins, minerals, antioxidants,
                                superfoods, greens, and adaptogens, it provides
                                unmatched, comprehensive daily nutrition.
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
                        {benefits.map((benefit, index) => (
                            <BenefitCard
                                key={benefit.id}
                                benefit={benefit}
                                isExpanded={expandedBenefit === benefit.id}
                                onToggle={() => toggleBenefit(benefit.id)}
                                isLast={index === benefits.length - 1}
                            />
                        ))}
                    </div>
                </div>
            </div>
        </section>
    );
}
