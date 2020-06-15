import * as React from "react";

function Next(props) {
  return (
    <svg width={52} height={53} fill="none" {...props}>
      <rect
        x={0.5}
        y={0.707}
        width={51}
        height={51}
        rx={25.5}
        fill="#FFB524"
        stroke="#FFB524"
      />
      <path d="M23 18.206l7.619 8-7.619 8" stroke="#fff" strokeWidth={4} />
    </svg>
  );
}

const MemoNext = React.memo(Next);
export default MemoNext;
