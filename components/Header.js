import React from "react";
import GoBottom from "./GoBottom";

const Header = () => {
  const go = () => {
    const scrollingElement = document.scrollingElement || document.body;
    scrollingElement.scrollTop = scrollingElement.scrollHeight;
  };
  return (
    <header
      id='Tentang-Aplikasi'
      className='relative mx-12 flex justify-between items-center'
    >
      <img
        className='absolute z-0 left-0 top-0 w-full max-h-full'
        src='/bg-header.svg'
        alt='header background'
      />

      <div className='z-10 ml-16' style={{ width: "30%" }}>
        <h5 className='text-white text-2xl font-semibold mb-4'>
          Lawan Pandemi Dengan Hidup Sehat
        </h5>
        <p className='text-white text-base font-light'>
          Platform komprehensif untuk menyelesaikan masalah ekonomi dan
          kesehatan yang disebabkan oleh virus COVID-19
        </p>
        <button className='my-button mt-8 font-sans text-white font-semibold h-12 w-64'>
          Pelajari Lebih Lengkap
        </button>
      </div>
      <button
        onClick={go}
        className='z-10 focus:outline-none'
        style={{ marginTop: "25%" }}
      >
        <GoBottom className='text-6xl' />
      </button>
      <img
        className='z-20 mr-20'
        style={{ height: 600 }}
        src='/SS0.png'
        alt='header device'
      />
      <style jsx>{`
        .my-button {
          background: #ffb524;
          box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.15);
          border-radius: 6px;`}</style>
    </header>
  );
};

export default Header;
