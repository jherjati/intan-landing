import { useMemo } from "react";
import Braga from "./Braga";

const Footer = () => {
  const links = useMemo(() => [
    ["Tentang Aplikasi"],
    ["Keunggulan"],
    ["Fitur"],
    ["Monitor Corona"],
  ]);

  function topFunction() {
    document.body.scrollTop = 0; // For Safari
    document.documentElement.scrollTop = 0; // For Chrome, Firefox, IE and Opera
  }
  return (
    <footer className='m-8'>
      <div className='mt-4 flex justify-between items-center'>
        <svg
          width='87'
          height='24'
          viewBox='0 0 87 24'
          fill='none'
          xmlns='http://www.w3.org/2000/svg'
        >
          <path
            d='M35.3889 6.13513H33.3838V17.7843H35.3889V6.13513Z'
            fill='#0096EB'
          />
          <path
            d='M44.6451 5.91827C43.2992 5.91827 42.173 6.35072 41.3215 7.1886V6.1345H39.3164V17.8107H41.3215V11.6753C41.3215 9.29679 42.5301 7.89133 44.5627 7.89133C46.2382 7.89133 47.1995 8.89137 47.1995 10.6752V17.8107H49.2321V10.6752C49.2321 7.78321 47.4193 5.91827 44.6451 5.91827Z'
            fill='#0096EB'
          />
          <path
            d='M56.0718 3L54.0392 3.59462V6.16229H51.7045V8.16237H54.0392V14.6491C54.0392 15.8384 54.3413 16.6762 55.0005 17.2168C55.5499 17.7033 56.319 17.9466 57.3627 17.9466C57.8022 17.9466 58.2966 17.8925 58.846 17.8114L59.258 17.7574V15.8654L58.7361 15.9194C57.6649 16.0276 56.731 16.0816 56.3739 15.7573C56.1816 15.5681 56.0992 15.2167 56.0992 14.6762V8.1894H59.258V6.18932H56.0992V3H56.0718Z'
            fill='#0096EB'
          />
          <path
            d='M71.1509 7.59407C70.1072 6.51294 68.6789 5.8913 67.0583 5.8913C63.7073 5.8913 61.0979 8.56708 61.0979 11.9456C61.0979 15.3241 63.7073 17.9999 67.0583 17.9999C68.6789 17.9999 70.1072 17.4053 71.1509 16.2971V17.8107H73.1835V6.13455H71.1509V7.59407ZM67.1407 16.0539C64.8884 16.0539 63.103 14.27 63.103 11.9726C63.103 9.67524 64.8609 7.89138 67.1407 7.89138C69.393 7.89138 71.1509 9.67524 71.1509 11.9726C71.1509 14.27 69.393 16.0539 67.1407 16.0539Z'
            fill='#0096EB'
          />
          <path
            d='M82.4131 5.91827C81.0672 5.91827 79.9411 6.35072 79.0896 7.1886V6.1345H77.0845V17.8107H79.0896V11.6753C79.0896 9.29679 80.2981 7.89133 82.3307 7.89133C84.0062 7.89133 84.9676 8.89137 84.9676 10.6752V17.8107H87.0001V10.6752C87.0001 7.78321 85.2148 5.91827 82.4131 5.91827Z'
            fill='#0096EB'
          />
          <path
            d='M24.2792 11.9297V11.9761C24.2792 14.478 23.4475 16.7946 22.0153 18.6247C21.6688 19.0649 21.0219 19.1112 20.6292 18.7174L19.89 17.9761C19.6359 17.7212 19.6128 17.3274 19.8438 17.0494C20.9295 15.6595 21.5764 13.8988 21.5764 11.9761C21.5764 11.9529 21.5764 11.9297 21.5764 11.9066C21.5533 9.98379 20.8833 8.22318 19.7745 6.83321C19.5435 6.55522 19.5666 6.1614 19.8207 5.90657L20.5599 5.16526C20.9526 4.77144 21.5995 4.81777 21.946 5.23476C23.4013 7.08804 24.2561 9.40464 24.2792 11.9297Z'
            fill='#0096EB'
          />
          <path
            d='M19.4509 20.0154C19.8437 20.4093 19.7975 21.0579 19.3585 21.4054C17.3257 23.027 14.7384 24 11.9432 24H11.9201C8.73213 24 5.84452 22.749 3.71924 20.7104C3.53444 20.5483 3.37273 20.3629 3.18792 20.1776C1.22435 18 0 15.1506 0 11.9768V11.9073C0.0231009 8.75676 1.24745 5.88417 3.25722 3.7529C3.41893 3.56757 3.60374 3.38224 3.78854 3.22008C5.91383 1.2278 8.77833 0 11.9201 0H11.9432C14.7153 0 17.2564 0.949807 19.2892 2.5251C19.7282 2.87259 19.7744 3.52124 19.3816 3.91506L18.5962 4.7027C18.2728 5.02703 17.7646 5.07336 17.395 4.79537C15.8934 3.63707 13.9991 2.96525 11.9663 2.96525H11.9432C9.60997 2.96525 7.48469 3.86873 5.89073 5.32819C5.70592 5.49035 5.52111 5.67568 5.35941 5.861C3.88095 7.45946 2.98001 9.59073 2.95691 11.9305C2.95691 11.9537 2.95691 11.9768 2.95691 12C2.95691 14.3398 3.83475 16.4479 5.2901 18.0695C5.45181 18.2548 5.63662 18.4402 5.82142 18.6023C7.41538 20.1081 9.58687 21.0347 11.9432 21.0347H11.9663C14.0453 21.0347 15.9627 20.3398 17.4874 19.1351C17.857 18.8571 18.3652 18.8803 18.6886 19.2278L19.4509 20.0154Z'
            fill='#0096EB'
          />
        </svg>
        <button className='focus:outline-none' onClick={topFunction}>
          <svg
            width='75'
            height='75'
            viewBox='0 0 75 75'
            fill='none'
            xmlns='http://www.w3.org/2000/svg'
          >
            <g filter='url(#filter0_d)'>
              <circle
                cx='37.5'
                cy='34.5'
                r='27.5'
                transform='rotate(-180 37.5 34.5)'
                fill='url(#paint0_linear)'
              />
            </g>
            <path
              d='M36.2535 44.3716H38.7464V29.4143L45.6018 36.2697L47.3718 34.4998L37.5 24.628L27.6282 34.4998L29.3981 36.2697L36.2535 29.4143V44.3716Z'
              fill='white'
            />
            <defs>
              <filter
                id='filter0_d'
                x='0'
                y='0'
                width='75'
                height='75'
                filterUnits='userSpaceOnUse'
                colorInterpolationFilters='sRGB'
              >
                <feFlood floodOpacity='0' result='BackgroundImageFix' />
                <feColorMatrix
                  in='SourceAlpha'
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 127 0'
                />
                <feOffset dy='3' />
                <feGaussianBlur stdDeviation='5' />
                <feColorMatrix
                  type='matrix'
                  values='0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0 0.1 0'
                />
                <feBlend
                  mode='normal'
                  in2='BackgroundImageFix'
                  result='effect1_dropShadow'
                />
                <feBlend
                  mode='normal'
                  in='SourceGraphic'
                  in2='effect1_dropShadow'
                  result='shape'
                />
              </filter>
              <linearGradient
                id='paint0_linear'
                x1='16.7017'
                y1='7'
                x2='50.7237'
                y2='71.886'
                gradientUnits='userSpaceOnUse'
              >
                <stop stopColor='#0096EB' />
                <stop offset='1' stopColor='#00B2EB' />
              </linearGradient>
            </defs>
          </svg>
        </button>
      </div>
      <div className='flex lg:flex-row flex-col justify-between items-center'>
        <div>
          <p className='font-sans text-teal-600'>
            <svg
              className='inline mr-2'
              width='12'
              height='16'
              viewBox='0 0 12 16'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M0 0.392578V15.8211H5.14286V12.8211H6.85714V15.8211H12V0.392578H0ZM1.71429 2.10686H3.42857V3.82115H1.71429V2.10686ZM5.14286 2.10686H6.85714V3.82115H5.14286V2.10686ZM8.57143 2.10686H10.2857V3.82115H8.57143V2.10686ZM1.71429 5.53543H3.42857V7.24972H1.71429V5.53543ZM5.14286 5.53543H6.85714V7.24972H5.14286V5.53543ZM8.57143 5.53543H10.2857V7.24972H8.57143V5.53543ZM1.71429 8.96401H3.42857V10.6783H1.71429V8.96401ZM5.14286 8.96401H6.85714V10.6783H5.14286V8.96401ZM8.57143 8.96401H10.2857V10.6783H8.57143V8.96401ZM1.71429 12.3926H3.42857V14.1069H1.71429V12.3926ZM8.57143 12.3926H10.2857V14.1069H8.57143V12.3926Z'
                fill='#404040'
              />
            </svg>
            Sun-In-Ten, Jalan Kihiur No. 10, Bandung
          </p>
          <p className='font-sans text-teal-600'>
            <svg
              className='inline mr-2'
              width='12'
              height='10'
              viewBox='0 0 12 10'
              fill='none'
              xmlns='http://www.w3.org/2000/svg'
            >
              <path
                d='M10.8 2.79258L6 5.79258L1.2 2.79258V1.59258L6 4.59258L10.8 1.59258V2.79258ZM10.8 0.392578H1.2C0.534 0.392578 0 0.926578 0 1.59258V8.79258C0 9.11084 0.126428 9.41606 0.351472 9.6411C0.576515 9.86615 0.88174 9.99258 1.2 9.99258H10.8C11.1183 9.99258 11.4235 9.86615 11.6485 9.6411C11.8736 9.41606 12 9.11084 12 8.79258V1.59258C12 1.27432 11.8736 0.969094 11.6485 0.74405C11.4235 0.519006 11.1183 0.392578 10.8 0.392578Z'
                fill='#404040'
              />
            </svg>
            info@geocreate.id
          </p>
        </div>
        <div className='flex'>
          <a href='https://braga.co.id' target='_blank'>
            <img src='/Braga.svg' alt='braga' />
          </a>
          <a href='https://monitor.coronaina.com' target='_blank'>
            <img src='/Coronaina.svg' alt='coronaina' />
          </a>
        </div>
      </div>
      <div className='flex justify-between'>
        <p className='font-sans text-center text-teal-600'>
          © 2020 Indonesia Bertahan, All Right Reserved
        </p>
        <div className='w-full flex-grow justify-end hidden lg:flex lg:items-center lg:w-auto'>
          {links.map((el, index) => (
            <a
              key={index}
              href={"#" + el[0].replace(" ", "-")}
              className='block mx-4 text-nav text-sm hover:text-teal-800 lg:inline-block lg:mt-0'
            >
              {el[0]}
            </a>
          ))}
        </div>
      </div>
    </footer>
  );
};

export default Footer;
