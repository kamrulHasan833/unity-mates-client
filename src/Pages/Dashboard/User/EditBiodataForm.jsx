import PropTypes from "prop-types";
import { useState } from "react";
import { useForm } from "react-hook-form";
import Select from "react-select";
import useAlert from "../../../hooks/useAlert";
import useAuth from "../../../hooks/useAuth";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
import checkStrinOrNumber from "../../../utils/checkStrinOrNumber";
import options from "../../../utils/selectOptions";

const EditBiodataForm = ({ biodata, refetch }) => {
  const alert = useAlert();
  const { user } = useAuth();
  const axiosPrivate = useAxiosPrivate();
  const userEmail = user?.email;
  const {
    biodataTypeOption,
    heightOption,
    weightOption,
    occupationOption,
    raceOption,
    parmanentDivisionName,
    presentDivisionName,
    partnerHeightOption,
    patnerWeightOption,
  } = options;
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
  } = biodata ? biodata : {};

  // control by hook form
  const [parmanentDivision, setPermanentDevision] = useState(
    permanent_division_name
  );
  const [presentDivision, setPresentDevision] = useState(present_division_name);
  const [biodataType, setBiodataType] = useState(biodata_type);
  const [myHeight, setMyHeight] = useState(height);
  const [myWeight, setMyWeight] = useState(weight);
  const [expectedPartnerHeight, setExpectedPartnerHeight] = useState(
    expected_partner_height
  );
  const [expectedPartnerWeight, setExpectedPartnerWeight] = useState(
    expected_partner_weight
  );
  const [myOccupation, setMyOccupation] = useState(occupation);
  const [myRace, setMyRace] = useState(race);

  const {
    register,
    handleSubmit,

    formState: { errors },
  } = useForm();

  //   updata biodata

  //   create or updata a biodata
  const handleEditBiodata = async (data) => {
    const {
      age,
      dateOfBirth,
      fathersName,
      mothersName,
      image,
      mobileNo,
      name: newName,
      patnerAge,
    } = data;

    const payload = {
      biodata_type: checkStrinOrNumber(biodataType),
      name: newName,
      email: userEmail,
      profile_image: image,
      date_of_birth: dateOfBirth,
      height: checkStrinOrNumber(myHeight),
      weight: checkStrinOrNumber(myWeight),
      mobile_number: mobileNo,
      age,
      occupation: checkStrinOrNumber(myOccupation),
      race: checkStrinOrNumber(myRace),
      fathers_name: fathersName,
      mothers_name: mothersName,
      permanent_division_name: checkStrinOrNumber(parmanentDivision),
      present_division_name: checkStrinOrNumber(presentDivision),
      expected_partner_age: patnerAge,
      expected_partner_height: checkStrinOrNumber(expectedPartnerHeight),
      expected_partner_weight: checkStrinOrNumber(expectedPartnerWeight),
      biodata_id: biodata_id,
    };

    try {
      const { data: result } = await axiosPrivate.post(
        "/unity-mates/v1/biodatas",
        payload
      );

      const isUpdate = result.modifiedCount > 0;
      const isCreated = result._id ? true : false;

      if (isUpdate) {
        alert(`You have upated biodata successfully!`, "success");
        refetch();
      } else if (isCreated) {
        alert(`You have saved and pulished biodata successfully!`, "success");
        refetch();
      } else {
        alert(`Biodata alreadiy exist and nothing to modify!`, "error");
        refetch();
        refetch();
      }
    } catch (err) {
      if (err) {
        alert(`You have not  saved and pulished biodata!`, "error");
      }
    }
  };
  return (
    <form className="card-body p-0" onSubmit={handleSubmit(handleEditBiodata)}>
      <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
        <div className="form-control ">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Name <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <input
            type="text"
            placeholder="name"
            defaultValue={name}
            className="input input-bordered rounded-none  capitalize"
            {...register("name", { required: true })}
          />
          {errors.name && <p className="text-red-500">Name is required.</p>}
        </div>
        <div className="form-control ">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Profile Image URL <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <input
            type="text"
            placeholder="name"
            defaultValue={profile_image}
            className="input input-bordered rounded-none "
            {...register("image", { required: true })}
          />
          {errors.image && (
            <p className="text-red-500">Image URL is required.</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              {`Father's`} Name <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <input
            type="text"
            placeholder="Father's name"
            defaultValue={fathers_name}
            className="input input-bordered rounded-none  capitalize"
            {...register("fathersName", { required: true })}
          />
          {errors.fathersName && (
            <p className="text-red-500">{`Father's`} Name is required.</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              {`Mother's`} Name <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <input
            type="text"
            placeholder="Mother's name"
            defaultValue={mothers_name}
            className="input input-bordered rounded-none  capitalize"
            {...register("mothersName", { required: true })}
          />
          {errors.mothersName && (
            <p className="text-red-500">{`Mother's`} Name is required.</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Age (years) <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <input
            type="number"
            placeholder="Your Age"
            defaultValue={age}
            className="input input-bordered rounded-none  capitalize"
            {...register("age", { required: true })}
          />
          {errors.age && <p className="text-red-500"> Age is required.</p>}
        </div>
        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Expected Partner Age (years){" "}
              <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <input
            type="number"
            placeholder="Expected partner age"
            defaultValue={expected_partner_age}
            className="input input-bordered rounded-none  capitalize"
            {...register("patnerAge", { required: true })}
          />
          {errors.patnerAge && (
            <p className="text-red-500"> Partner age is required.</p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Date of Birth <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <input
            type="date"
            placeholder="Date of birth"
            defaultValue={date_of_birth}
            className="input input-bordered rounded-none  capitalize"
            {...register("dateOfBirth", { required: true })}
          />
          {errors.dateOfBirth && (
            <p className="text-red-500"> Date of birth is required.</p>
          )}
        </div>

        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Mobile Number <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <input
            type="text"
            placeholder="Your Molbile No"
            defaultValue={mobile_number}
            className="input input-bordered rounded-none  capitalize"
            {...register("mobileNo", { required: true })}
          />
          {errors.mobileNo && (
            <p className="text-red-500">
              {`Mother's`} Mobile Number is required.
            </p>
          )}
        </div>
        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Biodata Type <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <Select
            className="capitalize "
            defaultValue={
              biodataType
                ? {
                    value: biodataType,
                    label: biodataType,
                  }
                : biodataTypeOption[0]
            }
            onChange={setBiodataType}
            options={biodataTypeOption}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Occupation <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <Select
            className="capitalize "
            defaultValue={
              myOccupation
                ? {
                    value: myOccupation,
                    label: myOccupation,
                  }
                : occupationOption[0]
            }
            onChange={setMyOccupation}
            options={occupationOption}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Present Division <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <Select
            className="capitalize "
            defaultValue={
              presentDivision
                ? {
                    value: presentDivision,
                    label: presentDivision,
                  }
                : presentDivisionName[0]
            }
            onChange={setPresentDevision}
            options={presentDivisionName}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Parmanent Division <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <Select
            className="capitalize "
            defaultValue={
              parmanentDivision
                ? {
                    value: parmanentDivision,
                    label: parmanentDivision,
                  }
                : parmanentDivisionName[0]
            }
            onChange={setPermanentDevision}
            options={parmanentDivisionName}
          />
        </div>

        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Height (cm) <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <Select
            className="capitalize "
            defaultValue={
              myHeight
                ? {
                    value: myHeight,
                    label: myHeight,
                  }
                : heightOption[0]
            }
            onChange={setMyHeight}
            options={heightOption}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Weight (kg) <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <Select
            className="capitalize "
            defaultValue={
              myWeight
                ? {
                    value: myWeight,
                    label: myWeight,
                  }
                : weightOption[0]
            }
            onChange={setMyWeight}
            options={weightOption}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Expected Partner Height (cm){" "}
              <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <Select
            className="capitalize "
            defaultValue={
              expectedPartnerHeight
                ? {
                    value: expectedPartnerHeight,
                    label: expectedPartnerHeight,
                  }
                : partnerHeightOption[0]
            }
            onChange={setExpectedPartnerHeight}
            options={partnerHeightOption}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Expected Partner Weight (kg){" "}
              <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <Select
            className="capitalize "
            defaultValue={
              expectedPartnerWeight
                ? {
                    value: expectedPartnerWeight,
                    label: expectedPartnerWeight,
                  }
                : patnerWeightOption[0]
            }
            onChange={setExpectedPartnerWeight}
            options={patnerWeightOption}
          />
        </div>
        <div className="form-control">
          <label className="label">
            <p className="label-text text-desc-color font-medium">
              Race <span className="text-red-500 text-xl">*</span>
            </p>
          </label>
          <Select
            className="capitalize "
            defaultValue={
              myRace
                ? {
                    value: myRace,
                    label: myRace,
                  }
                : raceOption[0]
            }
            onChange={setMyRace}
            options={raceOption}
          />
        </div>
        <div>
          <div className="form-control">
            <label className="label">
              <p className="label-text text-desc-color font-medium">
                Biodata ID <span className="text-red-500 text-xl">*</span>
              </p>
            </label>
            <input
              type="number"
              placeholder="Biodata Id"
              defaultValue={biodata_id}
              className="input input-bordered rounded-none  capitalize"
              disabled
            />
          </div>
        </div>

        <div>
          <div className="form-control">
            <label className="label">
              <p className="label-text text-desc-color font-medium">
                Email <span className="text-red-500 text-xl">*</span>
              </p>
            </label>
            <input
              type="email"
              placeholder="email"
              defaultValue={userEmail}
              className="input input-bordered rounded-none   disabled:text-title-color disabled:cursor-pointer"
              disabled
            />
          </div>
        </div>
      </div>
      <div className="form-control  mt-10  items-center ">
        <button className="btn btn-primary  bg-primary-color border-none hover:bg-secondary-color text-white font-medium text-base px-10 md:px-14 py-2 rounded-full">
          {"Save and Publish"}
        </button>
      </div>
    </form>
  );
};

EditBiodataForm.propTypes = {
  biodata: PropTypes.object,
  refetch: PropTypes.func,
};

export default EditBiodataForm;
