import Link from 'next/link';
import type { ReactNode } from 'react';
import { Github } from 'lucide-react';

import { MobileNav } from '@/components/mobile-nav';
import { ThemeToggle } from '@/components/theme-toggle';

export function SiteShell({ children }: { children: ReactNode }) {
  return (
    <div className="min-h-screen bg-background text-foreground">
      <header className="sticky top-0 z-20 border-b border-border/80 bg-card/90 backdrop-blur">
        <div className="mx-auto flex w-full max-w-4xl items-center justify-between px-4 py-3 sm:px-6">
          <Link href="/" className="max-w-[13rem] truncate font-semibold tracking-tight sm:max-w-none">
            Product IDEA Loop
          </Link>
          <nav className="hidden items-center gap-2 text-sm md:flex">
            <Link className="rounded px-2 py-1 hover:bg-accent" href="/manifesto/">
              Manifesto
            </Link>
            <Link className="rounded px-2 py-1 hover:bg-accent" href="/contributing/">
              Contributing
            </Link>
            <Link className="rounded px-2 py-1 hover:bg-accent" href="/artifacts/">
              Artifacts
            </Link>
            <a
              className="inline-flex items-center gap-1 rounded px-2 py-1 hover:bg-accent"
              href="https://github.com/mitesh-mokko/product-idea-loop"
              target="_blank"
              rel="noopener noreferrer"
            >
              <Github className="size-4" />
              <span>GitHub</span>
            </a>
            <ThemeToggle />
          </nav>
          <MobileNav />
        </div>
      </header>
      <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>
      <footer className="border-t border-border/80 bg-card/60 py-6 font-sans text-sm text-muted-foreground">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-4 px-4 sm:flex-row sm:items-center sm:justify-between sm:px-6">
          <div className="space-y-1">
            <p className="text-sm font-semibold tracking-tight text-foreground">Product IDEA Loop</p>
            <p className="text-xs">Open source framework for running IDEA loops.</p>
          </div>
          <div className="space-y-2 sm:text-right">
            <a
              className="text-xs font-medium text-muted-foreground underline-offset-4 hover:text-foreground hover:underline"
              href="https://github.com/mitesh-mokko/product-idea-loop/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              Contributors
            </a>
            <a
              className="block w-fit sm:ml-auto"
              href="https://github.com/mitesh-mokko/product-idea-loop/graphs/contributors"
              target="_blank"
              rel="noopener noreferrer"
            >
              <img
                src="https://contrib.rocks/image?repo=mitesh-mokko/product-idea-loop"
                alt="Contributors to Product IDEA Loop"
                className="h-7 w-auto"
              />
            </a>
          </div>
        </div>
      </footer>
    </div>
  );
}
