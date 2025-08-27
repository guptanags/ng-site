import Link from "next/link";
import Image from "next/image";
import { getAllPosts } from "@/lib/md";
import PostCard from "@/components/PostCard";

export default function Home() {
  const posts = getAllPosts().slice(0, 3);
  return (
    <main className="max-w-6xl mx-auto py-12 px-4">
      <section className="relative overflow-hidden rounded-xl border border-slate-800 mb-12">
        <div className="absolute inset-0">
          <Image
            src="/image.jpg"
            alt="Abstract professional background with AI network and finance motifs"
            fill
            className="object-cover opacity-40"
            priority
          />
        </div>
        <div className="pointer-events-none absolute inset-0 bg-gradient-to-tr from-amber-200/10 via-transparent to-transparent" />
        <div className="relative z-10 text-center px-6 py-16 bg-gradient-to-b from-transparent to-slate-900/70">
          <h1 className="text-5xl font-bold mt-2">Nagendra Gupta</h1>
          <p className="text-lg text-neutral-300 mt-3">
            Strategic Technologist · Gen AI & Cloud for Financial Services · Credit Risk Leader
          </p>
          <p className="text-base text-neutral-300 mt-4 max-w-3xl mx-auto">
            I bridge complex technical architecture and business strategy—leveraging Generative and Agentic AI to automate development,
            enhance credit risk workflows, and build the future of financial services.
          </p>
          <div className="mt-6 flex gap-4 justify-center">
            <Link href="/services" className="px-5 py-2 bg-teal-600 text-white rounded-md">Explore My Services</Link>
            <Link href="/contact" className="px-5 py-2 border border-slate-700 rounded-md">Let&apos;s Discuss Your Strategy</Link>
          </div>
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">How I Can Help</h2>
        <div className="grid gap-6 md:grid-cols-3">
          {[
            {
              title: 'AI-Driven Strategy',
              img: '/ai.png',
              desc: 'Clear, actionable AI strategy for competitive advantage and business growth.',
            },
            {
              title: 'Cloud Transformation',
              img: '/clouds.png',
              desc: 'Migration and modernization for scalability and efficiency.',
            },
            {
              title: 'Innovation Frameworks',
              img: '/innovate.png',
              desc: 'Implement proven methodologies to foster a culture of continuous innovation and accelerate new product development.',
            },
          ].map((card) => (
            <div key={card.title} className="rounded-lg overflow-hidden border border-slate-800 bg-slate-900">
              <div className="relative h-40">
                <Image src={card.img} alt={card.title} fill className="object-cover opacity-80" />
              </div>
              <div className="p-4">
                <h3 className="font-semibold text-lg">{card.title}</h3>
                <p className="text-slate-300 text-sm">{card.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      <section className="mb-12">
        <h2 className="text-2xl font-semibold mb-4">Recent Insights</h2>
        {posts.length === 0 ? (
          <p>No posts yet. Add markdown files under <code>content/posts</code>.</p>
        ) : (
          <div className="grid gap-6 md:grid-cols-3">
            {posts.map((p) => (
              <PostCard key={p.slug} post={p} />
            ))}
          </div>
        )}
      </section>


    </main>
  );
}
