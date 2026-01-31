import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Activity, Brain, Heart, Shield, Smile, Zap } from "lucide-react";

const benefits = [
    { icon: Heart, title: "Heart Health", desc: "Supports cardiovascular function" },
    { icon: Brain, title: "Brain Health", desc: "Enhances focus and clarity" },
    { icon: Zap, title: "Energy", desc: "Sustained energy throughout the day" },
    { icon: Shield, title: "Immunity", desc: "Strengthens immune defense" },
    { icon: Smile, title: "Gut Health", desc: "Promotes healthy digestion" },
    { icon: Activity, title: "Recovery", desc: "Faster muscle recovery" },
];

export function IngredientGrid() {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-im8-red mb-6">
                        Complete Body Support
                    </h2>
                    <p className="text-gray-600 max-w-2xl mx-auto">
                        92 nutrients working together to support every system in your body.
                    </p>
                </div>

                <div className="grid md:grid-cols-2 lg:grid-cols-3 gap-8">
                    {benefits.map((item, idx) => (
                        <Reveal key={idx} delay={0.1 * idx} variant="fade-up" className="h-full">
                            <div className="p-8 rounded-3xl bg-gray-50 hover:bg-im8-cream transition-colors group h-full">
                                <div className="w-12 h-12 rounded-full bg-white text-im8-red flex items-center justify-center mb-6 shadow-sm group-hover:scale-110 transition-transform">
                                    <item.icon className="w-6 h-6" />
                                </div>
                                <h3 className="text-xl font-serif text-im8-red mb-2">{item.title}</h3>
                                <p className="text-gray-600">{item.desc}</p>
                            </div>
                        </Reveal>
                    ))}
                </div>
            </Container>
        </section>
    );
}
