import React from "react";
import Image from "next/image";
import userAvatar from "@/public/images/Avatar.png"

import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { MapPin } from "lucide-react";

const UserProfileCard = async () => {

  const userResponse = await fetch(`https://dummyjson.com/users/1`);
  const user = await userResponse.json();
  const postResponse = await fetch(`https://dummyjson.com/posts/user/1`);
  const posts = await postResponse.json();
//   const allPosts = posts.posts;

  const totalLikes = posts.posts.reduce((acc: number, post) => acc + post.reactions.likes, 0);

  return (
    <Card className="w-[350px] border flex flex-col justify-center items-center text-center">
      <CardHeader className="w-full rounded-t-xl h-4 bg-gradientB flex justify-center items-center">
        <div className="rounded-full bg-white p-[60px] border shadow-xl relative">
          <Image
            src={userAvatar}
            alt="meta-social_user-avatar"
            className="rounded-full w-28 h-28 absolute m-auto inset-0"
          />
        </div>
      </CardHeader>
      <CardContent className="pt-14 space-y-6">
        <div className="">
          <h3 className="text-[30px] font-extrabold">
            {user.firstName} {user.lastName}
          </h3>
          <p className="text-muted-foreground">@{user.username}</p>
          <div className="flex items-center justify-center gap-[2px] mt-1">
            <MapPin size={18} className="text-muted-foreground" />
            <address className="text-muted-foreground not-italic">
              {user.address.state}, {user.address.country}
            </address>
          </div>

          <div className="px-2 py-3 bg-[#E5F4FF] w-32 h-2 rounded-xl relative m-auto mt-4">
            <p className="text-[#0077CC] font-extrabold inset-0 absolute">
              {user.company.department}
            </p>
          </div>
        </div>

        <div className="flex items-center justify-center gap-4">
          <div className="flex flex-col">
            <strong className="text-[24px] mb-[-5px] font-extrabold">
              {posts.total}
            </strong>
            <p className="text-muted-foreground uppercase text-[12px]">Posts</p>
          </div>

          <div className="flex flex-col">
            <strong className="text-[24px] mb-[-5px] font-extrabold">
              {totalLikes}
            </strong>
            <p className="text-muted-foreground uppercase text-[12px]">Likes</p>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full border px-4 py-6 rounded-b-xl bg-gradientC flex justify-center gap-2">
        <Button>Follow</Button>
        <Button variant="outline">Message</Button>
      </CardFooter>
    </Card>
  );
}

export default UserProfileCard;
