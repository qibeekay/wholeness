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

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
        <Route path="/events" element={<Events />} />
        <Route path="/store" element={<Shop />} />
        <Route path="/cart" element={<Carts />} />
        <Route path="/admin" element={<Admin />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
