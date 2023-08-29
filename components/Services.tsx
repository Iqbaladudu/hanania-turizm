import Image from "next/image";

import car from "@/public/cartravelilustration.png";

interface ServicesListProps {
  title: string;
  description: string;
}

const servicesData: ServicesListProps[] = [
  {
    title: "Tour Packages",
    description:
      "All in packages along with transportation, airport handling, meals, tickets, and guide.",
  },
  {
    title: "Air Ticketing",
    description:
      "You can get cheapest flight ticket to all destination around the world.",
  },
  {
    title: "Visa",
    description:
      "Feel free to travel anywhere and let us applying your entry visa. Which visa you need? Tourist? Umrah? We got it.",
  },
];

function ServicesListItem({ title, description }: ServicesListProps) {
  return (
    <div className="flex flex-col gap-1 lg:gap-3 w-7/12">
      <h2 className="text-ht-dark-blue font-bold text-[15px] lg:text-[20px]">
        {title}
      </h2>
      <p className="text-ht-dark-blue text-[14px] lg:text-[16px]">
        {description}
      </p>
    </div>
  );
}

const Services = () => {
  return (
    <section className="h-auto lg:h-[90vh] flex flex-col-reverse lg:flex-row items-center">
      <div className="flex flex-col gap-10 lg:gap-20">
        <div>
          <p className="font-bold text-[15px] lg:text-[20px] text-ht-orange">
            ALL YOU NEED TO TRAVEL
          </p>
          <p className="font-bold text-ht-dark-blue text-[35px] lg:text-[56px]">
            We Offer Best Services
          </p>
        </div>
        <div className="flex flex-col gap-5 lg:gap-10">
          {servicesData.map((props, index) => (
            <ServicesListItem {...props} key={index} />
          ))}
        </div>
      </div>
      <div>
        <Image src={car} alt="Car" className="z-10" />
      </div>
    </section>
  );
};

export default Services;
