import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

// Contact information array
const contactItems = [
  {
    icon: "location.png",
    link: "https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=384740&invite=ul051a&referral-campaign=c2s&utm_source=easyfundraising-app&utm_medium=referral&utm_content=share-tray",
    text: "Registered office address: 158 Dock Road, Tilbury, England, RM18 7BS",
  },
  { icon: "phone.png", link: "", text: "+44 7428 697038" },
  {
    icon: "gmail.png",
    link: "mailto:wholenesshavencic@gmail.com",
    text: "wholenesshavencic@gmail.com",
  },
  {
    icon: "facebook.png",
    link: "https://www.facebook.com/share/1BTzBNBfRQ/?mibextid=wwXIfr",
    text: "@wholenesshaven",
  },
  {
    icon: "instagram.png",
    link: "https://youtube.com/@wholenesshaven-l1s?si=9SAYi0GUKAeVUlat",
    text: "@wholenesshaven",
  },
  {
    icon: "instagram.png",
    link: "https://www.instagram.com/wholeness_havenclub?utm_source=qr&igsh=dHFibmQ1dnRva3dk",
    text: "@wholeness_havenclub",
  },
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
                    <a
                      href={`${item.link}`}
                      target="_blank"
                      className="font-light text-[#666666] hover:text-primary"
                    >
                      {item.text}
                    </a>
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
