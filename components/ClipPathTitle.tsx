import React from "react";

const ClipPathTitle = ({
  title,
  color,
  bg,
  className,
  borderColor,
}: {
  title: string;
  color: string;
  bg: string;
  className: string;
  borderColor: string;
}) => {
  return (
    <div className="general-title">
      <div
        style={{ clipPath: "polygon(50% 0%, 50% 0, 50% 100%, 50% 100%)", borderColor: borderColor }}
        className={`${className} border-[.5vw] next-nowrap opacity-0`}>
        <div
          className="md:px-14 p-2"
          style={{ backgroundColor: bg }}>
          <h2 style={{ color: color }}>{title}</h2>
        </div>
      </div>
    </div>
  );
};

export default ClipPathTitle;
