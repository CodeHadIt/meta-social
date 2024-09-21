import userAvatar from "@/public/images/Avatar.png";
import Image from "next/image";
import { Card } from "@/components/ui/card";
import Link from "next/link";
import { Button } from "../ui/button";

const FollowCard = async ({ userId }: { userId: string }) => {
  //Fetches the details of the user whose Id is passed as prop
  const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
  const user = await userResponse.json();

  return (
    <Card className="w-[325px] border flex justify-between items-center p-4 rounded-2xl">
      <div className="flex gap-3 items-center">
        <Link href={`/profile/${userId}`}>
          <Image
            src={userAvatar}
            alt="meta-social_user_avatar"
            className="rounded-full w-10 h-10 hover:opacity-50"
          />
        </Link>
        <div className="">
          <Link href={`/profile/${userId}`}>
            <div
              role="profile-anchor-text"
              className="font-extrabold whitespace-nowrap overflow-hidden text-ellipsis w-[125px] hover:underline hover:underline-offset-4"
            >
              {user.firstName} {user.lastName}
            </div>
          </Link>
          <p className="text-[12px] text-muted-foreground">@{user.username}</p>
        </div>
      </div>

      <Button variant="outline">Follow</Button>
    </Card>
  );
};

export default FollowCard;
