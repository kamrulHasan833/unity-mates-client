import { CardElement, useElements, useStripe } from "@stripe/react-stripe-js";
import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
import useAlert from "../../hooks/useAlert";
import useAuth from "../../hooks/useAuth";
import useAxiosPrivate from "../../hooks/useAxiosPrivate";
import useSingleBiodata from "../../hooks/useSingleBiodata";
import useSingleBiodataByEmail from "../../hooks/useSingleBiodataByEmail";
import SectionHeader from "./SectionHeader";
import SectionWrapperSmall from "./SectionWrapperSmall";

const CheckoutForm = () => {
  const element = useElements();
  const stripe = useStripe();
  const [clientSecret, setClientSecret] = useState(null);
  const navigate = useNavigate();
  const { id } = useParams();
  const { biodata: biodataToRequest } = useSingleBiodata(id);
  const { biodata: myBiodata } = useSingleBiodataByEmail();
  const alert = useAlert();

  const axiosPrivate = useAxiosPrivate();
  const { user } = useAuth();
  const { email, displayName } = user ? user : {};
  // get clent secret
  useEffect(() => {
    axiosPrivate
      .post("/unity-mates/v1/payments/client-secret", { price: 500 })
      .then(({ data }) => setClientSecret(data.client_secret))
      .catch((err) => console.log(err));
  }, [axiosPrivate]);

  // handle pay
  const handlePay = async (e) => {
    e.preventDefault();

    if (!element || !stripe) {
      return;
    }

    const card = element.getElement(CardElement);

    // create payment method
    await stripe.createPaymentMethod({
      type: "card",
      card,
    });

    // confirm payment
    const { errors: confirmError, paymentIntent } =
      await stripe.confirmCardPayment(clientSecret, {
        payment_method: {
          card,
          billing_details: {
            name: displayName || "annonymous",
            email: email || "annonymous",
          },
        },
      });
    if (confirmError) {
      alert(`Payment intent failed!`, "error");
    } else {
      const reqesyInfo = {
        name: biodataToRequest?.name,
        self_name: displayName,
        biodata_id: biodataToRequest?.biodata_id,
        self_biodata_id: myBiodata?.biodata_id,
        mobile_no: biodataToRequest?.mobile_number,
        email: biodataToRequest?.email,
        self_email: email,
        price: 500,
        transection_id: paymentIntent.id,
      };

      try {
        const res = await axiosPrivate.post(
          "/unity-mates/v1/requests",
          reqesyInfo
        );
        if (res.data._id) {
          alert(`You have requested successfully!`, "success");
          navigate("/dashboard/my-contact-request");
        }
      } catch (err) {
        if (err) {
          alert(`Your request failed!`, "error");
        }
      }
    }
  };

  return (
    <section className="min-h-[700px] pb-10 md:pb-14">
      <SectionWrapperSmall>
        <SectionHeader title="Pay for contact" />
        <form onSubmit={handlePay}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 items-end">
            <div className="form-control">
              <label className="label">
                <p className="label-text text-desc-color">
                  <img
                    src="https://unity-mates-server.vercel.app/images/cards.png"
                    alt=""
                  />
                </p>
              </label>
              <div className="border px-4 py-3">
                <CardElement
                  options={{
                    style: {
                      base: {
                        fontSize: "16px",
                        color: "#424770",
                        "::placeholder": {
                          color: "#aab7c4",
                        },
                      },
                      invalid: {
                        color: "#9e2146",
                      },
                    },
                  }}
                />
              </div>
            </div>

            <div className="form-control">
              <label className="label">
                <p className="label-text text-desc-color">Email</p>
              </label>
              <input
                type="text"
                defaultValue={email}
                className="input input-bordered rounded-none"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <p className="label-text text-desc-color">Biodata Id</p>
              </label>
              <input
                type="text"
                defaultValue={biodataToRequest?.biodata_id}
                className="input input-bordered rounded-none"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <p className="label-text text-desc-color">Self Biodata Id</p>
              </label>
              <input
                type="text"
                defaultValue={myBiodata?.biodata_id}
                className="input input-bordered rounded-none"
                disabled
              />
            </div>
            <div className="form-control">
              <label className="label">
                <p className="label-text text-desc-color">Total Amount (TK)</p>
              </label>
              <input
                type="text"
                defaultValue="500"
                className="input input-bordered rounded-none"
                disabled
              />
            </div>
          </div>
          <div className="form-control  mt-10  items-center ">
            <button
              className="btn btn-primary  bg-secondary-color hover:bg-primary-color border-none  text-white text-base px-10 md:px-14 py-2 rounded-full"
              disabled={!clientSecret || !stripe || !element}
            >
              Checkout
            </button>
          </div>
        </form>
      </SectionWrapperSmall>
    </section>
  );
};

export default CheckoutForm;
