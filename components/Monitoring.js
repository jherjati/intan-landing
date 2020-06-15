import React from "react";

const Monitoring = () => {
  return (
    <section id='Monitor-Corona' className='flex flex-col items-center'>
      <p className='text-lg text-blue-500 font-medium'>Monitoring Coronaina</p>
      <h5 className='text-4xl text-gray-800 my-1 font-semibold'>
        Melihat Kasus Dalam Satu Sebaran Peta
      </h5>
      <p className='text-lg text-teal-600 font-light text-center w-2/4'>
        Cegah penularan virus COVID-19 dengan melihat sebaran kasus disetiap
        wilayah di Indonesia untuk meningkatkan kewaspadaan
      </p>
      <img
        className='mt-10 w-full'
        src='/bg-monitoring-coronaina.jpg'
        alt='monitor'
      />
    </section>
  );
};

export default Monitoring;
