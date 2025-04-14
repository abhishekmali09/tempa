

import React from 'react';
import { Link } from 'react-router-dom';


const TreatmentsCard = ({ treatmentDetails }) => {
  return (
    <Link to={`/treatments/${treatmentDetails.id}`} className="flex flex-col items-center">
      <img
        src={treatmentDetails.img}
        alt={treatmentDetails.name}
        className="w-[60px] h-[60px] object-contain"
      />
      <div className="text-center mt-2 text-black text-sm font-semibold">
        <h1>{treatmentDetails.name}</h1>
      </div>
    </Link>
  );
};

export default TreatmentsCard;

