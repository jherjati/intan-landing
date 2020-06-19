import React from "react";
import PrevButton from "./Prev";
import NextButton from "./Next";

const FiturMonitoring = () => {
  const [index, setIndex] = React.useState(1);

  return (
    <section className='relative flex flex-col-reverse lg:flex-row justify-between items-center mt-20 mb-6 lg:pl-8'>
      <div className='lg:absolute flex space-x-8 my-action mb-10 lg:mb-0'>
        <button
          className='cursor-pointer focus:outline-none'
          onClick={() => setIndex((prev) => (prev ? prev - 1 : 2))}
        >
          <PrevButton />
        </button>
        <button
          className='cursor-pointer focus:outline-none'
          onClick={() => setIndex((prev) => (prev === 2 ? 0 : prev + 1))}
        >
          <NextButton />
        </button>
      </div>

      <div className='flex flex-col w-11/12 lg:w-1/4 text-center items-center lg:items-start lg:text-left my-6 lg:my-0'>
        <p className='text-lg text-white lg:text-blue-500 font-medium'>
          Fitur Monitoring Corona
        </p>
        <h5 className='text-4xl text-white lg:text-gray-800 my-1 font-semibold'>
          {
            [
              "Sebaran Rumah Sakit",
              "Sebaran Kasus Per Provinsi",
              "Wilayah Aman dan Rawan",
            ][index]
          }
        </h5>
        <p className='text-lg text-white lg:text-teal-600 font-light'>
          {
            [
              "Memudahkan dalam mencari daftar fasilitas kesehatan yang menjadi rujukan di Indonesia.",
              "Visualisasi data pasien di tiap provinsi dengan detail jumlah kasus, jenis kelamin, dan kelompok usia",
              "Identifikasi kerawanan suatu wilayah dengan melihat banyaknya kasus untuk tujuan kewaspadaan.",
            ][index]
          }
        </p>
        <a
          href='https://monitor.indonesiabertahan.com'
          target='_blank'
          className='my-button mt-8 font-sans text-white font-semibold h-12 w-64 text-center pt-3'
        >
          Kunjungi Peta Sebaran
        </a>
      </div>
      <img
        className='hidden lg:block'
        src='/FiturMonitor.svg'
        alt='fitur monitor'
      />

      <img
        className='absolute bottom-0 lg:hidden w-full'
        style={{ zIndex: -5, maxHeight: "85%" }}
        src='/bg-header-mobile.svg'
        alt='header again'
      />
      {[0, 1, 2].map((idx) => {
        let transform = "";
        if (idx < index) transform = "translate(10%, 30%) scale(0.25)";
        if (idx > index) transform = "translate(50%, 30%) scale(0.25)";
        if (idx === 2 && !index) transform = "translate(10%, 30%) scale(0.25)";
        if (index === 2 && !idx) transform = "translate(50%, 30%) scale(0.25)";

        return (
          <img
            key={idx}
            className={`lg:block lg:absolute transition duration-500 ease-in-out ${
              idx === index ? "z-20" : "z-10 opacity-50 hidden"
            }`}
            style={{
              right: "6rem",
              width: "650px",
              maxWidth: "80%",
              transform,
            }}
            src={`/Frame${idx}.png`}
            alt='frame'
          />
        );
      })}

      <style jsx>{`
        .my-button {
          background: #ffb524;
          box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.15);
          border-radius: 6px;
        }

        .my-action {
          right: 4rem;
          bottom: 2rem;
        }
      `}</style>
    </section>
  );
};

export default FiturMonitoring;
