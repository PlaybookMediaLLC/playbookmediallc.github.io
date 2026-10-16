import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "About",
  description: "About Relay Lab, the test site for Relay's GitHub publishing checks.",
};

export default function Page() {
  return <h1>About Relay Lab</h1>;
}
