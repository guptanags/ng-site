export const metadata = { title: 'Certifications' };

type Cert = { title: string; issuer: string; date: string; id?: string };

const certifications: Cert[] = [
  { title: 'AI Agents: From Prompts to Multi-Agent Systems', issuer: 'University of California, Davis', date: 'Aug 2025', id: '2CMTB4LFDP6N' },
  { title: 'Advanced RAG with Vector Databases and Retrievers', issuer: 'IBM', date: 'Aug 2025', id: 'EOVFMNUSE09H' },
  { title: 'Build Multimodal Generative AI Applications', issuer: 'IBM', date: 'Aug 2025', id: '0QHX99GGGHX9' },
  { title: 'Fundamentals of Building AI Agents', issuer: 'IBM', date: 'Aug 2025', id: 'KCLVNB7DBPQX' },
  { title: 'Vector Databases for RAG: An Introduction', issuer: 'IBM', date: 'Aug 2025', id: 'C9DH9UXW0L7R' },
  { title: 'AI Agents and Agentic AI Architecture in Python', issuer: 'Vanderbilt University', date: 'Jul 2025', id: '16LON4HIJZ1F' },
  { title: 'AI Agents and Agentic AI in Python: Powered by Generative AI (Specialization)', issuer: 'Vanderbilt University', date: 'Jul 2025', id: 'TBOM0W0WSSQ1' },
  { title: 'Agentic AI and AI Agents for Leaders (Specialization)', issuer: 'Vanderbilt University', date: 'Jul 2025', id: 'KPIG838DRPE2' },
  { title: 'Agentic AI and AI Agents: A Primer for Leaders', issuer: 'Vanderbilt University', date: 'Jul 2025', id: 'RJFWH9F9FK53' },
  { title: 'Build RAG Applications: Get Started', issuer: 'IBM', date: 'Jul 2025', id: 'H2B0VRWN0JIF' },
  { title: 'Generative AI Leadership & Strategy (Specialization)', issuer: 'Vanderbilt University', date: 'Jul 2025', id: '5PMEG3HAM5FV' },
  { title: 'Prompt Engineering for ChatGPT', issuer: 'Vanderbilt University', date: 'Jul 2025', id: 'OV418KZL8W44' },
  { title: 'Systems Thinking Basics', issuer: 'Coursera Instructor Network', date: 'Jul 2025', id: 'H07KIHS1D4QB' },
  { title: 'Trustworthy Generative AI', issuer: 'Vanderbilt University', date: 'Jul 2025', id: 'ZEM3HKR999EQ' },
  { title: 'Elastic Google Cloud Infrastructure: Scaling and Automation', issuer: 'Google Cloud', date: 'Apr 2025', id: '835SMYRWMK0K' },
  { title: 'Cloud Architecture Design Patterns', issuer: 'Coursera Instructor Network', date: 'Mar 2025', id: '7I40HLNIJHQS' },
  { title: 'Essential Google Cloud Infrastructure: Core Services', issuer: 'Google Cloud', date: 'Mar 2025', id: 'AQ41MW29V2EK' },
  { title: 'Essential Google Cloud Infrastructure: Foundation', issuer: 'Google Cloud', date: 'Mar 2025', id: 'IZ55KQC4W7NO' },
  { title: 'Generative AI for Leaders', issuer: 'Vanderbilt University', date: 'Mar 2025', id: '9N8QENM0R68M' },
  { title: 'Google Cloud Fundamentals: Core Infrastructure', issuer: 'Google Cloud', date: 'Mar 2025', id: '7D7MON5D71OD' },
  { title: 'How to Build an Executive Presence', issuer: 'Coursera Instructor Network', date: 'Mar 2025', id: 'TYZQTGEFA4L6' },
  { title: 'Introduction to Large Language Models', issuer: 'Google Cloud', date: 'Mar 2025', id: 'AXJV2FNPKGII' },
  { title: 'Introduction to Responsible AI', issuer: 'Google Cloud', date: 'Mar 2025', id: 'QDD2WBZXJWST' },
  { title: 'Responsible AI: Applying AI Principles with Google Cloud', issuer: 'Google Cloud', date: 'Mar 2025', id: '2MUHZ608RY62' },
];

export default function CertificationsPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Certifications</h1>
      <ul className="divide-y divide-neutral-800 rounded border border-neutral-800">
        {certifications.map((c, idx) => (
          <li key={idx} className="p-4 flex items-center justify-between">
            <div>
              <p className="font-medium">{c.title}</p>
              <p className="text-sm text-neutral-400">{c.issuer} · {c.date}</p>
            </div>
            {c.id && <span className="text-xs text-neutral-500">ID: {c.id}</span>}
          </li>
        ))}
      </ul>
    </main>
  );
}


