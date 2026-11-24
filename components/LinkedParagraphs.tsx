import type { ReactNode } from "react";
import Link from "next/link";

type IntroLink = { phrase: string; href: string };

// Renders paragraphs, turning the first occurrence of each phrase into a link.
export default function LinkedParagraphs({
  paragraphs,
  links = [],
}: {
  paragraphs: string[];
  links?: IntroLink[];
}) {
  const remaining = [...links];

  return (
    <>
      {paragraphs.map((paragraph) => {
        let nodes: ReactNode[] = [paragraph];

        for (let i = remaining.length - 1; i >= 0; i--) {
          const { phrase, href } = remaining[i];
          const nodeIndex = nodes.findIndex(
            (node) => typeof node === "string" && node.includes(phrase),
          );
          if (nodeIndex === -1) continue;

          const text = nodes[nodeIndex] as string;
          const at = text.indexOf(phrase);
          nodes = [
            ...nodes.slice(0, nodeIndex),
            text.slice(0, at),
            <Link
              key={`${href}-${phrase}`}
              href={href}
              className="font-medium text-ink underline decoration-accent underline-offset-4 transition-colors hover:text-accent"
            >
              {phrase}
            </Link>,
            text.slice(at + phrase.length),
            ...nodes.slice(nodeIndex + 1),
          ];
          remaining.splice(i, 1);
        }

        return <p key={paragraph}>{nodes}</p>;
      })}
    </>
  );
}
