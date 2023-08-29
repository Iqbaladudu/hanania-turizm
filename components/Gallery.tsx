"use client";

import Image from "next/image";
import { useEffect, useRef } from "react";
import { BsArrowRightCircleFill, BsArrowLeftCircleFill } from "react-icons/bs";
import { Swiper, SwiperSlide, useSwiper } from "swiper/react";
import { Navigation, Autoplay, Virtual, EffectCreative } from "swiper/modules";

import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/virtual";
import "swiper/css/effect-creative";

interface GallerySwiperCardInterface {
  url: string;
  label: string;
}

const swiperCardData: GallerySwiperCardInterface[] = [
  {
    url: "https://dummyimage.com/300x300/000/fff",
    label: "label",
  },
  {
    url: "https://dummyimage.com/300x300/000/fff",
    label: "label",
  },
  {
    url: "https://dummyimage.com/300x300/000/fff",
    label: "label",
  },
  {
    url: "https://dummyimage.com/300x300/000/fff",
    label: "label",
  },
  {
    url: "https://dummyimage.com/300x300/000/fff",
    label: "label",
  },
  {
    url: "https://dummyimage.com/300x300/000/fff",
    label: "label",
  },
  {
    url: "https://dummyimage.com/300x300/000/fff",
    label: "label",
  },
  {
    url: "https://dummyimage.com/300x300/000/fff",
    label: "label",
  },
  {
    url: "https://dummyimage.com/300x300/000/fff",
    label: "label",
  },
  {
    url: "https://dummyimage.com/300x300/000/fff",
    label: "label",
  },
  {
    url: "https://dummyimage.com/300x300/000/fff",
    label: "label",
  },
];

function GallerySwiperCard() {
  return (
    <div className="w-full flex justify-center items-center">
      <Swiper
        modules={[Virtual, Autoplay, EffectCreative]}
        effect={"creative"}
        creativeEffect={{
          prev: {
            shadow: true,
            translate: [0, 0, -400],
          },
          next: {
            translate: ["100%", 0, 0],
          },
        }}
        centeredSlides={true}
        autoplay={{
          delay: 1000,
          disableOnInteraction: false,
        }}
        loop
        // breakpoints={{
        //   425: {
        //     slidesPerView: 2,
        //     effect: "slide",
        //   },
        // }}
        className="mySwiper"
      >
        {swiperCardData.map(({ url, label }, index) => (
          <SwiperSlide key={index} className="w-[300px]">
            <div>
              <p className="absolute left-2 top-2 bg-ht-orange px-2 py-1 rounded-lg text-white text-[12px]">
                {label}
              </p>
              <figure>
                <Image
                  src={url}
                  alt={""}
                  width={300}
                  height={300}
                  className="rounded-2xl"
                />
              </figure>
            </div>
          </SwiperSlide>
        ))}
      </Swiper>
    </div>
  );
}

const Gallery = () => {
  const swiper = useSwiper();

  return (
    <section className="bg-[#FEE5DA] p-5 lg:p-20 flex flex-col gap-20 rounded-xl mt-10">
      <div className="flex flex-row items-center justify-between">
        <div>
          <p className="text-[15px] lg:text-[20px] font-semibold text-ht-orange">
            Gallery
          </p>
          <p className="text-[35px] lg:text-[56px] font-bold text-ht-dark-blue">
            Our Latest Journey
          </p>
        </div>
        <div className="flex flex-row gap-2">
          <button>
            <BsArrowLeftCircleFill className="text-[20px] lg:text-[30px]" />
          </button>
          <button onClick={() => swiper?.slideNext()}>
            <BsArrowRightCircleFill className="text-[20px] lg:text-[30px]" />
          </button>
        </div>
      </div>
      <GallerySwiperCard />
    </section>
  );
};

export default Gallery;
