import { MarkdownContent } from '@/components/markdown-content';
import { getMarkdownFromRootFile } from '@/lib/content';

export default function ManifestoPage() {
  const content = getMarkdownFromRootFile('manifesto.md');

  return <MarkdownContent content={content} />;
}
