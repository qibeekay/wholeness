import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const AboutSection = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 py-20">
      <div>
        <h1 className="text-center font-bold xs:text-[24px] sm:text-[40px] mb-6">
          About Us
        </h1>
      </div>

      <div className="flex items-center flex-col llg:flex-row gap-10">
        {/* image container */}
        <div className="max-w-[843px]">
          <div className="w-full">
            <img
              className="w-full h-full"
              src={getImageSrc("whole2.png")}
              alt=""
            />
          </div>
        </div>

        {/* text flex */}
        <div className="max-w-[653px] mx-auto sm:mx-0">
          <div className="w-full">
            <p className="text-[24px]">A Little About Us</p>
            <p className="text-sm xs:text-base md:text-lg ">
              At <span className="font-bold rounded">Wholeness Haven </span>
              ageing well-being Club, we believe that every stage of life
              deserves to be lived with joy, dignity, and connection. We offer a
              nurturing space where older adults, those embracing ageing well,
              and people living with dementia can thrive, not just survive, as
              well as their dedicated carers and everyone in the Thurrock
              community and nearby.
            </p>
            {/* <p className="text-sm xs:text-base md:text-lg ">
              <span className="font-bold rounded">Wholeness Haven </span>
              is a Ageing Well-being Club dedicated to supporting individuals
              affected by dementia and their carers. We offer a compassionate,
              community-focused space where people can connect, feel understood,
              and access holistic support.
            </p> */}
            {/* <p className="text-sm xs:text-base md:text-lg mt-5">
              <span className="font-bold rounded">Wholeness Haven </span>
              is a Ageing Well-being Club dedicated to supporting individuals
              affected by dementia and their carers.
            </p> */}
          </div>

          <div className="mt-6">
            <h1 className="text-[24px] font-bold mb-4">Our Values</h1>
            <div className="xs:px-5">
              <div className="relative bg-primary text-white rounded-[8px] p-5 xs:p-[3rem] max-w-[479px] flex flex-col gap-5">
                {/* Compassion */}
                <div className="relative">
                  <p className="text-[18px] sm:text-[24px] font-bold">
                    Compassion:
                  </p>
                  <p className="text-sm sm:text-[18px]">
                    We meet everyone with kindness and respect.
                  </p>
                  <div className="hidden xs:flex absolute -top-1 -left-[4rem] sm:-left-[5rem] transform">
                    <div className="w-10 sm:w-[64px] aspect-square rounded-full bg-[#2C1B42] grid place-content-center">
                      <img src={getImageSrc("check.png")} alt="" />
                    </div>
                  </div>
                </div>
                {/* Inclusion */}
                <div className="relative">
                  <p className="text-[18px] sm:text-[24px] font-bold">
                    Inclusion:
                  </p>
                  <p className="text-sm sm:text-[18px]">
                    Everyone belongs here, no matter their stage or ability.
                  </p>
                  <div className="hidden xs:flex absolute -top-1 -left-[4rem] sm:-left-[5rem] transform">
                    <div className="w-10 sm:w-[64px] aspect-square rounded-full bg-[#2C1B42] grid place-content-center">
                      <img src={getImageSrc("check.png")} alt="" />
                    </div>
                  </div>
                </div>
                {/* Empowerment */}
                <div className="relative">
                  <p className="text-[18px] sm:text-[24px] font-bold">
                    Empowerment:
                  </p>
                  <p className="text-sm sm:text-[18px]">
                    We encourage independence and celebrate each person’s
                    strengths.
                  </p>
                  <div className="hidden xs:flex absolute -top-1 -left-[4rem] sm:-left-[5rem] transform">
                    <div className="w-10 sm:w-[64px] aspect-square rounded-full bg-[#2C1B42] grid place-content-center">
                      <img src={getImageSrc("check.png")} alt="" />
                    </div>
                  </div>
                </div>
                {/* Joy */}
                <div className="relative">
                  <p className="text-[18px] sm:text-[24px] font-bold">Joy:</p>
                  <p className="text-sm sm:text-[18px]">
                    We create moments of laughter, music, and beauty every day.
                  </p>
                  <div className="hidden xs:flex absolute -top-1 -left-[4rem] sm:-left-[5rem] transform">
                    <div className="w-10 sm:w-[64px] aspect-square rounded-full bg-[#2C1B42] grid place-content-center">
                      <img src={getImageSrc("check.png")} alt="" />
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutSection;
