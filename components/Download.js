import React from "react";
import GPlay from "./GPlay";
import LiveApp from "./LiveApp";

const Download = () => {
  return (
    <section className='my-4 mx-8 relative flex flex-row-reverse items-center'>
      <img
        className='absolute centered z-0'
        src='/DownloadSekarang.svg'
        alt='download banner'
      />

      <div className='z-10 pt-20 pr-20' style={{ height: 420, width: "50%" }}>
        <h5 className='text-white text-3xl font-semibold mb-4'>
          Download Aplikasi Intan Sekarang!
        </h5>
        <p className='text-white text-base font-light'>
          Unduh aplikasi intan dan saatnya kita memulai gaya hidup sehat. Intan
          akan membantu dan memberikan informasi untuk melawan pandemi ini.
        </p>
        <div className='flex space-x-4 mt-6'>
          <a
            className='focus:outline-none'
            href='https://play.google.com/store/apps/details?id=id.braga.intan'
            target='_blank'
          >
            <GPlay height='3rem' width='7rem' />
          </a>
          <a
            className='focus:outline-none'
            href='https://coronaina.com'
            target='_blank'
          >
            <LiveApp height='3rem' width='7rem' />
          </a>
        </div>
      </div>

      <style jsx>{`
        .centered {
          left: 50%;
          transform: translate(-50%);
        }
      `}</style>
    </section>
  );
};

export default Download;
