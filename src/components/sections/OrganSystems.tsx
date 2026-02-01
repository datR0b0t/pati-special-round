"use client";

import { Container } from "@/components/ui/Container";
import { useState } from "react";

// SVG Icons for each system
const systemIcons: Record<string, React.ReactNode> = {
    digestive: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M12 3C10 3 9 5 9 7V9C9 10 8 11 8 12C8 14 9 15 9 17V21M12 3C14 3 15 5 15 7V9C15 10 16 11 16 12C16 14 15 15 15 17V21M9 7H15M9 12H15M9 17H15" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    immune: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M12 3L4 7V11C4 16.5 7.5 21.2 12 22C16.5 21.2 20 16.5 20 11V7L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 8V12M12 12V16M12 12H8M12 12H16" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    cardiovascular: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M12 21C12 21 4 14 4 9C4 6 6.5 4 9 4C10.5 4 11.5 4.5 12 5.5C12.5 4.5 13.5 4 15 4C17.5 4 20 6 20 9C20 14 12 21 12 21Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    muscular: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M6 4L4 8L6 12L4 16L6 20M18 4L20 8L18 12L20 16L18 20M9 4V20M15 4V20M9 8H15M9 12H15M9 16H15" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    skeletal: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M12 4V20M8 6L12 4L16 6M8 10H16M8 14H16M10 18L12 20L14 18" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    integumentary: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M12 3L14 9L20 10L15.5 14L17 21L12 17.5L7 21L8.5 14L4 10L10 9L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    nervous: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M12 4C8 4 6 7 6 10C6 12 7 13 7 15V17C7 19 9 20 12 20C15 20 17 19 17 17V15C17 13 18 12 18 10C18 7 16 4 12 4Z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M9 10H15M10 14H14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    endocrine: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <circle cx="12" cy="8" r="3" />
            <circle cx="8" cy="16" r="2" />
            <circle cx="16" cy="16" r="2" />
            <path d="M12 11V14M10 16H14" strokeLinecap="round" />
        </svg>
    ),
    urinary: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M12 4C10 4 8 6 8 9V12C8 14 10 16 12 16C14 16 16 14 16 12V9C16 6 14 4 12 4Z" strokeLinecap="round" strokeLinejoin="round" />
            <path d="M12 16V20M10 20H14" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    // Longevity icons
    cleansing: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M12 4V2M12 22V20M20 12H22M2 12H4M17.66 17.66L19.07 19.07M4.93 4.93L6.34 6.34M17.66 6.34L19.07 4.93M4.93 19.07L6.34 17.66" strokeLinecap="round" />
            <circle cx="12" cy="12" r="5" />
        </svg>
    ),
    renewal: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <circle cx="12" cy="12" r="8" />
            <circle cx="12" cy="12" r="4" />
            <circle cx="12" cy="12" r="1" />
        </svg>
    ),
    aging: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M12 4V12L16 16M12 20C16.4183 20 20 16.4183 20 12C20 7.58172 16.4183 4 12 4C7.58172 4 4 7.58172 4 12C4 16.4183 7.58172 20 12 20Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
    youthful: (
        <svg viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="1.5" className="w-8 h-8">
            <path d="M12 3L14 9L20 10L15.5 14L17 21L12 17.5L7 21L8.5 14L4 10L10 9L12 3Z" strokeLinecap="round" strokeLinejoin="round" />
        </svg>
    ),
};

