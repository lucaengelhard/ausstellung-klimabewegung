import React from "react";
import { Heading, Markdown } from "./Typography";
import ImageGallery from "react-image-gallery";
// @ts-ignore
import "react-image-gallery/styles/image-gallery.css";
import { withPrefix } from "gatsby";
import { useWindowSize } from "./hooks";
import { Breakpoint } from "./styles";

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
  const { breakpoint } = useWindowSize();

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
            src={withPrefix(frontmatter.logo?.publicURL)}
            style={{
              width: "100%",
              marginTop: "2rem",
              objectFit: "cover",
              gridRowStart: breakpoint<"gridRowStart">(Breakpoint.SM, 2, 1),
              gridColumnStart: 1,
              gridColumnEnd: 2,
            }}
          />
        )}
        <Heading
          style={{
            marginTop: "2rem",
            maxWidth: 400,
            gridColumnStart: breakpoint<"gridColumnStart">(Breakpoint.SM, 1, 2),
            gridColumnEnd: 3,
            gridRowStart: 1,
          }}
        >
          {frontmatter.title}
        </Heading>
        <div
          style={{
            gridColumnStart: breakpoint<"gridColumnStart">(Breakpoint.SM, 2, 1),
            gridColumnEnd: 3,
            gridRowStart: 2,
          }}
        >
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
        original: withPrefix(i?.src?.publicURL ?? ""),
        description: i?.description ?? "",
      }))}
    />
  );
}
