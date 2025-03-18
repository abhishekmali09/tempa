import React from 'react';

const ServicesCard = ({ serviceDetails }) => {
  return (
    <div className="py-10 flex font-text flex-col justify-start items-center w-[100px]">
      <img
        src={serviceDetails.img}
        alt={serviceDetails.name}
        className="w-[100px] h-[100px] aspect-square  object-contain pointer-events-none select-none"
      />
      <div className="text-center pt-5 text-xl font-semibold">
        <h1>{serviceDetails.name}</h1>
      </div>
    </div>
  );
};

export default ServicesCard;
