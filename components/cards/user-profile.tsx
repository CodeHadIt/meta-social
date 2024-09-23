import userAvatar from "@/public/images/Avatar.png";
import Image from "next/image";

import {
    Card,
    CardContent,
    CardFooter,
    CardHeader,
} from "@/components/ui/card";
import { PostResponse, User, UserPost } from "@/types";
import { MapPin } from "lucide-react";
import ActionDialog from "../common/action-dialog";
import NotFoundCard from "./not-found";

const UserProfileCard = async ({ userId }: { userId: string }) => {
  const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
  if (!userResponse.ok) {
    return <NotFoundCard purpose="error" dataType="user" />;
  }
  const user: User = await userResponse.json();

  const postResponse = await fetch(
    `https://dummyjson.com/posts/user/${userId}`
  );
  if (!postResponse.ok) {
    return <NotFoundCard purpose="error" dataType="user" />;
  }
  const posts: PostResponse = await postResponse.json();

  const totalLikes = posts.posts.reduce(
    (acc: number, post: UserPost) => acc + post.reactions.likes,
    0
  );

  return (
    <Card className="max-w-[345px] md:min-w-[670px] flex flex-col justify-center items-center">
      <CardHeader className="w-full rounded-t-xl p-8 bg-gradientB"></CardHeader>

      <CardContent className="px-6 flex flex-col md:flex-row items-center md:items-start md:gap-6 w-full relative">
        <div className="rounded-full bg-white p-[60px] shadow-2xl absolute md:relative top-[-90px] md:top-[-30px]">
          <Image
            src={userAvatar}
            alt="meta-social_user_avatar"
            className="rounded-full w-28 h-28 absolute m-auto inset-0"
          />
        </div>

        <div className="space-y-6 pt-12 md:pt-2">
          <div className="flex flex-col items-center md:items-start">
            <h3 className="text-[30px] font-extrabold">
              {user.firstName} {user.lastName}
            </h3>

            <div className="flex flex-col items-center mb-2 md:gap-2 md:flex-row">
              <p className="text-muted-foreground">@{user.username}</p>
              <div className="flex items-center justify-center gap-[2px] mt-1">
                <MapPin size={18} className="text-muted-foreground" />
                <address className="text-muted-foreground not-italic">
                  {user.address.state}, {user.address.country}
                </address>
              </div>
            </div>

            <p className="text-[#0077CC] p-2 bg-[#E5F4FF] font-extrabold text-center rounded-xl leading-[4px] inline-block ">
              {user.company.department}
            </p>
          </div>

          <div className="flex items-center justify-center md:justify-start gap-4">
            <div className="flex flex-col">
              <strong className="text-[24px] mb-[-5px] font-extrabold">
                {posts.total}
              </strong>
              <p className="text-muted-foreground uppercase text-[12px]">
                {posts.total === 1 ? "Post" : "Posts"}
              </p>
            </div>

            <div className="flex flex-col">
              <strong className="text-[24px] mb-[-5px] font-extrabold">
                {totalLikes}
              </strong>
              <p className="text-muted-foreground uppercase text-[12px]">
                {totalLikes === 1 ? "Like" : "Likes"}
              </p>
            </div>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full border-t px-4 py-6 rounded-b-xl bg-gradientC flex justify-center md:justify-start gap-2">
        <ActionDialog action="Follow" text="Follow" variant="default" />
        <ActionDialog action="Message" text="Send A DM" variant="outline" />
      </CardFooter>
    </Card>
  );
};

export default UserProfileCard;
