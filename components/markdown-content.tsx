import Link from 'next/link';
import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

const components: Components = {
  a: ({ href, children, ...props }) => {
    const isInternal = typeof href === 'string' && href.startsWith('/');
    if (isInternal) {
      return (
        <Link className="text-primary underline underline-offset-4 hover:opacity-85" href={href}>
          {children}
        </Link>
      );
    }
    return (
      <a
        className="text-primary underline underline-offset-4 hover:opacity-85"
        href={href}
        target="_blank"
        rel="noopener noreferrer"
        {...props}
      >
        {children}
      </a>
    );
  },
  h1: ({ ...props }) => <h1 className="markdown-h1 mt-8" {...props} />,
  h2: ({ ...props }) => <h2 className="markdown-h2 mt-10" {...props} />,
  h3: ({ ...props }) => <h3 className="markdown-h3 mt-8" {...props} />,
  p: ({ ...props }) => <p className="mt-4 leading-[var(--leading-body)] text-foreground/90" {...props} />,
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
