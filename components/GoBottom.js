import * as React from "react";

function GoBottom(props) {
  return (
    <svg width='1em' height='1em' viewBox='0 0 76 76' fill='none' {...props}>
      <g filter='url(#prefix__filter0_d)'>
        <circle cx={38} cy={35} r={28} fill='#fff' />
      </g>
      <path
        d='M36.864 26.517h2.272v13.636l6.25-6.25L47 35.517l-9 9-9-9 1.614-1.614 6.25 6.25V26.517z'
        fill='#0096EB'
      />
      <defs>
        <filter
          id='prefix__filter0_d'
          x={0}
          y={0}
          width={76}
          height={76}
          filterUnits='userSpaceOnUse'
          colorInterpolationFilters='sRGB'
        >
          <feFlood floodOpacity={0} result='BackgroundImageFix' />
          <feColorMatrix
            in='SourceAlpha'
            values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
          />
          <feOffset dy={3} />
          <feGaussianBlur stdDeviation={5} />
          <feColorMatrix values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0' />
          <feBlend in2='BackgroundImageFix' result='effect1_dropShadow' />
          <feBlend in='SourceGraphic' in2='effect1_dropShadow' result='shape' />
        </filter>
      </defs>
    </svg>
  );
}

const MemoGoBottom = React.memo(GoBottom);
export default MemoGoBottom;
