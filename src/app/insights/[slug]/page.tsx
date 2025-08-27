import { notFound } from 'next/navigation';
import { getAllPostSlugs, getPostBySlug } from '@/lib/md';

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
    <main className="prose prose-zinc dark:prose-invert max-w-3xl mx-auto py-10">
      <h1>{frontmatter.title}</h1>
      <article dangerouslySetInnerHTML={{ __html: html }} />
    </main>
  );
}


