import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { useParams } from "react-router-dom";
import useSingleBiodata from "../../hooks/useSingleBiodata";
import CheckoutForm from "../Shared/CheckoutForm";
const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
const Checkout = () => {
  const { id } = useParams();
  const { biodata } = useSingleBiodata(id);

  return (
    <Elements stripe={stripePromise}>
      {biodata && <CheckoutForm biodata={biodata} />}
    </Elements>
  );
};

export default Checkout;
