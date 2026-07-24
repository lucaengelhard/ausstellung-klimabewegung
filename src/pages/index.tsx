import * as React from "react";
// @ts-ignore
import "./styles.css";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Color } from "../lib/styles";
import { Science } from "../lib/science";
import { Groups } from "../lib/groups";
import { Heading, Markdown } from "../lib/Typography";
import { ChevronDown } from "lucide-react";

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const areas = Object.fromEntries(
    data.areas.nodes.map((node) => [
      node.frontmatter?.title,
      node.rawMarkdownBody!,
    ]),
  );

  const groups = data.groups.nodes.toSorted(
    (a, b) =>
      (a.childMarkdownRemark?.frontmatter?.order ?? 0) -
      (b.childMarkdownRemark?.frontmatter?.order ?? 0),
  );

  return (
    <div style={{ fontFamily: "Work Sans, sans-serif" }}>
      <div
        style={{
          position: "relative",
          height: "100vh",
          width: "100vw",
        }}
        className="home-title"
      >
        <video
          style={{
            width: "100%",
            position: "absolute",
            zIndex: -99,
            height: "100%",
            top: 0,
            left: 0,
            objectFit: "cover",
          }}
          src="https://github.com/lucaengelhard/ausstellung-klimabewegung/releases/download/videos/compilation_comp.mp4"
          autoPlay
          controls
          muted
          loop
        />
        <div style={{ padding: 40 }}>
          <Heading level={1}>Klimabewegung:</Heading>
          <Heading level={2} style={{ fontWeight: "normal" }}>
            Ursprünge
          </Heading>
          <Heading level={2} style={{ fontWeight: "normal" }}>
            Höhepunkte
          </Heading>
          <Heading level={2} style={{ fontWeight: "normal" }}>
            Perspektiven
          </Heading>
        </div>
        <div
          style={{
            position: "absolute",
            bottom: 20,
            display: "flex",
            justifyContent: "center",
            width: "100%",
          }}
        >
          <ChevronDown size={80} color={Color.RED} />
        </div>
      </div>

      <main
        style={{
          padding: "2rem",
          fontFamily: "Work Sans, sans-serif",
          marginLeft: "auto",
          marginRight: "auto",

          color: Color.RED,
          display: "grid",
          gap: "3rem",
        }}
      >
        <nav
          style={{
            position: "relative",
          }}
        >
          <div style={{ position: "sticky", top: 20 }}>
            {groups.map((g) => (
              <NavItem
                id={
                  g.childMarkdownRemark?.frontmatter?.short ??
                  g.childMarkdownRemark?.frontmatter?.title
                }
              />
            ))}
          </div>
        </nav>
        <div style={{ padding: "0 1rem" }}>
          <section>
            <div style={{ margin: "1rem 0 0.5rem 0", fontSize: "1.5rem" }}>
              Archivierung einer Ausstellung des{" "}
              <a href="http://toakt.noblogs.org/">
                Tübinger Offenen Antikapitalistischen Klimatreffens
              </a>
            </div>
          </section>
          <Markdown content={areas["Intro"]} />
          <Science data={data.science} />
          <Heading>Zurückblicken, um nach vorne zu blicken</Heading>
          <Markdown
            content={areas["Zurückblicken, um nach vorne zu blicken"]}
          />
          <Groups data={groups} />
        </div>
      </main>
    </div>
  );
};

function NavItem({ id }: { id?: string | null }) {
  if (!id) return null;

  return (
    <a
      style={{
        display: "block",
        color: Color.RED,
        textDecoration: "none",
        marginBottom: "0.2rem",
      }}
      href={`#${id}`}
    >
      {id}
    </a>
  );
}

export default IndexPage;

export const Head: HeadFC = () => <title>Ausstellung Klimabewegung</title>;

export const query = graphql`
  query IndexPage {
    groups: allFile(
      filter: {
        extension: { eq: "md" }
        relativeDirectory: { regex: "/groups/" }
      }
    ) {
      nodes {
        childMarkdownRemark {
          frontmatter {
            order
            title
            short
            logo {
              publicURL
            }
            gallery {
              src {
                publicURL
              }
              description
            }
          }
          rawMarkdownBody
        }
      }
    }
    science: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "content/science/" } }
    ) {
      nodes {
        rawMarkdownBody
        frontmatter {
          title
        }
      }
    }
    areas: allMarkdownRemark(
      filter: { fileAbsolutePath: { regex: "/content/areas/" } }
    ) {
      nodes {
        rawMarkdownBody
        frontmatter {
          title
        }
      }
    }
  }
`;
