import fs from 'node:fs';
import path from 'node:path';

function stripFrontMatter(source: string): string {
  if (!source.startsWith('---')) {
    return source;
  }

  const end = source.indexOf('\n---', 3);
  if (end === -1) {
    return source;
  }

  return source.slice(end + 4).trimStart();
}

function rewriteInternalLinks(markdown: string): string {
  return markdown
    .replace(/<div class=\"hero-callout\">[\s\S]*?<\/div>/g, (match) => {
      const inner = match
        .replace('<div class="hero-callout">', '')
        .replace('</div>', '')
        .trim();
      const lines = inner
        .split('\n')
        .map((line) => line.trim())
        .filter(Boolean)
        .join('\n> ');
      return `> ${lines}`;
    })
    .replace(/\]\(\.\/index\.md\)/g, '](/)')
    .replace(/\]\(\.\/manifesto\/?\)/g, '](/manifesto/)')
    .replace(/\]\(\.\/contributing\/?\)/g, '](/contributing/)')
    .replace(/\]\(\.\/artifacts\/?\)/g, '](/artifacts/)')
    .replace(/\]\(\.\/README\.md\)/g, '](/)');
}

export function getMarkdownFromRootFile(fileName: string): string {
  const absolutePath = path.join(process.cwd(), fileName);
  const raw = fs.readFileSync(absolutePath, 'utf8');
  return rewriteInternalLinks(stripFrontMatter(raw));
}
