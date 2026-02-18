import Link from 'next/link';
import type { ReactNode } from 'react';

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
            <ThemeToggle />
          </nav>
          <MobileNav />
        </div>
      </header>
      <main className="mx-auto w-full max-w-4xl px-4 py-8 sm:px-6 sm:py-10">{children}</main>
      <footer className="border-t border-border/80 py-6 text-sm text-muted-foreground">
        <div className="mx-auto flex w-full max-w-4xl flex-col gap-1 px-4 sm:px-6">
          <p>Product IDEA Loop</p>
          <p>Mitesh Shah · mitesh@mokko.io</p>
        </div>
      </footer>
    </div>
  );
}
