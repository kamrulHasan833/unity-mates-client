import { Rating } from "@smastrom/react-rating";
import PropTypes from "prop-types";
const StoryModal = ({ story }) => {
  const {
    self_biodata_id,
    partner_biodata_id,
    couple_image,
    success_story,
    reviews,
  } = story ? story : {};

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-11/12 max-w-5xl p-10">
          <div>
            <div className="grid grid-cols-1 md:grid-cols-2 gap-5">
              <img src={couple_image} alt="" />
              <div>
                <p className="pb-2 text-desc-color">{success_story}</p>
                <p className="pb-1 text-desc-color">
                  <span className="font-semibold">Self Biodata Id: </span>{" "}
                  {self_biodata_id}
                </p>
                <p className="pb-1 text-desc-color">
                  <span className="font-semibold">Partner Biodata Id: </span>{" "}
                  {partner_biodata_id}
                </p>
                <Rating
                  style={{ maxWidth: 140 }}
                  value={reviews}
                  onChange={() => {}}
                />
              </div>
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="p-2 bg-border-color">X</button>
            </form>
          </div>
        </div>
      </dialog>
    </>
  );
};

StoryModal.propTypes = {
  story: PropTypes.object,
};
export default StoryModal;
