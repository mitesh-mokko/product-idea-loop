import { MarkdownContent } from '@/components/markdown-content';
import { getMarkdownFromRootFile } from '@/lib/content';

export default function HomePage() {
  const content = getMarkdownFromRootFile('index.md');

  return <MarkdownContent content={content} />;
}
