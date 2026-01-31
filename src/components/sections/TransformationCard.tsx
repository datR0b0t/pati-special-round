import { Button } from "@/components/ui/Button";
import { Container } from "@/components/ui/Container";

export function TransformationCard() {
    return (
        <section className="py-12 md:py-20 bg-white">
            <Container>
                <div className="bg-im8-cream rounded-3xl p-8 md:p-12 border border-im8-red/5 flex flex-col md:flex-row items-center gap-8 md:gap-16">
                    <div className="flex-1 space-y-6 text-center md:text-left">
                        <div className="inline-block px-3 py-1 bg-white border border-im8-red/10 rounded-full text-xs font-bold text-im8-red tracking-wider uppercase">
                            Exclusive Program
                        </div>
                        <h2 className="text-3xl md:text-4xl font-serif text-im8-red">
                            90-Day IM8 Transformation Program
                        </h2>
                        <p className="text-lg text-gray-700">
                            Join thousands who have transformed their health. Expert-led guidance, daily tracking, and community support included with your subscription.
                        </p>
                        <Button variant="primary">Start Your Journey</Button>
                    </div>
                    {/* Placeholder for Expert/Doctor Images */}
                    <div className="flex-1 flex justify-center">
                        <div className="flex -space-x-4">
                            {[1, 2, 3].map((i) => (
                                <div key={i} className="w-16 h-16 md:w-20 md:h-20 rounded-full bg-gray-200 border-4 border-white flex items-center justify-center text-xs text-gray-400">
                                    Expert {i}
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </Container>
        </section>
    );
}
