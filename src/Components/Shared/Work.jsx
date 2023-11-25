import PropTypes from "prop-types";
import { Link } from "react-router-dom";

const Work = ({ work }) => {
  const { icon, title, btn_text, path, description } = work;
  console.log(work);
  return (
    <div className="border border-color p-6 text-center cursor-pointer">
      <div className="flex   justify-center text-5xl md:text-7xl text-orange-400 mb-6">
        {icon}
      </div>
      <div>
        <h3 className="text-2xl md:text-3xl font-semibold text-title-color mb-1">
          {title}
        </h3>
        <p>{description}</p>
        <div>
          <Link
            className="text-sm md:text-base bg-primary-color hover:bg-secondary-color text-white px-6 md:px-4 py-1 md:py-2 rounded-full inline-block mt-6 capitalize"
            to={path}
          >
            {btn_text}
          </Link>
        </div>
      </div>
    </div>
  );
};

Work.propTypes = {
  work: PropTypes.object,
};

export default Work;
