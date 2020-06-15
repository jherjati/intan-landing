import * as React from "react";

function Prev(props) {
  return (
    <svg width={52} height={53} fill='none' {...props}>
      <rect
        x={51.5}
        y={51.706}
        width={51}
        height={51}
        rx={25.5}
        transform='rotate(-180 51.5 51.706)'
        fill='#FFB524'
        stroke='#FFB524'
      />
      <path d='M29 34.206l-7.619-8 7.619-8' stroke='#fff' strokeWidth={4} />
    </svg>
  );
}

const MemoPrev = React.memo(Prev);
export default MemoPrev;
