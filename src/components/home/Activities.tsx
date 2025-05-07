import React from "react";
import { getImageSrc } from "../../utils/imageUtils";

const Activities = () => {
  const activities = [
    {
      title: "Music and singing sessions",
      image: "act1.png",
    },
    {
      title: "Reminiscence therapy and memory games",
      image: "act3.jpg",
    },
    {
      title: "Arts & Crafts",
      image: "act4.jpg",
    },
    {
      title: "Gentle chair-based exercise and movement",
      image: "act5.jpg",
    },
    {
      title: "Gardening and nature-based therapy",
      image: "act6.jpg",
    },
    {
      title: "Sensory stimulation activities",
      image: "act7.jpg",
    },
    {
      title: "Carer support groups and well-being sessions",
      image: "act8.jpg",
    },
    s,
  ];

  return (
    <section className="max-w-[1600px] mx-auto px-4 py-20">
      <div>
        <h1 className="text-left font-bold xs:text-[24px] sm:text-[40px]">
          Activities Include:
        </h1>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 xl:grid-cols-3 place-items-center gap-2 sm:gap-5 max-w-[1220px] mx-auto mt-10">
        {activities.map((activity, index) => (
          <div
            key={index}
            className="relative max-w-[377px] h-[250px] sm:h-[300px] md:h-[480px] rounded-[16px] overflow-hidden group"
          >
            <img
              className="w-full h-full object-cover  transition-all duration-300 group-hover:brightness-75"
              src={getImageSrc(activity.image)}
              alt={activity.title}
            />
            {/* Animated overlay */}
            <div className="absolute inset-0 bg-primary/50 opacity-0 group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
            <div className="absolute bottom-4 left-1/2 -translate-x-1/2 bg-primary grid place-items-center px-5 sm:px-5 py-3 sm:py-0 w-fit xs:w-[300px] md:w-[300px] sm:h-[60px] rounded-[8px] z-10">
              <p className="text-white text-center font-bold text-xs sm:text-sm md:text-base">
                {activity.title}
              </p>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Activities;
