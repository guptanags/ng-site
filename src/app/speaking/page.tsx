export const metadata = { title: 'Speaking' };

export default function SpeakingPage() {
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
      <h1 className="text-3xl font-bold mb-6">Let&apos;s Talk About the Future.</h1>
      <section className="space-y-4 mb-8">
        <h2 className="text-xl font-semibold">Speaking Topics</h2>
        <ul className="list-disc pl-6 text-gray-700 space-y-2">
          <li>Agentic AI in Financial Services: From Prototype to Production</li>
          <li>Credit Risk Transformation: Decisioning, Data, and Explainability</li>
          <li>AI and Strategy: From Hype to Enterprise Value</li>
          <li>Modernizing Risk Platforms: Cloud Patterns for Regulated Industries</li>
        </ul>
      </section>
      <section className="space-y-2 mb-8">
        <h2 className="text-xl font-semibold">Testimonials</h2>
        <p className="text-gray-700">“Inspiring and practical—our team left with clear next steps.”</p>
      </section>
      <section className="space-y-2">
        <h2 className="text-xl font-semibold">Media Kit</h2>
        <p className="text-gray-700">Download headshot and bio soon. For inquiries, use the contact form.</p>
      </section>
    </main>
  );
}


