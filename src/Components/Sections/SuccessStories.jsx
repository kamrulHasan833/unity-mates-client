import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useSuccessStories from "../../hooks/useSuccessStories";
import LoadingSpiner from "../Shared/LoadingSpiner";
import Nodata from "../Shared/Nodata";
import SectionHeader from "../Shared/SectionHeader";
import SectionWrapper from "../Shared/SectionWrapper";
import SuccessStory from "../Shared/SuccessStory";
const SuccessStories = () => {
  const { successStories, isLoading } = useSuccessStories();

  return (
    <section>
      <SectionWrapper>
        <SectionHeader title="success story" />
        {isLoading ? (
          <LoadingSpiner />
        ) : !isLoading && !successStories.length ? (
          <Nodata />
        ) : (
          <Swiper
            slidesPerView={1}
            spaceBetween={24}
            navigation={true}
            loop={true}
            pagination={{ clickable: true }}
            modules={[Navigation, Pagination]}
            breakpoints={{
              768: {
                slidesPerView: 2,
              },
              1024: {
                slidesPerView: 3,
              },
            }}
            className="mySwiper hero-swiper"
          >
            {successStories.map((successStory) => (
              <SwiperSlide key={successStory._id}>
                <SuccessStory successStory={successStory} />
              </SwiperSlide>
            ))}
          </Swiper>
        )}
      </SectionWrapper>
    </section>
  );
};

export default SuccessStories;
