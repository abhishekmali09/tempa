
import React, { useState } from 'react';
import { useParams } from 'react-router-dom';
import { treatments,hospitals,doctors } from '../constants';
import FreeQuote from '../components/freeQuote';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import Carousal from '../components/carousal';

const TreatmentDetail = () => {
  const { id } = useParams();
  const treatment = treatments.find((t) => t.id === parseInt(id));
  const [isExpanded, setIsExpanded] = useState(false);

  if (!treatment) {
    return <div className="text-center mt-20">Treatment not found</div>;
  }

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  return (
    <div>
      <div className="pt-20 pb-10 max-w-[1200px] mx-auto">
        {/* Combined Card: Image, Name, and Overview */}
        <div className="bg-white p-6 rounded-lg shadow-md mb-6 border border-gray-200 flex flex-col lg:flex-row gap-6">
          <div className="flex flex-col justify-center items-center gap-4 lg:w-1/3">
            <img
              src={treatment.img}
              className="w-[100px] h-[100px]"
              alt={treatment.name}
            />
            <p className="text-xl font-heading">{treatment.name}</p>
          </div>
          <div className="lg:w-2/3">
            <h1 className="mb-4 text-4xl font-heading text-rose-400 font-semibold">Overview</h1>
            <p className="font-text text-lg">{treatment.shortDesc}</p>
          </div>
        </div>

        {/* Detailed Description Card with Expand/Collapse */}
        <div className="bg-white p-6 rounded-lg shadow-md border border-gray-200">
          <div className="flex justify-between items-center">
            <h1 className="text-3xl font-heading text-rose-500 font-semibold">Detailed Description</h1>
            <ExpandMoreIcon
              className={`transition-transform duration-300 ${isExpanded ? 'rotate-180' : ''}`}
              onClick={toggleExpand}

            />

          </div>
          {isExpanded && (
            <div className="mt-2">
              <p className="font-text text-lg">{treatment.longDesc}</p>
            </div>
          )}
        </div>
        <div className='  bg-white max-w-[1200px] mx-auto'>
            <h1 className='text-4xl p-10  max-w-[1200px] mx-auto font-heading text-rose-400 '>Popular Hospitals</h1>
            <div className="flex justify-center items-start w-full px-10">
            <Carousal type="hosptials" treatment={treatment.name}/>
            </div>
            <h1 className='text-4xl p-10  max-w-[1200px] mx-auto font-heading text-rose-400 '>Popular Doctors</h1>
            <div className="flex justify-center items-start w-full px-10">
            <Carousal type="doctors" treatment={treatment.name}/>
            </div>
        </div>
        <FreeQuote />
      </div>
    </div>
  );
};

export default TreatmentDetail;
