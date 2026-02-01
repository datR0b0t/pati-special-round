"use client";

import Image from "next/image";
import { useState } from "react";

const faqs = [
    {
        question: "What is IM8?",
        answer: "IM8 is the pinnacle of premium core nutrition, born from a collaboration between Prenetics (NASDAQ:PRE), David Beckham as a co-founding partner, and an elite team of scientists spanning space exploration, medical professionals, and academic excellence. <br/> Combining cutting- edge science with nature's most potent ingredients, IM8 delivers a holistic, science-backed approach to health, empowering you to live your most vibrant life."
    },
    {
        question: "What is David Beckham's involvement in IM8?",
        answer: "David Beckham is a co-founding partner of IM8, driven by his commitment to simplifying wellness. After years of working with top medical professionals and nutrition experts, David wanted to make core nutrition more accessible. In collaboration with the Prenetics team and world-class scientists, IM8 was developed to deliver essential nutrients in a simple and effective way. David's vision for IM8 is to provide best-in-class core nutrition for today and tomorrow, making it easy for everyone to prioritize their health. <br/>"
    },
    {
        question: "Who is on the IM8 Scientific Advisory Board?",
        answer: "The IM8 Scientific Advisory Board comprises distinguished professionals with impressive backgrounds: <br/> <br/> Dr.Dawn Mussallem, a renowned oncologist at the Mayo Clinic, brings her expertise in integrative and lifestyle medicine. <br/> <br/> Dr.James L.Green, the former Chief Scientist at NASA, has an extensive career in space and planetary science. <br/><br/>  Dr.David Katz, is a globally recognized preventive medicine specialist and the founding director of the Yale- Griffin Prevention Research Center. <br/><br/> Prof. Suzanne Devkota serves as an Associate Professor and Director of the Microbiome Research Institute at Cedars - Sinai Medical Center, specializing in gut health and microbiome research. <br/><br/> Prof.Stephen Anton is a Professor and Chief of the Division of Clinical Research at the University of Florida's Department of Aging and Geriatric Research, focusing on metabolism and healthy aging. <br/><br/> Dr.James DiNicolantonio is a cardiovascular research scientist and Doctor of Pharmacy, known for his influential work in the field of heart health and evidence - based nutrition. <br/><br/> Prof.Ock Chun is a distinguished expert in nutritional sciences at University of Connecticut with over 25 years of experience in the field. <br/><br/> Their combined academic credentials and scientific expertise form the backbone of IM8's innovation and product development."
    },
    {
        question: "What are the main benefits of IM8 Daily Essentials + Hydration?",
        answer: "IM8 Daily Essentials is your all-in-one solution, replacing the need for 16 supplements, targeting eight key areas of health: Energy, Immunity, Cognitive Function, Digestion, Cardiovascular Health, Hydration, Nourishment, and Cellular Renewal. With 92 carefully selected premium ingredients, including CoQ10 (100mg) for heart health and MSM (1,000mg) for joint support, IM8 Daily Essentials makes it easier to live a healthier, more vibrant life. Plus, it tastes great, so it's something you'll look forward to each day. "
    },
    {
        question: "What does IM8 Daily Ultimate Essentials taste like?",
        answer: "We've worked hard to make sure IM8 Daily Essentials is something you enjoy drinking every day. Experience a delightful blend of flavors with earthy undertones, complemented by a subtle tartness and a hint of chocolate. The flavor then culminates in a smooth finish of acai and mixed berries. <br/> For a more robust flavor, use less water, or add more water for a delicate, lighter taste.This balance of flavors makes IM8 Daily Essentials both refreshing and satisfying, turning your daily supplement into an enjoyable part of your routine."
    },
    {
        question: "What countries do you currently ship to?",
        answer: "M8 currently ships to 31 countries (with free shipping for all subscriptions to the United States, United Kingdom, Canada, Singapore and Hong Kong), including but not limited to the United States, Canada, United Kingdom, Australia, and many countries across Europe, Asia, and South America. The full list of countries we ship to can be found here. <br/> Please note that international shipping rates vary by country and will be reflected during checkout.We do not add any margins to the shipping cost—what you see is the direct charge from our shipping provider."
    },
];

export function FAQSection() {
    const [openIndex, setOpenIndex] = useState<number | null>(null);

    const toggleFAQ = (index: number) => {
        setOpenIndex(openIndex === index ? null : index);
    };

    return (
        <section className="w-full">
            <div className="flex flex-col-reverse md:flex-row">
                {/* Left Column - FAQs */}
                <div className="flex-1 bg-im8-bright-red py-12 md:py-16 lg:py-20 px-6 md:px-12 lg:px-16">
                    <h2 className="text-3xl md:text-4xl lg:text-5xl font-serif text-white mb-8">
                        FAQs
                    </h2>

                    <div className="space-y-0">
                        {faqs.map((faq, index) => (
                            <div key={index} className="border-b border-white/20">
                                <button
                                    onClick={() => toggleFAQ(index)}
                                    className="w-full flex justify-between items-center py-4 text-left group"
                                >
                                    <span className="text-white text-sm md:text-base font-medium pr-4">
                                        {faq.question}
                                    </span>
                                    <span
                                        className={`text-white text-xl flex-shrink-0 transition-transform duration-300 ${openIndex === index ? "rotate-45" : "rotate-0"
                                            }`}
                                    >
                                        +
                                    </span>
                                </button>
                                <div
                                    className={`grid transition-all duration-300 ease-in-out ${openIndex === index ? "grid-rows-[1fr] opacity-100" : "grid-rows-[0fr] opacity-0"
                                        }`}
                                >
                                    <div className="overflow-hidden">
                                        <div className="pb-4 text-white/80 text-sm leading-relaxed">
                                            <div dangerouslySetInnerHTML={{ __html: faq.answer }} className="text-white/80 text-sm leading-relaxed" />
                                        </div>
                                    </div>
                                </div>
                            </div>
                        ))}
                    </div>

                    <button className="mt-8 bg-im8-dark-red text-white py-3 px-8 rounded-full font-semibold uppercase tracking-wider text-sm hover:bg-white hover:text-im8-dark-red transition-colors">
                        Explore All FAQs
                    </button>
                </div>

                {/* Right Column - Image */}
                <div className="flex-1 relative min-h-[400px] lg:min-h-0">
                    <Image
                        src="https://im8health.com/cdn/shop/files/Rectangle_98-min_2.jpg?v=1731857082"
                        alt="IM8 Lifestyle"
                        fill
                        className="object-cover"
                    />
                </div>
            </div>
        </section>
    );
}
