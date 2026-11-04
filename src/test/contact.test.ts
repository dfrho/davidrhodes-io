import { readFileSync } from "node:fs";
import { dirname, resolve } from "node:path";
import { fileURLToPath } from "node:url";
import { describe, expect, it } from "vitest";
import { contactEmail, contactMailto } from "../lib/contact.ts";

const root = resolve(dirname(fileURLToPath(import.meta.url)), "../..");

describe("contact email", () => {
  it("assembles a mailto address without a single literal in source", () => {
    const source = readFileSync(resolve(root, "src/lib/contact.ts"), "utf8");
    const email = contactEmail();

    expect(source.includes(`${"drhodes"}${"exec"}@${"gmail"}.${"com"}`)).toBe(false);
    expect(email).toBe(`${"drhodes"}${"exec"}@${"gmail"}.${"com"}`);
    expect(contactMailto()).toBe(`mailto:${email}`);
  });
});
