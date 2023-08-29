import Image from "next/image";
import { LinkNavData } from "./NavLink";
import { NavBar } from "./NavBar";

import worldMap from "@/public/map.png";
import travelIlustration from "@/public/travelilustration.png";
import rectangle from "@/public/rectangle.svg";

export const NavLinkData: LinkNavData[] = [
  {
    href: "/",
    label: "Home",
    status: "active",
  },
  {
    href: "/",
    label: "About Us",
    status: "regular",
  },
  {
    href: "/",
    label: "Destination",
    status: "regular",
  },
  {
    href: "/",
    label: "Packages",
    status: "regular",
  },
];

function Hero() {
  return (
    <section className="grid items-start h-[80vh]">
      <div className="absolute bottom-10 lg:-bottom-52 -z-40">
        <Image src={worldMap} alt="" />
      </div>
      <NavBar />
      <div className="flex justify-self-center justify-center items-center flex-col md:flex-row">
        <div className="flex-1 font-bold">
          <p className="text-[15px] lg:text-[20px]">Best Travel Experience</p>
          <p className="text-[35px] lg:text-[60px] xl:text-[85px]">
            Jelajahi Berbagai Tempat Bersama{" "}
            <span className="text-ht-orange">Hanania Turizm</span>
          </p>
          <div className="flex flex-row gap-4">
            <button className="btn-sm w-40 lg:w-auto rounded-md lg:btn lg:btn-accent btn-accent shadow-lg shadow-accent/30 lg:text-white text-white">
              Lihat layanan Kami
            </button>
            <button className="btn-sm w-40 lg:w-auto btn-neutral rounded-md lg:btn">
              Tentang Kami
            </button>
          </div>
        </div>
        <div className="flex-1">
          <Image
            className=" md:end-32 md:top-12"
            src={travelIlustration}
            alt="Hanannia Turizm"
          />
        </div>
      </div>
    </section>
  );
}

export default Hero;
