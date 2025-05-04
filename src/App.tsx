import { Route, Routes } from "react-router-dom";
import { Home } from "./pages/Home";
import Navbar from "./components/shared/Navbar";
import Footer from "./components/home/Footer";
import About from "./pages/About";
import Services from "./pages/Services";
import ContactUs from "./pages/ContactUs";

function App() {
  return (
    <div className="font-inter">
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/about" element={<About />} />
        <Route path="/services" element={<Services />} />
        <Route path="/contact" element={<ContactUs />} />
      </Routes>
      <Footer />
    </div>
  );
}

export default App;
