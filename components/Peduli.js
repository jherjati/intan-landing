import React from "react";

const Peduli = () => {
  return (
    <section className='flex flex-col items-center mt-16'>
      <p className='text-lg text-blue-500 font-medium'>Peduli Sesama</p>
      <h5 className='text-4xl text-gray-800 my-1 font-semibold text-center'>
        Bersama Melawan COVID-19
      </h5>
      <p className='text-lg text-teal-600 font-light text-center w-4/5 lg:w-2/4'>
        Bantu meringankan beban saudara kita dengan berdonasi berupa makanan
        pokok dan menghidupakan kembali usahanya
      </p>
      <div className='my-12 flex flex-col lg:flex-row items-center mx-8 space-x-5'>
        <img
          src='/img-waktumu-hijrah.jpg'
          alt='waktumu hijrah'
          className='w-full lg:w-2/4'
        />
        <div className='lg:pr-12 text-center lg:text-left'>
          <h5 className='text-4xl text-gray-800 my-1 font-semibold'>
            Bantu Korban Dengan Zakat, Infaq, dan Sedekah
          </h5>
          <p className='text-lg text-teal-600 font-light'>
            Gotong royong membantu meringankan beban keluarga yang terkena
            dampak COVID-19 dengan berdonasi untuk disalurkan menjadi kebutuhan
            pokok sehari-hari.
          </p>
          <a
            target='_blank'
            href='https://www.waktumuhijrah.com/corona'
            className='my-button font-sans text-white font-semibold h-12 w-64 mt-8 block text-center align-middle pt-3 m-auto lg:mx-0'
          >
            Kunjungi Website
          </a>
        </div>
      </div>
      <div className='my-12 flex flex-col-reverse lg:flex-row items-center mx-8 space-x-5'>
        <div className='lg:pl-12 text-center lg:text-left'>
          <h5 className='text-4xl text-gray-800 my-1 font-semibold'>
            Bantu Hidupkan Kembali UMKM Yang Terdampak
          </h5>
          <p className='text-lg text-teal-600 font-light'>
            Ikut andil dalam menghidupkan kembali ekonomi salah satunya dengan
            pemberdayaan Usaha Mikro, Kecil, dan Menengah (UMKM)
          </p>
          <a
            target='_blank'
            href='https://www.restock.id/'
            className='my-button font-sans text-white font-semibold h-12 w-64 mt-8 block text-center align-middle pt-3 m-auto lg:mx-0'
          >
            Kunjungi Website
          </a>
        </div>
        <img
          src='/img-restock.jpg'
          alt='restock logo'
          className='w-full lg:w-2/4'
        />
      </div>
      <style jsx>{`
        .my-button {
          background: #ffb524;
          box-shadow: 1px 1px 25px rgba(0, 0, 0, 0.15);
          border-radius: 6px;
        }
      `}</style>
    </section>
  );
};

export default Peduli;
