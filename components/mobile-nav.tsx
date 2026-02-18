'use client';

import Link from 'next/link';
import { Github, Menu, X } from 'lucide-react';
import { usePathname } from 'next/navigation';
import { useEffect, useState } from 'react';

import { ThemeToggle } from '@/components/theme-toggle';
import { Button } from '@/components/ui/button';

const navLinks = [
  { href: '/manifesto/', label: 'Manifesto' },
  { href: '/contributing/', label: 'Contributing' },
  { href: '/artifacts/', label: 'Artifacts' },
];

export function MobileNav() {
  const [open, setOpen] = useState(false);
  const pathname = usePathname();

  useEffect(() => {
    setOpen(false);
  }, [pathname]);

  return (
    <div className="relative md:hidden">
      <div className="flex items-center gap-1">
        <ThemeToggle className="px-2" />
        <Button
          aria-expanded={open}
          aria-label="Toggle navigation menu"
          variant="ghost"
          size="sm"
          onClick={() => setOpen((current) => !current)}
        >
          {open ? <X className="size-4" /> : <Menu className="size-4" />}
          <span className="sr-only">Menu</span>
        </Button>
      </div>

      {open ? (
        <>
          <button
            aria-label="Close navigation menu"
            className="fixed inset-0 z-30 bg-black/15"
            onClick={() => setOpen(false)}
            type="button"
          />
          <div className="absolute right-0 z-40 mt-2 w-64 rounded-lg border border-border bg-card p-2 shadow-lg">
            <nav className="flex flex-col gap-1 text-sm">
              {navLinks.map((item) => (
                <Link
                  key={item.href}
                  className="rounded-md px-3 py-2 hover:bg-accent"
                  href={item.href}
                >
                  {item.label}
                </Link>
              ))}
              <a
                className="inline-flex items-center gap-2 rounded-md px-3 py-2 hover:bg-accent"
                href="https://github.com/mitesh-mokko/product-idea-loop"
                target="_blank"
                rel="noopener noreferrer"
              >
                <Github className="size-4" />
                <span>GitHub Repository</span>
              </a>
              <ThemeToggle className="justify-start" showLabel />
            </nav>
          </div>
        </>
      ) : null}
    </div>
  );
}
