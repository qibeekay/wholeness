import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/home/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";
import Events from "./pages/Events";
import Shop from "./pages/Shop";
import Carts from "./pages/Carts";
import Admin from "./pages/Admin/Admin";
import { Elements } from "@stripe/react-stripe-js";
import { loadStripe } from "@stripe/stripe-js";
import { CartProvider } from "./components/context/CartContext";
import { Toaster } from "sonner";
import BlogPage from "./pages/Blog";
import SingleBlog from "./components/home/SingleBlog";

function App() {
  const stripePromise = loadStripe(import.meta.env.VITE_STRIPE_PUBLISHABLE_KEY);
  return (
    <div className="font-inter">
      <Navbar />
      <Elements stripe={stripePromise}>
        <CartProvider>
          <Routes>
            <Route path="/" element={<Home />} />
            <Route path="/about" element={<About />} />
            <Route path="/services" element={<Services />} />
            <Route path="/contact" element={<ContactUs />} />
            <Route path="/events" element={<Events />} />
            <Route path="/store" element={<Shop />} />
            <Route path="/cart" element={<Carts />} />
            <Route path="/blogs" element={<BlogPage />} />
            <Route path="/blogs/:excerpts" element={<SingleBlog />} />
            <Route path="/admin" element={<Admin />} />
          </Routes>
        </CartProvider>
      </Elements>
      <Footer />
      <Toaster />
    </div>
  );
}

export default App;
