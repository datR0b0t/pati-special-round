"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";

const monthlyBreakdown = [
    { label: "Multivitamins, Minerals & Antioxidants", price: "$356" },
    { label: "Superfoods, Greens & Fruits", price: "$587" },
    { label: "Immunity", price: "$285" },
    { label: "Electrolytes", price: "$489" },
    { label: "Adaptogens & Super Mushrooms", price: "$383" },
    { label: "Prebiotics, Probiotics & Postbiotics", price: "$489" },
    { label: "CoQ10 (Heart Vitality)", price: "$383" },
    { label: "MSM (Joint & Muscle Vitality)", price: "$258" },
    { label: "Essential Amino Acids", price: "$285" },
];

// Checkmark Icon Component
function CheckIcon() {
    return (
        <div className="w-5 h-5 rounded-full bg-im8-dark-red flex items-center justify-center flex-shrink-0">
            <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
            </svg>
        </div>
    );
}

export function SavingsComparison() {
    return (
        <section className="py-16 md:py-24 bg-[#F5F0EB] relative overflow-hidden">
            <Container>
                {/* Mobile Layout */}
                <div className="lg:hidden space-y-8">
                    {/* Title - Centered on Mobile */}
                    <h2 className="text-3xl md:text-4xl font-serif italic text-im8-dark-red leading-tight text-center">
                        Replaces
                        <br />
                        16 Supplements,
                        <br />
                        Saving You Money
                    </h2>

                    {/* Product + Annual Savings Row */}
                    <div className="flex items-center justify-center gap-0">
                        {/* Product Image with 30 Servings Badge */}
                        <div className="relative w-48">
                            {/* 30 Servings Badge */}
                            <div className="absolute -left-4 top-12 z-10">
                                <div
                                    className="bg-im8-dark-red text-white w-20 h-20 flex flex-col items-center justify-center text-center shadow-lg"
                                    style={{
                                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                                    }}
                                >
                                    <span className="text-2xl font-bold leading-none">30</span>
                                    <span className="text-[9px] uppercase tracking-wider">Servings</span>
                                </div>
                            </div>
                            <Image
                                src="https://im8health.com/cdn/shop/files/Group_16099-min.png?v=1731734779&width=666"
                                alt="IM8 Daily Ultimate Essentials"
                                width={200}
                                height={280}
                                className="object-contain drop-shadow-xl"
                            />
                        </div>

                        {/* Annual Savings Badge */}
                        <div className="bg-im8-dark-red text-white rounded-full w-40 h-40 flex flex-col items-center justify-center text-center p-4 shadow-xl -ml-4">
                            <span className="text-[10px] uppercase tracking-widest mb-1 opacity-80">
                                Annual Savings
                            </span>
                            <span className="text-xl font-bold leading-tight">
                                $2,532 -
                            </span>
                            <span className="text-xl font-bold leading-tight">
                                $3,000
                            </span>
                            <span className="text-sm font-medium mt-1">per year</span>
                            <span className="text-[10px] mt-1 opacity-70">
                                when switching
                            </span>
                            <span className="text-[10px] opacity-70">
                                to IM8
                            </span>
                        </div>
                    </div>

                    {/* Breakdown List with Checkmarks */}
                    <div className="space-y-3">
                        {monthlyBreakdown.map((item, index) => (
                            <div key={index} className="flex items-center gap-3">
                                <CheckIcon />
                                <span className="flex-1 text-sm text-im8-dark-red">
                                    {item.label}
                                </span>
                                <span className="text-sm text-im8-bright-red/60 line-through">
                                    {item.price}
                                </span>
                            </div>
                        ))}
                    </div>

                    {/* Comparison Box */}
                    <div className="border-2 border-im8-dark-red rounded-xl overflow-hidden bg-white">
                        <div className="flex items-center justify-between px-4 py-3">
                            <span className="text-sm text-im8-dark-red">Your Traditional Supplements</span>
                            <span className="text-sm text-im8-dark-red/60 line-through">
                                $2,955
                            </span>
                        </div>
                        <div className="border-t border-im8-dark-red/20" />
                        <div className="flex items-center justify-between px-4 py-3">
                            <span className="text-sm font-bold text-im8-dark-red">
                                IM8 Daily Ultimate Essentials
                            </span>
                            <span className="text-lg font-bold text-im8-dark-red">
                                $781
                            </span>
                        </div>
                    </div>

                    {/* Shop Now Button - Mobile */}
                    <div className="flex justify-center">
                        <button className="w-full max-w-sm bg-im8-dark-red hover:bg-im8-bright-red text-white font-semibold px-8 py-4 rounded-full transition-all duration-300 hover:shadow-lg btn-shine text-lg">
                            SHOP NOW
                        </button>
                    </div>
                </div>

                {/* Desktop Layout */}
                <div className="hidden lg:grid grid-cols-3 gap-0 items-center">
                    {/* Left Column - Headline */}
                    <div className="text-left">
                        <h2 className="text-4xl lg:text-5xl font-serif font-bold text-im8-dark-red leading-tight mb-6">
                            Replaces 16
                            <br />
                            Supplements.
                            <br />
                            Saving You Money.
                        </h2>
                        <button className="bg-im8-dark-red hover:bg-im8-bright-red text-white font-semibold px-8 py-3 rounded-full transition-all duration-300 hover:shadow-lg btn-shine">
                            SHOP NOW
                        </button>
                    </div>

                    {/* Center Column - Product Image */}
                    <div className="relative flex justify-center">
                        {/* IM8 Product Image */}
                        <div className="relative">
                            {/* 30 Servings Badge - Octagonal - Top Center */}
                            <div className="absolute left-1/2 -translate-x-1/2 top-4 z-10">
                                <div
                                    className="bg-im8-dark-red text-white w-24 h-24 flex flex-col items-center justify-center text-center shadow-lg"
                                    style={{
                                        clipPath: 'polygon(30% 0%, 70% 0%, 100% 30%, 100% 70%, 70% 100%, 30% 100%, 0% 70%, 0% 30%)'
                                    }}
                                >
                                    <span className="text-2xl font-bold leading-none">30</span>
                                    <span className="text-[10px] uppercase tracking-wider">Servings</span>
                                </div>
                            </div>

                            {/* Product Container */}
                            <div className="relative w-80">
                                <Image
                                    src="https://im8health.com/cdn/shop/files/Group_16099-min.png?v=1731734779&width=666"
                                    alt="IM8 Daily Ultimate Essentials"
                                    width={320}
                                    height={450}
                                    className="object-contain drop-shadow-2xl"
                                />
                            </div>

                            {/* Annual Savings Badge - Bottom Left */}
                            <div className="absolute -left-20 bottom-12 z-10">
                                <div className="bg-im8-dark-red text-white rounded-full w-44 h-44 flex flex-col items-center justify-center text-center p-4 shadow-xl">
                                    <span className="text-[11px] uppercase tracking-widest mb-1 opacity-80">
                                        Annual Savings
                                    </span>
                                    <span className="text-2xl font-bold leading-tight">
                                        $2,532 -
                                    </span>
                                    <span className="text-2xl font-bold leading-tight">
                                        $3,000
                                    </span>
                                    <span className="text-base font-medium mt-1">per year</span>
                                    <span className="text-[11px] mt-1 opacity-70">
                                        when switching to IM8
                                    </span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Monthly Breakdown */}
                    <div className="space-y-6">
                        <h3 className="text-3xl md:text-4xl font-serif italic text-im8-dark-red mb-8 text-center">
                            Monthly Breakdown
                        </h3>

                        {/* Breakdown List */}
                        <div className="space-y-4">
                            {monthlyBreakdown.map((item, index) => (
                                <div key={index} className="flex items-center gap-4 group">
                                    {/* Line with Bullet */}
                                    <div className="flex items-center gap-0 flex-shrink-0">
                                        <div className="w-8 h-px bg-im8-dark-red" />
                                        <div className="w-2 h-2 rounded-full bg-im8-dark-red" />
                                    </div>
                                    {/* Label */}
                                    <span className="flex-1 text-base text-im8-dark-red group-hover:text-im8-bright-red transition-colors">
                                        {item.label}
                                    </span>
                                    {/* Price */}
                                    <span className="text-base text-im8-bright-red/60 line-through">
                                        {item.price}
                                    </span>
                                </div>
                            ))}
                        </div>

                        {/* Comparison Box */}
                        <div className="mt-8 border-2 border-im8-dark-red rounded-xl overflow-hidden">
                            {/* Traditional Supplements Row */}
                            <div className="flex items-center justify-between px-6 py-4">
                                <span className="text-base text-im8-dark-red">Your Traditional Supplements</span>
                                <span className="text-base text-im8-dark-red/60 line-through">
                                    $2,955
                                </span>
                            </div>
                            {/* Divider */}
                            <div className="border-t border-im8-dark-red/20" />
                            {/* IM8 Row */}
                            <div className="flex items-center justify-between px-6 py-4">
                                <span className="text-base font-bold text-im8-dark-red">
                                    IM8 Daily Ultimate Essentials
                                </span>
                                <span className="text-xl font-bold text-im8-dark-red">
                                    $781
                                </span>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
