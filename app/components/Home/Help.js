import { FaArrowRight, FaPhoneAlt } from "react-icons/fa";
import { MdOutlineMarkEmailUnread } from "react-icons/md";

export default function Help() {
  return (
    <div className="container  flex-col sm:flex-row  flex items-start justify-between mt-40">
      <div className="flex flex-1 flex-col items-start gap-12">
        <h2>Need help?</h2>

        <div className="flex flex-col gap-8">
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 w-[50px] h-[50px] rounded-full bg-[#E8F2EE] flex items-center justify-center">
              <FaPhoneAlt className="h-7 w-7 text-[#5BB5A2]" />
            </div>

            <div className="flex flex-col gap-1">
              <h5 className="text-[18px]">+49 176 123 456</h5>
              <h6 className="text-[#1A191E80] text-[14px]">Support Hotline</h6>
            </div>
          </div>
          <div className="flex items-center gap-6">
            <div className="flex-shrink-0 w-[50px] h-[50px] rounded-full bg-[#E8F2EE] flex items-center justify-center">
              <MdOutlineMarkEmailUnread className="h-7 w-7 text-[#5BB5A2]" />
            </div>
            <div className="flex flex-col gap-1">
              <h5 className="text-[18px]">help@banquee.com Support Email</h5>
              <h6 className="text-[#1A191E80] text-[14px]">Support Email</h6>
            </div>
          </div>
        </div>
        <div>
          <button className="flex items-center gap-2 text-[#5BB5A2]">
            Support <FaArrowRight />
          </button>
        </div>
      </div>
      <div className="w-full flex-1 divide-y rounded divide-slate-200 ">
        <details className="p-4 group">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-[20px]  transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            How do I open an Banko account?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-6 h-6 transition duration-300 top-1 shrink-0 stroke-[#5BB5A2] group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac01 desc-ac01"
            >
              <title id="title-ac01">Open icon</title>
              <desc id="desc-ac01">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-[16px] text-[#1A191E80]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi. Eget gravida cum sociis natoque
            penatibus et magnis dis parturient.
          </p>
        </details>
        <details className="p-4 group">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-[20px]  transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            How to change my account limits?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-6 h-6 transition duration-300 top-1 shrink-0 stroke-[#5BB5A2] group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac01 desc-ac01"
            >
              <title id="title-ac02">Open icon</title>
              <desc id="desc-ac02">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-[16px] text-[#1A191E80]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi. Eget gravida cum sociis natoque
            penatibus et magnis dis parturient.
          </p>
        </details>
        <details className="p-4 group">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-[20px]  transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            How does Banko premium work?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-6 h-6 transition duration-300 top-1 shrink-0 stroke-[#5BB5A2] group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac01 desc-ac01"
            >
              <title id="title-ac03">Open icon</title>
              <desc id="desc-ac03">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-[16px] text-[#1A191E80]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi. Eget gravida cum sociis natoque
            penatibus et magnis dis parturient.
          </p>
        </details>
        <details className="p-4 group" open>
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-[20px]  transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            Can I have two Banko accounts?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-6 h-6 transition duration-300 top-1 shrink-0 stroke-[#5BB5A2] group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac01 desc-ac01"
            >
              <title id="title-ac04">Open icon</title>
              <desc id="desc-ac04">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-[16px] text-[#1A191E80]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi. Eget gravida cum sociis natoque
            penatibus et magnis dis parturient.
          </p>
        </details>
        <details className="p-4 group">
          <summary className="relative cursor-pointer list-none pr-8 font-medium text-[20px]  transition-colors duration-300 focus-visible:outline-none group-hover:text-slate-900  [&::-webkit-details-marker]:hidden">
            How do I order a new card?
            <svg
              xmlns="http://www.w3.org/2000/svg"
              className="absolute right-0 w-6 h-6 transition duration-300 top-1 shrink-0 stroke-[#5BB5A2] group-open:rotate-45"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
              strokeWidth="1.5"
              aria-labelledby="title-ac01 desc-ac01"
            >
              <title id="title-ac04">Open icon</title>
              <desc id="desc-ac04">
                icon that represents the state of the summary
              </desc>
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                d="M12 4v16m8-8H4"
              />
            </svg>
          </summary>
          <p className="mt-4 text-[16px] text-[#1A191E80]">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
            eiusmod tempor incididunt ut labore et dolore magna aliqua. Dui
            accumsan sit amet nulla facilisi. Eget gravida cum sociis natoque
            penatibus et magnis dis parturient.
          </p>
        </details>
      </div>
    </div>
  );
}
