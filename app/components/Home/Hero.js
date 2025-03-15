import card from "@/public/cards.png";
import Image from "next/image";
import { IoMdArrowForward } from "react-icons/io";
export default function Hero() {
  return (
    <div className="flex flex-col px-3 lg:px-0 gap-3 items-center text-center justify-center pt-[128px] bg-[#e8f2ee]">
      <h1>All in one card.</h1>
      <h4>
        Senectus et netus et malesuada fames ac turpis. <br /> Sagittis vitae et
        leo duis ut diam.
      </h4>
      <div className="flex items-center gap-6 mt-6 mb-[152px]">
        <button className="px-4 py-2 text-white bg-[#5BB5A2] rounded-lg">
          Open Account
        </button>
        <button className="flex items-center gap-2 text-[#5BB5A2]">
          Compare Cards <IoMdArrowForward />
        </button>
      </div>
      <Image src={card} alt="card-image" placeholder="blur"></Image>
    </div>
  );
}
