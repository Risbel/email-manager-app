import { cn } from "@/lib/shadcn-utils";
import { ChevronDown } from "lucide-react";
import { useState } from "react";

const RecentNotifications = () => {
  const [rotate, setRotate] = useState(false);

  return (
    <div className="bg-secondary px-4 py-2 rounded-2xl flex items-center gap-8">
      <div>
        <p className="  text-lg font-bold text-secondary-foreground">Recent Notification</p>
        <p>Your delivery services payments is ready</p>
      </div>

      <button className="hover:bg-muted rounded-lg" onClick={() => setRotate((prev) => !prev)}>
        <ChevronDown className={cn(rotate && "rotate-180", "transition-transform")} />
      </button>
    </div>
  );
};

export default RecentNotifications;
