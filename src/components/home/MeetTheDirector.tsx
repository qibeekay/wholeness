import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

// YouTube Icon Component
const YouTubeIcon = ({ className = "w-6 h-6" }) => (
  <svg className={className} fill="currentColor" viewBox="0 0 24 24">
    <path d="M19.615 3.184c-3.604-.246-11.631-.245-15.23 0-3.897.266-4.356 2.62-4.385 8.816.029 6.185.484 8.549 4.385 8.816 3.6.245 11.626.246 15.23 0 3.897-.266 4.356-2.62 4.385-8.816-.029-6.185-.484-8.549-4.385-8.816zm-10.615 12.816v-8l8 3.993-8 4.007z" />
  </svg>
);

const MeetTheDirector = () => {
  // Director data
  const directorInfo = {
    name: "Grace Ale-dare",
    role: "Director",
    image: "grace.jpg",
    experience: {
      years: "More about Grace",
      description:
        "Grace has worked in the Operating Theatre as an Anaesthetic and Recovery Practitioner, providing essential care during critical surgical moments. She is also a qualified Health Coach, empowering people to live well through lifestyle choices, wellness education,and holistic support",
    },
  };

  // Contact information array
  const contactItems = [
    { icon: "phone.png", link: "", text: "+44 7428 697038" },
    {
      icon: "gmail.png",
      link: "mailto:info@wholenesshaven.co.uk",
      text: "info@wholenesshaven.co.uk",
    },
    {
      icon: "facebook.png",
      link: "https://www.facebook.com/share/1BTzBNBfRQ/?mibextid=wwXIfr",
      text: "@wholenesshaven",
    },
    {
      icon: "instagram.png",
      link: "https://www.instagram.com/wholeness_havenclub?utm_source=qr&igsh=dHFibmQ1dnRva3dk",
      text: "@wholeness_havenclub",
    },
    {
      icon: "youtube",
      link: "https://youtube.com/@wholenesshaven-l1s?si=9SAYi0GUKAeVUlat",
      text: "@wholenesshaven",
    },
  ];

  // Skills array
  const skills = [
    "Social care and healthcare",
    "MD (Obstetrics & Gynaecology, Delhi)",
    "Supporting the elders",
    "Individuals with dementia, and their families",
  ];

  return (
    <section className="w-full bg-[#F9F5FF] py-20">
      <div className="max-w-[1600px] bg-white mx-auto px-4 py-10">
        <h1 className="text-center font-bold xs:text-[24px] sm:text-[40px]">
          Meet the Director
        </h1>

        {/* directors details */}
        <div className="grid grid-cols-1 md:grid-cols-2 sm:place-items-center gap-[32px] max-w-[1400px] md:p-[32px] mx-auto">
          {/* image */}
          <div className="max-w-[520px]">
            <div className="max-w-[520px] aspect-square rounded-full overflow-hidden">
              <img
                className="w-full h-full object-cover object-top"
                src={getImageSrc(directorInfo.image)}
                alt={`Portrait of ${directorInfo.name}`}
              />
            </div>
            <div className="w-full text-center">
              <h2 className="text-[32px] font-bold text-primary">
                {directorInfo.name}
              </h2>
              <p className="mt-3 text-[20px] text-[#666666]">
                ({directorInfo.role})
              </p>
            </div>
          </div>

          {/* contact details */}
          <div>
            <p className="font-bold text-[24px] mb-4">Get in touch</p>
            <div className="flex flex-col gap-4">
              {contactItems.map((item, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div className="flex items-center justify-center w-6 h-6">
                    {item.icon === "youtube" ? (
                      <YouTubeIcon className="w-6 h-6 text-purple-800" />
                    ) : (
                      <img src={getImageSrc(item.icon)} alt="" />
                    )}
                  </div>
                  <a
                    href={`${item.link}`}
                    target="_blank"
                    rel="noopener noreferrer"
                    className="font-light text-[#666666] hover:text-primary"
                  >
                    {item.text}
                  </a>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* explained details */}
        <div className="space-y-8 mt-8 grid grid-cols-1 md:grid-cols-2 justify-center md:gap-[4px] max-w-[1400px] lg:p-[32px] mx-auto">
          {/* experience */}
          <div className="w-full md:py-1">
            <h2 className="text-[24px] lg:text-[32px] text-primary font-jakarta font-bold">
              {directorInfo.experience.years}
            </h2>
            <p className="text-[#666666] text-base md:text-[18px] mt-3 max-w-[400px]">
              {directorInfo.experience.description}
            </p>
          </div>

          {/* skills */}
          <div className="w-full pl-0 md:pl-10 lg:pl-[10rem] md:border-l md:py-1">
            <h2 className="text-[24px] lg:text-[32px] text-primary font-jakarta font-bold">
              Support our work
            </h2>
            <div className="space-y-2 mt-3">
              <p>
                Support Wholeness Haven CIC, our Ageing Well-being & Dementia
                Club. 💜
              </p>

              <p>
                It costs you nothing – just shop online through this link and
                retailers will donate to us:
              </p>

              <a
                href="https://www.easyfundraising.org.uk/support-a-good-cause/step-1/?char=384740&invite=ul051a&referral-campaign=c2s&utm_source=easyfundraising-app&utm_medium=referral&utm_content=share-tray"
                target="_blank"
                rel="noopener noreferrer"
                className="text-primary font-medium hover:underline"
              >
                Click here for Easy Fundraising
              </a>
            </div>
          </div>
        </div>

        {/* contribution */}
        {/* <div className="w-full max-w-[1400px] mx-auto mt-10">
          <h1 className="text-primary font-bold text-[18px] md:text-[24px]">
            In addition to Director's work in the community
          </h1>
          <p className="py-4 text-base md:text-[18px]">
            Grace has worked in the Operating Theatre as an Anaesthetic and
            Recovery Practitioner, providing essential care during critical
            surgical moments. She is also a qualified Health Coach, empowering
            people to live well through lifestyle choices, wellness education,
            and holistic support.
          </p>
          <p className="text-base md:text-[18px]">
            Grace's unique blend of clinical, social care, and coaching
            experience gives her a deep understanding of the challenges faced by
            individuals and families – and she is committed to creating safe,
            uplifting spaces where everyone feels seen, valued, and supported.
          </p>
        </div> */}
      </div>
    </section>
  );
};

export default MeetTheDirector;
