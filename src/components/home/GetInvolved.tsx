import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const GetInvolved = () => {
  const careerSupports = [
    {
      title: "Volunteer with Us",
      description: "Share your time, skills, and kindness.",
      btn: "Become a Volunteer",
      link: "/contact",
      image: "volunteer.png",
    },
    {
      title: "Make a Donation",
      description: "Every gift  supports joy, dignity and care.",
      btn: "Donate Now",
      link: "#",
      image: "donate.png",
    },
    {
      title: "Information & Resource Hub",
      description: "Let’s build something beautiful together.",
      btn: "Partner With Us",
      link: "/contact",
      image: "partner.png",
    },
    {
      title: "Join Our Mailing list",
      description: "Be the first to hear about our sessions and stories.",
      btn: "Suscribe",
      link: "",
      image: "mailing.png",
    },
  ];
  return (
    <section className="w-full">
      <div className="max-w-[1600px] mx-auto px-4 py-20">
        <div>
          <h1 className="text-center font-bold xs:text-[24px] sm:text-[40px]">
            Get Involved
          </h1>
        </div>

        <div className="grid sm:grid-cols-2 gap-4 md:gap-10 max-w-[1000px] mx-auto mt-10">
          {careerSupports.map((support, index) => (
            <div
              key={index}
              className="max-w-[509px] h-[333px] md:h-[500px] rounded-[16px] p-4 md:p-[30px] flex flex-col items-center justify-center gap-y-5 bg-[#D1B3FF] text-black text-center"
            >
              {/* icon */}
              <div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px]">
                <img
                  src={getImageSrc(support.image)}
                  alt={support.title}
                  className="absolute w-full h-full object-contain"
                />
              </div>

              <div className="flex flex-col items-center gap-2">
                {/* text */}
                <h1 className="font-bold font-jakarta text-base md:text-[24px]">
                  {support.title}
                </h1>

                {/* paragraph */}
                <p className="text-sm md:text-base text-[#2D2D2D] max-w-[257px]">
                  {support.description}
                </p>
              </div>

              <div className=" w-full">
                {/* button */}
                <button className="w-full md:w-[300px] h-[60px] p-[10px] bg-primary text-white rounded-[8px] cursor-pointer font-bold hover:bg-primary/90 transition-colors ease-in-out duration-300 text-sm sm:text-base">
                  {support.btn}
                </button>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default GetInvolved;
