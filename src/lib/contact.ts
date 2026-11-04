const localPart = ["drhodes", "exec"].join("");
const domain = ["gmail", "com"].join(".");

/** Address is assembled at runtime so the source does not contain one literal. */
export function contactEmail(): string {
  return `${localPart}@${domain}`;
}

export function contactMailto(): string {
  return `mailto:${contactEmail()}`;
}
