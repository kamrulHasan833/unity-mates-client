import { Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import { getBiodataFromLocalstorage } from "../../hooks/useLocalstorageBiodata";
import Biodata from "../Shared/Biodata";
import Nodata from "../Shared/Nodata";
import SectionHeader from "../Shared/SectionHeader";
import SectionWrapper from "../Shared/SectionWrapper";
const ViewedBiodatas = () => {
  const viwedBiodatas = getBiodataFromLocalstorage();

  return (
    <section>
      <SectionWrapper>
        <SectionHeader title="viewed biodatas" />
        <Swiper
          slidesPerView={1}
          spaceBetween={24}
          navigation={true}
          pagination={{ clickable: true }}
          modules={[Navigation, Pagination]}
          breakpoints={{
            768: {
              slidesPerView: 2,
            },
            1024: {
              slidesPerView: 3,
            },
            1248: {
              slidesPerView: 4,
            },
          }}
          className="mySwiper hero-swiper related-biodata-swiper pb-10"
        >
          {!viwedBiodatas?.length ? (
            <Nodata />
          ) : (
            viwedBiodatas?.map((biodata) => (
              <SwiperSlide key={biodata._id}>
                <Biodata biodata={biodata} viewed={true} />
              </SwiperSlide>
            ))
          )}
        </Swiper>
      </SectionWrapper>
    </section>
  );
};

export default ViewedBiodatas;
