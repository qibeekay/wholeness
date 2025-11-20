import React from "react";
import { getImageSrc } from "../../utils/imageUtils";
import { Link } from "react-router-dom";

const Footer = () => {
  return (
    <footer className="bg-[#2C1B42] text-white text-base">
      <div className="max-w-[1600px] mx-auto px-4 py-20">
        <div className="flex md:items-center flex-col md:flex-row justify-between gap-10">
          {/* info */}
          <div className="max-w-[450px]">
            {/* logo */}
            <div>
              <img src={getImageSrc("flogo.png")} alt="" />
            </div>

            {/* text */}
            <div>
              <h1 className="my-5 font-bold text-[18px] sm:text-[24px]">
                Subscribe
              </h1>
              <p>
                Join our newsletter to stay up to date on features and releases.
              </p>
            </div>

            {/* form */}
            <div className="my-5">
              <form action="">
                <div className="flex items-center gap-5 w-full border border-[#A585CE] rounded-full py-[16px] px-[10px]">
                  <div>
                    <div>
                      <img src={getImageSrc("bmail.png")} alt="" />
                    </div>
                  </div>

                  <input
                    type="text"
                    className="w-full bg-transparent outline-none border-none placeholder:text-white text-white"
                    placeholder="Enter Your E-mail"
                  />
                </div>

                <div className="w-full mt-5">
                  <button className="w-full bg-primary text-white border border-[#A3BDA7] rounded-full py-[16px] px-[10px]">
                    Subscribe
                  </button>
                </div>
              </form>
            </div>
            <p className="text-xs sm:text-base">
              By subscribing you agree to with our Privacy Policy{" "}
            </p>
          </div>

          {/* links */}
          <div className="max-w-[712px] mt-7 md:mt-0">
            <div className="flex flex-col sm:flex-row gap-10 sm:gap-[10rem]">
              {/* company */}
              <div className="flex flex-col gap-7">
                <h1 className="font-bold text-[24px]">Company</h1>

                {/* home */}
                <div>
                  <Link to={"/"} className="underline text-[18px] font-medium">
                    Home
                  </Link>
                </div>
                {/* home */}
                <div>
                  <Link
                    to={"/about"}
                    className="underline text-[18px] font-medium"
                  >
                    About
                  </Link>
                </div>
                {/* home */}
                <div>
                  <Link
                    to={"/services"}
                    className="underline text-[18px] font-medium"
                  >
                    Services
                  </Link>
                </div>
                {/* home */}
                <div>
                  <Link
                    to={"/contact"}
                    className="underline text-[18px] font-medium"
                  >
                    Contact
                  </Link>
                </div>
                {/* home */}
                <div>
                  <Link
                    to={"/blogs"}
                    className="underline text-[18px] font-medium"
                  >
                    Blogs
                  </Link>
                </div>
              </div>

              {/* company */}
              <div className="flex flex-col gap-7">
                <h1 className="font-bold text-[24px]">Support</h1>

                {/* appointment */}
                {/* <div>
                  <Link
                    to={"/contact"}
                    className="underline text-[18px] font-medium"
                  >
                    Book an appointment
                  </Link>
                </div> */}

                {/* donate */}
                <div>
                  <Link
                    to={
                      "https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=384740&invite=ul051a&referral-campaign=c2s&utm_source=easyfundraising-app&utm_medium=referral&utm_content=share-tray"
                    }
                    target="blank_"
                    className="underline text-[18px] font-medium"
                  >
                    Donate now
                  </Link>
                </div>

                {/* partner */}
                <div>
                  <Link
                    to={
                      "https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=384740&invite=ul051a&referral-campaign=c2s&utm_source=easyfundraising-app&utm_medium=referral&utm_content=share-tray"
                    }
                    target="blank_"
                    className="underline text-[18px] font-medium"
                  >
                    Partner with us
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
