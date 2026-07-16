import React from "react";
import { Markdown } from "../../components/Typography";

export function Science({ data }: { data: Queries.IndexPageQuery["science"] }) {
	return (
		<>
			{data.nodes.map((node) => <Markdown content={node.childMarkdownRemark?.rawMarkdownBody ?? ""} />)}
		</>
	);
}