// Tab data
const tabsData = {
    essentials: {
        badge: "COMPREHENSIVE BODY SUPPORT",
        title: "9 Major Organ Systems",
        subtitle: "One serving delivers comprehensive support for your entire body, replacing multiple supplements with a single, powerful formula.",
        systems: [
            { id: "digestive", label: "Digestive" },
            { id: "immune", label: "Immune" },
            { id: "cardiovascular", label: "Cardiovascular" },
            { id: "muscular", label: "Muscular" },
            { id: "skeletal", label: "Skeletal" },
            { id: "integumentary", label: "Integumentary" },
            { id: "nervous", label: "Nervous" },
            { id: "endocrine", label: "Endocrine" },
            { id: "urinary", label: "Urinary" },
        ],
        details: {
            digestive: {
                title: "Digestive Support",
                subtitle: "PREBIOTICS, PROBIOTICS, POSTBIOTICS, ENZYMES",
                description: "A complete 4-tier digestive support system featuring 10 Billion CFU of probiotics and clinically proven enzymes to optimize nutrient absorption and gut health."
            },
            immune: {
                title: "Immune Support",
                subtitle: "VITAMINS, MINERALS, ANTIOXIDANTS",
                description: "Comprehensive immune system support with essential vitamins, minerals, and powerful antioxidants to strengthen your body's natural defenses."
            },
            cardiovascular: {
                title: "Cardiovascular Support",
                subtitle: "OMEGA-3S, COQ10, RESVERATROL",
                description: "Heart-healthy nutrients including omega-3 fatty acids, CoQ10, and resveratrol to support optimal cardiovascular function."
            },
            muscular: {
                title: "Muscular Support",
                subtitle: "AMINO ACIDS, CREATINE, MAGNESIUM",
                description: "Essential nutrients for muscle health, recovery, and performance including amino acids and key minerals."
            },
            skeletal: {
                title: "Skeletal Support",
                subtitle: "CALCIUM, VITAMIN D3, VITAMIN K2",
                description: "Bone-strengthening nutrients that work synergistically to maintain bone density and skeletal health."
            },
            integumentary: {
                title: "Integumentary Support",
                subtitle: "COLLAGEN, BIOTIN, HYALURONIC ACID",
                description: "Skin, hair, and nail support with premium collagen peptides and essential beauty nutrients."
            },
            nervous: {
                title: "Nervous Support",
                subtitle: "B-VITAMINS, OMEGA-3S, ADAPTOGENS",
                description: "Brain and nervous system support for cognitive function, mental clarity, and stress resilience."
            },
            endocrine: {
                title: "Endocrine Support",
                subtitle: "ADAPTOGENS, MINERALS, VITAMINS",
                description: "Hormonal balance support with adaptogenic herbs and essential nutrients for optimal endocrine function."
            },
            urinary: {
                title: "Urinary Support",
                subtitle: "CRANBERRY, D-MANNOSE, PROBIOTICS",
                description: "Urinary tract health support with clinically proven ingredients for kidney and bladder wellness."
            }
        }
    },
    longevity: {
        badge: "ADVANCED CELLULAR SCIENCE",
        title: "Cellular Health Redefined",
        subtitle: "A breakthrough formula targeting the 12 hallmarks of aging to help you live better, longer.",
        systems: [
            { id: "cleansing", label: "Activates Cellular Cleansing" },
            { id: "renewal", label: "Promotes Cellular Renewal" },
            { id: "aging", label: "Slows Cellular Aging" },
            { id: "youthful", label: "Aids Youthful Aging" },
        ],
        details: {
            cleansing: {
                title: "Cellular Cleansing Support",
                subtitle: "AUTOPHAGY ACTIVATION",
                description: "Activates the body's natural cellular cleanup process (autophagy) to remove damaged components and improve cellular efficiency."
            },
            renewal: {
                title: "Cellular Renewal Support",
                subtitle: "STEM CELL ACTIVATION",
                description: "Supports the body's natural ability to regenerate and renew cells for optimal tissue repair and maintenance."
            },
            aging: {
                title: "Cellular Aging Support",
                subtitle: "SENOLYTIC COMPOUNDS",
                description: "Targets and removes senescent cells that accumulate with age, reducing inflammation and improving tissue function."
            },
            youthful: {
                title: "Youthful Aging Support",
                subtitle: "NAD+ OPTIMIZATION",
                description: "Boosts NAD+ levels critical for cellular energy production and DNA repair, supporting youthful cellular function."
            }
        }
    }
};

