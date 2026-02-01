"use client";

import { Container } from "@/components/ui/Container";
import Image from "next/image";
import "swiper/css";
import "swiper/css/free-mode";
import "swiper/css/navigation";
import { FreeMode, Navigation } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";

const experts = [
    {
        handle: "@elissagoodman",
        followers: "189K",
        name: "Elissa Goodman",
        title: "Holistic Nutritionist",
        avatar: "https://im8health.com/cdn/shop/files/Ellipse_62.png?v=1727768801&width=900",
        video: "https://im8health.com/cdn/shop/videos/c/vp/18ce63f7f6154e888f2a48c2a478e480/18ce63f7f6154e888f2a48c2a478e480.HD-1080p-7.2Mbps-38131720.mp4?v=0",
        caption: "health"
    },
    {
        handle: "@drberthabaum",
        followers: "229K",
        name: "Dr. Bertha Baum",
        title: "Board-Certified Dermatologist",
        avatar: "https://im8health.com/cdn/shop/files/bertha_baum.png?v=1730806825",
        video: "https://im8health.com/cdn/shop/videos/c/vp/ec95f3f8f55f4c1eb679982d43bf091d/ec95f3f8f55f4c1eb679982d43bf091d.HD-1080p-4.8Mbps-38234483.mp4?v=0",
        caption: "for the day."
    },
    {
        handle: "@drjenandjuice",
        followers: "284K",
        name: "Dr. Jennifer Tsai",
        title: "Board-Certified Optometrist & Nutrition Specialist",
        avatar: "https://im8health.com/cdn/shop/files/Jen.png?v=1730806923",
        video: "https://im8health.com/cdn/shop/videos/c/vp/936fe1ac73a046a98e1ff7e701676228/936fe1ac73a046a98e1ff7e701676228.HD-1080p-7.2Mbps-38131732.mp4?v=0",
        caption: "a great day"
    },
    {
        handle: "@timbiohacker",
        followers: "484K",
        name: "Tim Biohacker",
        title: "UK's Leading Bio-hacker",
        avatar: "https://im8health.com/cdn/shop/files/timbiohacker.png?v=1730889002",
        video: "https://im8health.com/cdn/shop/videos/c/vp/17fb74b0dd5d46e8ac4d1668b46b2134/17fb74b0dd5d46e8ac4d1668b46b2134.HD-1080p-7.2Mbps-38131729.mp4?v=0",
        caption: ""
    },
    {
        handle: "@drrobinb",
        followers: "145K",
        name: "Dr. Robin Berzin",
        title: "Doctor of Pharmacy",
        avatar: "https://im8health.com/cdn/shop/files/Ellipse_64.png?v=1727768801&width=900",
        video: "https://im8health.com/cdn/shop/videos/c/vp/db58a8d3630b47a597fb148aba8a1790/db58a8d3630b47a597fb148aba8a1790.HD-1080p-3.3Mbps-38232043.mp4?v=0",
        caption: "the"
    },
    {
        handle: "@drshah",
        followers: "1.4M",
        name: "Dr. Darshan Shah",
        title: "Board-Certified Surgeon",
        avatar: "https://im8health.com/cdn/shop/files/influencer_drshah_profile.png?v=1730184660",
        video: "https://im8health.com/cdn/shop/videos/c/vp/9d07478703af48a2903deb8e3fbd5076/9d07478703af48a2903deb8e3fbd5076.HD-1080p-4.8Mbps-38192239.mp4?v=0",
        caption: ""
    },
    {
        handle: "@monasharma",
        followers: "183K",
        name: "Mona Sharma",
        title: "Celebrity Nutritionist",
        avatar: "https://im8health.com/cdn/shop/files/Monasharma.png?v=1730806896",
        video: "https://im8health.com/cdn/shop/videos/c/vp/1cfa80d2973d44619564e370d8fb9a5a/1cfa80d2973d44619564e370d8fb9a5a.HD-1080p-7.2Mbps-38201373.mp4?v=0",
        caption: ""
    },
    {
        handle: "@amyshah",
        followers: "1.2M",
        name: "Dr. Amy Shah",
        title: "Double-Board Certified Physician",
        avatar: "https://im8health.com/cdn/shop/files/Ellipse_63.png?v=1727768801&width=900",
        video: "https://im8health.com/cdn/shop/videos/c/vp/0cdc39d7dda145e29a333ee5f43ed507/0cdc39d7dda145e29a333ee5f43ed507.HD-1080p-2.5Mbps-38319373.mp4?v=0",
        caption: ""
    }
];

function VideoCard({ expert }: { expert: typeof experts[0] }) {
    return (
        <div className="w-full">
            {/* Video Card */}
            <div className="relative aspect-[9/16] rounded-2xl overflow-hidden bg-gray-200 shadow-lg group">
                {/* Video */}
                <video
                    src={expert.video}
                    className="absolute inset-0 w-full h-full object-cover"
                    muted
                    loop
                    playsInline
                    autoPlay
                />

                {/* Handle & Followers Overlay */}
                <div className="absolute top-3 left-3 right-3 flex items-center gap-2 z-10">
                    <div className="w-6 h-6 rounded-full overflow-hidden border border-white/50">
                        <Image
                            src={expert.avatar}
                            alt={expert.name}
                            width={24}
                            height={24}
                            className="object-cover w-full h-full"
                        />
                    </div>
                    <span className="text-white text-xs font-medium drop-shadow-lg">
                        {expert.handle}
                    </span>
                    <span className="text-white/70 text-xs drop-shadow-lg">
                        ({expert.followers})
                    </span>
                </div>

                {/* Gradient Overlay */}
                <div className="absolute inset-0 bg-gradient-to-t from-black/40 via-transparent to-black/20 pointer-events-none" />
            </div>

            {/* Expert Info */}
            <div className="mt-4 px-1">
                <p className="text-base font-semibold text-im8-dark-red leading-tight">
                    {expert.name}
                </p>
                <p className="text-xs text-gray-600 leading-tight mt-1">
                    {expert.title}
                </p>
            </div>
        </div>
    );
}

export function VideoTestimonials() {
    return (
        <section className="py-16 md:py-24 bg-[#F5F0EB] overflow-hidden">
            <Container>
                {/* Header */}
                <h2 className="text-2xl md:text-3xl lg:text-4xl font-serif italic text-im8-dark-red text-center mb-12">
                    Trusted by Physicians and Nutrition Experts
                </h2>
            </Container>

            {/* Video Cards Carousel with Swiper */}
            
                <Swiper
                    modules={[Navigation, FreeMode]}
                    spaceBetween={16}
                    slidesPerView={1.5}
                    freeMode={true}
                    navigation={{
                        prevEl: ".swiper-button-prev-custom",
                        nextEl: ".swiper-button-next-custom",
                    }}
                    breakpoints={{
                        480: {
                            slidesPerView: 2,
                            spaceBetween: 16,
                        },
                        640: {
                            slidesPerView: 2.5,
                            spaceBetween: 20,
                        },
                        768: {
                            slidesPerView: 3,
                            spaceBetween: 20,
                        },
                        1024: {
                            slidesPerView: 4,
                            spaceBetween: 24,
                        },
                        1280: {
                            slidesPerView: 5,
                            spaceBetween: 24,
                        },
                    }}
                    className="!overflow-visible"
                >
                    {experts.map((expert, index) => (
                        <SwiperSlide key={index}>
                            <VideoCard expert={expert} />
                        </SwiperSlide>
                    ))}
                </Swiper>
            
        </section>
    );
}
