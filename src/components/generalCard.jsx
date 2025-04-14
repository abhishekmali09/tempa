import React from 'react'
const GeneralCard = ({generalData}) => {
    console.log(generalData);
    return (
          <div className="flex flex-col items-center justify-center">
            <img
              src={generalData.image} // Replace with the actual path to your icon
              alt={generalData.heading}
              className="w-36 h-36 mb-4"
            />
            <h2 className="text-xl font-semibold text-center font-heading mb-2">{generalData.heading}</h2>
            <p className="text-center font-text text-[#37474F] text-md">
              {generalData.desc}
            </p>
          </div>
      );
}

export default GeneralCard;
