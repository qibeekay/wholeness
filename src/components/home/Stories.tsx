import { getImageSrc } from "../../utils/imageUtils";

const Stories = () => {
  return (
    <section className="bg-[#00000017]">
      <div className="max-w-[1600px] mx-auto px-4 py-20">
        <div className="flex items-center justify-between flex-col llg:flex-row gap-10">
          {/* text */}
          <div className="max-w-[772px] mx-auto sm:mx-0 flex flex-col space-y-7">
            {/* our story */}
            <div className="flex flex-col space-y-4">
              {/* icon */}
              <div className="">
                <img
                  src={getImageSrc("story.png")}
                  alt="our story"
                  className="w-[74px] h-[62px]"
                />
              </div>

              {/* header */}
              <h2 className="font-jakarta text-[32px] font-bold">Our Story</h2>

              {/* paragraph */}
              <p className="text-sm xs:text-base md:text-lg">
                Wholeness Haven CIC was born from a passion to see individuals
                with dementia and older adults experience life to the fullest.
                Founded by experienced care professionals, we combine knowledge,
                compassion, and innovation to provide a wide range of
                activities, therapies, and support tailored to individual needs.
              </p>
            </div>

            {/* our mission */}
            <div className="flex flex-col space-y-4">
              {/* icon */}
              <div className="">
                <img
                  src={getImageSrc("mission.png")}
                  alt="our mission"
                  className="w-[65px] aspect-square"
                />
              </div>

              {/* header */}
              <h2 className="font-jakarta text-[32px] font-bold">
                Our Mission
              </h2>

              {/* paragraph */}
              <p className="text-sm xs:text-base md:text-lg">
                Wholeness Haven CIC is a community-based well-being club
                supporting people living with dementia and those experiencing
                the challenges of ageing. We offer inclusive, engaging
                activities and essential support for carers.
              </p>
            </div>
          </div>

          {/* images */}
          <div>
            <div className="">
              <img src={getImageSrc("whole4.png")} alt="" />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Stories;
