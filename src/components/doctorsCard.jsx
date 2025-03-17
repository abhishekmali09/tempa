import MainImage from "/Images/PuttingGloves.png"
const DoctorsCard = ({doctorDetail}) => {
    console.log(doctorDetail);
  return (
    <div className="flex gap-4 mx-auto md:flex-row flex-col md:max-w-[45rem] max-w-[25rem] px-10">
        <div className="flex justify-center items-center md:max-w-1/3 w-full">
            <img src={MainImage} className=" aspect-square"/>
        </div>
        <div className="flex gap-5 flex-col  ">
            <div className="flex flex-col gap-2">
                <h1 className="text-3xl">{doctorDetail.name}</h1>
                <p>{doctorDetail.department}</p>
                <h1>{doctorDetail.hospital}</h1>
            </div>
                <p>{doctorDetail.experience}</p>
                <p>{doctorDetail.shortDesc}</p>
        </div>

    </div>
  )
}

export default DoctorsCard
