import React from "react";
import { Heading, Markdown } from "./Typography";

export function Science({ data }: { data: Queries.IndexPageQuery["science"] }) {
  return (
    <section style={{ margin: "4rem 0 " }}>
      {data.nodes.map((node) => (
        <article
          id={node.frontmatter?.title ?? ""}
          key={node.frontmatter?.title}
        >
          {node.frontmatter?.title && (
            <Heading>{node.frontmatter.title}</Heading>
          )}
          <Markdown content={node.rawMarkdownBody ?? ""} />
        </article>
      ))}
    </section>
  );
}
