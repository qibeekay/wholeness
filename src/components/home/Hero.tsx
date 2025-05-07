const Hero = () => {
  return (
    <header className="min-h-[100dvh] w-full relative bg-[url(/src/assets/whole1.jpg)] bg-cover bg-no-repeat bg-top pt-[12rem] pb-[5rem]">
      <div className="w-full h-full absolute left-0 top-0 bg-[#4a0042]/50"></div>

      {/* hero details */}
      <div className="relative flex justify-center lg:justify-end px-4 xl:px-[10rem] ">
        <div className="bg-primary text-white p-7 sm:p-[48px] max-w-[757px] rounded-[36px] flex items-center justify-center">
          <div className="flex flex-col max-w-[643px] gap-[15px]">
            <h1 className="font-bold text-[18px] sm:text-[24px] font-jakarta">
              Welcome to Wholeness Haven CIC – Where Dementia and Ageing
              Well-Being Meet Compassion
            </h1>
            <p className="text-sm sm:text-[18px]">
              At Wholeness Haven CIC, we believe that every stage of life
              deserves to be lived with joy, dignity, and connection. We offer a
              safe, nurturing space where individuals living with dementia—and
              those journeying through later life—can thrive, not just survive.
            </p>

            <p className="text-sm sm:text-[18px]">
              Supporting people with dementia and ageing-related conditions,
              their carers, and the community in Thurrock.
            </p>

            {/* buttons */}
            <div className="flex w-full items-center justify-center flex-wrap gap-4 mt-5 sm:mt-10">
              <button className="cursor-pointer bg-white text-primary py-[10px] w-full xs:w-[224px] h-[60px] px-[14px] text-[16px] font-bold rounded-full hover:bg-white/90 transition-colors ease-in-out duration-300 border-[4px] border-[white]">
                Contact Us
              </button>
              <button className="cursor-pointer bg-transparent text-white py-[10px] w-full xs:w-[224px] h-[60px] px-[14px] text-[16px] font-bold rounded-full hover:border-white/90 hover:text-white/90 transition-colors ease-in-out duration-300 border-[4px] border-[white]">
                Lean More
              </button>
            </div>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Hero;
