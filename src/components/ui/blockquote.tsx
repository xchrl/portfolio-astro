import type { ReactNode } from "react";

function Blockquote({ children }: { children: ReactNode }) {
  return <blockquote className="text-start">{children}</blockquote>;
}

Blockquote.Body = function Body({ children }: { children: ReactNode }) {
  return <p className="border-l-2 pl-6 italic">{children}</p>;
};

Blockquote.Author = function Author({ children }: { children: ReactNode }) {
  return <p className="mt-4 text-muted-foreground">{children}</p>;
};

export { Blockquote };
