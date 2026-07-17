import * as React from "react";
import ReactMarkdown from "react-markdown";
import { Breakpoint, Color } from "./styles";
import remarkDirective from "remark-directive";
import { Video } from "./Video";
import { Lisa } from "./Audio";
import { Fig } from "./Image";
import { useWindowSize } from "./hooks";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
  level?: HeadingLevel;
} & React.ComponentPropsWithoutRef<"h1">;

export function Heading({ level = 1, style, ...props }: HeadingProps) {
  const Tag = `h${level}` as const;
  return <Tag style={{ color: Color.RED, margin: 0, ...style }} {...props} />;
}

export function Paragraph({
  style,
  ...props
}: React.ComponentPropsWithoutRef<"p">) {
  return <p style={{ fontSize: "1.5rem", ...style }} {...props} />;
}

export function Quote({
  children,
  description,
}: {
  children: string;
  description: string;
}) {
  const { breakpoint } = useWindowSize();

  return (
    <div
      style={{
        width: "100%",
        fontSize: breakpoint(Breakpoint.SM, "4rem", "2rem"),
      }}
    >
      <p style={{ fontWeight: "bold" }}>» {children}</p>
      <p style={{ textAlign: "right" }}>― {description}</p>
    </div>
  );
}

export function Markdown({
  content: input,
  markdownPath,
}: {
  content: string;
  markdownPath?: string;
}) {
  const content = input.replace(/(?<![\\:]):(?!:)/g, "\\:");
  return (
    <ReactMarkdown
      remarkPlugins={[
        remarkDirective,
        () => (tree) => {
          function getQuoteText(node: any, current = ""): string {
            if (node.type === "text") {
              return node.value;
            }
            if ("children" in node && Array.isArray(node.children)) {
              return (
                current +
                node.children
                  .map((child: any) => getQuoteText(child))
                  .join("\n")
              );
            }

            return "";
          }

          function visit(node: any) {
            if (node.type === "containerDirective" && node.name === "quote") {
              node.data ||= {};
              node.data.hName = "quote";
              node.data.hProperties = {
                description: node.attributes.description,
              };
              node.children = [
                {
                  type: "text",
                  value: getQuoteText(node),
                  position: node.position,
                },
              ];
            }

            if (node.type === "containerDirective" && node.name === "video") {
              node.data ||= {};
              node.data.hName = "jumpshare";
              node.data.hProperties = {
                embed: node.attributes.embed.replaceAll("\\:", ":"),
              };
            }
            if (node.type === "containerDirective" && node.name === "Lisa") {
              node.data ||= {};
              node.data.hName = "lisa";
            }

            if (node.children && Array.isArray(node.children))
              node.children.forEach((child: any) => {
                visit(child);
              });
          }
          visit(tree);
        },
      ]}
      components={{
        h1: ({ children }) => <Heading>{children}</Heading>,
        h2: ({ children }) => <Heading level={2}>{children}</Heading>,
        h3: ({ children }) => <Heading level={3}>{children}</Heading>,
        h4: ({ children }) => <Heading level={4}>{children}</Heading>,
        h5: ({ children }) => <Heading level={5}>{children}</Heading>,
        h6: ({ children }) => <Heading level={6}>{children}</Heading>,
        p: ({ children }) => <Paragraph>{children}</Paragraph>,
        img: ({ src, alt, ...props }) => (
          <Fig src={src} alt={alt} description={alt} {...props} />
        ),
        // @ts-ignore
        quote: ({ children, node }) => (
          <Quote description={node.properties.description}>{children}</Quote>
        ),
        // @ts-ignore
        jumpshare: ({ children, node }) => (
          <Video url={node.properties.embed}>{children}</Video>
        ),
        lisa: () => <Lisa />,
      }}
    >
      {content}
    </ReactMarkdown>
  );
}
