import PropTypes from "prop-types";
import { useEffect } from "react";
import { Autoplay, Navigation, Pagination } from "swiper/modules";
import { Swiper, SwiperSlide } from "swiper/react";
import useQueryBiodatas from "../../hooks/useQueryBiodatas";
import Biodata from "../Shared/Biodata";
import LoadingSpiner from "../Shared/LoadingSpiner";
import Nodata from "../Shared/Nodata";
import SectionHeader from "../Shared/SectionHeader";
const BiodataDetailsRight = ({ biodata_type }) => {
  const { queryBiodatas, isLoading, setSting } = useQueryBiodatas();
  useEffect(() => {
    if (!isLoading) {
      setSting(`?biodataType=${biodata_type}`);
    }
  }, [biodata_type, setSting, isLoading]);

  return (
    <section>
      <SectionHeader title="Related Biodatas" />

      {/* <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
        {isLoading ? (
          <LoadingSpiner />
        ) : !isLoading && !queryBiodatas?.length ? (
          <Nodata />
        ) : (
          queryBiodatas.map((biodata) => (
            <Biodata key={biodata._id} biodata={biodata} />
          ))
        )}
      </div> */}

      <Swiper
        slidesPerView={1}
        spaceBetween={24}
        navigation={true}
        autoplay={{
          delay: 5000,
          disableOnInteraction: false,
        }}
        loop={true}
        pagination={{ clickable: true }}
        modules={[Navigation, Pagination, Autoplay]}
        breakpoints={{
          768: {
            slidesPerView: 2,
          },
        }}
        className="mySwiper hero-swiper related-biodata-swiper pb-10"
      >
        {isLoading ? (
          <LoadingSpiner />
        ) : !isLoading && !queryBiodatas?.length ? (
          <Nodata />
        ) : (
          queryBiodatas.map((biodata) => (
            <SwiperSlide key={biodata._id}>
              <Biodata biodata={biodata} />
            </SwiperSlide>
          ))
        )}
      </Swiper>
    </section>
  );
};

BiodataDetailsRight.propTypes = {
  biodata_type: PropTypes.string,
};

export default BiodataDetailsRight;
