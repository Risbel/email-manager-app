import { cn } from "@/lib/shadcn-utils";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";

const CardServices = ({ className, item, ...props }: ICardServices) => {
  return (
    <div className={cn(cardServices({ className }))} {...props}>
      <div className="flex justify-center p-8">
        <Image src={`${item.urlImage}`} width={100} height={100} alt="" />
      </div>

      <div className="bg-gray-300 rounded-xl py-2">
        <p className="text-center  md:text-xl font-bold text-gray-800">{item.name.toUpperCase()}</p>
      </div>
    </div>
  );
};

export default CardServices;

const cardServices = cva(["flex flex-col justify-between bg-gray-700 px-4 md:px-8 py-4 rounded-3xl"]);

export interface ICardServices extends React.HTMLAttributes<HTMLDivElement>, VariantProps<typeof cardServices> {
  item: { id: string; urlImage: string; name: string };
}
