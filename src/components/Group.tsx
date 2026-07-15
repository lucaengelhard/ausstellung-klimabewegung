import React from "react";
import { Chapter } from "./Typography";
import { Fig } from "./Image";

type GroupProps = {
  name: string;
  children: React.ReactNode;
  logo?: string;
  images?: string[];
};

export function Group({ children, name, logo, images }: GroupProps) {
  return (
    <>
      {images && <Gallery images={images} />}
      <div
        style={{
          display: "grid",
          width: "100%",
          marginBottom: "10rem",
          gridTemplateColumns: "1fr 4fr",
        }}
      >
        {logo && (
          <img src={logo} style={{ width: "100%", marginTop: "4rem" }} />
        )}
        <Chapter level={2} title={name}>
          {children}
        </Chapter>
      </div>
    </>
  );
}

function Gallery({ images }: { images: string[] }) {
  return (
    <div>
      {images.map((i) => (
        <img
          src={i}
          style={{
            height: "100%",
            display: "block",
            objectFit: "cover",
            maxHeight: "80vh",
          }}
        />
      ))}
    </div>
  );
}
