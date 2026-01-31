"use client";

import { AccordionItem } from "@/components/ui/AccordionItem";
import { Button } from "@/components/ui/Button";
import { Carousel, CarouselContent, CarouselItem, type CarouselApi } from "@/components/ui/carousel";
import { Container } from "@/components/ui/Container";
import { ExpertCard } from "@/components/ui/ExpertCard";
import { Check, ChevronRight, Star } from "lucide-react";
import Image from "next/image";
import { useEffect, useState } from "react";

// Product images for gallery
const productImages = [
    "https://im8health.com/cdn/shop/files/PDP_187cda96-97bf-482e-93df-591d6750ae8d.jpg?v=1766552715&width=1946",
    "https://im8health.com/cdn/shop/files/202510_bstack-carousel_02.jpg?v=1762224676",
    "https://im8health.com/cdn/shop/files/202510bstack-carousel03.jpg?v=1762224676",
    "https://im8health.com/cdn/shop/files/202510-bstack-carousel-04B.jpg?v=1762224676",
    "https://im8health.com/cdn/shop/files/202510_bstack-carousel_05.jpg?v=1762224676",
    "https://im8health.com/cdn/shop/files/202510bstack-carousel06_57240d78-7871-480b-8dba-dff023f35bdd.jpg?v=1762224676",
    "https://im8health.com/cdn/shop/files/202510_bstack-carousel_07.jpg?v=1762224676",
    "https://im8health.com/cdn/shop/files/202510_bstack-carousel_08.jpg?v=1762224676",
    "https://im8health.com/cdn/shop/files/202510_bstack-carousel_09.jpg?v=1762224676",
    "https://im8health.com/cdn/shop/files/202510_bstack-carousel_10.jpg?v=1762224676",
];

// Product format images
const foreverJarImage = "https://im8health.com/cdn/shop/files/UX-Input_1.jpg?v=8068906590217553853";
const sachetsImage = "https://im8health.com/cdn/shop/files/UX-Input_2.jpg?v=4366596284312861834";

// Product formats data
const productFormats = {
    "forever-jar": {
        name: "Forever Jar",
        image: foreverJarImage,
        isPopular: true,
        supplyOptions: [
            {
                id: "90-day",
                label: "90-Day Supply",
                discount: "Save 30%",
                discountColor: "text-im8-bright-red",
                priceMonthly: "$685",
                pricePerDay: "HK$22.83 HKD / SERVING",
                billingInfo: "Billed HK$2,055.00 HKD every 12 weeks",
                isBestValue: true,
                isNewYearOffer: true,
                benefits: [
                    { emoji: "🎓", text: "Exclusive Access to 90 Day IM8 Transformation Program (see below)" },
                    { emoji: "💰", text: "Maximum savings - lowest price per serving" },
                    { emoji: "👨‍👩‍👧", text: "Share with family and friends" },
                    { emoji: "🎁", text: "Free Daily Ultimate Mixer (US$18)" },
                    { emoji: "🚚", text: "Free Shipping to US, UK, CA, and most of EU and APAC" },
                    { emoji: "⏸️", text: "Cancel or pause anytime" },
                    { emoji: "🎁", text: "Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)" },
                ],
            },
            {
                id: "30-day",
                label: "30-Day Supply",
                discount: "Save 20%",
                discountColor: "text-im8-bright-red",
                priceMonthly: "$781",
                pricePerDay: "HK$26.03 HKD / SERVING",
                billingInfo: "Billed HK$781.00 HKD every 4 weeks",
                isBestValue: true,
                isNewYearOffer: true,
                benefits: [
                    { emoji: "✔", text: "30-day money back guarantee" },
                    { emoji: "✔", text: "Cancel or pause anytime" },
                    { emoji: "✔", text: "Free Shipping to US, UK, CA, and most of EU and APAC" },
                    { emoji: "✔", text: "Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)" },
                ],
            },
        ],
        oneTimePurchase: "$979",
    },
    "sachets": {
        name: "Single-Serve Sachets",
        image: sachetsImage,
        isPopular: false,
        supplyOptions: [
            {
                id: "90-day",
                label: "90-Day Supply",
                discount: "Save 22%",
                discountColor: "text-im8-bright-red",
                priceMonthly: "$754.33",
                pricePerDay: "HK$25.14 HKD / SERVING",
                billingInfo: "Billed HK$2,263.00 HKD every 12 weeks",
                isBestValue: true,
                isNewYearOffer: true,
                benefits: [
                    { emoji: "🎓", text: "Exclusive Access to 90 Day IM8 Transformation Program (see below)" },
                    { emoji: "💰", text: "Maximum savings - lowest price per serving" },
                    { emoji: "👨‍👩‍👧", text: "Share with family and friends" },
                    { emoji: "🎁", text: "Free Daily Ultimate Mixer (US$18)" },
                    { emoji: "🚚", text: "Free Shipping to US, UK, CA, and most of EU and APAC" },
                    { emoji: "⏸️", text: "Cancel or pause anytime" },
                    { emoji: "🎁", text: "Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)" },
                ],
            },
            {
                id: "30-day",
                label: "30-Day Supply",
                discount: "Save 12%",
                discountColor: "text-im8-bright-red",
                priceMonthly: "$860",
                pricePerDay: "HK$28.67 HKD / SERVING",
                billingInfo: "Billed HK$860.00 HKD every 4 weeks",
                isBestValue: false,
                isNewYearOffer: false,
                benefits: [
                    { emoji: "✔", text: "30-day money back guarantee" },
                    { emoji: "✔", text: "Cancel or pause anytime" },
                    { emoji: "✔", text: "Free Shipping to US, UK, CA, and most of EU and APAC" },
                    { emoji: "✔", text: "Free Welcome Kit: Signature Red Cup + 5 Travel Sachets (US$18)" },
                ],
            },
        ],
        oneTimePurchase: "$979",
    },
};

