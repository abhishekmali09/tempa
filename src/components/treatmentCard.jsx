import React from 'react';

const TreatmentsCard = ({treatmentDetails }) => {
  return (
    <a className=" py-10 flex font-text flex-col justify-start items-center w-[100px]" href={`/free-quote/t/${treatmentDetails.id}`}  >
      <img
        src={treatmentDetails.img}
        alt={treatmentDetails.name}
        className="w-[100px] h-[100px] aspect-square  object-contain pointer-events-none select-none"
      />
      <div className="text-center pt-5 text-md font-semibold">
        <h1>{treatmentDetails.name}</h1>
      </div>
    </a>
  );
};

export default TreatmentsCard;
