import { cn } from "@/lib/shadcn-utils";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";

const CardService = ({ setService, className, item, ...props }: ICardServices) => {
  return (
    <button onClick={() => setService(item.id)} className={cn(cardService({ className }))} {...props}>
      <div className="flex justify-center items-center w-full h-full p-8">
        <Image src={`${item.urlImage}`} width={item.width} height={item.height} alt="service" />
      </div>

      <div className="bg-secondary rounded-xl py-2 shadow-md w-full">
        <p className="text-center  md:text-xl font-bold text-primary">{item.name.toUpperCase()}</p>
      </div>
    </button>
  );
};

export default CardService;

const cardService = cva([
  "flex flex-col justify-between item-center bg-primary px-4 md:px-8 py-4 rounded-3xl hover:scale-[102%] shadow hover:shadow-xl",
]);

export interface ICardServices extends React.HTMLAttributes<HTMLButtonElement>, VariantProps<typeof cardService> {
  item: { id: string; urlImage: string; name: string; width: number; height: number };
  setService: any;
}
