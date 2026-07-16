import * as React from "react";
import { graphql, type HeadFC, type PageProps } from "gatsby";
import { Color } from "../components/styles";
import { Science } from "./content/science";
import { Groups } from "./content/groups";

const IndexPage: React.FC<PageProps<Queries.IndexPageQuery>> = ({ data }) => {
	return (
		<main
			style={{
				padding: "2rem",
				fontFamily: "Work Sans, sans-serif",
				marginLeft: "auto",
				marginRight: "auto",
				maxWidth: 1000,
				width: "100%",
				color: Color.RED,
			}}
		>
			<Science data={data.science} />
			<Groups data={data.groups} />
			{
				/* <div
		style={{
		  display: "flex",
		  flexDirection: "column",
		  gap: "0.5rem",
		  fontSize: "2rem",
		}}
	  >
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
		<div style={{ margin: "1rem 0 0.5rem 0", fontSize: "1.5rem" }}>
		  Eine Ausstellung des{" "}
		  <a href="http://toakt.noblogs.org/">
			Tübinger Offenen Antikapitalistischen Klimatreffens
		  </a>
		</div>
	  </div>
	  <section>
		<Paragraph>
		  Seit über 100 Jahren kämpfen Umwelt-, Klima- und
		  Arbeiter:innenbewegung auf der ganzen Welt für ein gutes Leben für
		  alle. Ein Leben, das nicht auf Kosten der Erde oder des Menschen geht
		  - egal wo. Heute sind die Klimaerhitzung und ihre Folgen keine
		  Prognosen mehr, sondern Alltag. Gleichzeitig gibt es Umbrüche in der
		  Klimagerechtigkeitsbewegung: Ofene Fragen, Orientierungslosigkeit,
		  neue Versuche. Deshalb wollen wir uns zurückbesinnen: Wo hat die
		  Klimabewegung ihre Ursprünge? Was waren die Höhe- und die Tiefpunkte
		  der Auseinandersetzungen? Und was können wir daraus für heutige Kämpfe
		  lernen?
		</Paragraph>
	  </section>
	  <Science />

	  <Groups /> */
			}
		</main>
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
	  science: allFile(
	 	filter: {
		extension: {eq: "md"}
		relativeDirectory: {regex: "/science/"}} 
	  ) {
		nodes {
		childMarkdownRemark {
		rawMarkdownBody
		}}}
  }
`;
