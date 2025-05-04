import { getImageSrc } from "../../utils/imageUtils";

interface Props {
  h1: string;
  p: string;
  img: string;
}
const OtherHero = ({ h1, p, img }: Props) => {
  return (
    <header
      className="h-[863px] w-full relative"
      style={{
        background: `url(${getImageSrc(img)})`,
        backgroundRepeat: "no-repeat",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      <div className="w-full h-full absolute left-0 top-0 bg-[#4a0042]/60"></div>

      {/* hero details */}
      <div className="text-center relative h-full text-white flex items-end justify-center pb-[15rem]">
        <div>
          <h1 className="font-jakarta font-bold text-[25px] sm:text-[40px] md:text-[50px]">
            {h1}
          </h1>
          <p className="font-jakarta text-[18px] sm:text-[22px] md:text-[32px]">
            {p}
          </p>
        </div>
      </div>
    </header>
  );
};

export default OtherHero;
