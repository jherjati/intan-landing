import * as React from "react";

function NextButton(props) {
  return (
    <svg width={52} height={52} fill='none' {...props}>
      <rect
        x={0.5}
        y={0.5}
        width={51}
        height={51}
        rx={25.5}
        fill='#FFB524'
        stroke='#FFB524'
      />
      <path d='M23 18l7.619 8L23 34' stroke='#fff' strokeWidth={4} />
    </svg>
  );
}

const MemoNextButton = React.memo(NextButton);
export default MemoNextButton;
