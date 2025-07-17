import { RiCloseFill, RiMenu3Line } from "@remixicon/react";
import { useState } from "react";
import { getImageSrc } from "../../utils/imageUtils";
import { Link } from "react-router-dom";
import { motion, AnimatePresence } from "motion/react";
import { googleLogout, useGoogleLogin } from "@react-oauth/google";
import axios from "axios";
import { Toaster, toast } from "sonner";

const links = [
  "Home",
  "About",
  "Services",
  "Contact",
  "Resources",
  "Events",
  "Store",
];

const mobileLinks = [
  "Home",
  "About",
  "Services",
  "Contact",
  "Resources",
  "Events",
  "Store",
];

interface UserData {
  id: string;
  name: string;
  email: string;
  picture?: string;
  // Add other user properties you expect from your backend
}

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const [user, setUser] = useState<UserData | null>(null);

  const API_URL = import.meta.env.VITE_API_URL;

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

  const login = useGoogleLogin({
    flow: "auth-code",
    onSuccess: async (codeResponse) => {
      try {
        const response = await axios.get(
          `${API_URL}/auth/google/callback.php`,
          {
            params: { code: codeResponse.code },
          }
        );

        console.log("Login Successful:", response.data);
        const userData = response.data.data;
        setUser(userData);
        localStorage.setItem("user", JSON.stringify(userData));
        toast.success("Login successful");
      } catch (err) {
        toast.error("Authentication failed");
        console.error(err);
      }
    },
    onError: (error) => {
      toast.error("Login Failed");
      console.error("Login Failed:", error);
    },
    scope: "email profile",
  });

  const logOut = () => {
    googleLogout();
    setUser(null);
    localStorage.removeItem("user");
    toast.success("Logged out successfully");
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
            <div key={item}>
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
        {/* auth section */}
        <div className="hidden md:flex items-center gap-4">
          {user ? (
            <div className="flex items-center gap-2">
              <img
                src={user.picture || getImageSrc("default-avatar.png")}
                alt="User profile"
                className="w-8 h-8 rounded-full"
              />
              <button
                onClick={logOut}
                className="text-sm cursor-pointer text-gray-600 hover:text-gray-900"
              >
                Logout
              </button>
            </div>
          ) : (
            <button
              onClick={() => login()}
              className="bg-primary text-white px-4 py-2 rounded-full hover:bg-blue-600 transition cursor-pointer"
            >
              Login
            </button>
          )}
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
                      ? "bg-primary py-2 px-4 rounded-lg hover:bg-blue-500 transition"
                      : "hover:text-neutral-200"
                  } text-white text-center`}
                  whileHover={{ x: 5 }}
                >
                  {item}
                </motion.a>
              ))}

              {/* Add mobile auth section */}
              {user ? (
                <motion.div
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  custom={mobileLinks.length}
                  className="flex items-center justify-center gap-2"
                >
                  <img
                    src={user.picture || getImageSrc("default-avatar.png")}
                    alt="User profile"
                    className="w-8 h-8 rounded-full"
                  />
                  <button onClick={logOut} className="text-white text-sm">
                    Logout
                  </button>
                </motion.div>
              ) : (
                <motion.button
                  variants={itemVariants}
                  initial="closed"
                  animate="open"
                  custom={mobileLinks.length}
                  onClick={() => login()}
                  className="bg-white text-primary px-4 py-2 rounded-full hover:bg-gray-100 transition text-center"
                >
                  Login
                </motion.button>
              )}
            </div>
          </motion.div>
        )}
      </AnimatePresence>
      <Toaster />
    </nav>
  );
};

export default Navbar;
