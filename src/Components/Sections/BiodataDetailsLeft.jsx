import PropTypes from "prop-types";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { Link } from "react-router-dom";
import PaymentModal from "../../Layouts/PaymentModal";
import useIsAdminOrPremium from "../../hooks/useIsAdminOrPremium";
import SectionHeader from "../Shared/SectionHeader";

const BiodataDetailsLeft = ({ biodata }) => {
  const data = useIsAdminOrPremium();

  const { isPremium } = data ? data : {};

  const {
    _id,
    age,
    biodata_id,
    biodata_type,
    date_of_birth,
    email,
    expected_partner_age,
    expected_partner_height,
    expected_partner_weight,
    fathers_name,
    height,
    member_type,
    mobile_number,
    mothers_name,
    name,
    occupation,
    permanent_division_name,
    present_division_name,
    race,
    weight,
    profile_image,
  } = biodata;
  const isPremiumMember = member_type === "premium";

  return (
    <section className="pb-14 md:pb-20">
      <SectionHeader title="Biodata details" />
      <div className="grid grid-cols-1 lg:grid-cols-2 gap-6">
        <div>
          <img src={profile_image} alt="" />
        </div>
        <div className="space-y-1">
          <div className="flex items-center gap-2 mb-1">
            <p className="text-xl md:text-2xl font-semibold capitalize text-title-color">
              {name}
            </p>
            {isPremiumMember && (
              <p className="font-semibold capitalize text-3xl  text-orange-400">
                {member_type === "premium" && <MdOutlineWorkspacePremium />}
              </p>
            )}
          </div>
          <p className="capitalize font-semibold text-desc-color">
            fathers Name: <span className="font-normal">{fathers_name}</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            mothers name: <span className="font-normal">{mothers_name}</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            biodata id: <span className="font-normal">{biodata_id}</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            biodata Type: <span className="font-normal">{biodata_type}</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            age: <span className="font-normal">{age} years</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            date of birth: <span className="font-normal">{date_of_birth}</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            height: <span className="font-normal">{height}cm</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            weight: <span className="font-normal">{weight} kg</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            occupation: <span className="font-normal">{occupation}</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            race: <span className="font-normal">{race}</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            permanent division:{" "}
            <span className="font-normal">{permanent_division_name}</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            present division:{" "}
            <span className="font-normal">{present_division_name}</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            expected partner age:{" "}
            <span className="font-normal">{expected_partner_age} years</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            expected partner height:{" "}
            <span className="font-normal">{expected_partner_height} cm</span>
          </p>
          <p className="capitalize font-semibold text-desc-color">
            expected partner weight:{" "}
            <span className="font-normal">{expected_partner_weight} kg</span>
          </p>
          {isPremium && (
            <>
              <h3 className="text-lg md:text-xl font-semibold pt-6 capitalize">
                contact info
              </h3>
              <p className="capitalize font-semibold text-desc-color">
                email: <span className="font-normal">{email}</span>
              </p>{" "}
              <p className="capitalize font-semibold text-desc-color">
                mobile number:{" "}
                <span className="font-normal">{mobile_number}</span>
              </p>
            </>
          )}
          <div className="flex flex-col justify-center  gap-4 pt-10">
            <button className="text-sm md:text-base text-white bg-primary-color capitalize hover:bg-secondary-color px-6 md:px-8 py-1 md:py-2 rounded-full ">
              add to favourite
            </button>
            {!isPremium && (
              <Link
                to={`/checkout/${_id}`}
                className="text-sm md:text-base text-white text-center hover:bg-primary-color bg-secondary-color px-6 md:px-8 py-1 md:py-2 rounded-full capitalize"
              >
                contact request
              </Link>
            )}
          </div>
        </div>
      </div>
      <PaymentModal />
    </section>
  );
};

BiodataDetailsLeft.propTypes = {
  biodata: PropTypes.object,
};

export default BiodataDetailsLeft;
