import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const components: Components = {
  a: ({ ...props }) => (
    <a className="text-primary underline underline-offset-4 hover:opacity-85" {...props} />
  ),
  h1: ({ ...props }) => (
    <h1 className="mt-8 text-3xl font-extrabold tracking-tight sm:text-4xl" {...props} />
  ),
  h2: ({ ...props }) => <h2 className="mt-10 text-xl font-bold tracking-tight sm:text-2xl" {...props} />,
  h3: ({ ...props }) => <h3 className="mt-8 text-lg font-semibold tracking-tight sm:text-xl" {...props} />,
  p: ({ ...props }) => <p className="mt-4 leading-7 text-foreground/90 sm:leading-8" {...props} />,
  ul: ({ ...props }) => <ul className="mt-4 list-disc space-y-2 pl-6" {...props} />,
  ol: ({ ...props }) => <ol className="mt-4 list-decimal space-y-2 pl-6" {...props} />,
  blockquote: ({ ...props }) => (
    <blockquote className="mt-6 border-l-4 border-border pl-4 italic text-muted-foreground" {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-10 border-border" {...props} />,
};

export function MarkdownContent({ content }: { content: string }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>{content}</ReactMarkdown>;
}
