import React from "react";
import FiturBackground from "./FiturBackground";
import PrevButton from "./PrevButton";
import NextButton from "./NextButton";

const Fitur = () => {
  const fiturs = [
    [
      "Mengindentifikasi kesehatan Anda",
      "Intan akan memberikan arahan, anjuran, dan tata-cara menjaga kesehatan sesuai dengan catatan kesehatan Anda.",
    ],
    [
      "Persebaran Kasus COVID-19 di Indonesia",
      "Anda dapat melihat peta persebaran COVID-19 di Indonesia untuk memastikan Anda berada di daerah yang Aman.",
    ],
    [
      "Memberi Informasi Penanganan Kesehatan",
      "Dengan melakukan check-up harian, Intan akan mengidentifikasi bagaimana penanganan kesehatan yang baik",
    ],
  ];

  const [index, setIndex] = React.useState(0);
  const [y, setY] = React.useState(-10);

  React.useEffect(() => {
    if (window.innerWidth > 1024) setY(-50);
  }, [setY]);

  return (
    <section className='relative w-screen mt-12'>
      <div className='flex lg:flex-row flex-col items-center justify-center space-y-16 lg:space-y-0 lg:space-x-40'>
        {fiturs.map((el, idx) => (
          <div key={idx} style={{ maxWidth: 205 }}>
            <img src='/ic-bg-benefit.svg' alt='benefits' />
            <h5 className='text-sm font-medium text-gray-800'>{el[0]}</h5>
            <p className='text-xs font-light mt-4 text-teal-800'>{el[1]}</p>
          </div>
        ))}
      </div>

      <div id='Fitur' className='py-12 my-20 lg:my-40 relative w-screen'>
        <img
          className='absolute hidden lg:block'
          style={{
            zIndex: -5,
            top: "50%",
            left: "50%",
            transform: "translate(-50%, -50%)",
            maxWidth: "95%",
          }}
          src='/FiturIntanBackground.svg'
          alt='my background'
        />
        <img
          className='absolute w-full lg:hidden'
          style={{ zIndex: -5, bottom: 0 }}
          src='/bg-header-mobile.svg'
          alt='mobile bg'
        />

        {["/SS0.png", "/SS1.png", "/SS2.png"].map((el, idx) => {
          let transform = `translate(-50%, ${y}%)`;
          if (idx < index) transform = `translate(-80%, ${y}%) scale(0.5)`;
          if (idx > index) transform = `translate(-20%, ${y}%) scale(0.5)`;
          if (idx === 2 && !index)
            transform = `translate(-80%, ${y}%) scale(0.5)`;
          if (index === 2 && !idx)
            transform = `translate(-20%, ${y}%) scale(0.5)`;
          return (
            <img
              key={idx}
              className={`relative lg:absolute transition duration-500 ease-in-out ${
                idx === index ? "z-20" : "opacity-25 hidden lg:block"
              }`}
              style={{
                top: "50%",
                left: "50%",
                height: 500,
                transform,
              }}
              src={el}
              alt='just ss'
            />
          );
        })}

        <div className='flex lg:flex-row flex-col justify-around items-center text-center h-full w-full'>
          <div className='w-4/5 lg:w-40 mb-12 lg:mb-0 lg:mr-40'>
            <p className='text-white'>Fitur Intan</p>
            <p className='text-white font-medium text-lg mt-4 lg:mb-8'>
              {
                [
                  "Menampilkan Zona Aman",
                  "Monitoring Kesehatan",
                  "Pencegahan COVID-19",
                ][index]
              }
            </p>
            <p className='text-white font-light font-sans lg:hidden mt-4 mb-8'>
              {
                [
                  `Intan membantu Anda untuk berada di Zona Aman, dan menghindari tempat rawan penularan virus COVID-19`,
                  `Intan memberikan langkah pencegahan yang sesuai berdasarkan riwayat kesehatan, dan check-up harian Anda`,
                  `Dengan informasi pencegahan, penanganan, fasilitas kesehatan, dan fitur lainnya, Intan siap membantu Anda melawan COVID-19`,
                ][index]
              }
            </p>
            <div className='flex justify-center space-x-6'>
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
          </div>
          <p className='w-56 text-white font-light lg:ml-40 font-sans hidden lg:block'>
            {
              [
                `Intan membantu Anda untuk berada di Zona Aman, dan menghindari tempat rawan penularan virus COVID-19`,
                `Intan memberikan langkah pencegahan yang sesuai berdasarkan riwayat kesehatan, dan check-up harian Anda`,
                `Dengan informasi pencegahan, penanganan, fasilitas kesehatan, dan fitur lainnya, Intan siap membantu Anda melawan COVID-19`,
              ][index]
            }
          </p>
        </div>
      </div>
      <FiturBackground />
    </section>
  );
};

export default Fitur;
