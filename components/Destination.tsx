"use client";

import Image from "next/image";

import { AiFillStar, AiOutlineStar } from "react-icons/ai";

import random from "@/public/random.svg";

interface DestinationCardProps {
  imageUrl: string;
  title: string;
  price: number;
  onClickUrl: string;
  star: number;
}

const DestinationCardData: DestinationCardProps[] = [
  {
    imageUrl: "https://dummyimage.com/300x300/000/fff",
    title: "Istanbul",
    price: 2000000,
    onClickUrl: "/about",
    star: 4,
  },
  {
    imageUrl: "https://dummyimage.com/300x300/000/fff",
    title: "Bursa",
    price: 2000000,
    onClickUrl: "/about",
    star: 4,
  },
  {
    imageUrl: "https://dummyimage.com/300x300/000/fff",
    title: "Kapadokya",
    price: 2000000,
    onClickUrl: "/about",
    star: 4,
  },
  {
    imageUrl: "https://dummyimage.com/300x300/000/fff",
    title: "Edirne",
    price: 2000000,
    onClickUrl: "/about",
    star: 5,
  },
];

function StarCount({ star }: Pick<DestinationCardProps, "star">) {
  return (
    <div className="flex flex-row">
      {[...Array(star)].map((index) => (
        // eslint-disable-next-line react/jsx-key
        <AiFillStar key={index} />
      ))}
      {[...Array(5 - star)].map((index) => (
        // eslint-disable-next-line react/jsx-key
        <AiOutlineStar key={index} />
      ))}
    </div>
  );
}

function DestinationCard({
  imageUrl,
  title,
  price,
  onClickUrl,
  star,
}: DestinationCardProps) {
  return (
    <div className="card w-72 bg-base-100 hover:shadow-2xl shadow-lg hover:shadow-cyan-500/50 transition-shadow cursor-pointer">
      <figure className="">
        <Image src={imageUrl} width={300} height={300} alt={title} />
      </figure>
      <div className="card-body">
        <h2 className="card-title">{title}</h2>
        <div className="flex items-center justify-between">
          <div>
            <StarCount star={star}></StarCount>
          </div>
          <div className="badge badge-accent p-3 font-bold text-neutral">
            <p>IDR {price.toLocaleString()}</p>
          </div>
        </div>
      </div>
    </div>
  );
}

const Destination = () => {
  return (
    <section className="w-full flex gap-5 lg:gap-10 py-10 flex-col">
      <div className="flex flex-col items-center">
        <p className="text-[15px] lg:text-[20px] font-bold text-ht-orange">
          Top Destination
        </p>
        <h2 className="text-[35px] text-center lg:text-[56px] font-bold text-ht-dark-blue">
          Eksplore Top Destination
        </h2>
      </div>
      <div className="flex flex-row justify-center gap-4 flex-wrap">
        <div className="absolute start-0 lg:relative lg:start-20 lg:bottom-16">
          <Image src={random} alt="" />
        </div>
        {DestinationCardData.map((props, index) => (
          <DestinationCard key={index} {...props} />
        ))}
      </div>
      <div className="flex justify-center">
        <button className="btn btn-sm text-success-content">Show More</button>
      </div>
    </section>
  );
};

export default Destination;
