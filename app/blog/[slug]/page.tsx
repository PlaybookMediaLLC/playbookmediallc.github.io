import type { Metadata } from "next";

export const metadata: Metadata = {
  title: "Blog post",
  description: "A dynamic route. Relay refuses to change it.",
};

export function generateStaticParams() {
  return [{ slug: "hello" }];
}

export default function Page() {
  return <h1>Blog post</h1>;
}
