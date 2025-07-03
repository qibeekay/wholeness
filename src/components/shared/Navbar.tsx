import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { useState } from "react";
import { getImageSrc } from "../../utils/imageUtils";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";

const links = ["Home", "About", "Services", "Contact", "Resources", "Events"];

const mobileLinks = [
  "Home",
  "About",
  "Services",
  "Contact",
  "Resources",
  "Events",
  "Get Involved",
];

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  // Animation variants for mobile menu
  const menuVariants = {
    closed: {
      opacity: 0,
      y: -20,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
    open: {
      opacity: 1,
      y: 0,
      transition: {
        duration: 0.3,
        ease: "easeInOut",
      },
    },
  };

  // Animation variants for menu items
  const itemVariants = {
    closed: { opacity: 0, x: -20 },
    open: (i: number) => ({
      opacity: 1,
      x: 0,
      transition: {
        delay: i * 0.1,
        duration: 0.3,
      },
    }),
  };

  return (
    <nav className="fixed top-4 left-0 right-0 z-50 m-2">
      <div className="flex bg-white items-center justify-between p-[14px] max-w-[1600px] mx-auto rounded-full border">
        {/* logo */}
        <div>
          <img
            src={getImageSrc("Wlogo.png")}
            alt="Wholeness Haven Logo"
            className="w-15 aspect-[2/1.5]"
          />
        </div>

        {/* links */}
        <div className="hidden lg:flex space-x-8">
          {links.map((item) => (
            <div>
              <Link
                to={`/${item === "Home" ? "" : item.toLowerCase()}`}
                className="text-primary text-[16px] font-medium hover:font-bold transition-all duration-300 ease-in-out"
              >
                {item}
              </Link>
            </div>
          ))}
        </div>

        {/* button */}
        <div className="hidden md:block">
          <button className="cursor-pointer bg-primary text-white py-[10px] w-[224px] h-[60px] px-[14px] text-[16px] font-bold rounded-full hover:bg-primary/90 transition-colors ease-in-out duration-300">
            Get Involved
          </button>
        </div>

        {/* hamburger */}
        <div className="md:hidden">
          <motion.button
            onClick={toggleMenu}
            className="text-black focus:outline-none cursor-pointer"
            aria-label={isOpen ? "Close Menu" : "Open Menu"}
            whileHover={{ scale: 1.2 }}
            whileTap={{ scale: 0.9 }}
          >
            {isOpen ? <RiCloseFill size={30} /> : <RiMenu3Line size={30} />}
          </motion.button>
        </div>
      </div>

      {/* mobile menu */}
      <AnimatePresence>
        {isOpen && (
          <motion.div
            variants={menuVariants}
            initial="closed"
            animate="open"
            exit="closed"
            className="md:hidden bg-primary/50 backdrop-blur-md p-4 rounded-xl mt-2"
          >
            <div className="flex flex-col space-y-4">
              {mobileLinks.map((item, index) => (
                <motion.a
                  key={item}
                  href={`/${
                    item === "Home"
                      ? ""
                      : item === "Get Involved"
                      ? "contact"
                      : item.toLowerCase()
                  }`}
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  custom={index}
                  className={`${
                    item === "Get Involved"
                      ? "bg-blue-600 py-2 px-4 rounded-lg hover:bg-blue-500 transition"
                      : "hover:text-neutral-200"
                  } text-white text-center`}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
    </nav>
  );
};

export default Navbar;
