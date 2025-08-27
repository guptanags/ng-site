import { getAllPosts } from '@/lib/md';
import PostCard from '@/components/PostCard';

export const metadata = {
  title: 'Insights & Leadership',
};

export default function InsightsPage() {
  const posts = getAllPosts();
  return (
    <main className="max-w-5xl mx-auto py-10">
      <h1 className="text-3xl font-bold mb-6">Insights & Leadership</h1>
      <div className="grid gap-6 md:grid-cols-2">
        {posts.map((p) => (
          <PostCard key={p.slug} post={p} />
        ))}
      </div>
    </main>
  );
}


