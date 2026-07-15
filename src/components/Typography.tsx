import * as React from "react";
import { Color } from "./styles";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  level?: HeadingLevel;
} & React.ComponentPropsWithoutRef<"h1">;

export function Heading({ level = 1, style, ...props }: HeadingProps) {
  const Tag = `h${level}` as keyof Pick<
    JSX.IntrinsicElements,
    "h1" | "h2" | "h3" | "h4" | "h5" | "h6"
  >;

  return <Tag style={{ color: Color.RED, margin: 0, ...style }} {...props} />;
}

export function Paragraph({
  style,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return <p style={{ fontSize: "1.5rem", ...style }} {...props} />;
}

type ChapterProps = {
  title?: string;
  children: React.ReactNode;
  level?: HeadingLevel;
} & React.ComponentPropsWithoutRef<"section">;

export function Chapter({ title, children, level = 1, style }: ChapterProps) {
  return (
    <section
      id={title}
      style={{
        marginTop: "2rem",
        paddingLeft: `${(level - 1) * 3}rem`,
        ...style,
      }}
    >
      {title && <Heading level={level}>{title}</Heading>}
      <Paragraph
        style={{ marginTop: 5, color: level > 1 ? "black" : Color.RED }}
      >
        {children}
      </Paragraph>
    </section>
  );
}

export function Quote({
  children,
  description,
}: {
  children: string;
  description: string;
}) {
  return (
    <div style={{ width: "100%", fontSize: "4rem" }}>
      <p style={{ fontWeight: "bold" }}>» {children}</p>
      <p style={{ textAlign: "right" }}>― {description}</p>
    </div>
  );
}
