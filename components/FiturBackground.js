import * as React from "react";

export default function FiturBackground() {
  return (
    <div className='absolute w-screen my-background'>
      <style jsx>{`
        .my-background {
          z-index: -10;
          top: 100px;
          height: 100%;
          border-radius: 100px;
          background: linear-gradient(
            180deg,
            #edf8fd 0%,
            rgba(255, 255, 255, 0) 100%
          );
        }
      `}</style>
    </div>
  );
}
