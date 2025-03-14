import card1 from "@/public/card1.png";
import card2 from "@/public/card2.png";
import card3 from "@/public/card3.png";
import card4 from "@/public/card4.png";
import card5 from "@/public/card5.png";
import Image from "next/image";

export default function AllInOneBank() {
  return (
    <>
      <hr />
      <div className="flex flex-col container items-center gap-24 mt-[160px]">
        <div className="flex flex-col gap-4 items-center ">
          <h2>All in one bank. Really.</h2>
          <p>
            Senectus et netus et malesuada fames ac turpis. Sagittis vitae et
            leo duis ut diam.
          </p>
        </div>
        <div>
          <div className="grid grid-cols-2 gap-8 mb-8">
            <Image src={card1} alt="card-image" placeholder="blur"></Image>
            <Image src={card2} alt="card-image" placeholder="blur"></Image>{" "}
          </div>
          <div className="grid grid-cols-3 gap-8">
            <Image src={card3} alt="card-image" placeholder="blur"></Image>
            <Image src={card4} alt="card-image" placeholder="blur"></Image>
            <Image src={card5} alt="card-image" placeholder="blur"></Image>
          </div>
        </div>
      </div>
    </>
  );
}
