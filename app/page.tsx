import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Home",
  description: "Relay Lab is a small static site that Relay uses to test GitHub publishing.",
};

export default function Page() {
  return <h1>Relay Lab</h1>;
}
