import React from "react";
import GPlay from "./GPlay";
import LiveApp from "./LiveApp";

const Download = () => {
  return (
    <section className='my-4 mx-8 relative flex flex-col-reverse lg:flex-row-reverse items-center'>
      <img
        className='absolute centered z-0 hidden lg:block'
        src='/DownloadSekarang.svg'
        alt='download banner'
      />

      <img
        className='z-0 lg:hidden w-full'
        src='/img-device-download.jpg'
        alt='download banner'
      />

      <div className='z-10 pt-20 lg:pr-20 w-full lg:w-2/4 text-center lg:text-left' style={{ height: 420 }}>
        <h5 className='text-teal-800 lg:text-white text-3xl font-semibold lg:mb-4'>
          Download Aplikasi Intan Sekarang!
        </h5>
        <p className='text-teal-800 lg:text-white text-base font-light my-4 lg:my-0'>
          Unduh aplikasi intan dan saatnya kita memulai gaya hidup sehat. Intan
          akan membantu dan memberikan informasi untuk melawan pandemi ini.
        </p>
        <div className='flex space-x-4 lg:mt-6 justify-center lg:justify-start'>
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
