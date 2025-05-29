import React from 'react';
import Marquee from 'react-fast-marquee';

const images = [
  '/docker.png',
  '/awsLogo.png',
  '/k8sLogo.webp',
  '/Azure.webp',
];

const Card = () => (
  <div className="relative h-[500px] overflow-hidden disabled='true'">
    <div
      className="absolute inset-0 z-0"
      style={{
        transform: 'rotate(-10deg) scale(2.0)',
        transformOrigin: 'center center',
      }}
    >
      <Marquee
        direction="down"
        speed={50}
        gradient={false}
        pauseOnHover={false}
        pauseOnClick={false}

        style={{ height: '100%', width: '100%' ,  pointerEvents: 'none' }}
      >
        <div className="flex flex-col gap-2 items-center">
          {images.map((src, idx) => (
            <img
              key={idx}
              src={src}
              alt={`bg-${idx}`}
              className="w-[150px] h-[150px] object-cover opacity-25"
            />
          ))}
        </div>
      </Marquee>
    </div>

   
  </div>
);

export default Card;
