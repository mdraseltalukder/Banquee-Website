import phone2 from "@/public/phone2.png";
import Image from "next/image";
import { Check } from "lucide-react";

export default function ManageCard() {
  return (
    <div className="container flex-col sm:flex-row flex gap-[170px] mt-[160px] items-center justify-between ">
      <div className="flex flex-col items-start   ">
        <h3>Cards</h3>
        <h2 className="pt-[8px] py-[16px]">
          Manage <br />
          your cards
        </h2>
        <p>
          Amet minim mollit non deserunt ullamco est sit aliqua dolor do <br />{" "}
          amet sint. Velit officia consequat duis enim velit mollit. <br />{" "}
          Exercitation veniam consequat sunt nostrud amet.
        </p>
        <div className="pt-[32px] ">
          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F7F5] flex items-center justify-center">
              <Check className="h-4 w-4 text-[#4ECDC4]" />
            </div>
            <span className="text-gray-800 font-medium">Malesuada Ipsum</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F7F5] flex items-center justify-center">
              <Check className="h-4 w-4 text-[#4ECDC4]" />
            </div>
            <span className="text-gray-800 font-medium">Vestibulum</span>
          </div>

          <div className="flex items-center gap-2">
            <div className="flex-shrink-0 w-6 h-6 rounded-full bg-[#E6F7F5] flex items-center justify-center">
              <Check className="h-4 w-4 text-[#4ECDC4]" />
            </div>
            <span className="text-gray-800 font-medium">Parturient Lorem</span>
          </div>
        </div>
      </div>
      <Image className="mr-[111px]" src={phone2} alt="phonecard-image"></Image>
    </div>
  );
}
