import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/md';
import './blog.css';

type Params = Promise<{ slug: string }>;

export async function generateStaticParams() {
  return getAllPostSlugs().map((slug) => ({ slug }));
}

export default async function PostPage({ params }: { params: Params }) {
  const { slug } = await params;
  const post = getPostBySlug(slug);
  if (!post) return notFound();
  const { frontmatter, html } = post;
  return (
    <main className="max-w-4xl mx-auto py-10 px-4">
        <header className="mb-8">
          <h1 className="text-4xl font-bold mb-4">{frontmatter.title}</h1>
          <div className="text-slate-400 text-sm">
            Published {new Date(frontmatter.date).toLocaleDateString('en-US', {
              year: 'numeric',
              month: 'long',
              day: 'numeric'
            })}
          </div>
        </header>
        <article
        className="blog-content"
        dangerouslySetInnerHTML={{ __html: html }}
      />
    </main>
  );
}


