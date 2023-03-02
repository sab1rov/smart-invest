import * as React from "react";

const NoteIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={30}
    height={30}
    viewBox="0 0 512 512"
    {...props}
  >
    <title>{"ionicons-v5-h"}</title>
    <path
      d="M352,48H160a48,48,0,0,0-48,48V464L256,336,400,464V96A48,48,0,0,0,352,48Z"
      style={{
        fill: "#fdbd4e",
        stroke: "#fdbd4e",
        strokeWidth: 32,
      }}
    />
  </svg>
);

export default NoteIcon;
