import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
// import required modules
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import HeroSlide from "../Shared/HeroSlide";
import SectionWrapperLarge from "../Shared/SectionWrapperLarge";
const slides = [
  {
    id: 1,
    image: "https://i.ibb.co/9Zqnkpt/slider-1.jpg",
    title: "Welcome To Unity Mates",
    moto: "Get your fovourite patner",
    btn_text: "Find Patner",
    path: "/biodatas",
  },
  {
    id: 2,
    image: "https://i.ibb.co/bmY9g3C/slider-2.jpg",
    title: "Happy Couple",
    moto: "A best life patner make your life whishes",
    btn_text: "Find Patner",
    path: "/biodatas",
  },
];
const HeroSlider = () => {
  return (
    <SectionWrapperLarge>
      <Swiper
        navigation={true}
        modules={[Navigation, Autoplay, Pagination]}
        loop={true}
        pagination={{ clickable: true }}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        className="mySwiper hero-swiper"
      >
        {slides.map((slide) => (
          <SwiperSlide key={slide.id}>
            {({ isActive }) => isActive && <HeroSlide slide={slide} />}
          </SwiperSlide>
        ))}
      </Swiper>
    </SectionWrapperLarge>
  );
};

export default HeroSlider;
