import { MdOutlineWorkspacePremium } from "react-icons/md";
import Swal from "sweetalert2";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import useAlert from "../../../hooks/useAlert";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import useSingleBiodataByEmail from "../../../hooks/useSingleBiodataByEmail";

const ViewBiodata = () => {
  const alert = useAlert();
  const axiosPrivate = useAxiosPrivate();
  const { biodata, isLoading, refetch } = useSingleBiodataByEmail();
  const {
    biodata_type,
    biodata_id,
    name,
    profile_image,
    date_of_birth,
    height,
    weight,
    age,
    occupation,
    race,
    fathers_name,
    mothers_name,
    permanent_division_name,
    present_division_name,
    expected_partner_age,
    expected_partner_height,
    expected_partner_weight,
    mobile_number,
    email,
    member_type,
    premium_request_status,
  } = biodata ? biodata : {};

  const isPremium = member_type === "premium";
  const handlePremiumRequest = (e) => {
    e.preventDefault();
    const payload = {
      ...biodata,
      premium_request_status: "pending",
    };

    Swal.fire({
      title: "Are you sure?",
      text: "To make your biodata premium, click yes!",
      icon: "warning",
      showCancelButton: true,
      confirmButtonColor: "#2B2A4C",
      cancelButtonColor: "#d33",
      confirmButtonText: "Yes",
    }).then((result) => {
      if (result.isConfirmed) {
        axiosPrivate
          .post("/unity-mates/v1/biodatas", payload)
          .then(({ data: result }) => {
            const isUpdate = result.modifiedCount > 0;

            if (isUpdate) {
              alert(`You have requested successfully!`, "success");
              refetch();
            } else {
              alert(`You have alreadiy requested!`, "error");
              refetch();
            }
          })
          .catch((err) => {
            if (err) {
              alert(`Your  request failed!`, "error");
            }
          });
      }
    });
  };

  return (
    <section>
      <SectionWrapperSmall>
        <SectionHeader title="View Biodata" />
        {isLoading ? (
          <p>loading...</p>
        ) : !isLoading && !biodata ? (
          <p>No Biodata</p>
        ) : (
          <form className="card-body p-0">
            {isPremium && (
              <div className=" flex w-full justify-end items-center ">
                <div>
                  <MdOutlineWorkspacePremium className="text-4xl text-orange-400" />
                </div>
                <span className=" text-orange-400 font-medium ">Premium</span>
              </div>
            )}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
              <div className="form-control ">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">Name</p>
                </label>
                <input
                  defaultValue={name}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control ">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Profile Image URL
                  </p>
                </label>
                <input
                  defaultValue={profile_image}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    {`Father's`} Name
                  </p>
                </label>
                <input
                  defaultValue={fathers_name}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    {`Mother's`} Name
                  </p>
                </label>
                <input
                  defaultValue={mothers_name}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Age (years)
                  </p>
                </label>
                <input
                  defaultValue={age}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Expected Partner Age (years){" "}
                  </p>
                </label>
                <input
                  defaultValue={expected_partner_age}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Date of Birth
                  </p>
                </label>
                <input
                  defaultValue={date_of_birth}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Mobile Number
                  </p>
                </label>
                <input
                  defaultValue={mobile_number}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>

              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Biodata Type
                  </p>
                </label>
                <input
                  defaultValue={biodata_type}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Occupation
                  </p>
                </label>
                <input
                  defaultValue={occupation}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Present Division
                  </p>
                </label>
                <input
                  defaultValue={present_division_name}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Permanent Division
                  </p>
                </label>
                <input
                  defaultValue={permanent_division_name}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Height
                  </p>
                </label>
                <input
                  defaultValue={height}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Weight
                  </p>
                </label>
                <input
                  defaultValue={weight}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Expected Partner Height
                  </p>
                </label>
                <input
                  defaultValue={expected_partner_height}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Expected Partner Weight
                  </p>
                </label>
                <input
                  defaultValue={expected_partner_weight}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">Race</p>
                </label>
                <input
                  defaultValue={race}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color font-medium">
                    Biodata ID
                  </p>
                </label>
                <input
                  defaultValue={biodata_id}
                  className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                  disabled
                />
              </div>

              <div>
                <div className="form-control">
                  <label className="label">
                    <p className="label-text text-desc-color font-medium">
                      Email
                    </p>
                  </label>
                  <input
                    defaultValue={email}
                    className="input input-bordered rounded-none  capitalize disabled:text-desc-color disabled:cursor-default"
                    disabled
                  />
                </div>
              </div>
            </div>
            {biodata && (
              <div className="form-control  mt-10  items-center ">
                {!isPremium && (
                  <>
                    {premium_request_status === "pending" ? (
                      <button
                        className="btn btn-primary  font-medium text-base px-10 md:px-14 py-2 rounded-full disabled:text-desc-color"
                        disabled
                      >
                        Pending..
                      </button>
                    ) : (
                      <button
                        className="btn btn-primary  hover:bg-primary-color border-none bg-secondary-color text-white font-medium text-base px-10 md:px-14 py-2 rounded-full"
                        onClick={handlePremiumRequest}
                      >
                        Make Premium{" "}
                        <MdOutlineWorkspacePremium className="text-xl text-orange-400" />
                      </button>
                    )}
                  </>
                )}
              </div>
            )}
          </form>
        )}
      </SectionWrapperSmall>
    </section>
  );
};

export default ViewBiodata;
