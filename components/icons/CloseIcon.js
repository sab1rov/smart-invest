import * as React from "react";

const CloseIcon = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    className="closeicon"
    viewBox="0 0 512 512"
    {...props}
  >
    <title>{"Close"}</title>
    <path
      fill="none"
      stroke="currentColor"
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={32}
      d="M368 368 144 144m224 0L144 368"
    />
  </svg>
);

export default CloseIcon;
