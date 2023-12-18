import { Skeleton } from "@/components/ui/skeleton";

const SkeletonAppointments = () => {
  return (
    <div className="flex flex-col gap-6 overflow-hidden overflow-x-scroll w-full bg-secondary mt-2">
      {[1, 2, 3].map((row) => {
        return (
          <div key={row}>
            <Skeleton className="bg-primary rounded-xl h-6 w-24 md:h-8 md:w-32 mb-3 md:mb-3 ml-3" />
            <div className="flex gap-8 md:gap-12">
              <Skeleton className="bg-primary rounded-xl min-w-[180px] min-h-[180px] md:min-w-[310px] md:min-h-[180px] lg:min-w-[400px] lg:min-h-[180px]" />
              <Skeleton className="bg-primary rounded-xl min-w-[180px] min-h-[180px] md:min-w-[310px] md:min-h-[180px] lg:min-w-[400px] lg:min-h-[180px]" />
              <Skeleton className="bg-primary rounded-xl min-w-[180px] min-h-[180px] md:min-w-[310px] md:min-h-[180px] lg:min-w-[400px] lg:min-h-[180px]" />
              <Skeleton className="bg-primary rounded-xl min-w-[180px] min-h-[180px] md:min-w-[310px] md:min-h-[180px] lg:min-w-[400px] lg:min-h-[180px]" />
              <Skeleton className="bg-primary rounded-xl min-w-[180px] min-h-[180px] md:min-w-[310px] md:min-h-[180px] lg:min-w-[400px] lg:min-h-[180px]" />
            </div>
          </div>
        );
      })}
    </div>
  );
};

export default SkeletonAppointments;
