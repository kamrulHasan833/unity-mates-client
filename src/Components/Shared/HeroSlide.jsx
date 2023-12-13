import PropTypes from "prop-types";
import { PiPlayCircleThin } from "react-icons/pi";

import { Link } from "react-router-dom";
import usePlay from "../../hooks/usePlay";

const HeroSlide = ({ slide }) => {
  const { image, title, moto, path, btn_text } = slide;
  const { handlePlay } = usePlay();
  return (
    <div className="relative">
      <img
        src={image}
        alt=""
        className="w-full"
        data-aos="zoom-out"
        data-aos-duration="2000"
      />
      <div className="absolute top-0 left-0 flex w-full h-full justify-center items-center bg-black bg-opacity-30">
        <div>
          {" "}
          <h3
            className="text-3xl md:text-5xl lg:text-6xl font-bold max-w-[500px] text-white pb-3"
            data-aos="fade-up"
            data-aos-duration="800"
          >
            {title}
          </h3>
          <p
            className=" text-secondary-color text-lg  md:text-xl mb-10"
            data-aos="fade-up"
            data-aos-duration="1000"
          >
            {moto}
          </p>
          <div
            className="flex gap-6 items-center"
            data-aos="fade-up"
            data-aos-duration="1200"
          >
            <div>
              <Link
                className="text-white text-sm uppercase hover:bg-secondary-color md:text-base bg-primary-color px-6 md:px-10 py-2 md:py-3 rounded-full"
                to={path}
              >
                {btn_text}
              </Link>
            </div>
            <div>
              <button
                onClick={() => {
                  document.getElementById("my_modal_2").showModal();
                  handlePlay(true);
                }}
              >
                <PiPlayCircleThin className="text-5xl md:text-7xl text-primary-color hover:text-secondary-color" />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

HeroSlide.propTypes = {
  slide: PropTypes.object,
};

export default HeroSlide;
