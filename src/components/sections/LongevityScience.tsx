"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";

const scienceCards = [
    {
        id: 1,
        image: "https://im8health.com/cdn/shop/files/aging.jpg?v=1757644765&width=1500",
        title: "The Science of Aging",
        subtitle: "Understanding the 12 Hallmarks",
        description: "Aging isn't just getting older - it's 12 specific biological processes that can be measured, tracked, and most importantly, targeted with the right interventions.",
        points: [
            "Aging is caused by 12 distinct biological mechanisms",
            "Each hallmark can be targeted with specific compounds",
            "Early intervention is exponentially more effective",
            "IM8 is the only supplement targeting all 12 pathways"
        ]
    },
    {
        id: 2,
        image: "https://im8health.com/cdn/shop/files/supplements.jpg?v=1757644765&width=1500",
        title: "Why Most Supplements Fail",
        subtitle: "The Truth About Dosing & Bioavailability",
        description: "Most supplements use \"fairy dust\" dosing - just enough to list on the label, but nowhere near therapeutic levels needed for real results.",
        points: [
            "Most supplements use 10-50x lower doses than research studies",
            "Poor bioavailability means ingredients never reach target tissues",
            "No synergistic combinations - ingredients work better together",
            "IM8 uses therapeutic doses in bioavailable forms with synergistic combinations"
        ]
    },
    {
        id: 3,
        image: "https://im8health.com/cdn/shop/files/dr-dawn-longevity.jpg?v=1758026901&width=1500",
        title: "Longevity vs Anti-Aging",
        subtitle: "Proactive vs Reactive Approaches",
        description: "Anti-aging tries to reverse damage after it's done. Longevity prevents the damage from happening in the first place.",
        points: [
            "Anti-aging: Reactive approach to visible signs of aging",
            "Longevity: Proactive approach targeting root causes",
            "Prevention is 10x more effective than reversal",
            "Supporting healthy aging at the cellular level"
        ],
        badge: {
            name: "Dr. Dawn Mussallem",
            title: "IM8 Scientific Advisory Board Member",
            subtitle: "Stage IV Cancer Survivor, Heart Transplant Recipient, Integrative Oncologist at Mayo Clinic"
        }
    }
];

export function LongevityScience() {
    return (
        <section className="py-16 md:py-24 bg-gradient-to-b from-red-50 to-white">
            <Container>
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-3xl md:text-4xl font-serif font-bold text-im8-dark-red uppercase tracking-wide mb-4">
                        Understanding<br />Longevity Science
                    </h2>
                    <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                        Learn why IM8 represents a breakthrough in longevity supplementation
                    </p>
                </div>

                {/* Cards Grid */}
                <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
                    {scienceCards.map((card) => (
                        <div
                            key={card.id}
                            className="bg-white rounded-2xl shadow-lg overflow-hidden border border-gray-100 hover:shadow-xl transition-shadow duration-300"
                        >
                            {/* Image */}
                            <div className="relative aspect-[4/3] overflow-hidden">
                                <Image
                                    src={card.image}
                                    alt={card.title}
                                    fill
                                    className="object-cover"
                                />
                            </div>

                            {/* Content */}
                            <div className="p-6">
                                <h3 className="text-xl font-serif font-bold text-im8-dark-red mb-1">
                                    {card.title}
                                </h3>
                                <p className="text-im8-bright-red text-sm font-semibold mb-3">
                                    {card.subtitle}
                                </p>
                                <p className="text-gray-600 text-sm mb-4 leading-relaxed">
                                    {card.description}
                                </p>

                                {/* Points */}
                                <ul className="space-y-2">
                                    {card.points.map((point, index) => (
                                        <li key={index} className="flex items-start gap-2">
                                            <span className="flex-shrink-0 w-5 h-5 rounded-full bg-im8-bright-red flex items-center justify-center mt-0.5">
                                                <svg className="w-3 h-3 text-white" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                                                </svg>
                                            </span>
                                            <span className="text-gray-700 text-sm">{point}</span>
                                        </li>
                                    ))}
                                </ul>
                            </div>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
