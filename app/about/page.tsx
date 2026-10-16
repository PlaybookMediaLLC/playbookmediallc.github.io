import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About the lab",
  description: "Relay Lab is a small static Next.js site. Relay uses it to test pull requests, deployment signals and reverts.",
};

export default function Page() {
  return <h1>About Relay Lab</h1>;
}
