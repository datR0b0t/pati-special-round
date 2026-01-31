import { Container } from "@/components/ui/Container";

const experts = [
    {
        role: "Chief Medical Officer",
        name: "Dr. Perry Pickle",
        desc: "Board-certified in Internal Medicine and a leading expert in functional nutrition.",
    },
    {
        role: "Scientific Advisor",
        name: "Dr. Sarah Squash",
        desc: "PhD in Nutritional Sciences with 20 years of research experience.",
    },
    {
        role: "Clinical Director",
        name: "Dr. Benny Bean",
        desc: "Specialist in gut microbiome health and integrative medicine.",
    },
];

export function ExpertProfile() {
    return (
        <section className="py-20 bg-white">
            <Container>
                <div className="text-center mb-16">
                    <p className="text-im8-red font-bold tracking-wider uppercase mb-4">
                        Board of Doctors
                    </p>
                    <h2 className="text-3xl md:text-5xl font-serif text-im8-red">
                        Brilliant Minds Behind IM8
                    </h2>
                </div>

                <div className="grid md:grid-cols-3 gap-8">
                    {experts.map((expert, idx) => (
                        <div key={idx} className="flex flex-col items-center text-center">
                            <div className="w-48 h-48 rounded-full bg-gray-200 mb-6 overflow-hidden border-4 border-im8-cream">
                                {/* Placeholder Image */}
                                <div className="w-full h-full bg-gray-300 flex items-center justify-center text-gray-400">
                                    Photo
                                </div>
                            </div>
                            <p className="text-xs font-bold uppercase tracking-wider text-gray-500 mb-2">
                                {expert.role}
                            </p>
                            <h3 className="text-2xl font-serif text-im8-red mb-3">
                                {expert.name}
                            </h3>
                            <p className="text-gray-600 max-w-xs leading-relaxed">
                                {expert.desc}
                            </p>
                        </div>
                    ))}
                </div>
            </Container>
        </section>
    );
}