// Clinical results data
const clinicalResults = [
    { emoji: "⚡", percentage: "95%", label: "More energy" },
    { emoji: "🦠", percentage: "85%", label: "Better gut health" },
    { emoji: "😴", percentage: "80%", label: "Better sleep quality" },
    { emoji: "🧠", percentage: "70%", label: "Sharper focus" },
];
const expertList = [
    {
        imageSrc: "https://im8health.com/cdn/shop/files/sab_Dawn_grid.jpg?v=1747304298&width=300",
        name: "Dr. Dawn Mussallem",
        title: "Cancer Survivor & Physician at Mayo Clinic"
    },
    {
        imageSrc: "https://im8health.com/cdn/shop/files/Rectangle_3_68b5f4fc-fe48-466d-9d97-487fbdea1942.png?v=1764066245&width=300",
        name: "Bobby Rich",
        title: "Trainer to David Beckham and World-class Athletes"
    },
    {
        imageSrc: "https://im8health.com/cdn/shop/files/Rectangle_4_9e90556f-68ae-405e-a707-89eff3d64066.png?v=1764066309&width=300",
        name: "Dr. Suzanne Devkota",
        title: "Gut Health Expert & Prof at Cedars Sinai"
    },
    {
        imageSrc: "https://im8health.com/cdn/shop/files/Rectangle_5.png?v=1764066392&width=300",
        name: "Tavi Castro",
        title: "Breathwork Expert & Free-Diving World Record Holder"
    },
    {
        imageSrc: "https://im8health.com/cdn/shop/files/Rectangle_7.png?v=1764066430&width=300",
        name: "Dr. Amy Shah",
        title: 'Double-Board Certified Physician and Host of "Save Yourself!" Podcast'
    },
    {
        imageSrc: "https://im8health.com/cdn/shop/files/Rectangle_6.png?v=1764066459&width=300",
        name: "Dr. Ara Suppiah",
        title: "Performance & Longevity Physician at LIV Golf"
    }
]
const videoThumbnails = [
    { id: 1, thumbnail: "https://im8health.com/cdn/shop/files/preview_images/thm-expert_robinB2.jpg?v=1731999065", caption: "It's everything you need", videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/12eb3b01fd54404d81ef22a20d415f15/12eb3b01fd54404d81ef22a20d415f15.HD-1080p-2.5Mbps-38313438.mp4?v=0" },
    { id: 2, thumbnail: "https://im8health.com/cdn/shop/files/preview_images/influe-carou_bobbyRich2.jpg?v=1731863977", caption: "through your workouts or just", videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/e83246a2555949139036fce9bc1359a2/e83246a2555949139036fce9bc1359a2.HD-1080p-3.3Mbps-38232086.mp4?v=0" },
    { id: 3, thumbnail: "https://im8health.com/cdn/shop/files/preview_images/thm-expert_amyShah2.jpg?v=1731864964", caption: "had this eve", videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/f7f68153342f4566ad00f411e2fb407b/f7f68153342f4566ad00f411e2fb407b.HD-1080p-7.2Mbps-38222859.mp4?v=0" },
    { id: 4, thumbnail: "https://im8health.com/cdn/shop/files/preview_images/thm-influ_dustinPoirier.jpg?v=1731833492", caption: "there", videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/064b8beaa0b04a4fad25676155936d3a/064b8beaa0b04a4fad25676155936d3a.HD-1080p-2.5Mbps-38221672.mp4?v=0" },
    { id: 5, thumbnail: "https://im8health.com/cdn/shop/files/preview_images/image_54.png?v=1731863088", caption: "probiotics", videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/809d17a1684d40058d499ecd9afe9e21/809d17a1684d40058d499ecd9afe9e21.HD-1080p-4.8Mbps-38222820.mp4?v=0" },
    { id: 6, thumbnail: "https://im8health.com/cdn/shop/files/preview_images/1f4b2af008104c92a29f9d78814f1aa0.thumbnail.0000000000.jpg?v=1731860287", caption: "probiotics", videoUrl: "https://im8health.com/cdn/shop/videos/c/vp/1f4b2af008104c92a29f9d78814f1aa0/1f4b2af008104c92a29f9d78814f1aa0.HD-1080p-3.3Mbps-38232121.mp4?v=0" },
]

// Mobile Product Carousel Component using Shadcn
function MobileProductCarousel({ images }: { images: string[] }) {
    const [api, setApi] = useState<CarouselApi>();
    const [current, setCurrent] = useState(0);
    const [count, setCount] = useState(0);

    useEffect(() => {
        if (!api) return;

        setCount(api.scrollSnapList().length);
        setCurrent(api.selectedScrollSnap());

        api.on("select", () => {
            setCurrent(api.selectedScrollSnap());
        });
    }, [api]);

    return (
        <div>
            <Carousel setApi={setApi} className="-mx-4" opts={{ loop: true }}>
                <CarouselContent>
                    {images.map((img, index) => (
                        <CarouselItem key={index}>
                            <div className="relative aspect-square rounded-2xl overflow-hidden bg-white mx-4">
                                <Image
                                    src={img}
                                    alt={`Product view ${index + 1}`}
                                    fill
                                    className="object-cover"
                                    priority={index === 0}
                                />
                            </div>
                        </CarouselItem>
                    ))}
                </CarouselContent>
            </Carousel>
            {/* Dot Indicators */}
            <div className="flex justify-center gap-2 mt-4">
                {Array.from({ length: count }).map((_, index) => (
                    <button
                        key={index}
                        onClick={() => api?.scrollTo(index)}
                        className={`h-2 rounded-full transition-all ${current === index
                            ? "bg-im8-dark-red w-6"
                            : "bg-gray-300 w-2"
                            }`}
                    />
                ))}
            </div>
        </div>
    );
}

export function Hero() {
    const [selectedImage, setSelectedImage] = useState(0);
    const [productType, setProductType] = useState<"forever-jar" | "sachets">("forever-jar");
    const [selectedSupply, setSelectedSupply] = useState("90-day");
    const [showWhyResultsMatter, setShowWhyResultsMatter] = useState(false);
    const [showSupplementFacts, setShowSupplementFacts] = useState(false);
    const [selectedVideo, setSelectedVideo] = useState<string | null>(null);

    const currentFormat = productFormats[productType];
    const currentSupplyOptions = currentFormat.supplyOptions;
    const currentSupply = currentSupplyOptions.find((opt) => opt.id === selectedSupply) || currentSupplyOptions[0];


    return (
        <section className="relative py-8 md:py-12 bg-im8-cream">
            <Container>
                <div className="grid grid-cols-1 md:grid-cols-2 gap-8 md:gap-12">
                    {/* Left Column - Sticky Media Gallery */}
                    <div className="md:sticky md:top-24 md:self-start">
                        {/* Mobile Carousel - Shadcn */}
                        <div className="md:hidden">
                            <MobileProductCarousel images={productImages} />
                        </div>

                        {/* Desktop Layout - Vertical Thumbnails + Main Image */}
                        <div className="hidden md:flex gap-3">
                            {/* Vertical Thumbnail Gallery - Left Side */}
                            <div className="flex flex-col gap-2 overflow-y-auto max-h-[600px] pr-1">
                                {/* Up Arrow */}
                                <button className="w-20 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 15l7-7 7 7" />
                                    </svg>
                                </button>

                                {productImages.map((img, index) => (
                                    <button
                                        key={index}
                                        onClick={() => setSelectedImage(index)}
                                        className={`relative w-15 h-15 flex-shrink-0 rounded-lg overflow-hidden border-2 transition-all ${selectedImage === index
                                            ? "border-im8-dark-red"
                                            : "border-transparent hover:border-gray-300"
                                            }`}
                                    >
                                        <Image
                                            src={img}
                                            alt={`Product view ${index + 1}`}
                                            fill
                                            className="object-cover"
                                        />
                                    </button>
                                ))}

                                {/* Down Arrow */}
                                <button className="w-20 h-8 flex items-center justify-center text-gray-400 hover:text-gray-600 transition-colors">
                                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                    </svg>
                                </button>
                            </div>

                            {/* Main Product Image - Right Side */}
                            <div className="relative w-[35vw] h-[35vw] rounded-2xl overflow-hidden bg-white">
                                <Image
                                    src={productImages[selectedImage]}
                                    alt="Daily Ultimate Essentials"
                                    fill
                                    className="object-cover"
                                    priority
                                />
                            </div>
                        </div>
                    </div>

                    {/* Right Column - Product Details (Scrollable) */}
                    <div className="flex flex-col gap-6 min-w-0 overflow-hidden">
                        {/* Top Section: Title, Reviews, Price */}
                        <div>
                            {/* Reviews Badge */}
                            <div className="flex items-center gap-2 mb-3">
                                <div className="flex text-im8-bright-red">
                                    {[...Array(5)].map((_, i) => (
                                        <Star key={i} className="w-4 h-4 fill-current" />
                                    ))}
                                </div>
                                <span className="text-sm font-medium text-gray-600">
                                    4.8 from 11,825 Reviews
                                </span>
                            </div>

                            {/* Title */}
                            <h1 className="text-2xl md:text-3xl lg:text-4xl font-serif text-im8-dark-red leading-tight mb-2">
                                The Beckham Stack:
                                Essentials + Longevity Set
                            </h1>

                            {/* Subtitle */}
                            <p className="text-gray-600 mb-4">
                                The Beckham Stack combines IM8 Daily Ultimate Essentials and Daily Ultimate Longevity for full-spectrum nutrition and healthy aging—for today and tomorrow.*
                            </p>
                        </div>

                        {/* Clinically Proven Results Block */}
                        <div className="bg-gradient-to-r from-green-50 to-green-100/50 border border-green-200 rounded-2xl p-6">
                            {/* Header */}
                            <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-6">
                                <h3 className="text-xl md:text-xl font-serif font-bold text-gray-900">
                                    Clinically Proven Results
                                </h3>
                                <div className="flex md:justify-end">
                                    <span className="bg-green-800 text-white text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full whitespace-nowrap">
                                        90-Day Clinical Study
                                    </span>
                                </div>
                            </div>

                            {/* Stats Grid */}
                            <div className="grid grid-cols-2 md:grid-cols-4 gap-4 mb-4">
                                {clinicalResults.map((result) => (
                                    <div key={result.label} className="text-left">
                                        <p className="text-xl md:text-2xl text-green-700 font-serif flex items-center gap-1">
                                            <span className="text-xl">{result.emoji}</span>
                                            {result.percentage}
                                        </p>
                                        <p className="text-sm text-gray-600 mt-1">{result.label}</p>
                                    </div>
                                ))}
                            </div>

                            {/* Footnote */}
                            <p className="text-xs text-gray-500 mb-4">
                                *Based on 12-week randomized controlled trial by San Francisco Research Institute
                            </p>

                            {/* Bottom Row */}
                            <div className="flex flex-col items-end justify-between flex-wrap gap-4">

                                {/* Why These Results Matter? */}
                                <div className="flex flex-col gap-1">
                                    <button
                                        onClick={() => setShowWhyResultsMatter(!showWhyResultsMatter)}
                                        className="text-sm font-bold text-gray-800 underline flex items-center gap-1 hover:text-gray-600 focus:outline-none"
                                    >
                                        Why These Results Matter?
                                        <svg
                                            className={`w-4 h-4 transition-transform duration-500 ease-[cubic-bezier(0.68,-0.55,0.27,1.55)] ${showWhyResultsMatter ? 'rotate-180' : ''}`}
                                            fill="none"
                                            stroke="currentColor"
                                            viewBox="0 0 24 24"
                                        >
                                            <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M19 9l-7 7-7-7" />
                                        </svg>
                                    </button>

                                    {/* Expandable Content với hiệu ứng nhẹ nhàng */}
                                    <div className={`grid transition-all duration-500 ease-in-out ${showWhyResultsMatter
                                        ? 'grid-rows-[1fr] opacity-100 mt-3'
                                        : 'grid-rows-[0fr] opacity-0 mt-0'
                                        }`}>
                                        <div className="overflow-hidden">
                                            <p className="text-sm text-gray-700 leading-relaxed">
                                                Unlike most supplements with unverified claims, IM8 is backed by a 12-week randomized controlled clinical trial. Every ingredient is NSF Certified for Sport, verifying exact dosages and testing for 280+ banned substances - the same certification trusted by world-class athletes like <strong>Aryna Sabalenka, World No. 1 tennis player</strong>.
                                            </p>
                                        </div>
                                    </div>
                                </div>

                                {/* Certification Badges */}
                                <div className="flex items-center gap-2">
                                    <Image
                                        src="https://im8health.com/cdn/shop/files/Vector_38d1c63f-d300-48b5-b6e6-084b0cf0086d.png?v=1764063546&width=100"
                                        alt="NSF Sport"
                                        width={35}
                                        height={35}
                                    />
                                    <Image
                                        src="https://im8health.com/cdn/shop/files/NSF_CONTENTS_CERTIFIED_White_Vert_2.png?v=1764063546&width=100"
                                        alt="NSF Contents Certified"
                                        width={35}
                                        height={35}
                                    />
                                    <Image
                                        src="https://im8health.com/cdn/shop/files/b9a15702-8e60-441d-b1fd-ce12f6742dcb_svg.png?v=1764063545&width=100"
                                        alt="Non-GMO"
                                        width={35}
                                        height={35}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* 1. Select Format */}
                        <div>
                            <h3 className="text-base font-bold text-gray-900 mb-4">1. Select Format:</h3>
                            <div className="grid grid-cols-2 gap-4">
                                {(Object.keys(productFormats) as Array<keyof typeof productFormats>).map((formatKey) => {
                                    const format = productFormats[formatKey];
                                    return (
                                        <button
                                            key={formatKey}
                                            onClick={() => setProductType(formatKey)}
                                            className={`relative rounded-xl border-1 transition-all text-left ${productType === formatKey
                                                ? "border-im8-bright-red bg-red-50/30"
                                                : "border-gray-200 hover:border-gray-300"
                                                }`}
                                        >
                                            {/* Most Popular Badge */}
                                            {format.isPopular && (
                                                <span className={`absolute -top-3 right-2 text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full transition-all duration-300 ${productType === formatKey
                                                    ? "bg-im8-red"
                                                    : "bg-im8-bright-red"
                                                    }`}>
                                                    Most Popular
                                                </span>
                                            )}
                                            <div className="flex items-center gap-1">
                                                <div className="relative w-14 h-28 rounded-l-[13px] overflow-hidden bg-im8-cream flex-shrink-0">
                                                    <Image
                                                        src={format.image}
                                                        alt={format.name}
                                                        fill
                                                        className="object-cover"
                                                    />
                                                </div>

                                                <span className="font-semibold font-serif text-im8-dark-red">{format.name}</span>
                                            </div>
                                        </button>
                                    );
                                })}
                            </div>
                        </div>

                        {/* 2. Subscribe & Save */}
                        <div>
                            <h3 className="text-base font-bold text-gray-900 mb-4">2. Subscribe & Save:</h3>
                            <div className="relative space-y-4">
                                {currentSupplyOptions.map((option) => (
                                    <button
                                        key={option.id}
                                        onClick={() => setSelectedSupply(option.id)}
                                        className={`w-full text-left rounded-xl border-2 transition-all overflow-hidden ${selectedSupply === option.id
                                            ? "border-im8-bright-red"
                                            : "border-gray-200 hover:border-gray-300"
                                            }`}
                                    >
                                        {/* Header with badges */}
                                        <div className={`px-4 py-3 flex items-center justify-between ${selectedSupply === option.id ? "bg-red-50/50" : "bg-gray-50"
                                            }`}>

                                            {/*New Year Offer Badge */}
                                            {option.isNewYearOffer && (
                                                <span className="absolute -top-2 left-2 bg-yellow-400 text-yellow-900 text-[10px] font-bold uppercase px-2 py-0.5 rounded-full shadow-md">
                                                    New Year Offer
                                                </span>
                                            )}
                                            {/*Best Value Badge */}
                                            {option.isBestValue && (
                                                <span className="absolute -top-2 right-2 bg-im8-red text-white text-[10px] font-bold uppercase tracking-wider px-2 py-1 rounded-full shadow-lg shadow-im8-bright-red/20">
                                                    Best Value
                                                </span>
                                            )}
                                            <div className="flex items-center gap-3">
                                                {/* Radio Circle */}
                                                <div
                                                    className={`w-5 h-5 rounded-full border-2 flex items-center justify-center ${selectedSupply === option.id
                                                        ? "border-im8-bright-red"
                                                        : "border-gray-300"
                                                        }`}
                                                >
                                                    {selectedSupply === option.id && (
                                                        <div className="w-3 h-3 rounded-full bg-im8-bright-red" />
                                                    )}
                                                </div>
                                                <div>
                                                    <span className="font-bold text-gray-900">{option.label}</span>
                                                    <span className={`ml-2 font-bold ${option.discountColor}`}>
                                                        ({option.discount})
                                                    </span>
                                                </div>
                                            </div>
                                        </div>

                                        {/* Pricing Row */}
                                        <div className="px-4 py-2 flex items-center justify-between border-b border-gray-100">
                                            <p className="text-sm text-gray-600">{option.billingInfo}</p>
                                            <div className="text-right">
                                                <p className="font-bold text-im8-dark-red text-lg">{option.priceMonthly}<span className="text-sm font-normal">/mo</span></p>
                                                <p className="text-xs text-gray-500">{option.pricePerDay}</p>
                                            </div>
                                        </div>

                                        {/* Benefits List */}
                                        <div className="px-4 py-3 space-y-2">
                                            {option.benefits.map((benefit, idx) => (
                                                <p key={idx} className="text-sm text-gray-700 flex items-start gap-2">
                                                    <span className="flex-shrink-0">{benefit.emoji}</span>
                                                    <span>{benefit.text}</span>
                                                </p>
                                            ))}
                                        </div>
                                    </button>
                                ))}
                            </div>

                            {/* One Time Purchase Link */}
                            <p className="text-center mt-2">
                                <button className="text-sm text-gray-600 underline hover:text-gray-800">
                                    One Time Purchase {currentFormat.oneTimePurchase}
                                </button>
                            </p>
                        </div>

                        {/* Add to Cart Button */}
                        <Button
                            variant="primary"
                            size="lg"
                            className="w-full btn-shine text-sm md:text-base bg-im8-bright-red hover:bg-im8-bright-red/90"
                        >
                            {selectedSupply === '90-day'
                                ? `START MY 90-DAY TRANSFORMATION PROGRAM - ${currentSupply.priceMonthly}/MO`
                                : `ADD TO CART - ${currentSupply.priceMonthly}/MO`}
                        </Button>

                        {/* New Year Discount Card */}
                        <div className="hidden md:flex items-center gap-3 bg-green-100 rounded-xl px-4 py-3 border border-green-300 shadow-lg shadow-green-300/20">
                            <div className="w-6 h-6 rounded-full bg-green-500 flex items-center justify-center flex-shrink-0">
                                <Check className="w-4 h-4 text-white" />
                            </div>
                            <p className="text-sm text-gray-800">
                                <span className="font-bold text-green-800">New Year discount</span> automatically applied at checkout
                            </p>
                        </div>

                        {/* 30-Day Money Back Guarantee Card */}
                        <div className="hidden md:flex items-center gap-3 bg-green-50 border border-green-300 rounded-xl px-4 py-4">
                            <div className="w-8 h-8 flex items-center justify-center flex-shrink-0">
                                <Image src="https://im8health.com/cdn/shop/files/greencheck.png?v=1764066515&width=72" alt="Green Check" width={36} height={36} />
                            </div>
                            <div>
                                <p className="font-bold text-im8-dark-red text-lg">30-Day 100% Money Back Guarantee</p>
                                <p className="text-sm text-gray-600">We&apos;re so confident you&apos;ll love it, take a full 30 days to decide</p>
                            </div>
                        </div>

                        {/* 90-Day Transformation Program Section */}
                        <div className="md:block bg-gradient-to-b from-[#FFEFD6] to-[#FFEFDB]/50 rounded-2xl p-6 border-[2px] border-gold">
                            {/* Badge */}
                            <div className="flex justify-center mb-4">
                                <span className="bg-gradient-to-r from-[#EEB87A] to-[#DFCE89] text-im8-dark-red text-xs font-bold uppercase tracking-wider px-4 py-2 rounded-full flex items-center gap-2">
                                    🎓 90-Day Members Only
                                </span>
                            </div>

                            {/* Title */}
                            <h4 className="text-2xl font-serif font-bold text-im8-dark-red text-center mb-3">
                                90-Day IM8 Transformation Program
                            </h4>

                            {/* Description */}
                            <p className="text-sm text-gray-700 text-center mb-6">
                                Exclusive access to quarterly masterclasses with our world-class <strong>Medical and Performance Experts</strong>
                            </p>

                            {/* Expert Grid - 6 experts */}
                            <div className="grid grid-cols-3 gap-2 mb-6">
                                {expertList.map((expert) => (
                                    <ExpertCard
                                        key={expert.name}
                                        imageSrc={expert.imageSrc}
                                        name={expert.name}
                                        title={expert.title}
                                    />
                                ))}
                            </div>

                            {/* Bottom Description */}
                            <p className="text-[13px] pt-2 border-t border-gold/50 sm:text-sm font-medium text-im8-dark-red/80 text-center mb-4">
                                Get personalized guidance, exclusive content, and direct access to leading experts in health optimization, performance, and longevity.
                            </p>

                            {/* CTA Button */}
                            <Button
                                variant="primary"
                                size="lg"
                                className="w-full rounded-full btn-shine text-sm md:text-base bg-gradient-to-r from-[#EEB87A] to-[#DFCE89] text-im8-dark-red hover:from-[#DFCE89] hover:to-[#EEB87A] uppercase"
                            >
                                Learn More About The Program
                                <ChevronRight className="w-4 h-4" />
                            </Button>
                        </div>

                        {/* Accordion Section */}
                        <div className="space-y-0 border-b border-im8-dark-red/20">
                            {/* Ingredients */}
                            <AccordionItem title="Ingredients">
                                <div className="space-y-4">
                                    <div>
                                        <p className="text-im8-dark-red/80">
                                            <strong className="text-im8-dark-red">Daily Ultimate Essentials + Hydration:</strong>{" "}
                                            Our comprehensive formula combines 92 nutrient-rich ingredients to fuel your body with everything it needs for optimal health. Packed with essential vitamins, minerals, antioxidants, superfoods, greens, pre-pro-post-biotics and clinical dosages of CoQ10 and MSM.*
                                        </p>
                                    </div>
                                    <div>
                                        <p className="text-im8-dark-red/80">
                                            <strong className="text-im8-dark-red">Daily Ultimate Longevity + Healthy Aging:</strong>{" "}
                                            Designed for cellular longevity, this advanced formula targets all 12 hallmarks of aging with five synergistic complexes. Our NMN NAD+ Energy Booster, Cellular Foundation Builder, Cellular Protection Activator, Metabolic AMPK/SIRT1 Activator, and Cellular Renewal Activator work together to enhance mitochondrial function, promote autophagy, and deliver comprehensive age-defying benefits in one delicious daily drink.*
                                        </p>
                                    </div>
                                    <button
                                        onClick={() => setShowSupplementFacts(true)}
                                        className="text-im8-dark-red font-semibold underline hover:text-im8-bright-red"
                                    >
                                        View Supplement Facts
                                    </button>
                                </div>
                            </AccordionItem>

                            {/* Third Party Tested */}
                            <AccordionItem title="Third Party Tested">
                                <p className="text-im8-dark-red/80">
                                    Every ingredient and dosage in IM8 is third-party tested. This guarantees that what you see on the label is what you get, so you know exactly what you’re putting into your body.
                                </p>
                            </AccordionItem>

                            {/* How to Enjoy */}
                            <AccordionItem title="How to Enjoy">
                                <div className="text-im8-dark-red/80">
                                    <strong>Daily Ultimate Essentials + Hydration:</strong>
                                    <br /> <br />
                                    <ol className="list-decimal pl-6">
                                        <li>Scoop out one serving (12 grams)</li>
                                        <li>Add 8-12 oz (around 230-400 ml) of cold water, juice, smoothie, or your favorite drink (Use less liquid for a stronger taste)</li>
                                        <li>Shake or blend well then enjoy.</li>
                                    </ol>
                                    <br />
                                    <strong>Daily Ultimate Longevity + Healthy Aging:</strong>
                                    <br /><br />
                                    Empty 1 sachet and mix with 8-10 fl. oz. of cold water, juice or your favorite beverage, preferably in the morning with a meal. For optimal longevity benefits, take together with Daily Ultimate Essentials. Drink daily.
                                </div>
                            </AccordionItem>

                            {/* Tasting Notes */}
                            <AccordionItem title="Tasting Notes">
                                <div className="text-im8-dark-red/80">
                                    <strong>Daily Ultimate Essentials + Hydration:</strong> Experience a delightful blend with earthy undertones, a subtle tartness, and a hint of chocolate, culminating in a smooth acai and mixed berries finish.
                                    <br />
                                    <strong>Daily Ultimate Longevity + Healthy Aging:</strong> Experience bright fruity notes, a pleasant pomegranate tartness, and subtle hints of antioxidant-rich berries, culminating in a refreshing and invigorating finish. Use less water for a more concentrated flavor or more for a lighter, refreshing taste.
                                </div>
                            </AccordionItem>
                        </div>
                        {/* IM8 Ambassadors Section */}
                        <div className="mt-8 min-w-0">
                            <h3 className="text-lg md:text-2xl font-serif font-bold text-im8-dark-red mb-6">
                                What our IM8 Ambassadors are saying
                            </h3>
                            <div
                                className="flex gap-3 overflow-x-auto pb-4 px-4 md:mx-0 md:px-0 snap-x snap-mandatory scroll-smooth touch-pan-x"
                                style={{ WebkitOverflowScrolling: 'touch' }}
                            >
                                {videoThumbnails.map((video) => (
                                    <div
                                        key={video.id}
                                        className="relative flex-shrink-0 w-28 sm:w-32 md:w-36 cursor-pointer group snap-start"
                                        onClick={() => setSelectedVideo(video.videoUrl)}
                                    >
                                        <div className="relative aspect-[3/4] rounded-xl overflow-hidden border-2 border-gray-200 bg-gray-100">
                                            <Image
                                                src={video.thumbnail}
                                                alt={video.caption}
                                                fill
                                                sizes="(max-width: 640px) 112px, (max-width: 768px) 128px, 144px"
                                                className="object-cover transition-transform duration-300 group-hover:scale-105"
                                            />
                                            {/* Play Button */}
                                            <div className="absolute bottom-2 left-1/2 -translate-x-1/2">
                                                <div className="w-8 h-8 bg-white rounded-full flex items-center justify-center shadow-lg group-hover:scale-110 transition-transform">
                                                    <svg className="w-3 h-3 text-im8-dark-red ml-0.5" fill="currentColor" viewBox="0 0 24 24">
                                                        <path d="M8 5v14l11-7z" />
                                                    </svg>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                ))}
                            </div>
                        </div>
                    </div>
                </div>
            </Container>

            {/* IM8 Ambassadors Section - Full Width */}



            {/* Supplement Facts Modal */}
            {showSupplementFacts && (
                <div
                    className="fixed inset-0 z-[100] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    onClick={() => setShowSupplementFacts(false)}
                >
                    <div
                        className="relative max-w-4xl max-h-[90vh] overflow-auto bg-white rounded-2xl shadow-2xl"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setShowSupplementFacts(false)}
                            className="absolute top-4 right-4 z-10 w-10 h-10 flex items-center justify-center rounded-full bg-im8-dark-red text-white hover:bg-im8-bright-red transition-colors"
                        >
                            ✕
                        </button>

                        {/* Image */}
                        <div className="relative">
                            <Image
                                src="https://im8health.com/cdn/shop/files/pdp_essentials_supp-large_202505_1.webp?v=1759897183&width=2048"
                                alt="Supplement Facts"
                                width={800}
                                height={1200}
                                className="w-full h-auto"
                            />
                        </div>
                    </div>
                </div>
            )}

            {/* Video Modal */}
            {selectedVideo && (
                <div
                    className="fixed inset-0 z-[50] flex items-center justify-center p-4 bg-black/70 backdrop-blur-sm"
                    onClick={() => setSelectedVideo(null)}
                >
                    <div
                        className="relative h-[75vh] md:h-[70vh] max-w-xs md:max-w-lg aspect-[9/16] bg-black rounded-2xl overflow-hidden"
                        onClick={(e) => e.stopPropagation()}
                    >
                        {/* Close Button */}
                        <button
                            onClick={() => setSelectedVideo(null)}
                            className="hidden absolute top-3 right-3 z-10 w-10 h-10 md:flex items-center justify-center rounded-full bg-black/50 text-white hover:bg-black/70 transition-colors"
                        >
                            ✕
                        </button>

                        {/* Video Player */}
                        <video
                            src={selectedVideo}
                            autoPlay
                            controls
                            playsInline
                            className="w-full h-full object-contain"
                        />
                    </div>
                </div>
            )}
        </section>
    );
}
