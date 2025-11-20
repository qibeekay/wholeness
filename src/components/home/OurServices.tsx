import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const OurServices = () => {
  return (
    <section className="max-w-[1600px] mx-auto px-4 py-20">
      <div>
        <h1 className="text-center font-bold xs:text-[24px] sm:text-[40px]">
          Club Sessions
        </h1>
        {/* <p className="text-center text-sm sm:text-base">
          We provide meaningful activities for individuals with dementia and
          ageing-related conditions — and essential support for their carers.
        </p> */}
      </div>

      {/* club section */}
      <div className="flex items-center flex-col md:flex-row gap-10 mt-10 md:mt-20">
        {/* text */}
        <div className="w-full flex flex-col gap-6">
          <h1 className="text-[18px] md:text-[24px] font-jakarta font-medium">
            Weekly Club Sessions
          </h1>

          {/* date */}
          <div className="flex items-center gap-4">
            <img src={getImageSrc("bdate.png")} alt="" />
            <p className="font-medium text-sm md:text-base">Every Thursday</p>
          </div>

          {/* location */}
          <div className="flex items-center gap-4">
            <img src={getImageSrc("location.png")} alt="" />
            <p className="font-medium text-sm md:text-base">
              Beaconsfield Palace, Tilbury Calcutta Road, Thurrock, East of
              England, RM18 7EN
            </p>
          </div>

          {/* session 1 */}
          {/* <div className="flex items-center gap-4">
            <img src={getImageSrc("time.png")} alt="" />
            <p className="font-medium text-sm md:text-base">
              Session 1: 9:30 AM - 1: 30 PM
            </p>
          </div> */}

          {/* session 2 */}
          <div className="flex gap-4">
            <div>
              <div>
                <img src={getImageSrc("time.png")} alt="" />
              </div>
            </div>
            <div className="font-medium text-sm md:text-base">
              <p>Session 1: 11:00 AM - 2:00 PM</p>
              <p className="text-sm font-bold mt-5">
                More Thurrock locations coming soon!
              </p>
            </div>
          </div>
        </div>

        {/* image */}
        <div className="w-full">
          <div>
            <img src={getImageSrc("service.png")} alt="" />
          </div>
        </div>
      </div>
    </section>
  );
};

export default OurServices;
