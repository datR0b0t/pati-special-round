"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";
import { useEffect, useRef, useState } from "react";

// Floating bubble component for background animation
function FloatingBubble({
    size,
    left,
    top,
    delay,
    duration
}: {
    size: number;
    left: string;
    top: string;
    delay: number;
    duration: number;
}) {
    return (
        <div
            className="absolute rounded-full bg-white/10 animate-float"
            style={{
                width: size,
                height: size,
                left,
                top,
                animationDelay: `${delay}s`,
                animationDuration: `${duration}s`,
            }}
        />
    );
}

// Stats data
const statsData = [
    {
        percentage: "95%",
        description: "Participants felt a noticeable boost in daily energy levels."
    },
    {
        percentage: "85%",
        description: "Felt less bloated and had improved digestion."
    },
    {
        percentage: "80%",
        description: "Participants reported getting better sleep."
    },
    {
        percentage: "70%",
        description: "Participants noticed sharper focus and improved mental clarity."
    }
];

// Animated counter hook
function useAnimatedCounter(target: number, duration: number = 2000, startAnimation: boolean = false) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!startAnimation) return;

        let startTime: number;
        let animationFrame: number;

        const animate = (timestamp: number) => {
            if (!startTime) startTime = timestamp;
            const progress = Math.min((timestamp - startTime) / duration, 1);

            // Easing function for smooth animation
            const easeOutQuart = 1 - Math.pow(1 - progress, 4);
            setCount(Math.floor(easeOutQuart * target));

            if (progress < 1) {
                animationFrame = requestAnimationFrame(animate);
            }
        };

        animationFrame = requestAnimationFrame(animate);

        return () => cancelAnimationFrame(animationFrame);
    }, [target, duration, startAnimation]);

    return count;
}

// Stat Card Component with animation
function StatCard({
    percentage,
    description,
    index,
    isVisible
}: {
    percentage: string;
    description: string;
    index: number;
    isVisible: boolean;
}) {
    const numericValue = parseInt(percentage);
    const animatedValue = useAnimatedCounter(numericValue, 2000, isVisible);

    return (
        <div
            className="flex flex-col gap-1 animate-fade-in"
            style={{ animationDelay: `${index * 150}ms` }}
        >
            <span className="text-4xl md:text-5xl lg:text-6xl font-bold text-white font-serif">
                {isVisible ? animatedValue : 0}%
            </span>
            <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-[160px]">
                {description}
            </p>
        </div>
    );
}

