import * as React from "react";
// @ts-ignore
import "./styles.css";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Color } from "../components/styles";
import { Science } from "../components/science";
import { Groups } from "../components/groups";
import { Heading, Markdown } from "../components/Typography";
import { ChevronDown } from "lucide-react";

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
  const areas = Object.fromEntries(
    data.areas.nodes.map((node) => [
      node.frontmatter?.title,
      node.rawMarkdownBody!,
    ]),
  );

  return (
    <div style={{ fontFamily: "Work Sans, sans-serif" }}>
      <div
        style={{
          position: "relative",
          fontSize: "2.5rem",
          height: "100vh",
          width: "100vw",
        }}
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
          maxWidth: 1000,
          width: "100vw",
          color: Color.RED,
        }}
      >
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
        <Markdown content={areas["Zurückblicken, um nach vorne zu blicken"]} />
        <Groups data={data.groups} />
      </main>
    </div>
  );
};

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
