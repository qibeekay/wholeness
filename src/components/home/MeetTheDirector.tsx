import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const MeetTheDirector = () => {
  // Director data
  const directorInfo = {
    name: "Grace Ale-dare",
    role: "Director",
    image: "mage.jpg",
    experience: {
      years: "15+ years of experience",
      description:
        "Certified Dementia Trainer, and a passionate advocate for ageing with dignity and joy.",
    },
  };

  // Contact information array
  const contactItems = [
    { icon: "phone.png", text: "+234810333333333" },
    { icon: "gmail.png", text: "wholeness@gmail.com" },
    { icon: "facebook.png", text: "@wholenesshaven" },
    { icon: "instagram.png", text: "@wholenesshaven" },
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
                className="w-full h-full object-cover"
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
                  <div>
                    <img src={getImageSrc(item.icon)} alt="" />
                  </div>
                  <p className="font-light text-[#666666]">{item.text}</p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* explained details */}
        <div className="space-y-8 mt-8 grid grid-cols-1 md:grid-cols-2 place-items-center md:gap-[32px] max-w-[1400px] lg:p-[32px] mx-auto">
          {/* experience */}
          <div className="w-full md:py-1">
            <h2 className="text-[24px] lg:text-[32px] text-primary font-jakarta font-bold">
              {directorInfo.experience.years}
            </h2>
            <p className="text-[#666666] lg:text-[24px] mt-3 max-w-[400px]">
              {directorInfo.experience.description}
            </p>
          </div>

          {/* skills */}
          <div className="w-full pl-0 md:pl-10 lg:pl-[10rem] md:border-l md:py-1">
            <h2 className="text-[24px] lg:text-[32px] text-primary font-jakarta font-bold">
              Expert Skills
            </h2>
            <div className="space-y-2 mt-3">
              {skills.map((skill, index) => (
                <div key={index} className="flex items-center gap-4">
                  <div>
                    <img src={getImageSrc("star.png")} alt="" />
                  </div>
                  <p className="text-base lg:text-[18px] font-light text-[#666666]">
                    {skill}
                  </p>
                </div>
              ))}
            </div>
          </div>
        </div>

        {/* contribution */}
        <div className="w-full max-w-[1400px] mx-auto mt-10">
          <h1 className="text-primary font-bold text-[18px] md:text-[24px]">
            In addition to Director’s work in the community
          </h1>
          <p className="py-4 text-base md:text-[18px]">
            Grace has worked in the Operating Theatre as an Anaesthetic and
            Recovery Practitioner, providing essential care during critical
            surgical moments. She is also a qualified Health Coach, empowering
            people to live well through lifestyle choices, wellness education,
            and holistic support.
          </p>
          <p className="text-base md:text-[18px]">
            Grace’s unique blend of clinical, social care, and coaching
            experience gives her a deep understanding of the challenges faced by
            individuals and families – and she is committed to creating safe,
            uplifting spaces where everyone feels seen, valued, and supported.
          </p>
        </div>
      </div>
    </section>
  );
};

export default MeetTheDirector;
