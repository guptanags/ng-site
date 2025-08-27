import Link from 'next/link';
import { format } from 'date-fns';
import type { Post } from '@/lib/md';

type Props = {
  post: Post;
};

export default function PostCard({ post }: Props) {
  const { slug, frontmatter, readingTimeMinutes } = post;
  return (
    <article className="border rounded-lg p-4 hover:shadow-sm transition-shadow">
      <h3 className="text-xl font-semibold mb-2">
        <Link href={`/insights/${slug}`} className="hover:underline">
          {frontmatter.title}
        </Link>
      </h3>
      <p className="text-sm text-gray-500 mb-3">
        {format(new Date(frontmatter.date), 'PPP')} • {readingTimeMinutes} min read
      </p>
      {frontmatter.summary && (
        <p className="text-gray-700 line-clamp-3">{frontmatter.summary}</p>
      )}
      <div className="mt-3">
        <Link href={`/insights/${slug}`} className="text-blue-600 hover:underline">
          Read more →
        </Link>
      </div>
    </article>
  );
}


