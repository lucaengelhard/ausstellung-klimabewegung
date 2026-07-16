import React from "react";
import { Heading } from "../../components/Typography";

import ReactMarkdown from "react-markdown";

export function Groups({ data }: { data: Queries.IndexPageQuery["groups"] }) {
  return (
    <>
      {data.nodes.map((node) => (
        <Group group={node} />
      ))}
    </>
  );
}

function Group({
  group,
}: {
  group: Queries.IndexPageQuery["groups"]["nodes"][number];
}) {
  if (!group.childMarkdownRemark || !group.childMarkdownRemark.frontmatter)
    return null;

  const {
    childMarkdownRemark: { frontmatter, rawMarkdownBody },
    relativeDirectory,
  } = group;

  return (
    <article>
      <Heading>{frontmatter.title}</Heading>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "1fr 4fr",
        }}
      >
        {frontmatter.logo?.publicURL && (
          <img
            src={frontmatter.logo?.publicURL}
            style={{ width: "100%", marginTop: "4rem" }}
          />
        )}
        <div style={{ gridColumnStart: 2, gridColumnEnd: 3 }}>
          <ReactMarkdown>{rawMarkdownBody}</ReactMarkdown>
        </div>
      </div>
    </article>
  );
}
