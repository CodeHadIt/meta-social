import userAvatar from "@/public/images/Avatar.png";
import Image from "next/image";

import {
    Card,
    CardContent,
    CardFooter
} from "@/components/ui/card";
import { Button } from "../ui/button";


const FollowCard = async () => {

  const userResponse = await fetch(`https://dummyjson.com/users/1`);
  const user = await userResponse.json();
  return (
    <Card className="w-[345px] border flex justify-between items-center p-4 rounded-2xl">
      <div className="flex gap-3 items-center">
        <Image
          src={userAvatar}
          alt="meta-social_user-avatar"
          className="rounded-full w-10 h-10"
        />
        <div className="">
          <h3 className="font-extrabold">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-[12px] text-muted-foreground">@{user.username}</p>
        </div>
      </div>

      <Button variant="outline">Follow</Button>
    </Card>
  );
}

export default FollowCard;