import PropTypes from "prop-types";
const StoryModal = ({ story }) => {
  const {
    _id,
    self_biodata_id,
    partner_biodata_id,
    couple_image,
    success_story,
    reviews,
  } = story;

  return (
    <>
      <dialog id="my_modal_1" className="modal">
        <div className="modal-box w-11/12 max-w-5xl p-10">
          <div>
            <div>
              <img src={couple_image} alt="" />
            </div>
          </div>
          <div className="modal-action">
            <form method="dialog">
              {/* if there is a button, it will close the modal */}
              <button className="btn">Close</button>
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
