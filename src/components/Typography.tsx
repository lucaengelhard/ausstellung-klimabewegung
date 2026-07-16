import * as React from "react";
import ReactMarkdown from "react-markdown";
import { Color } from "./styles";

export type HeadingLevel = 1 | 2 | 3 | 4 | 5 | 6;

type HeadingProps = {
	level?: HeadingLevel;
} & React.ComponentPropsWithoutRef<"h1">;

export function Heading({ level = 1, style, ...props }: HeadingProps) {
	const Tag = `h${level}` as const
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
	return (
		<div style={{ width: "100%", fontSize: "4rem" }}>
			<p style={{ fontWeight: "bold" }}>» {children}</p>
			<p style={{ textAlign: "right" }}>― {description}</p>
		</div>
	);
}

export function Markdown({ content }: { content: string }) {
	return <ReactMarkdown components={
		{
			h1: ({ children }) => <Heading>{children}</Heading>,
			h2: ({ children }) => <Heading level={2}>{children}</Heading>,
			h3: ({ children }) => <Heading level={3}>{children}</Heading>,
			h4: ({ children }) => <Heading level={4}>{children}</Heading>,
			h5: ({ children }) => <Heading level={5}>{children}</Heading>,
			h6: ({ children }) => <Heading level={6}>{children}</Heading>,
			p: ({ children }) => <Paragraph>{children}</Paragraph>,
		}

	}>{content}</ReactMarkdown>;
}
