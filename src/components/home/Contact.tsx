import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

// Contact information array
const contactItems = [
  {
    icon: "location.png",
    text: "Beaconsfield Palace, Tilbury Calcutta Road, Thurrock, East of England, RM18 7EN ",
  },
  { icon: "phone.png", text: "+234810333333333" },
  { icon: "gmail.png", text: "wholeness@gmail.com" },
  { icon: "facebook.png", text: "@wholenesshaven" },
  { icon: "instagram.png", text: "@wholenesshaven" },
];
const Contact = () => {
  return (
    <section className="w-full bg-[#F9F5FF]">
      <div className="max-w-[1600px] mx-auto px-4 py-20">
        <div>
          <h1 className="text-center font-bold xs:text-[24px] sm:text-[40px]">
            Contact Us
          </h1>
        </div>

        <div className="flex items-center flex-col-reverse md:flex-row gap-10 mt-10 md:mt-20">
          {/* text */}
          <div className="w-full">
            <div>
              <h1 className="font-jakarta text-[24px] sm:text-[32px] font-medium">
                Get in Touch With Us!
              </h1>
              <p className=" sm:text-[24px] max-w-[500px] mt-5">
                We’d love to hear from you! Reach out for inquiries,
                partnerships, or support.
              </p>
            </div>
            {/* contact details */}
            <div className="mt-10">
              <div className="flex flex-col gap-6">
                {contactItems.map((item, index) => (
                  <div key={index} className="flex items-center gap-4">
                    <div>
                      <img src={getImageSrc(item.icon)} alt="" />
                    </div>
                    <p className="font-light text-[#666666] text-base sm:text-[18px] ">
                      {item.text}
                    </p>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* form */}
          <div className="w-full">
            <form action="" className="flex flex-col gap-5">
              {/* firstname / lastname */}
              <div className="flex flex-col sm:flex-row gap-y-5 gap-x-10">
                {/* first name */}
                <div className="">
                  <label
                    htmlFor="FirstName"
                    className="text-base text-[#344054]"
                  >
                    First name
                  </label>
                  <input
                    required
                    type="text"
                    className="mt-1 w-full border border-[#D0D5DD] px-[19.2px] py-[14.4px] rounded-full bg-white placeholder:text-[#667085] placeholder:text-base"
                    placeholder="First name"
                  />
                </div>

                {/* last name */}
                <div className="">
                  <label
                    htmlFor="LastName"
                    className="text-base text-[#344054]"
                  >
                    Last name
                  </label>
                  <input
                    required
                    type="text"
                    className="mt-1 w-full border border-[#D0D5DD] px-[19.2px] py-[14.4px] rounded-full bg-white placeholder:text-[#667085] placeholder:text-base"
                    placeholder="Last name"
                  />
                </div>
              </div>

              {/* email */}
              <div className="">
                <label htmlFor="Email" className="text-base text-[#344054]">
                  Email
                </label>
                <input
                  required
                  type="text"
                  className="mt-1 w-full border border-[#D0D5DD] px-[19.2px] py-[14.4px] rounded-full bg-white placeholder:text-[#667085] placeholder:text-base"
                  placeholder="you@company.com"
                />
              </div>

              {/* phone number */}
              <div className="">
                <label
                  htmlFor="PhoneNumber"
                  className="text-base text-[#344054]"
                >
                  Phone number
                </label>
                <input
                  required
                  type="text"
                  className="mt-1 w-full border border-[#D0D5DD] px-[19.2px] py-[14.4px] rounded-full bg-white placeholder:text-[#667085] placeholder:text-base"
                  placeholder="+1 (555) 000-0000"
                />
              </div>

              {/* message */}
              <div>
                <label htmlFor="Message" className="text-base text-[#344054]">
                  Message
                </label>
                <textarea
                  name=""
                  id=""
                  className="mt-1 w-full border border-[#D0D5DD] px-[19.2px] py-[14.4px] rounded-[36px] h-[153px] bg-white "
                ></textarea>
              </div>

              <button className="w-full bg-[#7F56D9] text-white py-[14.4px] px-[24px] rounded-full cursor-pointer">
                Send message
              </button>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
