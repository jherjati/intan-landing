import * as React from "react";

function PrevButton(props) {
  return (
    <svg width={52} height={52} fill='none' {...props}>
      <rect
        x={51.5}
        y={51.5}
        width={51}
        height={51}
        rx={25.5}
        transform='rotate(-180 51.5 51.5)'
        fill='#FFB524'
        stroke='#FFB524'
      />
      <path d='M29 34l-7.619-8L29 18' stroke='#fff' strokeWidth={4} />
    </svg>
  );
}

const MemoPrevButton = React.memo(PrevButton);
export default MemoPrevButton;
