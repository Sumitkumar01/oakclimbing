import { CardProps } from "@/types/type";
import Image from "next/image";


const Card: React.FC<CardProps> = ({ data }) => {
  return (
    <div className="w-full flex flex-col gap-4">
      {data?.icon ? (
        <div className="w-full flex justify-center">{data?.icon}</div>
      ) : (
        <div
          className={`relative ${data?.blog === true ? "aspect-[4/3]" : "aspect-[4/2.5]"} rounded-lg w-full overflow-hidden`}
        >
          <Image
            src={data?.image as string}
            alt="Nearby"
            fill
            className="w-full h-full object-cover"
          />
        </div>
      )}

      {data?.blog === true ? (
        <h3 className="text-[16px] text-left font-medium text-primary ">
          {data?.title}
        </h3>
      ) : (
        <h3 className="text-[16px]  text-center font-semibold mt-4 text-dark">{data?.title}</h3>
      )}
    </div>
  );
};

export default Card;
