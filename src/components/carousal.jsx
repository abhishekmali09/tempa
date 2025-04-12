import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";
import { healthProgrammes,treatments } from "../constants";
import DoctorsCard from '../components/doctorsCard'
import { hospitals,doctors } from '../constants'
import HospitalsCard from '../components/hospitalsCard'
// homeServices
const Carousal = ({type}) => {
    const handleSlideClick = (index) => {
        if (emblaApi) {
          emblaApi.scrollTo(index);
          emblaApi.reInit();
        }
      };

      const OPTIONS ="";
      const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS,
        // [
        //     AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1.8 }),
        // ]
    );
    // const { selectedIndex, scrollSnaps, onDotButtonClick } =
    // useDotButton(emblaApi)

      const [activeIndex, setActiveIndex] = useState(0);

    //   if (initialSlideIndex !== null && initialSlideIndex >= 0 && initialSlideIndex !== activeIndex) {
    //     handleSlideClick(initialSlideIndex);
    //   }

    //   useEffect(() => {
    //     if (!emblaApi) return;

        // const handleSelect = () => {
        //   setActiveIndex(emblaApi.selectedScrollSnap());
        // };

    //     emblaApi.on("select", handleSelect);
    //     return () => emblaApi.off("select", handleSelect);
    //   }, [emblaApi, initialSlideIndex, activeIndex]);
    let data ;
    if(type==="hosptials"){
        data = hospitals.slice(0,6);
    }
    else if(type==="doctors"){
        data=doctors.slice(10,16);
    }
    console.log(type,data);
    return (
        <section className="embla overflow-hidden w-full pb-10">
        <div className="embla__viewport " ref={emblaRef}>
          <div className="embla__container flex shrink-0 gap-10 w-full ">
                { type==="hosptials" && data.length!==0 && data.map((hospital)=>{
                    return <HospitalsCard hospitalDetail={hospital} extracss =" w-[20rem] "/>
                })}
                { type==="doctors" && data.length!==0 &&  data.map((doctor)=>{
                    return <DoctorsCard doctorDetail={doctor} extracss="w-full sm:w-[30rem] "/>
                })}
          </div>
        </div>
      </section>
  )
}

export default Carousal
