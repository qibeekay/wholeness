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
                Wholeness Haven CIC was founded by experienced care
                professionals with a deep passion for ensuring older adults,
                including those living with dementia, can enjoy the fullness of
                latter life. We combine expert knowledge, genuine compassion,
                and innovative approaches to offer a wide range of activities,
                therapies, and essential support tailored specifically to
                individual needs.
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
                We believe every older adult deserves to enjoy the fullness of
                latter life. Wholeness Haven CIC is your community-based
                well-being club, offering inclusive and engaging activities for
                those experiencing the challenges of ageing, along with vital
                support for the people who care for them.
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
