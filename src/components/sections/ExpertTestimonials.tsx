"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";

const testimonials = [
    {
        quote: "IM8's Daily Ultimate Longevity Powder represents the pinnacle of nutritional science. The therapeutic dosing and synergistic combination of compounds targeting all hallmarks of aging is unprecedented in the supplement industry.",
        name: "Dr. James DiNicolantonio",
        title: "Cardiovascular Research Scientist & Doctor of Pharmacy, Best-Selling Author of 12+ Books on Health",
        image: "https://im8health.com/cdn/shop/files/Dr._James_D.png?v=1730708665&width=600"
    },
    {
        quote: "As a physician focused on integrative medicine, I'm impressed by IM8's comprehensive approach. This isn't just another supplement — it's a complete longevity system backed by rigorous science.",
        name: "Dr. Amy Shah",
        title: "Double-Board Certified Physician, Host of Podcast 'Save Yourself'",
        image: "https://im8health.com/cdn/shop/files/amy_headshot.webp?v=1747104327&width=600"
    },
    {
        quote: "After decades studying the effects of space on the human body, I recognize the importance of comprehensive cellular protection. IM8's formulation addresses aging at the most fundamental level.",
        name: "Dr. James L. Green",
        title: "Former Chief Scientist of NASA, Space Medicine & Human Performance Expert",
        image: "https://im8health.com/cdn/shop/files/James-Sciencee.png?v=1745833743&width=600"
    },
    {
        quote: "In my practice focused on longevity medicine, I've never seen a supplement that so comprehensively addresses the biological mechanisms of aging. IM8 is truly revolutionary.",
        name: "Dr. Darshan Shah",
        title: "Board Certified Surgeon & Physician, CEO and Founder of Next Health",
        image: "https://im8health.com/cdn/shop/files/sab_DarshanShah_headshot.jpg?v=1750043459&width=600"
    }
];

function QuoteIcon({ className = "" }: { className?: string }) {
    return (
        <svg className={`w-6 h-6 text-im8-dark-red ${className}`} viewBox="0 0 24 24" fill="currentColor">
            <path d="M11.192 15.757c0-.88-.23-1.618-.69-2.217-.326-.412-.768-.683-1.327-.812-.55-.128-1.07-.137-1.54-.028-.16-.95.1-1.956.76-3.022.66-1.065 1.515-1.867 2.558-2.403L9.373 5c-.8.396-1.56.898-2.26 1.505-.71.607-1.34 1.305-1.9 2.094s-.98 1.68-1.25 2.69-.346 2.04-.217 3.1c.168 1.4.62 2.52 1.356 3.35.735.84 1.652 1.26 2.748 1.26.965 0 1.766-.29 2.4-.878.628-.576.94-1.365.94-2.368l.002.003zm9.124 0c0-.88-.23-1.618-.69-2.217-.326-.42-.77-.692-1.327-.817-.56-.124-1.074-.13-1.54-.022-.16-.94.09-1.95.75-3.02.66-1.06 1.514-1.86 2.557-2.4L18.49 5c-.8.396-1.555.898-2.26 1.505-.708.607-1.34 1.305-1.894 2.094-.556.79-.97 1.68-1.24 2.69-.273 1-.345 2.04-.217 3.1.165 1.4.615 2.52 1.35 3.35.732.833 1.646 1.25 2.742 1.25.967 0 1.768-.29 2.402-.876.627-.576.942-1.365.942-2.368v.01z" />
        </svg>
    );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="bg-white rounded-2xl p-6 md:p-8 shadow-sm border border-gray-100 relative">
            {/* Opening Quote */}
            <div className="absolute top-6 left-6">
                <QuoteIcon />
            </div>

            {/* Quote Text */}
            <p className="text-sm md:text-base text-im8-dark-red leading-relaxed mt-8 mb-6 pl-2">
                {testimonial.quote}
            </p>

            {/* Closing Quote */}
            <div className="absolute top-6 right-6">
                <QuoteIcon className="rotate-180" />
            </div>

            {/* Doctor Info */}
            <div className="flex items-start gap-4 mt-4">
                {/* Avatar */}
                <div className="w-16 h-16 rounded-full overflow-hidden flex-shrink-0 border-2 border-im8-dark-red/20">
                    <Image
                        src={testimonial.image}
                        alt={testimonial.name}
                        width={64}
                        height={64}
                        className="object-cover w-full h-full"
                    />
                </div>

                {/* Name & Title */}
                <div className="flex-1">
                    <p className="font-semibold text-im8-dark-red text-sm">
                        — {testimonial.name}
                    </p>
                    <p className="text-xs text-gray-600 leading-relaxed mt-1">
                        {testimonial.title}
                    </p>
                </div>
            </div>
        </div>
    );
}

export function ExpertTestimonials() {
    return (
        <section className="py-16 md:py-24 bg-[#F5F0EB]">
            <Container>
                {/* Header */}
                <div className="text-center mb-12">
                    <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif uppercase tracking-wide text-im8-dark-red mb-4">
                        Backed by World-Class
                        <br />
                        Longevity Doctors and Scientists
                    </h2>
                    <p className="text-sm md:text-base text-gray-600 max-w-2xl mx-auto">
                        Our Scientific Advisory Board brings together leading experts from NASA, Mayo Clinic, and top research institutions.
                    </p>
                </div>

                {/* Testimonials Grid */}
                <div className="grid grid-cols-1 md:grid-cols-2 gap-6 lg:gap-8">
                    {testimonials.map((testimonial, index) => (
                        <TestimonialCard key={index} testimonial={testimonial} />
                    ))}
                </div>
            </Container>
        </section>
    );
}
