import { notFound } from "next/navigation";

/** Add your relevant code here for the issue to reproduce */
export default function dynamic({ params }) {
  const { slug } = params;
  if (slug === "exists") {
    return <>hello world</>;
  }

  // This does not trigger the fallback rewrite in next config
  return notFound();
}
