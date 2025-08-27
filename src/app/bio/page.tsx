import Image from 'next/image';
import PrintButton from '@/components/PrintButton';

export const metadata = { title: 'Bio' };

export default function BioPage() {
  return (
    <main className="max-w-3xl mx-auto py-10 px-4 print:max-w-full print:px-8">
      <header className="flex items-center gap-4 mb-6">
        <Image src="/headshot-placeholder.svg" alt="Headshot" width={64} height={64} className="rounded-full" />
        <div>
          <h1 className="text-2xl font-bold">Nagendra Gupta</h1>
          <p className="text-neutral-400">Strategic Technologist · Gen AI & Cloud · Credit Risk</p>
        </div>
      </header>
      <section className="space-y-3 mb-6">
        <p>
          Strategic technology leader with 20 years architecting solutions for global banks. I bridge
          complex architecture with business strategy, focusing on Generative/Agentic AI, credit risk,
          and cloud modernization.
        </p>
      </section>
      <div className="flex gap-3 mb-8">
        <a href="/profile.pdf" className="px-3 py-1.5 border rounded text-teal-400">Download Profile (PDF)</a>
        <PrintButton />
      </div>
      <section>
        <h2 className="text-xl font-semibold mb-2">Recent Role</h2>
        <p className="text-neutral-300">Deutsche Bank — Credit Risk Architecture Lead (2024–Present)</p>
      </section>
    </main>
  );
}


