import fs from 'fs';
import path from 'path';
import matter from 'gray-matter';
import { unified } from 'unified';
import remarkParse from 'remark-parse';
import remarkGfm from 'remark-gfm';
import remarkRehype from 'remark-rehype';
import rehypeSlug from 'rehype-slug';
import rehypeAutolinkHeadings from 'rehype-autolink-headings';
import rehypeStringify from 'rehype-stringify';
import readingTime from 'reading-time';

export type PostFrontmatter = {
  title: string;
  date: string; // ISO string
  summary?: string;
  coverImage?: string;
  tags?: string[];
  draft?: boolean;
};

export type Post = {
  slug: string;
  frontmatter: PostFrontmatter;
  content: string;
  html: string;
  readingTimeMinutes: number;
};

const postsDirectory = path.join(process.cwd(), 'content', 'posts');

export function getAllPostSlugs(): string[] {
  if (!fs.existsSync(postsDirectory)) return [];
  return fs
    .readdirSync(postsDirectory)
    .filter((file) => file.endsWith('.md') || file.endsWith('.mdx'))
    .map((file) => file.replace(/\.(md|mdx)$/i, ''));
}

export function getPostBySlug(slug: string): Post | null {
  const mdPath = path.join(postsDirectory, `${slug}.md`);
  const mdxPath = path.join(postsDirectory, `${slug}.mdx`);
  const filePath = fs.existsSync(mdPath) ? mdPath : fs.existsSync(mdxPath) ? mdxPath : null;
  if (!filePath) return null;
  const file = fs.readFileSync(filePath, 'utf8');
  const { data, content } = matter(file);
  const fm: PostFrontmatter = {
    title: String(data.title || slug),
    date: String(data.date || new Date().toISOString()),
    summary: data.summary ? String(data.summary) : undefined,
    coverImage: data.coverImage ? String(data.coverImage) : undefined,
    tags: Array.isArray(data.tags) ? data.tags.map(String) : undefined,
    draft: Boolean(data.draft || false),
  };

  const fileReading = readingTime(content);

  const html = unified()
    .use(remarkParse)
    .use(remarkGfm)
    .use(remarkRehype)
    .use(rehypeSlug)
    .use(rehypeAutolinkHeadings, { behavior: 'wrap' })
    .use(rehypeStringify)
    .processSync(content)
    .toString();

  return {
    slug,
    frontmatter: fm,
    content,
    html,
    readingTimeMinutes: Math.max(1, Math.round(fileReading.minutes)),
  };
}

export function getAllPosts(): Post[] {
  return getAllPostSlugs()
    .map((slug) => getPostBySlug(slug))
    .filter((p): p is Post => p !== null)
    .filter((p) => !p.frontmatter.draft)
    .sort((a, b) => (a.frontmatter.date < b.frontmatter.date ? 1 : -1));
}


