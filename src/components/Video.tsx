import React from "react";

export function Video({
  url,
  children,
}: {
  url: string;
  children: React.ReactNode;
}) {
  return (
    <div>
      <video
        style={{
          width: "100%",
        }}
        src={url}
        controls
      />
      {children}
    </div>
  );
}
