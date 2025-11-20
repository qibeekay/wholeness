const Hero = () => {
  return (
    <header className="min-h-[100dvh] w-full relative bg-[url(/src/assets/hero1.jpg)] bg-cover bg-no-repeat bg-top pt-[12rem] pb-[5rem]">
      <div className="w-full h-full absolute left-0 top-0 bg-[#4a0042]/50"></div>

      {/* hero details */}
      {/* <div className="absolute right-0 bottom-5 px-4 xl:px-[10rem] ">
        <div className="bg-primary/40 text-white p-7 sm:p-[48px] max-w-[757px] rounded-[36px] flex items-center justify-center">
          <div className="flex flex-col max-w-[643px] gap-[15px]">
            <h1 className="font-bold text-[18px] sm:text-[24px] font-jakarta">
              Welcome to Wholeness Haven CIC – Where Ageing Well-Being And
              Dementia Care Meet Compassion
            </h1>
            <p className="text-sm sm:text-[18px]">
              At Wholeness Haven CIC, we believe that every stage of life
              deserves to be lived with joy, dignity, and connection. We offer a
              nurturing space where older adults, those embracing ageing well,
              and people living with dementia can thrive, not just survive, as
              well as their dedicated carers and everyone in the Thurrock
              community and nearby.
            </p>

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
      </div> */}

      <div className="text-center relative h-full text-white flex items-end justify-center pb-[15rem]">
        <div>
          <h1 className="font-jakarta font-bold text-[25px] sm:text-[40px] md:text-[50px]">
            Welcome to Wholeness Haven CIC
          </h1>
          <p className="font-jakarta text-[18px] sm:text-[22px] md:text-[30px] max-w-[700px] mx-auto">
            Where Ageing Well-Being And Dementia Care Meet Compassion
          </p>
        </div>
      </div>
    </header>
  );
};

export default Hero;
