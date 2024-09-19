import userAvatar from "@/public/images/Avatar.png";
import Image from "next/image";

import { Card} from "@/components/ui/card";
import { Button } from "../ui/button";

const FollowSkeleton = () => {

  return (
    <Card className="w-[345px] border flex justify-between items-center p-4 rounded-2xl">
      <div className="flex gap-3 items-center">
        <div className="rounded-full border w-10 h-10 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
        <div className="space-y-1">
          <div className="rounded-lg w-[120px] h-4 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></div>
          <p className="rounded-lg w-16 h-3 bg-gradientD bg-[position:-500px_0] bg-[size:500px_100%] animate-skeleton"></p>
        </div>
      </div>
    </Card>
  );
};

export default FollowSkeleton;
