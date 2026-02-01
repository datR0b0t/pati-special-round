"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";

const freeItems = [
    { name: "Signature Red Cup", originalPrice: "$220", price: "Free" },
    { name: "Daily Ultimate Longevity Single-Serve Storage Box", originalPrice: "$68", price: "Free" },
    { name: "5x Bonus Daily Ultimate Longevity Single-Serve Sachets", originalPrice: "$145", price: "Free" },
];

export function GetStarted() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-[#FDF5F0] to-[#FCEEE6]">
            <Container>
                {/* Main Content */}
                <div className="flex flex-col-reverse lg:flex-row gap-8 lg:gap-16 items-center">
                    {/* Left Column - Pricing Info */}
                    <div className="flex-1">
                        <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif text-im8-dark-red mb-8 uppercase tracking-wide">
                            Get Started with IM8 for<br />
                            Daily Ultimate Nutrition
                        </h2>

                        {/* Main Product */}
                        <div className="flex justify-between items-center py-4 border-b border-gray-300">
                            <span className="font-semibold text-gray-900">Daily Ultimate Longevity</span>
                            <span className="font-bold text-gray-900">$1,018</span>
                        </div>

                        {/* Free Items Header */}
                        <div className="py-3 border-b border-gray-200">
                            <span className="text-xs text-gray-500 uppercase tracking-wider">First Time Purchase:</span>
                        </div>

                        {/* Free Items */}
                        {freeItems.map((item, index) => (
                            <div key={index} className="flex justify-between items-center py-3 border-b border-gray-200">
                                <span className="text-sm text-gray-700">{item.name}</span>
                                <div className="flex items-center gap-3">
                                    <span className="text-sm text-gray-400 line-through">{item.originalPrice}</span>
                                    <span className="text-sm font-semibold text-im8-dark-red">{item.price}</span>
                                </div>
                            </div>
                        ))}

                        {/* Total */}
                        <div className="flex justify-between items-center py-4 border-b border-gray-300">
                            <span className="font-bold text-gray-900">Total</span>
                            <div className="flex items-center gap-3">
                                <span className="text-sm text-gray-500">Save $429</span>
                                <span className="font-bold text-xl text-gray-900">$1,018</span>
                            </div>
                        </div>

                        {/* CTA Button */}
                        <button className="w-full mt-6 bg-im8-dark-red text-white py-4 px-6 rounded-full font-semibold uppercase tracking-wider hover:bg-im8-bright-red transition-colors btn-shine">
                            Get Your Free IM8 Welcome Kit Now**
                        </button>

                        {/* Badges */}
                        <div className="flex items-center justify-center gap-6 mt-4 text-sm">
                            <div className="flex items-center gap-2">
                                <span className="text-im8-dark-red">✓</span>
                                <span className="text-gray-600"><strong>30-Day</strong> money back guarantee</span>
                            </div>
                            <div className="flex items-center gap-2">
                                <span className="text-im8-dark-red">✓</span>
                                <span className="text-gray-600"><strong>Update</strong> or <strong>cancel</strong> anytime</span>
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Product Image */}
                    <div className="flex-1 relative flex justify-center lg:justify-end">
                        <Image
                            src="https://im8health.com/cdn/shop/files/Group_1000005359.png?v=1759894041&width=1200"
                            alt="IM8 Products"
                            width={500}
                            height={400}
                            className="object-contain"
                        />
                    </div>
                </div>

                {/* Money Back Guarantee Section */}
                <div className="mt-16 bg-im8-bright-red rounded-3xl mx-2 p-4 md:p-8 flex flex-col md:flex-row items-center gap-8">
                    {/* Badge */}
                    <div className="flex-shrink-0">
                        <div className="relative w-28 h-28 md:w-32 md:h-32">
                            <Image
                                src="https://im8health.com/cdn/shop/files/money-back_ee797368-d884-4b06-ae20-48d1b98bed0a.png?v=1747360534&width=300"
                                alt="IM8 Products"
                                width={500}
                                height={400}
                                className="object-contain"
                            />
                        </div>
                    </div>

                    {/* Content */}
                    <div className="flex-1 text-center md:text-left">
                        <h3 className="text-2xl md:text-3xl font-serif text-white mb-4">
                            Try IM8 Risk-Free for 30 Days
                        </h3>
                        <p className="text-white/80 text-sm md:text-base leading-relaxed mb-6">
                            We believe in the power of IM8 — and we want you to experience it with complete confidence. If you&apos;re not feeling the difference within 30 days, we&apos;ll give you a full refund on your first order. No questions asked — and you don&apos;t even need to send the product back. It&apos;s that simple. No stress. No hassle. Just results, or your money back.
                        </p>
                        <button className="bg-im8-dark-red border-2 border-white text-white py-3 px-8 rounded-full font-semibold uppercase tracking-wider hover:bg-white hover:text-im8-dark-red transition-colors">
                            Experience IM8 Now
                        </button>
                    </div>
                </div>
            </Container>
        </section>
    );
}
