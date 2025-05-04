import { getImageSrc } from "../../utils/imageUtils";

const Career = () => {
  const careerSupports = [
    {
      title: "Dementia Training Workshops",
      description:
        "Empowering carers and professionals with the tools to provide compassionate care",
      lightImage: "sp.png",
      darkImage: "sp-dark.png",
    },
    {
      title: "Respite Breaks During Club Hours",
      description: "Short breaks that make a big difference in your day",
      lightImage: "sp1.png",
      darkImage: "sp1-dark.png",
    },
    {
      title: "Information & Resource Hub",
      description:
        "Easy-to-access guidance, tools, and trusted resources to help you navigate dementia and ageing with confidence",
      lightImage: "sp2.png",
      darkImage: "sp2-dark.png",
    },
    {
      title: "Peer Support Groups",
      description:
        "A safe space to talk, learn, and grow with people on a similar journey",
      lightImage: "sp3.png",
      darkImage: "sp3-dark.png",
    },
  ];

  return (
    <section className="max-w-[1600px] mx-auto px-4 py-20">
      <div>
        <h1 className="text-left font-bold xs:text-[24px] sm:text-[40px]">
          Career Support
        </h1>
      </div>

      {/* supports */}
      <div className="flex items-center flex-wrap justify-center gap-5 mt-5 md:mt-10">
        {careerSupports.map((support, index) => (
          <div
            key={index}
            className="max-w-[373px] h-[333px] md:h-[439px] rounded-[16px] p-4 md:p-[30px] flex flex-col items-center justify-center gap-y-5 bg-[#ECE1FA] text-primary hover:bg-primary hover:text-[#ECE1FA] text-center group transition-all duration-300"
          >
            {/* icon */}
            <div className="relative w-[50px] h-[50px] md:w-[100px] md:h-[100px]">
              <img
                src={getImageSrc(support.lightImage)}
                alt={support.title}
                className="absolute w-full h-full object-contain group-hover:opacity-0 transition-opacity duration-300"
              />
              <img
                src={getImageSrc(support.darkImage)}
                alt={support.title}
                className="absolute w-full h-full object-contain opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              />
            </div>

            {/* text */}
            <h1 className="font-medium text-base md:text-[24px]">
              {support.title}
            </h1>

            {/* paragraph */}
            <p className="text-sm md:text-base">{support.description}</p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Career;
