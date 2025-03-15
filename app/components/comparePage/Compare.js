import compare from "@/public/compare.png";
import Image from "next/image";
import { FaFacebook, FaInstagram, FaLinkedin, FaTwitter } from "react-icons/fa";

export default function Compare() {
  return (
    <>
      <div className="flex flex-col items-center justify-center max-w-[1000px] px-3 lg:px-0 mx-auto box-border gap-16 mt-24 mb-40">
        <div className="flex flex-col items-center justify-center gap-4 max-w-[1000px] mx-auto box-border">
          <p className="text-[#5BB5A2] bg-[#E8F2EE] py-1 px-2.5 tet-[14px]">
            App
          </p>
          <div className="flex flex-col items-center justify-center text-center gap-8">
            <h2>
              App How To Start Using Banko <br />
              For Your Startup
            </h2>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do{" "}
              <br />
              eiusmod tempor incididunt ut labore et dolore magna aliqua. <br />{" "}
              Dui accumsan sit amet nulla facilisi morbi.
            </p>
          </div>
        </div>
        <Image src={compare} alt="compare-image" placeholder="blur"></Image>
        <div className="flex flex-col items-start justify-center gap-4 max-w-[600px] mx-auto box-border">
          <div className="flex flex-col items-start justify-center gap-4 max-w-[600px] mx-auto box-border">
            <h6 className="text-[28px]">Et malesuada fames ac turpis</h6>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do
              eiusmod tempor incididunt ut labore et dolore magna aliqua. Morbi
              blandit cursus risus at ultrices mi tempus imperdiet nulla. Odio
              morbi quis commodo odio. Et malesuada fames ac turpis egestas sed
              tempus urna. Mi in nulla posuere sollicitudin aliquam ultrices
              sagittis orci a. Fringilla ut morbi tincidunt augue interdum.
              Ultrices in iaculis nunc sed augue lacus viverra. <br />
              <br />
              Erat imperdiet sed euismod nisi porta. Morbi blandit cursus risus
              at ultrices mi tempus imperdiet nulla. Cras sed felis eget velit
              aliquet sagittis. Amet commodo nulla facilisi nullam vehicula
              ipsum a arcu cursus. Ullamcorper dignissim cras tincidunt lobortis
              feugiat vivamus at augue. Blandit aliquam etiam erat velit
              scelerisque in dictum. In hac habitasse platea dictumst vestibulum
              rhoncus. Molestie ac feugiat sed lectus vestibulum.
            </p>
          </div>
          <div className="flex flex-col items-start justify-center gap-4 max-w-[600px] mx-auto box-border">
            <h6 className="text-[28px]">Nascetur ridiculus mus</h6>
            <p>
              Sed vulputate odio ut enim blandit volutpat maecenas. Sagittis
              orci a scelerisque purus semper eget duis at. Porta lorem mollis
              aliquam ut porttitor leo a diam. In fermentum et sollicitudin ac
              orci phasellus egestas tellus. Mauris cursus mattis molestie a
              iaculis at erat pellentesque adipiscing. Nascetur ridiculus mus
              mauris vitae ultricies. Dui nunc mattis enim ut tellus. Duis
              convallis convallis tellus id interdum. Quis ipsum suspendisse
              ultrices gravida dictum fusce. Scelerisque mauris pellentesque
              pulvinar pellentesque. Tincidunt augue interdum velit euismod.
              Nibh tortor id aliquet lectus. Amet commodo nulla facilisi nullam.
              Vulputate ut pharetra sit amet aliquam id diam maecenas. Tellus
              pellentesque eu tincidunt tortor. Ultrices vitae auctor eu augue
              ut lectus arcu bibendum.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center justify-center gap-4 max-w-[600px] mx-auto box-border">
          <p>Share article</p>
          <div className="flex items-center gap-4">
            <a
              href="#"
              className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
              aria-label="Twitter"
            >
              <FaTwitter className="w-5.5 h-5.5 text-black" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
              aria-label="facebook"
            >
              <FaFacebook className="w-5.5 h-5.5 text-black" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
              aria-label="linkedin"
            >
              <FaLinkedin className="w-5.5 h-5.5 text-black" />
            </a>
            <a
              href="#"
              className="p-2 rounded-full bg-gray-50 hover:bg-gray-100 transition-colors"
              aria-label="instagram"
            >
              <FaInstagram className="w-5.5 h-5.5 text-black" />
            </a>
          </div>
        </div>
      </div>
      <hr />
    </>
  );
}
