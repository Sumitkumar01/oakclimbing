import { amenitiesProps } from "@/types/type";

const AmenitiesCard: React.FC<amenitiesProps> = ({ icon, title }) => {
  return (
    <div className="lg:w-fit py-4 px-8 flex lg:grid grid-cols-3 gap-3  group items-center justify-center">
      <div className="lg:w-full lg:col-span-1 group-hover:scale-110 duration-300 transition ease-in-out">{icon}</div>
      <div className="lg:w-full lg:col-span-2">
        <p className="text-base group-hover:scale-95 text-dark duration-300 transition ease-in-out">{title}</p>
      </div>
    </div>
  );
};

export default AmenitiesCard;
