import { Skeleton } from "@/components/ui/skeleton";

const SkeletonTaskItems = () => {
  return (
    <div className="px-4 md:px-8 py-4">
      <div className="grid md:grid-cols-3 pb-4">
        <Skeleton className="bg-primary/40 rounded-xl h-14 min-w-16 md:col-start-2" />
      </div>
      <div className="grid md:grid-cols-2 gap-4">
        {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10, 11, 12, 13, 14, 15, 16].map((_, i) => (
          <Skeleton key={i} className="bg-primary/40 rounded-xl h-14 min-w-16" />
        ))}
      </div>
    </div>
  );
};

export default SkeletonTaskItems;
