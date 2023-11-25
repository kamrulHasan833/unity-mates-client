import PropTypes from "prop-types";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Link } from "react-router-dom";
const Biodata = ({ biodata }) => {
  const {
    _id,
    profile_image,
    biodata_id,
    biodata_type,
    permanent_division_name,
    age,
    occupation,
    member_type,
  } = biodata;

  return (
    <div className=" group cursor-pointer">
      <div className="overflow-hidden">
        <img
          src={profile_image}
          alt=""
          style={{ transitionDuration: "2s" }}
          className="w-full group-hover:scale-125 transition-all"
        />
      </div>
      <div>
        <div className="flex justify-between pt-1 md:pt-2">
          <h3 className="font-semibold capitalize text-desc-color">
            Biodata id: <span className="font-normal">{biodata_id}</span>
          </h3>
          <h3 className="font-semibold capitalize text-3xl text-orange-400">
            {member_type === "premium" && <MdOutlineWorkspacePremium />}
          </h3>
        </div>
        <p className="font-semibold capitalize text-desc-color">
          Age: <span className="font-normal">{age}</span>
        </p>
        <p className="font-semibold capitalize text-desc-color">
          Biodata Type: <span className="font-normal">{biodata_type}</span>
        </p>

        <p className="font-semibold capitalize text-desc-color">
          Division:{" "}
          <span className="font-normal">{permanent_division_name}</span>
        </p>
        <p className="font-semibold capitalize text-desc-color">
          Occupation: <span className="font-normal">{occupation} </span>
        </p>
        <Link
          to={`/biodata-details/${_id}`}
          className="text-sm md:text-base bg-secondary-color hover:bg-primary-color text-white px-4 md:px-6 py-1 md:py-2 rounded-full mt-4 inline-block"
        >
          View Profile
        </Link>
      </div>
    </div>
  );
};

Biodata.propTypes = {
  biodata: PropTypes.object,
};

export default Biodata;
