import Link from 'next/link';

export default function PlansPage() {
    const plans = [
        {
            title: 'Startup',
            priceMonthly: '€49.0',
            priceAnnual: '€588.0',
            description: 'Perfect for early-stage teams and solo entrepreneurs beginning their compliance journey. Includes access to essential document analysis and reporting tools to ensure you meet basic regulatory requirements efficiently and cost-effectively.',
        },
        {
            title: 'SMB',
            priceMonthly: '€149.0',
            priceAnnual: '€1,788',
            description: 'Designed for growing small to medium-sized businesses needing more robust compliance and audit capabilities. This plan offers advanced document scanning, risk scoring, detailed compliance breakdowns, and team collaboration tools to streamline operations.',
        },
        {
            title: 'Mid-Market',
            priceMonthly: '€499.0',
            priceAnnual: '€5,988',
            description: 'Tailored for established businesses with higher data volume and more complex compliance workflows. Includes everything in the SMB plan, plus prioritized risk alerts, automated audit trail generation, and integration with your internal systems for seamless operation.',
        },
        {
            title: 'Enterprise',
            priceMonthly: '€1,999',
            priceAnnual: '€23,988',
            description: 'Built for large enterprises and regulated industries. Offers full platform access with custom onboarding, dedicated account management, API access, unlimited document processing, and advanced reporting capabilities to meet enterprise-scale audit and security demands.',
        },
    ];

    return (
        <div className="min-h-screen bg-gradient-to-br from-[#0f172a] via-[#1e293b] to-[#0f172a] text-white px-4 py-12">
            <div className="max-w-6xl mx-auto text-center">
                <Link href="/" className="absolute top-6 left-6 text-blue-200 hover:text-white flex items-center space-x-2">
                    <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
                    </svg>
                    <span>Back</span>
                </Link>

                <h1 className="text-4xl font-bold mb-12">Membership Plans</h1>

                <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
                    {plans.map((plan, idx) => (
                        <div
                            key={idx}
                            className="bg-blue-950/50 backdrop-blur-sm border border-blue-700 rounded-xl p-6 shadow-lg hover:shadow-blue-800 transition-all duration-300"
                        >
                            <h2 className="text-2xl font-semibold mb-4">{plan.title}</h2>
                            <p className="text-sm text-blue-200 mb-4">{plan.description}</p>
                            <div className="text-center mb-4">
                                <p className="text-blue-100">💶 <strong>Monthly:</strong> {plan.priceMonthly}</p>
                                <p className="text-blue-100">📅 <strong>Annual:</strong> {plan.priceAnnual}</p>
                            </div>
                            <button className="mt-4 bg-purple-600 hover:bg-purple-700 text-white px-5 py-2 rounded shadow">
                                Select This Plan
                            </button>
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
}
