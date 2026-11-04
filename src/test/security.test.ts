import { createHash } from "node:crypto";
import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

type Header = { key: string; value: string };
type VercelConfig = {
  headers: { source: string; headers: Header[] }[];
  rewrites: { source: string; destination: string }[];
  redirects: { source: string; destination: string; permanent: boolean }[];
};

function read(path: string): string {
  return readFileSync(resolve(root, path), "utf8");
}

function headerMap(config: VercelConfig): Map<string, string> {
  const block = config.headers[0];
  if (!block) {
    throw new Error("vercel.json is missing a header block");
  }
  return new Map(block.headers.map((header) => [header.key, header.value]));
}

describe("security headers and public files", () => {
  const config = JSON.parse(read("vercel.json")) as VercelConfig;
  const headers = headerMap(config);

  it("sets a strict content security policy without script unsafe-inline or unsafe-eval", () => {
    const csp = headers.get("Content-Security-Policy");
    expect(csp).toBeDefined();
    expect(csp).toContain("default-src 'self'");
    expect(csp).toContain("script-src 'self'");
    expect(csp).toContain("style-src 'self'");
    expect(csp).toContain("font-src 'self'");
    expect(csp).toContain("frame-ancestors 'none'");
    expect(csp).toContain("object-src 'none'");
    expect(csp).toContain("base-uri 'self'");
    expect(csp).toContain("form-action 'none'");
    expect(csp).not.toContain("unsafe-inline");
    expect(csp).not.toContain("unsafe-eval");

    const html = read("index.html");
    const match = html.match(/<script type="application\/ld\+json">([\s\S]*?)<\/script>/);
    const body = match?.[1];
    expect(body).toBeTruthy();
    if (!body) {
      return;
    }
    const hash = createHash("sha256").update(body).digest("base64");
    expect(csp).toContain(`'sha256-${hash}'`);
  });

  it("sends the remaining required browser protections", () => {
    expect(headers.get("Strict-Transport-Security")).toBe(
      "max-age=63072000; includeSubDomains; preload",
    );
    expect(headers.get("X-Content-Type-Options")).toBe("nosniff");
    expect(headers.get("Referrer-Policy")).toBe("strict-origin-when-cross-origin");
    expect(headers.get("X-Frame-Options")).toBe("DENY");
    expect(headers.get("Cross-Origin-Opener-Policy")).toBe("same-origin");
    const permissions = headers.get("Permissions-Policy") ?? "";
    expect(permissions).toContain("camera=()");
    expect(permissions).toContain("microphone=()");
    expect(permissions).toContain("geolocation=()");
    expect(permissions).toContain("payment=()");
  });

  it("rewrites the SPA and redirects www to the apex", () => {
    expect(config.rewrites.some((rule) => rule.destination === "/index.html")).toBe(true);
    expect(
      config.redirects.some(
        (rule) => rule.destination === "https://davidrhodes.io/:path*" && rule.permanent,
      ),
    ).toBe(true);
  });

  it("publishes robots and a sitemap for the apex domain", () => {
    const robots = read("public/robots.txt");
    const sitemap = read("public/sitemap.xml");
    expect(robots).toContain("Sitemap: https://davidrhodes.io/sitemap.xml");
    expect(sitemap).toContain("https://davidrhodes.io/");
    const html = read("index.html");
    expect(html).toContain('rel="canonical" href="https://davidrhodes.io/"');
    expect(html).toContain('property="og:image" content="https://davidrhodes.io/og.png"');
    expect(html).not.toContain("tel:");
  });
});
