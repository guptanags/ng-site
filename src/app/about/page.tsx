export const metadata = { title: 'About' };

import Image from 'next/image';

export default function AboutPage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4">
      <div className="flex items-center gap-4 mb-6">
        <Image src="/headshot-placeholder.svg" alt="Headshot placeholder" width={80} height={80} className="rounded-full border border-neutral-700" />
        <div>
          <p className="text-sm uppercase tracking-wide text-neutral-400">Pune, Maharashtra, India</p>
          <h1 className="text-3xl font-bold">Nagendra Gupta</h1>
          <p className="text-neutral-300">Strategic Technologist · Gen AI & Cloud for Financial Services · Credit Risk Leader</p>
        </div>
      </div>
      <h1 className="text-3xl font-bold mb-4">Beyond the Resume. My Story.</h1>
      <p className="mb-6 text-gray-700">
        With two decades designing innovative solutions for global banks, I specialize in bridging
        complex technical architecture and strategic business outcomes. I focus on Gen AI, Agentic AI,
        credit risk systems, and cloud—translating vision into execution.
      </p>

      <h2 className="text-xl font-semibold mb-2">Recent Role</h2>
      <div className="rounded border p-4 mb-6">
        <p className="font-semibold">Deutsche Bank — Credit Risk Architecture Lead, India Region</p>
        <p className="text-sm text-gray-600">September 2024 – Present · Pune, India</p>
        <p className="mt-2 text-gray-700">Principal solution architect for the Global Credit Risk System.</p>
        <h3 className="mt-3 font-medium">Highlights</h3>
        <ul className="list-disc pl-6 text-gray-700 space-y-1">
          <li>Led architecture for global financial systems, improving performance and scalability.</li>
          <li>Mentored cross‑functional teams; built a culture of technical excellence.</li>
          <li>Designed GenAI/Agentic AI automation to turn requirements into production‑ready code.</li>
          <li>Aligned long‑term roadmaps with business goals; strengthened architectural governance.</li>
          <li>Partnered with business leaders to deliver measurable value.</li>
          <li>Drove microservices and data platform modernization for reliability and maintainability.</li>
        </ul>
      </div>

      <h2 className="text-xl font-semibold mb-2">Timeline</h2>
      <ol className="relative border-l border-neutral-700 pl-6 mb-8">
        <li className="mb-6">
          <div className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full bg-blue-500" />
          <time className="text-xs text-neutral-400">Sep 2024 – Present</time>
          <h3 className="font-medium">Credit Risk Architecture Lead — Deutsche Bank</h3>
          <p className="text-neutral-300">Global Credit Risk System · Pune</p>
        </li>
        <li className="mb-6">
          <div className="absolute -left-1.5 mt-1.5 w-3 h-3 rounded-full bg-blue-500" />
          <time className="text-xs text-neutral-400">May 2016 – Sep 2024</time>
          <h3 className="font-medium">Solutions Architect — London</h3>
          <p className="text-neutral-300">IBM BPM/ODM microservices programs for global credit risk</p>
        </li>
      </ol>

      <h2 className="text-xl font-semibold mb-2">Earlier Experience</h2>
      <p className="text-gray-700 mb-4">
        As a Solutions Architect (2016–2024, London), I led IBM BPM/ODM‑based microservices programs
        for global credit risk, ensuring robust architecture, continuity, and operational excellence.
      </p>

      <h2 className="text-xl font-semibold mb-2">Certifications (Selected)</h2>
      <ul className="list-disc pl-6 text-gray-700 space-y-1">
        <li>Agentic AI and AI Agents (Vanderbilt) · Generative AI Leadership & Strategy</li>
        <li>Advanced RAG with Vector Databases (IBM) · Build Multimodal GenAI Apps</li>
        <li>Google Cloud Infrastructure · Cloud Architecture Design Patterns</li>
      </ul>

      <div className="mt-8">
        <a href="/profile.pdf" className="text-teal-400 hover:underline">Download my profile (PDF)</a>
      </div>
    </main>
  );
}


