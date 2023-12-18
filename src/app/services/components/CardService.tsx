import { cn } from "@/lib/shadcn-utils";
import { VariantProps, cva } from "class-variance-authority";
import Image from "next/image";
import Link from "next/link";

const CardService = ({ className, item, ...props }: ICardServices) => {
  return (
    <Link href={item.link} className={cn(cardService({ className }))} {...props} passHref>
      <div className="flex justify-center items-center absolute border border-secondary top-2 md:top-4 right-2 md:right-4 p-2 h-6 w-6 md:h-8 md:w-8 rounded-full">
        <span className="text-primary-foreground text-xs md:text-base">{Math.floor(Math.random() * 100)}</span>
      </div>
      <div className="flex justify-center items-center w-full h-full p-4 md:p-8">
        <Image src={`${item.urlImage}`} width={item.width} height={item.height} alt="service" />
      </div>

      <div className="bg-secondary rounded-md md:rounded-xl py-2 shadow-md w-full">
        <p className="text-center text-xs md:text-xl font-bold text-primary">{item.name.toUpperCase()}</p>
      </div>
    </Link>
  );
};

export default CardService;

const cardService = cva([
  "relative flex flex-col justify-between item-center bg-primary px-4 md:px-8 py-4 rounded-xl md:rounded-3xl hover:scale-[102%] shadow hover:shadow-xl",
]);

export interface ICardServices extends React.HTMLAttributes<HTMLAnchorElement>, VariantProps<typeof cardService> {
  item: { id: string; urlImage: string; name: string; width: number; height: number; link: string };
}
