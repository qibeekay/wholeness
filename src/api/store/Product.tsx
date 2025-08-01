import axios from "axios";
import { toast } from "react-toastify";

const URL = import.meta.env.VITE_API_URL;
const bearer = import.meta.env.VITE_BEARER_TOKEN;

// get chat
export const GetProducts = async () => {
  try {
    const response = await axios.get(`${URL}/store/product.php`, {
      headers: {
        Authorization: `Bearer ${bearer}`,
      },
    });

    if (response.data.success === false) {
      toast.error(response.data.message);
      // return false; // Verification failed
      return [];
    } else {
      return response.data.data;
    }
  } catch (error: any) {
    console.error("Login Error", error);
    toast.error("Error login user in");
    throw new Error(error.response?.data?.message || "Failed to login");
  }
};

// POST /api/store/cart/checkout
// POST /store/cart/checkout.php   (session cookie)
export const createPaymentIntent = (items: { id: number; qty: number }[]) =>
  axios.post(
    `${URL}/cart/checkout.php`,
    { items },
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );

// POST /store/cart/confirm-checkout.php
export const confirmCheckout = (paymentIntentId: string) =>
  axios.post(
    `${URL}/cart/confirm-checkout.php`,
    { paymentIntentId },
    { headers: { "Content-Type": "application/json" }, withCredentials: true }
  );
