"use client";

import { Marquee } from "@/components/ui/marquee";
import Image from "next/image";

const testimonials = [
    {
        handle: "@dance10fikshun",
        followers: "2.6M",
        avatar: "https://im8health.com/cdn/shop/files/Ellipse_62.png?v=1727768801&width=900",
        image: "https://im8health.com/cdn/shop/videos/c/vp/4d801fb0e5524d5a9c43dc987966df6a/4d801fb0e5524d5a9c43dc987966df6a.SD-480p-0.9Mbps-39413304.mp4?v=0",
        rating: 5,
        quote: "My life is all about movement, balance, and expression. IM8 keeps me energized and feeling great, allowing me to bring my best to every performance.",
    },
    {
        handle: "@davidnursenba",
        followers: "162K",
        avatar: "https://im8health.com/cdn/shop/files/bertha_baum.png?v=1730806825",
        image: "https://im8health.com/cdn/shop/videos/c/vp/01fc5e8bd9934532b9120f5277539ccc/01fc5e8bd9934532b9120f5277539ccc.SD-480p-0.9Mbps-39412912.mp4?v=0",
        rating: 5,
        quote: "As a performance coach, I'm always seeking ways to stay sharp and energized. IM8 is hands down the best all-in-one supplement. It tastes amazing, and my wife and I take it daily—it's a game-changer.",
    },
    {
        handle: "@thejosephabell",
        followers: "2M",
        avatar: "https://im8health.com/cdn/shop/files/Jen.png?v=1730806923",
        image: "https://im8health.com/cdn/shop/videos/c/vp/cb2b8daf5bbe45299c834c593e147522/cb2b8daf5bbe45299c834c593e147522.SD-480p-0.9Mbps-39412954.mp4?v=0",
        rating: 5,
        quote: "Nutrition should be as exciting as it is nourishing. IM8 redefines nutrition for me, making health delicious and effective, whether in the kitchen or in my daily routine.",
    },
    {
        handle: "@tjdefalco",
        followers: "274K",
        avatar: "https://im8health.com/cdn/shop/files/timbiohacker.png?v=1730889002",
        image: "https://im8health.com/cdn/shop/videos/c/vp/e2c97673de604d8d9395afdda954e1d8/e2c97673de604d8d9395afdda954e1d8.SD-480p-0.9Mbps-39413319.mp4?v=0",
        rating: 5,
        quote: "On the court, peak performance is non-negotiable. IM8 fuels my energy and mental clarity, helping me stay sharp and push my limits every day.",
    },
    {
        handle: "@mrbobbyrich",
        followers: "105K",
        avatar: "https://im8health.com/cdn/shop/files/Ellipse_64.png?v=1727768801&width=900",
        image: "https://im8health.com/cdn/shop/videos/c/vp/277ed49454544ca4a856e0e3faf4730c/277ed49454544ca4a856e0e3faf4730c.SD-480p-0.9Mbps-39412880.mp4?v=0",
        rating: 5,
        quote: "As a former athlete and trainer to top performers, including David and Victoria Beckham, it means everything to always be on the top of my game. IM8 helps me to do just that and I'm proud to be part of the team.",
    },
];

function StarRating({ rating }: { rating: number }) {
    return (
        <div className="flex gap-0.5">
            {Array.from({ length: rating }).map((_, i) => (
                <span key={i} className="text-im8-dark-red text-sm">★</span>
            ))}
        </div>
    );
}

function TestimonialCard({ testimonial }: { testimonial: typeof testimonials[0] }) {
    return (
        <div className="w-[280px] md:w-[320px] flex-shrink-0 bg-white rounded-2xl shadow-lg p-5 overflow-hidden">
            {/* Video/Image Area */}
            <div className="relative mt-10 aspect-[5/5] ">
                <video
                    src={testimonial.image}
                    className="absolute inset-0 w-full h-full object-cover rounded-2xl"
                    muted
                    loop
                    playsInline
                    autoPlay
                />
                {/* Handle Overlay */}
                <div className="absolute -top-10 left-1 flex items-center gap-2 z-10">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-white/50">
                        <Image
                            src={testimonial.avatar}
                            alt={testimonial.handle}
                            width={24}
                            height={24}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <span className="text-im8-dark-red text-xs font-medium drop-shadow-lg">
                        {testimonial.handle}
                    </span>
                    <span className="text-im8-dark-red text-xs drop-shadow-lg">
                        ({testimonial.followers})
                    </span>
                </div>
                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/30 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* Content */}
            <div className="p-4">
                <StarRating rating={testimonial.rating} />
                <p className="text-sm text-gray-700 mt-2 leading-relaxed">
                    {testimonial.quote}
                </p>
            </div>
        </div>
    );
}

export function AmbassadorTestimonials() {
    return (
        <section
            className="py-16 md:py-24 bg-cover bg-center bg-no-repeat"
            style={{
                backgroundImage: "url('https://im8health.com/cdn/shop/files/testimonials.png?v=1727769423&width=2048')",
            }}
        >
            {/* Header */}
            <div className="text-center mb-12 px-4">
                <div className="flex items-center justify-center gap-2 mb-4">
                    <span className="text-im8-dark-red text-sm">★★★★★</span>
                    <span className="text-im8-dark-red text-sm font-medium uppercase tracking-wider">
                        Feel the Difference
                    </span>
                </div>
                <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif italic text-im8-dark-red">
                    What Our IM8 Ambassadors Are Saying
                </h2>
            </div>

            {/* Marquee */}
            <Marquee pauseOnHover className="[--duration:50s] gap-4">
                {testimonials.map((testimonial, index) => (
                    <TestimonialCard key={index} testimonial={testimonial} />
                ))}
            </Marquee>
        </section>
    );
}
