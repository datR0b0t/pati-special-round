import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";
import { Reveal } from "@/components/ui/Reveal";
import { Check, Star } from "lucide-react";

export function Hero() {
    return (
        <section className="relative pt-8 pb-16 md:pt-12 md:pb-24 overflow-hidden">
            <Container className="grid md:grid-cols-2 gap-12 items-center">
                {/* Left Column: Content */}
                <div className="flex flex-col gap-6 order-2 md:order-1">
                    {/* Reviews Badge */}
                    <Reveal delay={0.1}>
                        <div className="flex items-center gap-2">
                            <div className="flex text-im8-red">
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                                <Star className="w-5 h-5 fill-current" />
                            </div>
                            <span className="text-sm font-medium text-gray-600">
                                4.9/5 from 10,000+ reviews
                            </span>
                        </div>
                    </Reveal>

                    {/* Heading */}
                    <Reveal delay={0.2}>
                        <h1 className="text-4xl md:text-6xl font-serif text-im8-red leading-[1.1]">
                            Daily Ultimate Essentials
                        </h1>
                    </Reveal>

                    {/* Subheading */}
                    <Reveal delay={0.3}>
                        <p className="text-lg md:text-xl text-gray-700 max-w-lg">
                            Complete daily nutrition with 92 fully absorbable vitamins, minerals, and superfoods in one scoop.
                        </p>
                    </Reveal>

                    {/* Features List */}
                    <Reveal delay={0.4}>
                        <ul className="space-y-3">
                            {["Clinically proven results", "Third-party tested", "Vegan & Gluten-free"].map((item) => (
                                <li key={item} className="flex items-center gap-3 text-gray-800">
                                    <div className="flex items-center justify-center w-6 h-6 rounded-full bg-im8-cream text-im8-red">
                                        <Check className="w-4 h-4" />
                                    </div>
                                    {item}
                                </li>
                            ))}
                        </ul>
                    </Reveal>

                    {/* Price & CTA */}
                    <Reveal delay={0.5}>
                        <div className="mt-4 flex flex-col gap-4">
                            <div className="flex items-end gap-3">
                                <span className="text-3xl font-bold text-gray-900">$79.00</span>
                                <span className="text-lg text-gray-500 line-through mb-1">$99.00</span>
                            </div>
                            <div className="flex flex-col sm:flex-row gap-4">
                                <Button size="xl" className="w-full sm:w-auto">
                                    Add to Cart
                                </Button>
                                <Button variant="secondary" size="xl" className="w-full sm:w-auto">
                                    View Ingredients
                                </Button>
                            </div>
                            <p className="text-xs text-gray-500 text-center sm:text-left">
                                30-day money-back guarantee. Cancel anytime.
                            </p>
                        </div>
                    </Reveal>
                </div>

                {/* Right Column: Image */}
                <div className="relative order-1 md:order-2 flex justify-center">
                    <Reveal variant="fade-in" delay={0.2} width="100%" className="flex justify-center">
                        {/* Placeholder for Product Image */}
                        <div className="relative w-full aspect-square max-w-[500px] bg-im8-cream rounded-3xl flex items-center justify-center border border-im8-red/10">
                            <div className="text-center p-8">
                                <span className="block text-6xl mb-4">🥤</span>
                                <p className="text-im8-red font-serif text-2xl">Product Image Placeholder</p>
                                <p className="text-sm text-gray-500 mt-2">Replace with actual asset</p>
                            </div>
                        </div>
                    </Reveal>
                </div>
            </Container>
        </section>
    );
}