export function ClinicallyProven() {
    const sectionRef = useRef<HTMLElement>(null);
    const [isVisible, setIsVisible] = useState(false);

    useEffect(() => {
        const observer = new IntersectionObserver(
            ([entry]) => {
                if (entry.isIntersecting) {
                    setIsVisible(true);
                    observer.disconnect();
                }
            },
            { threshold: 0.2 }
        );

        if (sectionRef.current) {
            observer.observe(sectionRef.current);
        }

        return () => observer.disconnect();
    }, []);

    return (
        <section
            ref={sectionRef}
            className="relative py-16 md:py-24 overflow-hidden"
        >
            {/* Background Image */}
            <div className="absolute inset-0">
                <Image
                    src="https://im8health.com/cdn/shop/files/clinical-studies-min.jpg?v=1724176766&width=2048"
                    alt="Clinical studies background"
                    fill
                    className="object-cover"
                    priority
                />
                {/* Dark overlay for better text readability */}
                <div className="absolute inset-0 bg-gradient-to-r from-black/30 to-transparent" />
            </div>


            <Container>
                <div className="relative z-10 grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center">
                    {/* Left Side - Statistics */}
                    <div className="space-y-8 order-2 lg:order-1">
                        <h3 className="text-white/90 text-sm md:text-base font-medium tracking-wide">
                            Daily Ultimate Essentials
                        </h3>

                        <div className="grid grid-cols-2 gap-x-8 gap-y-10">
                            {statsData.map((stat, index) => (
                                <StatCard
                                    key={index}
                                    percentage={stat.percentage}
                                    description={stat.description}
                                    index={index}
                                    isVisible={isVisible}
                                />
                            ))}
                        </div>
                    </div>

                    {/* Right Side - Clinically Proven Content */}
                    <div className="space-y-6 order-1 lg:order-2">
                        {/* Main Heading */}
                        <div className="space-y-1 text-center lg:text-left">
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-white leading-tight">
                                Clinically Proven.
                            </h2>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-white leading-tight">
                                More Energy.
                            </h2>
                            <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-white leading-tight">
                                A Healthier Gut.<sup className="text-lg">*</sup>
                            </h2>
                        </div>

                        {/* NSF Certification Badge */}
                        <div
                            className="rounded-xl p-4 w-fit mx-auto lg:mx-0 md:p-5 shadow-lg max-w-lg border-2 border-im8-dark-red/30"
                            style={{
                                background: 'linear-gradient(135deg, #F7E7C4 0%, #F5DFA8 50%, #EDD590 100%)'
                            }}
                        >
                            <div className="flex flex-col md:flex-row items-center gap-4 md:gap-2">
                                {/* Trophy Icon */}
                                <div className="flex-shrink-0">
                                    <div className="w-10 h-10 md:w-12 md:h-12 flex items-center justify-center">
                                        <svg viewBox="0 0 24 24" fill="none" className="w-8 h-8 md:w-10 md:h-10 text-amber-600">
                                            <path d="M8 21h8m-4-4v4m-5-8c-1.5 0-3-1-3-3V5h16v5c0 2-1.5 3-3 3m-5 0c2.5 0 4.5-2 4.5-4.5V7h-9v2.5C7.5 11 9.5 13 12 13z" stroke="currentColor" strokeWidth="1.5" strokeLinecap="round" strokeLinejoin="round" />
                                        </svg>
                                    </div>
                                </div>

                                {/* NSF Info */}
                                <div className="flex-1">
                                    <div className="font-bold text-xs md:text-sm text-gray-900">
                                        NSF CERTIFIED FOR SPORT
                                    </div>
                                    <div className="text-xs text-amber-700">
                                        280+ Substances Tested
                                    </div>
                                </div>

                                {/* Divider */}
                                <div className="w-40 h-px md:w-px md:h-12 bg-amber-700/30" />

                                {/* Athlete Endorsement */}
                                <div className="flex items-center gap-3">
                                    <div className="text-right">
                                        <div className="text-xs text-gray-600">Trusted by</div>
                                        <div className="text-sm font-bold text-im8-dark-red">Aryna Sabalenka</div>
                                        <div className="text-[10px] text-gray-500">World No. 1 Tennis Player</div>
                                    </div>
                                    <div className="w-12 h-12 md:w-14 md:h-14 rounded-full overflow-hidden flex-shrink-0 ring-2 ring-amber-600/50">
                                        <Image
                                            src="https://im8health.com/cdn/shop/files/media_arynasabalenka_2x_1.png?v=1750822572&width=150"
                                            alt="Aryna Sabalenka"
                                            width={56}
                                            height={56}
                                            className="w-full h-full object-cover"
                                        />
                                    </div>
                                </div>
                            </div>
                        </div>

                        {/* Description */}
                        <p className="text-white/80 text-xs md:text-sm leading-relaxed max-w-md">
                            Every ingredient is third-party tested and NSF Certified for Sport, ensuring it&apos;s free from over 280 banned substances, heavy metals and contaminants. Trusted by athletes and sports leagues, including WADA, NFL, MLB, NHL, and PGA.
                        </p>

                        {/* CTA Buttons */}
                        <div className="flex flex-col sm:flex-row gap-2">
                            <button className="px-6 py-2 bg-transparent border-2 border-white text-white font-medium rounded-full hover:bg-white hover:text-im8-dark-red transition-all duration-300 text-sm uppercase tracking-wider">
                                View Third Party Testing Results
                            </button>
                            <button className="px-8 py-2 bg-[#C4A962] text-im8-dark-red font-semibold rounded-full hover:bg-[#D4B972] transition-all duration-300 text-sm uppercase tracking-wider shadow-lg btn-shine">
                                Learn More
                            </button>
                        </div>
                    </div>
                </div>
            </Container>

            {/* Footer Disclaimer */}
            <div className="relative z-10 mt-6 border-t border-white/10 pt-2">
                <Container>
                    <p className="text-white/50 text-[10px] md:text-xs leading-relaxed">
                        *Results Based on a 12-Week Randomized, Controlled, Clinical Trial Conducted by the San Francisco Research Institute. Please Click Here for FULL Details at the National Library of Medicine Trial.
                    </p>
                </Container>
            </div>
        </section>
    );
}
