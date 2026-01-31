import { Container } from "@/components/ui/Container";

const stats = [
    { value: "168%", label: "Improvement in Energy" },
    { value: "45%", label: "Better Gut Health" },
    { value: "3x", label: "Faster Recovery" },
    { value: "92", label: "Essential Nutrients" },
];

export function StatsSection() {
    return (
        <section className="bg-im8-bright-red text-white py-20">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif mb-4">
                        Clinically Proven Results
                    </h2>
                    <p className="text-white/80 max-w-2xl mx-auto text-lg">
                        Based on a 30-day double-blind placebo-controlled study of 100 participants.
                    </p>
                </div>

                <div className="grid grid-cols-2 md:grid-cols-4 gap-8 md:gap-4 text-center">
                    {stats.map((stat, idx) => (
                        <div key={idx} className="flex flex-col gap-2">
                            <span className="text-5xl md:text-7xl font-serif leading-none opacity-90">
                                {stat.value}
                            </span>
                            <span className="text-sm md:text-base font-medium uppercase tracking-wide opacity-80">
                                {stat.label}
                            </span>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
