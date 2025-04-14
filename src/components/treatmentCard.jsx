

import React from 'react';

const TreatmentsCard = ({ treatmentDetails }) => {
  return (
    <a href={`/treatments/${treatmentDetails.id}`} className="flex flex-col items-center w-[100px] h-[200px]">
      <img
        src={treatmentDetails.img}
        alt={treatmentDetails.name}
        className="w-[100px] h-[100px] object-contain"
      />
      <div className="text-center mt-2 text-black text-sm font-semibold">
        <h1>{treatmentDetails.name}</h1>
      </div>
    </a>
  );
};

export default TreatmentsCard;
