import React from 'react';

const ServicesCard = ({ serviceDetails }) => {
  return (
    <div className="py-10 flex flex-col justify-start items-center">
      <img
        src={serviceDetails.img}
        alt={serviceDetails.name}
        className="w-[150px] h-[150px] aspect-square rounded-full object-cover"
      />
      <div className="text-center pt-5 text-xl font-semibold">
        <h1>{serviceDetails.name}</h1>
      </div>
    </div>
  );
};

export default ServicesCard;
