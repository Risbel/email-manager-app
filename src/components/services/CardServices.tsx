import { cn } from "@/lib/shadcn-utils";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";

const CardServices = ({ setService, className, item, ...props }: ICardServices) => {
  return (
    <button onClick={() => setService(item.id)} className={cn(cardServices({ className }))} {...props}>
      <div className="flex justify-center p-8 w-full">
        <Image src={`${item.urlImage}`} width={100} height={100} alt="service" />
      </div>

      <div className="bg-gray-300 rounded-xl py-2 shadow-md w-full">
        <p className="text-center  md:text-xl font-bold text-gray-800">{item.name.toUpperCase()}</p>
      </div>
    </button>
  );
};

export default CardServices;

const cardServices = cva([
  "flex flex-col justify-between bg-gray-700 px-4 md:px-8 py-4 rounded-3xl hover:scale-[102%] shadow hover:shadow-xl",
]);

export interface ICardServices extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof cardServices> {
  item: { id: string; urlImage: string; name: string };
  setService: any;
}