// System Card Component
function SystemCard({
    system,
    isActive,
    onClick,
    variant = "essentials",
    index = 0
}: {
    system: { id: string; label: string };
    isActive: boolean;
    onClick: () => void;
    variant?: "essentials" | "longevity";
    index?: number;
}) {
    const bgActive = variant === "essentials"
        ? "bg-gradient-to-br from-im8-bright-red to-im8-dark-red"
        : "bg-gradient-to-br from-[#E8A317] to-[#3A0000]";
    const textActive = "text-white";
    const textInactive = variant === "essentials" ? "text-im8-dark-red" : "text-amber-700";

    // Light gradient for inactive cards
    const inactiveStyle = !isActive ? {
        background: variant === "essentials"
            ? "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(254,242,242,0.8) 50%, rgba(254,226,226,0.6) 100%)"
            : "linear-gradient(145deg, rgba(255,255,255,0.9) 0%, rgba(255,251,235,0.8) 50%, rgba(254,243,199,0.6) 100%)"
    } : {};

    return (
        <button
            onClick={onClick}
            className={`relative p-2 rounded-2xl flex flex-col items-center justify-center gap-2 animate-scale-in
                transition-all duration-300 hover:scale-105 hover:shadow-lg ${isActive
                    ? `${bgActive} ${textActive} shadow-xl`
                    : `${textInactive} border border-gray-200/50 shadow-sm`
                }`}
            style={{
                animationDelay: `${index * 50}ms`,
                ...inactiveStyle
            }}
        >
            {/* Number Badge */}
            <span className={`absolute top-3 left-3 text-xs font-medium ${isActive ? "text-white/70" : "text-gray-400"}`}>
                {String(index + 1).padStart(2, '0')}
            </span>

            {/* Arrow indicator for active */}
            {isActive && (
                <span className="absolute bottom-2 right-2 text-white/70">
                    <svg className="w-4 h-4" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
                    </svg>
                </span>
            )}

            {/* Icon */}
            <div className={`transition-transform duration-300 ${isActive ? "scale-110" : ""}`}>
                {systemIcons[system.id]}
            </div>

            {/* Label */}
            <span className="text-xs md:text-sm md:font-medium text-center">
                {system.label}
            </span>
        </button>
    );
}

// Detail Card Component
function DetailCard({
    detail,
    systemId,
    index,
    variant = "essentials"
}: {
    detail: { title: string; subtitle: string; description: string };
    systemId: string;
    index: number;
    variant?: "essentials" | "longevity";
}) {
    const iconBg = variant === "essentials" ? "bg-red-100 text-im8-dark-red" : "bg-amber-100 text-amber-700";
    const subtitleColor = variant === "essentials" ? "text-im8-bright-red" : "text-amber-600";
    const numberBg = variant === "essentials" ? "bg-im8-dark-red" : "bg-amber-700";

    return (
        <div className="relative bg-gradient-to-br from-red-50 to-white rounded-2xl shadow-lg md:p-14 p-8 border border-red-100/50 overflow-hidden animate-slide-in-right h-full flex flex-col justify-center">
            {/* Watermark Icon */}
            <div className="absolute bottom-1 right-1 opacity-10 text-im8-dark-red">
                <div className="w-16 h-16 scale-400">
                    {systemIcons[systemId]}
                </div>
            </div>

            {/* Header */}
            <div className="flex items-start gap-4 mb-6 relative z-10">
                <div className="relative">
                    <div className={`w-14 h-14 rounded-xl ${iconBg} flex items-center justify-center`}>
                        {systemIcons[systemId]}
                    </div>
                    {/* Number Badge */}
                    <span className={`absolute -top-2 -right-2 w-6 h-6 ${numberBg} text-white rounded-full text-xs font-bold flex items-center justify-center shadow-md`}>
                        {String(index + 1).padStart(2, '0')}
                    </span>
                </div>
                <div>
                    <h3 className="text-2xl font-serif font-bold text-im8-dark-red animate-fade-in" style={{ animationDelay: '100ms' }}>
                        {detail.title}
                    </h3>
                    <div className="flex items-center gap-2 mt-1">
                        <span className="w-6 h-px bg-im8-bright-red" />
                        <p className={`text-xs font-semibold uppercase tracking-wider ${subtitleColor} animate-fade-in`} style={{ animationDelay: '150ms' }}>
                            {detail.subtitle}
                        </p>
                    </div>
                </div>
            </div>

            {/* Description */}
            <p className="text-gray-600 text-base leading-relaxed mb-6 relative z-10 animate-fade-in" style={{ animationDelay: '200ms' }}>
                {detail.description}
            </p>

            {/* Badge */}
            <div className="inline-flex w-fit items-center gap-2 bg-gradient-to-br from-red-30 to-white-0 px-4 py-2 rounded-full border border-im8-red/10 animate-fade-in" style={{ animationDelay: '250ms' }}>
                <span className="w-5 h-5 rounded-full text-im8-dark-red flex items-center border border-1 border-im8-dark-red justify-center">
                    <svg className="w-3 h-3" fill="none" stroke="currentColor" viewBox="0 0 24 24">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M5 13l4 4L19 7" />
                    </svg>
                </span>
                <span className="text-xs md:text-sm font-medium text-im8-dark-red">Clinically Dosed Ingredients</span>
            </div>
        </div>
    );
}

