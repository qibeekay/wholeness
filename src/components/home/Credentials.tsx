import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const Credential = () => {
  return (
    <section className="py-32 bg-white">
      <div className="containe mx-auto px-4 sm:px-6 lg:px-8 ">
        {/* <div className="text-center mb-12">
          <h2 className=" text-[24px] md:text-4xl mb-4 text-teal-900">
            Professional Credentials
          </h2>
          <p className=" text-[18px] md:text-xl text-gray-600 max-w-2xl mx-auto">
            Qualified and registered with leading health and wellness
            organizations
          </p>
        </div> */}

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 xl:grid-cols-4 items-center justify-center gap-6 max-w-6xl mx-auto">
          {/* <div>
            <img
              src={getImageSrc("c.png")}
              alt="Association of Naturopathic Practitioners - Member"
              className="w-full max-w-55 mx-auto h-auto"
            />
          </div> */}

          <div>
            <img
              src={getImageSrc("c1.jpg")}
              alt=""
              className="w-full max-w-55 mx-auto h-auto"
            />
          </div>

          <div>
            <img
              src={getImageSrc("c2.jpg")}
              alt=""
              className="w-full max-w-55 mx-auto h-auto"
            />
          </div>

          {/* <div>
            <img
              src={getImageSrc("c2.png")}
              alt="Association of Naturopathic Practitioners - Health Coach"
              className="w-full max-w-55 mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src={getImageSrc("c3.png")}
              alt="Association of Naturopathic Practitioners - Health Coach"
              className="w-full max-w-55 mx-auto h-auto"
            />
          </div>
          <div>
            <img
              src={getImageSrc("she.png")}
              alt="Association of Naturopathic Practitioners - Health Coach"
              className="w-full max-w-55 mx-auto h-auto"
            />
          </div> */}
        </div>
        {/* 
        <div className="text-center mt-12">
          <p className="text-gray-700 max-w-3xl mx-auto leading-relaxed">
            As a Registered Health Coach and Certified Menopause Coach, I bring
            evidence-based expertise and professional training to support your
            wellbeing journey with confidence and care.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default Credential;
