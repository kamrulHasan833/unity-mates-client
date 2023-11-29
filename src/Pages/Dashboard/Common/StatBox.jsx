import PropTypes from "prop-types";
import { FaUserFriends } from "react-icons/fa";
import { FaSackDollar } from "react-icons/fa6";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { TbCurrencyDollarOff } from "react-icons/tb";

const StatBox = ({ stat }) => {
  const { data, title } = stat;
  const isRevenue = title === "total revenue" ? true : false;
  const isTotalBiodata = title === "total biodatas" ? true : false;
  const isMaleBiodata = title === "male biodatas" ? true : false;
  const isFemaleBiodata = title === "female biodatas" ? true : false;
  const isPremiumBiodata = title === "premium biodatas" ? true : false;
  const isMarriage = title === "marriages";
  console.log(title);

  return (
    <div className="stat shadow-lg capitalize">
      <div className="stat-figure text-primary">
        {isRevenue ? (
          <FaSackDollar className="text-5xl text-primary-color" />
        ) : isTotalBiodata ? (
          <FaUserFriends className="text-5xl text-secondary-color" />
        ) : isMaleBiodata ? (
          <img
            src="https://i.ibb.co/B46rvYG/male.jpg"
            alt=""
            className="rounded-full w-16 h-16"
          />
        ) : isFemaleBiodata ? (
          <img
            src="https://i.ibb.co/yf5cBjt/female.png"
            alt=""
            className="rounded-full w-16 h-16"
          />
        ) : isPremiumBiodata ? (
          <MdOutlineWorkspacePremium className="text-5xl text-orange-400" />
        ) : isMarriage ? (
          <img
            src="https://i.ibb.co/VqXL823/couple.jpg"
            alt=""
            className="rounded-full w-16 h-16"
          />
        ) : (
          <TbCurrencyDollarOff className="text-5xl text-primary-color" />
        )}
      </div>
      <div className={`stat-title `}>{title}</div>
      <div
        className={`stat-value font-medium ${
          isRevenue
            ? "text-primary-color"
            : isTotalBiodata
            ? "text-secondary-color"
            : isPremiumBiodata
            ? "text-orange-400"
            : isMaleBiodata
            ? "text-yellow-600"
            : isFemaleBiodata
            ? "text-amber-800"
            : isMarriage
            ? "text-yellow-900"
            : "text-primary-color"
        }`}
      >
        {isRevenue ? `$ ${data}` : data}
      </div>
    </div>
  );
};

StatBox.propTypes = {
  stat: PropTypes.object,
};

export default StatBox;