export function OrganSystems() {
    const [activeTab, setActiveTab] = useState<"essentials" | "longevity">("essentials");
    const [activeSystem, setActiveSystem] = useState("digestive");

    const currentTab = tabsData[activeTab];
    const systems = currentTab.systems;
    const activeIndex = systems.findIndex(s => s.id === activeSystem);
    const activeDetail = currentTab.details[activeSystem as keyof typeof currentTab.details] || currentTab.details[systems[0].id as keyof typeof currentTab.details];

    // Reset active system when tab changes
    const handleTabChange = (tab: "essentials" | "longevity") => {
        setActiveTab(tab);
        setActiveSystem(tabsData[tab].systems[0].id);
    };

    return (
        <section className={`py-16 md:py-36 transition-colors duration-500 relative overflow-hidden`}>
            {/* Animated Background Gradient */}
            <div className={`absolute inset-0 animate-breathe transition-colors duration-500 ${activeTab === "essentials"
                ? "bg-[radial-gradient(circle_at_center,#FFE4E6_0%,#ffffff_70%)]"
                : "bg-[radial-gradient(circle_at_center,#FEF3C7_0%,#ffffff_70%)]"
                }`}
            />
            {/* Grid Pattern Overlay */}
            <div className="absolute inset-0 opacity-20 pointer-events-none animate-grid-drift"
                style={{
                    backgroundImage: `linear-gradient(to right, ${activeTab === "essentials" ? '#FECACA' : '#FCD34D'} 1px, transparent 1px), 
                                     linear-gradient(to bottom, ${activeTab === "essentials" ? '#FECACA' : '#FCD34D'} 1px, transparent 1px)`,
                    backgroundSize: '40px 40px'
                }}
            />
            <div className="relative z-10">
                <Container>
                    {/* Product Tabs */}
                    <div className="flex justify-center mb-10">
                        <div className="relative inline-flex bg-white rounded-full p-1 shadow-lg border border-gray-200">
                            {/* Sliding Background */}
                            <div
                                className={`absolute top-1 bottom-1 rounded-full shadow-md transition-all duration-300 ease-out z-0
                            ${activeTab === "essentials"
                                        ? "left-1 right-[50%] bg-im8-dark-red"
                                        : "left-[50%] right-1 bg-amber-700"
                                    }`}
                            />
                            <button
                                onClick={() => handleTabChange("essentials")}
                                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-medium whitespace-nowrap transition-colors duration-300 w-1/2
                                ${activeTab === "essentials"
                                        ? "text-white"
                                        : "text-gray-600 hover:text-im8-dark-red"
                                    }`}
                            >
                                Daily Ultimate Essentials
                            </button>
                            <button
                                onClick={() => handleTabChange("longevity")}
                                className={`relative z-10 px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-300 w-1/2
                                ${activeTab === "longevity"
                                        ? "text-white"
                                        : "text-gray-600 hover:text-amber-700"
                                    }`}
                            >
                                Daily Ultimate Longevity
                            </button>
                        </div>
                    </div>

                    {/* Badge */}
                    <div className="flex justify-center mb-4">
                        <span className={`px-4 py-1.5 rounded-full text-xs font-bold uppercase tracking-wider ${activeTab === "essentials"
                            ? "bg-im8-dark-red text-white"
                            : "bg-amber-700 text-white"
                            }`}>
                            {currentTab.badge}
                        </span>
                    </div>

                    {/* Header */}
                    <div className="text-center mb-12">
                        <h2 className="text-3xl md:text-4xl font-serif font-bold text-im8-dark-red mb-4">
                            {currentTab.title}
                        </h2>
                        <p className="text-gray-600 text-sm md:text-base max-w-2xl mx-auto">
                            {currentTab.subtitle}
                        </p>
                    </div>

                    {/* Content Grid */}
                    <div className="grid grid-cols-1 lg:grid-cols-2 gap-8">
                        {/* Systems Grid */}
                        <div className={`grid gap-3 max-w-[1500px] md:mx-20 ${activeTab === "essentials" ? "grid-cols-3" : "grid-cols-2"
                            }`}>
                            {systems.map((system, index) => (
                                <SystemCard
                                    key={system.id}
                                    system={system}
                                    isActive={activeSystem === system.id}
                                    onClick={() => setActiveSystem(system.id)}
                                    variant={activeTab}
                                    index={index}
                                />
                            ))}
                        </div>

                        {/* Detail Card */}
                        <div className="h-full" key={activeSystem}>
                            <DetailCard
                                detail={activeDetail}
                                systemId={activeSystem}
                                index={activeIndex >= 0 ? activeIndex : 0}
                                variant={activeTab}
                            />
                        </div>
                    </div>
                </Container>
            </div>
        </section>
    );
}
