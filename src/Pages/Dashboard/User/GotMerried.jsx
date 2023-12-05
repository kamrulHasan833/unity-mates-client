import { Rating } from "@smastrom/react-rating";
import { useState } from "react";
import { useForm } from "react-hook-form";
import SuccessStories from "../../../Components/Sections/SuccessStories";
import SectionHeader from "../../../Components/Shared/SectionHeader";
import SectionWrapperSmall from "../../../Components/Shared/SectionWrapperSmall";
import Title from "../../../Components/Shared/Title";
import useAlert from "../../../hooks/useAlert";
import useAxiosPrivate from "../../../hooks/useAxiosPrivate";
const GotMerried = () => {
  const axiosPrivate = useAxiosPrivate();
  const alert = useAlert();
  const [rating, setRating] = useState(0);

  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePost = async (data) => {
    const { selfBiodataId, partnerBiodataId, image, successStories } = data;
    const payload = {
      self_biodata_id: selfBiodataId,
      patner_biodata_id: partnerBiodataId,
      couple_image: image,
      reviews: rating,
      success_story: successStories,
    };
    try {
      const res = await axiosPrivate.post(
        "/unity-mates/v1/success-stories",
        payload
      );

      if (res.data._id) {
        alert(`You have added story  successfully!`, "success");
      }
    } catch (err) {
      if (err) {
        alert(`Added success story failed failed!`, "error");
      }
    }
  };
  return (
    <section>
      <Title title="Got Merried" />
      <SectionWrapperSmall>
        <SectionHeader title="Got married" />

        <form className="card-body p-0" onSubmit={handleSubmit(handlePost)}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6  ">
            <div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color">
                    Self Biodata Id{" "}
                    <span className="text-red-500 text-xl">*</span>
                  </p>
                </label>
                <input
                  type="number"
                  placeholder="Self biodata id"
                  className="input input-bordered rounded-none"
                  {...register("selfBiodataId", { required: true })}
                />
                {errors.selfBiodataId && (
                  <p className="text-red-500">Self biodata id is required.</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color">
                    Partner Biodata Id{" "}
                    <span className="text-red-500 text-xl">*</span>
                  </p>
                </label>
                <input
                  type="number"
                  placeholder="Partner biodata id"
                  className="input input-bordered rounded-none"
                  {...register("partnerBiodataId", { required: true })}
                />
                {errors.partnerBiodataId && (
                  <p className="text-red-500">
                    Partner biodata id is required.
                  </p>
                )}
              </div>
              <div className="form-control justify-center ">
                <label className="label">
                  <p className="label-text text-desc-color"> Reviews</p>{" "}
                  <Rating
                    style={{ maxWidth: 140 }}
                    value={rating}
                    onChange={setRating}
                  />
                </label>
                <input
                  name="reviews"
                  type="text"
                  placeholder="reviews"
                  value={rating}
                  onChange={(e) => setRating(e.target.value)}
                  className="input input-bordered rounded-none"
                />
              </div>
            </div>
            <div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color">
                    Couple Image <span className="text-red-500 text-xl">*</span>
                  </p>
                </label>
                <input
                  type="text"
                  placeholder="Couple image"
                  className="input input-bordered rounded-none"
                  {...register("image", { required: true })}
                />
                {errors.image && (
                  <p className="text-red-500">image is required.</p>
                )}
              </div>
              <div className="form-control">
                <label className="label">
                  <p className="label-text text-desc-color">
                    Success Story{" "}
                    <span className="text-red-500 text-xl">*</span>
                  </p>
                </label>
                <textarea
                  type="textarea"
                  placeholder="Success stories"
                  className="input input-bordered rounded-none"
                  {...register("successStories", { required: true })}
                />
                {errors.successStories && (
                  <p className="text-red-500">Success stories is required.</p>
                )}
              </div>
            </div>
          </div>
          <div className="form-control  mt-10  items-center ">
            <button className="btn btn-primary hover:text-title-color bg-primary-color border-none hover:bg-white text-white text-base px-10 md:px-14 py-2 rounded-full">
              Submit
            </button>
          </div>
        </form>
        <SuccessStories />
      </SectionWrapperSmall>
    </section>
  );
};

export default GotMerried;
