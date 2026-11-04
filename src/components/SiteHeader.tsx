import { useEffect, useId, useRef, useState } from "react";
import { profile } from "../data/profile.ts";
import { contactMailto } from "../lib/contact.ts";
import { ExternalLink } from "./ExternalLink.tsx";

const navItems = [
  { href: "#impact", label: "Impact" },
  { href: "#experience", label: "Experience" },
  { href: "#projects", label: "Projects" },
  { href: "#expertise", label: "Expertise" },
  { href: "#credentials", label: "Credentials" },
  { href: "#contact", label: "Contact" },
] as const;

export function SiteHeader() {
  const [open, setOpen] = useState(false);
  const panelId = useId();
  const toggleRef = useRef<HTMLButtonElement>(null);

  useEffect(() => {
    if (!open) {
      return;
    }

    function onKeyDown(event: KeyboardEvent) {
      if (event.key === "Escape") {
        setOpen(false);
        toggleRef.current?.focus();
      }
    }

    window.addEventListener("keydown", onKeyDown);
    return () => {
      window.removeEventListener("keydown", onKeyDown);
    };
  }, [open]);

  return (
    <header className="site-header" id="top">
      <a className="wordmark" href="#top">
        <span className="monogram" aria-hidden="true">
          DR
        </span>
        <span>{profile.name}</span>
      </a>
      <button
        ref={toggleRef}
        type="button"
        className="nav-toggle"
        aria-expanded={open}
        aria-controls={panelId}
        onClick={() => {
          setOpen((current) => !current);
        }}
      >
        {open ? "Close" : "Menu"}
      </button>
      <nav id={panelId} className={open ? "site-nav is-open" : "site-nav"} aria-label="Primary">
        <ul>
          {navItems.map((item) => (
            <li key={item.href}>
              <a
                href={item.href}
                onClick={() => {
                  setOpen(false);
                }}
              >
                {item.label}
              </a>
            </li>
          ))}
        </ul>
        <ExternalLink href={contactMailto()} className="button button-small">
          Email David
        </ExternalLink>
      </nav>
    </header>
  );
}
