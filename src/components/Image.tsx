import React from "react";

type ImageProps = {
  path: string;
  description?: string;
} & React.ComponentPropsWithoutRef<"img">;

export function Fig({ path, src, description, style, ...props }: ImageProps) {
  return (
    <figure style={{ padding: 0, margin: "1rem 0 " }}>
      <img
        src={path}
        alt={description}
        style={{ width: "100%", objectFit: "cover", ...style }}
        {...props}
      />
      <figcaption>{description}</figcaption>
    </figure>
  );
}
