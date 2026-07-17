import React from "react";
import { Heading, Markdown } from "./Typography";
import ImageGallery from "react-image-gallery";
// @ts-ignore
import "react-image-gallery/styles/image-gallery.css";
import { withPrefix } from "gatsby";

export function Groups({
  data,
}: {
  data: Queries.IndexPageQuery["groups"]["nodes"];
}) {
  return (
    <>
      {data.map((node) => (
        <Group
          group={node}
          key={
            node.childMarkdownRemark?.frontmatter?.short ??
            node.childMarkdownRemark?.frontmatter?.title
          }
        />
      ))}
    </>
  );
}

function Group({
  group,
}: {
  group: Queries.IndexPageQuery["groups"]["nodes"][number];
}) {
  if (!group.childMarkdownRemark || !group.childMarkdownRemark.frontmatter) {
    return null;
  }

  const {
    childMarkdownRemark: { frontmatter, rawMarkdownBody },
  } = group;

  return (
    <article
      style={{ marginBottom: "15rem" }}
      id={frontmatter.short ?? frontmatter.title ?? ""}
    >
      {frontmatter.gallery && <Gallery images={frontmatter.gallery} />}
      <Heading style={{ marginTop: "2rem", maxWidth: 400 }}>
        {frontmatter.title}
      </Heading>
      <div
        style={{
          display: "grid",
          width: "100%",
          gridTemplateColumns: "1fr 4fr",
          gap: "2rem",
        }}
      >
        {frontmatter.logo?.publicURL && (
          <img
            src={frontmatter.logo?.publicURL}
            style={{ width: "100%", marginTop: "4rem", objectFit: "cover" }}
          />
        )}
        <div style={{ gridColumnStart: 2, gridColumnEnd: 3 }}>
          <Markdown content={rawMarkdownBody ?? ""} />
        </div>
      </div>
    </article>
  );
}

function Gallery({
  images,
}: {
  images: NonNullable<
    NonNullable<
      NonNullable<
        Queries.IndexPageQuery["groups"]["nodes"][number]["childMarkdownRemark"]
      >["frontmatter"]
    >["gallery"]
  >;
}) {
  return (
    <ImageGallery
      showPlayButton={false}
      items={images.map((i) => ({
        original: i?.src?.publicURL ?? "",
        description: i?.description ?? "",
      }))}
    />
  );
}
