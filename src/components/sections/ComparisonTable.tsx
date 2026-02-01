"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { useState } from "react";

interface FeatureStatus {
    status: "check" | "x";
    text?: string;
    subtext?: string;
}

interface ComparisonRow {
    feature: string;
    im8: FeatureStatus;
    competitor: FeatureStatus;
}

const comparisonData: ComparisonRow[] = [
    {
        feature: "Superfoods, Greens, Fruits, Herbs",
        im8: { status: "check" },
        competitor: { status: "check" },
    },
    {
        feature: "Clinical Dosed B Vitamins",
        im8: { status: "check" },
        competitor: { status: "check" },
    },
    {
        feature: "30mcg Clinical Dosed Vitamin D3",
        im8: { status: "check" },
        competitor: { status: "x", text: "No Vitamin D3" },
    },
    {
        feature: "40mcg Clinical Dosed Vitamin K2",
        im8: { status: "check" },
        competitor: { status: "x", text: "Vitamin K2 dosage not disclosed" },
    },
    {
        feature: "100mg Clinical Dosed CoQ10",
        im8: { status: "check" },
        competitor: { status: "x", text: "CoQ10 dosage not disclosed" },
    },
    {
        feature: "1000mg Clinical Dosed MSM",
        im8: { status: "check" },
        competitor: { status: "x", text: "No MSM" },
    },
    {
        feature: "3g Prebiotic Fiber",
        im8: { status: "check", subtext: "(50% more)" },
        competitor: { status: "x", text: "2g Prebiotic Fiber" },
    },
    {
        feature: "900mg Clinical Dosed Vitamin C",
        im8: { status: "check", subtext: "(114% more)" },
        competitor: { status: "x", text: "420mg Vitamin C" },
    },
    {
        feature: "4.2mg Clinical Dosed Riboflavin",
        im8: { status: "check", subtext: "(110% more)" },
        competitor: { status: "x", text: "2mg Riboflavin" },
    },
    {
        feature: "65mg Magnesium",
        im8: { status: "check", subtext: "(150% more)" },
        competitor: { status: "x", text: "26mg Magnesium" },
    },
];

const additionalFeatures: ComparisonRow[] = [
    {
        feature: "Vitamin A",
        im8: { status: "check" },
        competitor: { status: "x" },
    },
    {
        feature: "Vitamin E",
        im8: { status: "check" },
        competitor: { status: "x" },
    },
    {
        feature: "Zinc",
        im8: { status: "check" },
        competitor: { status: "x" },
    },
];

function CheckIcon() {
    return (
        <div className="w-5 h-5 rounded-full bg-im8-dark-red flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
        </div>
    );
}

function XIcon() {
    return (
        <div className="w-5 h-5 rounded-full bg-[#4A5D52] flex items-center justify-center">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M6 18L18 6M6 6l12 12" />
            </svg>
        </div>
    );
}

export function ComparisonTable() {
    const [showAll, setShowAll] = useState(false);

    const displayedData = showAll
        ? [...comparisonData, ...additionalFeatures]
        : comparisonData;

    return (
        <section className="py-20 bg-[#E8DFD4]">
            <Container>
                {/* Title */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-5xl font-serif text-im8-dark-red">
                        IM8: The New Gold Standard
                    </h2>
                </div>

                {/* Comparison Table */}
                <div className="max-w-4xl mx-auto mt-36 md:mt-40">
                    {/* Table with overlapping product images */}
                    <div className="overflow-visible rounded-xl shadow-lg relative">
                        {/* Header Row with Product Images */}
                        <div className="grid grid-cols-2 relative">
                            {/* IM8 Column Header */}
                            <div className="bg-im8-dark-red text-white py-3 px-4 text-center text-sm md:text-base font-medium relative">
                                {/* IM8 Product Image - centered above header */}
                                <div className="absolute -top-28 left-1/2 -translate-x-1/2 md:-top-32 w-24 h-32 md:w-28 md:h-36 z-10">
                                    <Image
                                        src="https://im8health.com/cdn/shop/files/sachet-thumb.png?v=1761040601"
                                        alt="Daily Ultimate Essentials"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                Daily Ultimate Essentials
                            </div>
                            {/* Competitor Column Header */}
                            <div className="bg-[#4A5D52] text-white py-3 px-4 text-center text-sm md:text-base font-medium relative">
                                {/* Competitor Product Image - centered above header */}
                                <div className="absolute -top-28 left-1/2 -translate-x-1/2 md:-top-32 w-20 h-32 md:w-24 md:h-36 z-10">
                                    <Image
                                        src="https://im8health.com/cdn/shop/files/179-_Converted_B_1.png?v=1730093105"
                                        alt="Leading Greens Powder"
                                        fill
                                        className="object-contain"
                                    />
                                </div>
                                Leading Greens Powder
                            </div>
                        </div>

                        {/* Feature Rows */}
                        <div className="bg-white">
                            {displayedData.map((row, idx) => (
                                <div
                                    key={idx}
                                    className={`grid grid-cols-2 border-b border-gray-200 last:border-b-0 ${idx % 2 === 1 ? 'bg-gray-50/50' : ''
                                        }`}
                                >
                                    {/* IM8 Column */}
                                    <div className="py-3 px-4 flex items-center gap-3 bg-red-50/30 border-r border-gray-200">
                                        <div className="w-5 h-5">
                                            <CheckIcon/>
                                        </div>
                                        <div>
                                            <span className="text-sm md:text-base text-gray-900">
                                                {row.feature}
                                            </span>
                                            {row.im8.subtext && (
                                                <span className="block text-xs text-im8-dark-red">
                                                    {row.im8.subtext}
                                                </span>
                                            )}
                                        </div>
                                    </div>

                                    {/* Competitor Column */}
                                    <div className="py-3 px-4 flex items-center gap-3 bg-[#C5CFC9]/30">
                                        {row.competitor.status === "check" ? (
                                            <>
                                                <div className="w-5 h-5">
                                                    <CheckIcon/>
                                                </div>
                                                <span className="text-sm md:text-base text-gray-700">
                                                    {row.competitor.text || row.feature}
                                                </span>
                                            </>
                                        ) : (
                                            <>
                                                <div className="w-5 h-5">
                                                    <XIcon/>
                                                </div>
                                                <span className="text-sm md:text-base text-gray-600">
                                                    {row.competitor.text || "Not included"}
                                                </span>
                                            </>
                                        )}
                                    </div>
                                </div>
                            ))}
                        </div>

                        {/* See More Button */}
                        <div className="bg-white py-3 border-t border-gray-200">
                            <button
                                onClick={() => setShowAll(!showAll)}
                                className="w-full text-center text-sm text-gray-600 hover:text-im8-dark-red transition-colors underline"
                            >
                                {showAll ? "See Less" : "See More"}
                            </button>
                        </div>
                    </div>

                    {/* View Supplement Facts Button */}
                    <div className="flex justify-center mt-10">
                        <button className="bg-im8-dark-red hover:bg-im8-bright-red text-white px-8 py-3 rounded-full text-sm font-medium transition-colors duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-0.5">
                            VIEW SUPPLEMENT FACTS
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
