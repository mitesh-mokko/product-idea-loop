import { MarkdownContent } from '@/components/markdown-content';
import { getMarkdownFromRootFile } from '@/lib/content';

export default function ContributingPage() {
  const content = getMarkdownFromRootFile('CONTRIBUTING.md');

  return <MarkdownContent content={content} />;
}
