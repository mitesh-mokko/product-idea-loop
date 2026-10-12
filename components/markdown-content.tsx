import Link from 'next/link';
import { Children, isValidElement, type ReactNode } from 'react';
import type { Components } from 'react-markdown';
import ReactMarkdown from 'react-markdown';
import remarkGfm from 'remark-gfm';

function isLeadIntroParagraph(children: ReactNode): boolean {
  const nodes = Children.toArray(children);
  if (nodes.length !== 1 || !isValidElement(nodes[0])) {
    return false;
  }
  return nodes[0].type === 'strong';
}

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
  h1: ({ ...props }) => (
    <h1
      className="mt-8 font-sans text-4xl font-semibold tracking-[-0.012em] leading-[1.1] sm:text-5xl"
      {...props}
    />
  ),
  h2: ({ ...props }) => (
    <h2 className="mt-10 font-sans text-3xl font-semibold tracking-tight leading-[1.2]" {...props} />
  ),
  h3: ({ ...props }) => (
    <h3 className="mt-8 font-sans text-2xl font-semibold tracking-tight leading-snug" {...props} />
  ),
  h4: ({ ...props }) => (
    <h4 className="mt-6 font-sans text-xl font-semibold tracking-tight leading-snug" {...props} />
  ),
  p: ({ children, ...props }) => {
    if (isLeadIntroParagraph(children)) {
      return (
        <p
          className="mt-4 font-sans text-xl font-normal leading-[1.6] text-muted-foreground [&_strong]:font-normal"
          {...props}
        >
          {children}
        </p>
      );
    }
    return (
      <p className="mt-4 text-lg leading-[1.75] text-foreground/90" {...props}>
        {children}
      </p>
    );
  },
  ul: ({ ...props }) => <ul className="mt-4 list-disc space-y-2 pl-6 text-lg leading-[1.75]" {...props} />,
  ol: ({ ...props }) => <ol className="mt-4 list-decimal space-y-2 pl-6 text-lg leading-[1.75]" {...props} />,
  li: ({ ...props }) => <li className="text-lg leading-[1.75]" {...props} />,
  blockquote: ({ ...props }) => (
    <blockquote className="hero-callout not-italic [&_p]:mt-0 [&_p]:text-xl [&_p]:leading-[1.2]" {...props} />
  ),
  hr: ({ ...props }) => <hr className="my-10 border-border" {...props} />,
};

export function MarkdownContent({ content }: { content: string }) {
  return <ReactMarkdown remarkPlugins={[remarkGfm]} components={components}>{content}</ReactMarkdown>;
}
