import React from 'react';

const HomeCard = ({ index, handleSlideClick, treatmentDetails }) => {
  return (
    <a
      className='embla__slide flex-shrink-0 rounded-2xl p-10 items-center text-xl hover:bg-rose-400 hover:text-black duration-700 font-heading flex bg-stone-200 max-w-[800px]' 
      onClick={() => handleSlideClick(index)}
      target='_blank'
      href={`${treatmentDetails.url}`}
    >
      <p className='text-xl w-full whitespace-nowrap'>{treatmentDetails.name}</p>
    </a>
  );
};

export default HomeCard;
