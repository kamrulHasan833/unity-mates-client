import moment from "moment";
import PropTypes from "prop-types";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { useNavigate } from "react-router-dom";
import useLocalstorageBiodata from "../../hooks/useLocalstorageBiodata";
const Biodata = ({ biodata, viewed }) => {
  const {
    _id,
    profile_image,
    biodata_id,
    biodata_type,
    permanent_division_name,
    age,
    occupation,
    member_type,
    viewedAt,
  } = biodata;
  const viewedFromNow = moment(viewedAt).fromNow();
  const setBiodatToLocalStorage = useLocalstorageBiodata();
  const navigate = useNavigate();

  const handleViewProfile = () => {
    setBiodatToLocalStorage(biodata);

    navigate(`/biodata-details/${_id}`);
  };
  return (
    <div className=" group cursor-pointer">
      <div className="overflow-hidden relative">
        <img
          src={profile_image}
          alt=""
          style={{ transitionDuration: "2s" }}
          className="w-full group-hover:scale-125 transition-all"
        />
        {viewed && (
          <div className="absolute bottom-0 right-0 px-4 py-2 bg-title-color  bg-opacity-50">
            <p className="text-sm  font-normal capitalize text-white">
              {viewedFromNow}
            </p>
          </div>
        )}
      </div>
      <div>
        <div className="flex justify-between pt-1 md:pt-2">
          <h3 className="text-sm  font-semibold capitalize text-desc-color">
            Biodata id: <span className="font-normal">{biodata_id}</span>
          </h3>
          <h3 className="font-semibold capitalize text-xl  text-orange-400">
            {member_type === "premium" && <MdOutlineWorkspacePremium />}
          </h3>
        </div>
        <p className="text-sm  font-semibold capitalize text-desc-color">
          Age: <span className="font-normal">{age}</span>
        </p>
        <p className="text-sm  font-semibold capitalize text-desc-color">
          Biodata Type: <span className="font-normal">{biodata_type}</span>
        </p>

        <p className="text-sm  font-semibold capitalize text-desc-color">
          Division:{" "}
          <span className="font-normal">{permanent_division_name}</span>
        </p>
        <p className="text-sm  font-semibold capitalize text-desc-color">
          Occupation: <span className="font-normal">{occupation} </span>
        </p>
        <button
          onClick={handleViewProfile}
          className=" md:text-xs bg-secondary-color hover:bg-primary-color text-white px-4 py-1  rounded-full mt-4 inline-block"
        >
          {viewed ? "View again" : "View Profile"}
        </button>
      </div>
    </div>
  );
};

Biodata.propTypes = {
  biodata: PropTypes.object,
  viewed: PropTypes.bool,
};

export default Biodata;
