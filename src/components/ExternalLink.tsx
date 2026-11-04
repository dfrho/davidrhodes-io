import type { ReactNode } from "react";

type ExternalLinkProps = {
  href: string;
  children: ReactNode;
  className?: string;
};

function isHttpUrl(href: string): boolean {
  return href.startsWith("https://") || href.startsWith("http://");
}

export function ExternalLink({ href, children, className }: ExternalLinkProps) {
  if (!isHttpUrl(href)) {
    return (
      <a href={href} className={className}>
        {children}
      </a>
    );
  }

  return (
    <a href={href} className={className} target="_blank" rel="noopener noreferrer">
      {children}
      <span className="sr-only"> (opens in a new tab)</span>
    </a>
  );
}
