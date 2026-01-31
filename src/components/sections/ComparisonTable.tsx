import { Container } from "@/components/ui/Container";
import { Check, X } from "lucide-react";

const features = [
    "92 Essential Nutrients",
    "Clinical Doses of Adaptogens",
    "Third-Party Tested",
    "Zero Added Sugar",
    "Medical Advisory Board",
];

export function ComparisonTable() {
    return (
        <section className="py-20 bg-gray-50">
            <Container>
                <div className="text-center mb-16">
                    <h2 className="text-3xl md:text-5xl font-serif text-im8-red">
                        The New Gold Standard
                    </h2>
                </div>

                <div className="overflow-x-auto">
                    <table className="w-full max-w-4xl mx-auto text-left border-collapse">
                        <thead>
                            <tr>
                                <th className="p-4 md:p-6 text-gray-500 font-medium">Benefits</th>
                                <th className="p-4 md:p-6 text-center text-im8-red font-serif text-xl bg-white rounded-t-2xl shadow-sm border-x border-t border-gray-100">
                                    IM8 Daily
                                </th>
                                <th className="p-4 md:p-6 text-center text-gray-400 font-medium">
                                    Standard Greens
                                </th>
                                <th className="p-4 md:p-6 text-center text-gray-400 font-medium">
                                    Multivitamins
                                </th>
                            </tr>
                        </thead>
                        <tbody className="bg-white lg:bg-transparent">
                            {features.map((feature, idx) => (
                                <tr key={idx} className="border-b border-gray-200 lg:border-none">
                                    <td className="p-4 md:p-6 font-medium text-gray-900 bg-transparent">{feature}</td>

                                    {/* IM8 Column */}
                                    <td className="p-4 md:p-6 text-center bg-white shadow-sm border-x border-gray-100 first:rounded-tl-2xl">
                                        <div className="flex justify-center text-im8-red">
                                            <Check className="w-6 h-6" />
                                        </div>
                                    </td>

                                    {/* Competitor 1 */}
                                    <td className="p-4 md:p-6 text-center text-gray-400">
                                        <div className="flex justify-center">
                                            {idx % 2 === 0 ? <X className="w-6 h-6" /> : <div className="w-4 h-0.5 bg-gray-300" />}
                                        </div>
                                    </td>

                                    {/* Competitor 2 */}
                                    <td className="p-4 md:p-6 text-center text-gray-400">
                                        <div className="flex justify-center">
                                            <X className="w-6 h-6" />
                                        </div>
                                    </td>
                                </tr>
                            ))}
                            {/* Bottom row rounded styling for IM8 column */}
                            <tr>
                                <td></td>
                                <td className="bg-white h-4 rounded-b-2xl shadow-sm border-x border-b border-gray-100"></td>
                                <td></td>
                                <td></td>
                            </tr>
                        </tbody>
                    </table>
                </div>
            </Container>
        </section>
    );
}
