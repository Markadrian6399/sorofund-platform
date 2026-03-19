export default function Home() {
    return (
        <main className="flex min-h-screen flex-col items-center justify-between p-24">
            <div className="z-10 max-w-5xl w-full items-center justify-between font-mono text-sm lg:flex">
                <h1 className="text-4xl font-bold">Welcome to SoroFund</h1>
                <p className="mt-4">Decentralized Milestone-based Crowdfunding built on Soroban.</p>

                <div className="mt-10 grid gap-4 grid-cols-1 md:grid-cols-2 lg:grid-cols-3">
                    {/* Placeholder for campaigns */}
                    <div className="border p-6 rounded-lg backdrop-blur bg-white/5">
                        <h2 className="text-2xl font-semibold mb-2">Campaign 1</h2>
                        <p>Target: 1000 XLM</p>
                        <p>Status: Active</p>
                    </div>
                    <div className="border p-6 rounded-lg backdrop-blur bg-white/5">
                        <h2 className="text-2xl font-semibold mb-2">Campaign 2</h2>
                        <p>Target: 5000 XLM</p>
                        <p>Status: Funded</p>
                    </div>
                </div>
            </div>
        </main>
    );
}
