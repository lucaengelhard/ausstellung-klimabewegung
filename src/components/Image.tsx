import React from "react";

type ImageProps = {
  description?: string;
} & React.ComponentPropsWithoutRef<"img">;

export function Fig({ src, description, style, ...props }: ImageProps) {
  return (
    <figure style={{ padding: 0, margin: "1rem 0 " }}>
      <img
        src={src}
        alt={description}
        style={{ width: "100%", objectFit: "cover", ...style }}
        {...props}
      />
      <figcaption>{description}</figcaption>
    </figure>
  );
}
