import AutoScroll from "embla-carousel-auto-scroll";
import useEmblaCarousel from "embla-carousel-react";
import { useState, useEffect } from "react";
import { homeServices,treatments } from "../constants";
import HomeCard from "./homeCard";
homeServices
const Carousal = ({initialSlideIndex }) => {
    const handleSlideClick = (index) => {
        if (emblaApi) {
          emblaApi.scrollTo(index);
          emblaApi.reInit();
        }
      };

      const OPTIONS = { loop: true };
      const [emblaRef, emblaApi] = useEmblaCarousel(OPTIONS, [
        AutoScroll({ playOnInit: true, stopOnInteraction: false, speed: 1 }),
      ]);

      const [activeIndex, setActiveIndex] = useState(0);

      if (initialSlideIndex !== null && initialSlideIndex >= 0 && initialSlideIndex !== activeIndex) {
        handleSlideClick(initialSlideIndex);
      }

      useEffect(() => {
        if (!emblaApi) return;

        const handleSelect = () => {
          setActiveIndex(emblaApi.selectedScrollSnap());
        };

        emblaApi.on("select", handleSelect);
        return () => emblaApi.off("select", handleSelect);
      }, [emblaApi, initialSlideIndex, activeIndex]);


    return (
        <section className="embla overflow-hidden mx-auto w-full max-w-[1200px] ">
        <div className="embla__viewport mx-10" ref={emblaRef}>
          <div className="embla__container flex gap-4 w-full ">
            {
                treatments.length!=0 && treatments.map((ser,index)=>{
                    return <HomeCard treatmentDetails={ser} index={index}
                    handleSlideClick={handleSlideClick}/>
                })
            }
          </div>
        </div>
      </section>
  )
}

export default Carousal
