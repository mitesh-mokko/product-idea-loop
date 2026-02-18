import { MarkdownContent } from '@/components/markdown-content';
import { getMarkdownFromRootFile } from '@/lib/content';

export default function ArtifactsPage() {
  const content = getMarkdownFromRootFile('artifacts/README.md');

  return <MarkdownContent content={content} />;
}
