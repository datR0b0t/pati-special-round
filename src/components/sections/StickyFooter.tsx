"use client";

import { Container } from "@/components/ui/Container";
import { ChevronDown } from "lucide-react";
import Image from "next/image";
import { useState } from "react";
import { Button } from "../ui/Button";

const supplyOptions = [
    { label: "90-Day Supply", pricePerDay: "HK$48.38", totalPrice: "HK$1451.33", period: "HKD/MO" },
    { label: "30-Day Supply", pricePerDay: "HK$65.00", totalPrice: "HK$1950.00", period: "HKD/MO" },
];

export function StickyFooter() {
    const [selectedOption, setSelectedOption] = useState(0);
    const [isOpen, setIsOpen] = useState(false);

    const currentOption = supplyOptions[selectedOption];

    return (
        <div className="fixed bottom-0 left-0 right-0 bg-im8-cream border-t border-gray-200 shadow-lg z-50">
            <Container className="flex items-center justify-between gap-4">
                {/* Product Info - Left */}
                <div className="hidden md:flex items-center gap-4">
                    <div className="relative w-23 h-23 rounded-lg overflow-hidden bg-gradient-to-br from-rose-100 to-rose-200 flex-shrink-0">
                        <Image
                            src="https://im8health.com/cdn/shop/files/IM8_PDP_23_Images-daily-essential_longevity-slide_01_jpg.jpg?v=1762224676&width=500"
                            alt="The Beckham Stack"
                            fill
                            className="object-cover"
                        />
                    </div>
                    <div>
                        <p className="font-semibold text-im8-dark-red text-base">The Beckham Stack</p>
                        <p className="text-im8-dark-red text-base">(Forever Jar)</p>
                    </div>
                </div>

                {/* Right Section - Full width on mobile when left is hidden */}
                <div className="flex items-center gap-2 py-3 sm:gap-4 w-full md:w-auto md:ml-auto">
                    {/* Dropdown - Takes more space than button on mobile */}
                    <div className="relative flex-1 md:flex-initial md:min-w-[250px]">
                        <button
                            onClick={() => setIsOpen(!isOpen)}
                            className="w-full flex items-center justify-between gap-4 px-3 sm:px-4 py-1 bg-white border border-im8-dark-red rounded-full hover:border-im8-dark-red transition-colors"
                        >
                            <div className="text-left">
                                <p className="font-medium text-im8-dark-red text-sm">{currentOption.label}</p>
                                <p className="text-xs text-gray-500">{currentOption.pricePerDay} HKD / day</p>
                            </div>
                            <ChevronDown className={`h-5 w-5 text-gray-500 transition-transform duration-200 flex-shrink-0 ${isOpen ? 'rotate-180' : ''}`} />
                        </button>

                        {/* Dropdown */}
                        {isOpen && (
                            <div className="absolute bottom-full left-0 right-0 mb-2 bg-white border border-gray-200 rounded-lg shadow-xl overflow-hidden">
                                {supplyOptions.map((option, index) => (
                                    <button
                                        key={index}
                                        onClick={() => {
                                            setSelectedOption(index);
                                            setIsOpen(false);
                                        }}
                                        className={`w-full px-4 py-3 text-left hover:bg-gray-50 transition-colors border-b last:border-b-0 ${selectedOption === index ? 'bg-im8-cream' : ''
                                            }`}
                                    >
                                        <p className="font-medium text-im8-dark-red text-sm">{option.label}</p>
                                    </button>
                                ))}
                            </div>
                        )}
                    </div>

                    {/* Add to Cart Button - Responsive text */}
                    <Button variant="primary" size="lg">
                        {/* xs: ADD */}
                        <span className="sm:hidden">ADD</span>
                        {/* sm-lg: ADD TO CART */}
                        <span className="hidden sm:inline lg:hidden">ADD TO CART</span>
                        {/* lg+: ADD TO CART - price */}
                        <span className="hidden lg:inline">ADD TO CART - {currentOption.totalPrice} {currentOption.period}</span>
                    </Button>
                </div>

            </Container>
        </div>
    );
}
