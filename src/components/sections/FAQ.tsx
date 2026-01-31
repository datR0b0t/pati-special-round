import { Container } from "@/components/ui/Container";
import { Plus } from "lucide-react";

const faqs = [
    { question: "How does IM8 compare to other multivitamins?", answer: "IM8 is not just a multivitamin. It replaces 16 different supplements..." },
    { question: "When is the best time to take IM8?", answer: "We recommend taking it first thing in the morning on an empty stomach..." },
    { question: "Is IM8 vegan and gluten-free?", answer: "Yes, IM8 is 100% vegan, gluten-free, and contains no added sugars..." },
    { question: "What is the return policy?", answer: "We offer a 30-day money-back guarantee on your first order..." },
];

export function FAQ() {
    return (
        <section className="py-20 bg-im8-cream">
            <Container className="max-w-3xl">
                <h2 className="text-3xl md:text-5xl font-serif text-im8-red text-center mb-12">
                    Frequently Asked Questions
                </h2>

                <div className="space-y-4">
                    {faqs.map((faq, idx) => (
                        <details key={idx} className="group bg-white rounded-2xl p-6 cursor-pointer list-none">
                            <summary className="flex items-center justify-between font-serif text-xl text-im8-red list-none outline-none">
                                {faq.question}
                                <Plus className="w-5 h-5 text-gray-400 transform group-open:rotate-45 transition-transform" />
                            </summary>
                            <div className="mt-4 text-gray-600 leading-relaxed text-lg">
                                <p>{faq.answer}</p>
                            </div>
                        </details>
                    ))}
                </div>
            </Container>
        </section>
    );
}
