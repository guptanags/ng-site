export const metadata = { title: 'Services' };

export default function ServicesPage() {
  return (
    <main className="max-w-5xl mx-auto py-10 px-4 space-y-8">
      <h1 className="text-3xl font-bold">How I Help You Win.</h1>

      <section>
        <h2 className="text-xl font-semibold">From Vision to Execution (Financial Services)</h2>
        <p className="text-gray-700">Strategy advisory tailored to banks and FinTech—roadmaps that align technology with risk, compliance, and growth.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">GenAI & Agentic AI for Credit Risk</h2>
        <p className="text-gray-700">Automation from requirements to code; decisioning, data pipelines, and explainable AI for risk and controls.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold">Cloud Architecture & Modernization</h2>
        <p className="text-gray-700">Microservices, data platforms, and reliability patterns designed for regulated environments.</p>
      </section>

      <section>
        <h2 className="text-xl font-semibold mb-4">Expertise</h2>
        <div className="grid gap-4 md:grid-cols-3">
          <div className="rounded border border-neutral-800 bg-neutral-900 p-4">
            <h3 className="font-semibold mb-1">AI-Driven Strategy</h3>
            <p className="text-neutral-400 text-sm">Develop a clear, actionable strategy to leverage AI for competitive advantage and business growth.</p>
          </div>
          <div className="rounded border border-neutral-800 bg-neutral-900 p-4">
            <h3 className="font-semibold mb-1">Cloud Transformation</h3>
            <p className="text-neutral-400 text-sm">Navigate the complexities of cloud migration and modernization to unlock scalability and efficiency.</p>
          </div>
          <div className="rounded border border-neutral-800 bg-neutral-900 p-4">
            <h3 className="font-semibold mb-1">Innovation Frameworks</h3>
            <p className="text-neutral-400 text-sm">Implement proven methodologies to foster a culture of continuous innovation and accelerate new product development.</p>
          </div>
        </div>
      </section>
    </main>
  );
}


