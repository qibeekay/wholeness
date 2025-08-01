import { useState } from "react";
import { CardElement, useStripe, useElements } from "@stripe/react-stripe-js";
import { confirmCheckout, createPaymentIntent } from "../../api/store/Product";
import { useCart } from "../../components/context/CartContext";

const StripeCheckout = ({
  items,
  total,
}: {
  items: { id: number; qty: number }[];
  total: number;
}) => {
  const stripe = useStripe();
  const elements = useElements();
  const [clientSecret, setClientSecret] = useState<string | null>(null);
  const [loading, setLoading] = useState(false);
  const { clearCart } = useCart();

  const startCheckout = async () => {
    setLoading(true);
    try {
      const { data } = await createPaymentIntent(items);
      setClientSecret(data.data.clientSecret);
      console.log(data.data);
    } catch (error) {
      console.error("Error creating payment intent:", error);
      //   alert("Failed to start checkout. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  const handleSubmit = async () => {
    if (!stripe || !elements || !clientSecret) return;
    setLoading(true);

    try {
      const { paymentIntent, error } = await stripe.confirmCardPayment(
        clientSecret,
        {
          payment_method: {
            card: elements.getElement(CardElement)!,
          },
        }
      );

      if (error) {
        // alert(error.message);
      } else if (paymentIntent?.status === "succeeded") {
        await confirmCheckout(paymentIntent.id);
        // alert("Payment successful!");
        clearCart(); // Clear the cart after successful payment
        // You might want to redirect to a success page here
      }
    } catch (error) {
      console.error("Payment error:", error);
      //   alert("Payment failed. Please try again.");
    } finally {
      setLoading(false);
    }
  };

  return (
    <>
      {!clientSecret ? (
        <button
          onClick={startCheckout}
          disabled={loading || items.length === 0}
          className="cursor-pointer bg-primary text-white py-[10px] w-full h-[60px] px-[14px] text-[16px] font-bold rounded-full hover:bg-primary/90 transition-colors ease-in-out duration-300 flex items-center justify-center gap-4"
        >
          {loading
            ? "Preparing checkout..."
            : `Proceed to Checkout (£${total.toFixed(2)})`}
        </button>
      ) : (
        <div className="mt-4">
          <CardElement
            className="border rounded p-4 bg-white"
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
          <button
            onClick={handleSubmit}
            disabled={!stripe || loading}
            className="cursor-pointer bg-primary text-white py-[10px] w-full h-[60px] px-[14px] text-[16px] font-bold rounded-full hover:bg-primary/90 transition-colors ease-in-out duration-300 mt-4"
          >
            {loading ? "Processing…" : `Pay £${total.toFixed(2)}`}
          </button>
        </div>
      )}
    </>
  );
};

export default StripeCheckout;
