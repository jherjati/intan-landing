import React from "react";
import PrevButton from "./Prev";
import NextButton from "./Next";

const FiturMonitoring = () => {
  const [index, setIndex] = React.useState(1);

  return (
    <section className='relative flex justify-between items-center my-20 pl-8'>
      <div className='flex flex-col my-space'>
        <p className='text-lg text-blue-500 font-medium'>
          Fitur Monitoring Coronaina
        </p>
        <h5 className='text-4xl text-gray-800 my-1 font-semibold'>
          {
            [
              "Sebaran Rumah Sakit",
              "Sebaran Kasus Per Provinsi",
              "Wilayah Aman dan Rawan",
            ][index]
          }
        </h5>
        <p className='text-lg text-teal-600 font-light'>
          {
            [
              "Memudahkan dalam mencari daftar fasilitas kesehatan yang menjadi rujukan di Indonesia.",
              "Visualisasi data pasien di tiap provinsi dengan detail jumlah kasus, jenis kelamin, dan kelompok usia",
              "Identifikasi kerawanan suatu wilayah dengan melihat banyaknya kasus untuk tujuan kewaspadaan.",
            ][index]
          }
        </p>
        <a
          href='https://monitor.coronaina.com'
          target='_blank'
          className='my-button mt-8 font-sans text-white font-semibold h-12 w-64 text-center pt-3'
        >
          Kunjungi Peta Sebaran
        </a>
      </div>
      <img src='/FiturMonitor.svg' alt='fitur monitor' />
      {[0, 1, 2].map((idx) => {
        let transform = "";
        if (idx < index) transform = "translate(10%, 30%) scale(0.25)";
        if (idx > index) transform = "translate(50%, 30%) scale(0.25)";
        if (idx === 2 && !index) transform = "translate(10%, 30%) scale(0.25)";
        if (index === 2 && !idx) transform = "translate(50%, 30%) scale(0.25)";

        return (
          <img
            key={idx}
            className={`absolute transition duration-500 ease-in-out ${
              idx === index ? "z-20" : "z-10 opacity-50"
            }`}
            style={{ right: "6rem", width: "650px", transform }}
            src={`/Frame${idx}.png`}
            alt='frame'
          />
        );
      })}

      <div className='absolute flex space-x-8 my-action'>
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
        .my-space {
          max-width: 300px;
        }
      `}</style>
    </section>
  );
};

export default FiturMonitoring;
