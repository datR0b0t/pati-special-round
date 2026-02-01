"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { useState } from "react";

const supplementBreakdown = [
    { name: "Nicotinamide Mononucleotide (NMN) (500 mg)", price: 55 },
    { name: "Pyrroloquinoline Quinone (PQQ) (10 mg)", price: 15 },
    { name: "Glycine (3 g)", price: 12 },
    { name: "Taurine (2 g)", price: 18 },
    { name: "Trans-Resveratrol (250 mg)", price: 25 },
    { name: "Quercetin (250 mg)", price: 29 },
    { name: "Fisetin (100 mg)", price: 38 },
    { name: "Dihydroberberine (100 mg)", price: 18 },
    { name: "Astaxanthin (6 mg)", price: 25 },
    { name: "Spermidine (3 mg)", price: 18 },
];

const totalCost = supplementBreakdown.reduce((sum, item) => sum + item.price, 0);

const features = [
    "Therapeutic doses of all ingredients",
    "Synergistic formulation for enhanced effects",
    "Premium bioavailable forms",
    "NSF Sport Certified purity",
    "Convenient single daily serving",
];

export function IncredibleValue() {
    const [selectedPlan, setSelectedPlan] = useState<"onetime" | "subscription">("subscription");

    const oneTimePrice = 149;
    const subscriptionPrice = 119;
    const currentPrice = selectedPlan === "onetime" ? oneTimePrice : subscriptionPrice;
    const savings = totalCost - currentPrice;
    const savingsPercent = Math.round((savings / totalCost) * 100);

    return (
        <section className="py-16 md:py-24 bg-gradient-to-br from-[#FDF2F0] via-[#FDEAE6] to-[#FCE4DF] relative overflow-hidden">
            {/* Background decorative elements */}
            <div className="absolute top-0 left-0 w-64 h-64 opacity-30">
                <Image
                    src="https://im8health.com/cdn/shop/files/sachet-thumb.png?v=1761040601"
                    alt=""
                    fill
                    className="object-contain blur-sm"
                />
            </div>

            <Container>
                {/* Header */}
                <div className="text-center mb-10">
                    <h2 className="text-2xl md:text-4xl font-serif text-im8-dark-red uppercase tracking-wide mb-3">
                        Incredible Value: Save {savingsPercent}% vs Individual Supplements
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                        IM8 delivers the equivalent of 10+ individual supplements at a fraction of the cost
                    </p>
                </div>

                {/* Main Content Grid */}
                <div className="grid grid-cols-1 lg:grid-cols-2 gap-6 md:gap-8 max-w-6xl mx-auto">
                    {/* Left Side - Monthly Breakdown */}
                    <div className="bg-white rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="https://im8health.com/cdn/shop/files/desktop_comparison-pill_2x_0da77b74-6605-4244-8e13-4c0e828ceb71_png.jpg?v=1757944441&width=1800"
                                alt=""
                                fill
                                className="object-cover opacity-20"
                            />
                        </div>
                        <div className="relative z-10">
                            <h3 className="text-xl font-serif text-gray-900 mb-6">Monthly breakdown</h3>

                            <div className="space-y-3">
                                {supplementBreakdown.map((item, idx) => (
                                    <div
                                        key={idx}
                                        className="flex justify-between items-center py-1 border-b border-im8-dark-red last:border-b-0"
                                    >
                                        <span className="text-sm text-gray-700">{item.name}</span>
                                        <span className="text-sm text-im8-dark-red whitespace-nowrap ml-4">
                                            ${item.price} USD
                                        </span>
                                    </div>
                                ))}
                            </div>

                            {/* Total */}
                            <div className="mt-6 pt-4 border-t-2 border-im8-dark-red">
                                <div className="flex justify-between items-center">
                                    <span className="text-base font-semibold text-im8-dark-red">Total Cost</span>
                                    <span className="text-lg font-bold t    ext-im8-dark-red">${totalCost} USD</span>
                                </div>
                            </div>
                        </div>
                    </div>

                    {/* Right Side - IM8 Product Card */}
                    <div className="rounded-2xl shadow-lg p-6 md:p-8 relative overflow-hidden min-h-[500px]">
                        {/* Background Image */}
                        <div className="absolute inset-0 z-0">
                            <Image
                                src="https://im8health.com/cdn/shop/files/longevity-cover.jpg?v=1757944718&width=1800"
                                alt=""
                                fill
                                className="object-cover"
                            />
                            <div className="absolute inset-0" />
                        </div>
                        <div className="relative z-10">
                            {/* Product Header */}
                            <h3 className="text-xl md:text-2xl font-serif text-im8-dark-red mb-4">
                                IM8 Daily Ultimate Longevity
                            </h3>

                            {/* Price Toggle */}
                            <div className="inline-flex p-1 mb-6">
                                <div
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/30 text-im8-dark-red border-im8-dark-red border`}
                                >
                                    ${oneTimePrice} one-time
                                </div>
                                <div className="px-2 py-2 text-lg font-bold text-im8-dark-red">/</div>
                                <div
                                    className={`px-4 py-2 rounded-full text-sm font-medium transition-all duration-300 bg-white/30 text-im8-dark-red border-im8-dark-red border`}
                                >
                                    ${subscriptionPrice} subscription
                                </div>
                            </div>

                            {/* Features List */}
                            <div className="mb-6">
                                <p className="text-xs text-im8-dark-red uppercase tracking-wider mb-3">
                                    All 10 compounds included
                                </p>
                                <ul className="space-y-2">
                                    {features.map((feature, idx) => (
                                        <li key={idx} className="flex items-center gap-2">
                                            <div className="w-5 h-5 rounded-full bg-im8-dark-red flex items-center justify-center flex-shrink-0">
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={3} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </div>
                                            <span className="text-sm text-gray-700">{feature}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>

                            

                            {/* Savings Banner */}
                            <div className="text-im8-dark-red bg-white/70 shadow-lg rounded-xl p-4 text-center mt-25">
                                <p className="text-xl md:text-2xl font-bold">
                                    Save ${savings}/month
                                </p>
                                <p className="text-sm uppercase tracking-wider">
                                    {savingsPercent}% Cost Reduction
                                </p>
                            </div>
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
