const PaymentModal = () => {
  return (
    <>
      <dialog id="my_modal_4" className="modal">
        <div className="modal-box w-11/12 max-w-5xl p-10">
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

export default PaymentModal;
