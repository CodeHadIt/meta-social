import React from 'react'
import Image from "next/image";
import userAvatar from "@/public/images/Avatar.png"
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Eye, Send, ThumbsUp } from 'lucide-react';

const UserPostCard = async () => {

  const userResponse = await fetch(`https://dummyjson.com/users/1`);
  const user = await userResponse.json();
  const postResponse = await fetch(`https://dummyjson.com/posts/user/1`);
  const posts = await postResponse.json();
//   const allPosts = posts.posts;

//   const totalLikes = posts.posts.reduce((acc: number, post) => acc + post.reactions.likes, 0);
  return (
    <Card className="w-[350px] border flex flex-col justify-center items-start text-center rounded-2xl">
      <CardContent className="flex gap-3 p-4">
        <Image
          src={userAvatar}
          alt="meta-social_user-avatar"
          className="rounded-full w-10 h-10"
        />
        <div className="flex flex-col gap-3 text-left">
          <div className="">
            <h3 className="font-extrabold">
              {user.firstName} {user.lastName}
            </h3>
            <p className="text-[12px] text-muted-foreground">
              @{user.username}
            </p>
          </div>

          <p className="text-muted-foreground text-sm font-medium max-w-[260px]">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Tempora
            natus fugit nesciunt dolores eaque ex? Id unde dolorem ipsum. Libero
            nobis fugiat cumque tenetur sed, aliquam asperiores molestiae animi
            explicabo!
          </p>

          <div className="space-x-3">
            <span className="text-[12px] text-[#4426D6]">#tag1</span>
            <span className="text-[12px] text-primary">#tag2</span>
            <span className="text-[12px] text-primary">#tag3</span>
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full border p-4 rounded-b-xl flex items-center gap-6">
        <div className="flex items-center gap-1">
          <ThumbsUp
            size={16}
            className="text-muted-foreground hover:cursor-pointer"
          />
          <span className="text-muted-foreground text-[16px]">1</span>
        </div>
        <div className="flex items-center gap-1">
          <Send
            size={16}
            className="text-muted-foreground hover:cursor-pointer"
          />
          <span className="text-muted-foreground text-[16px]">3</span>
        </div>
        <div className="flex items-center gap-1">
          <Eye
            size={16}
            className="text-muted-foreground hover:cursor-pointer"
          />
          <span className="text-muted-foreground text-[16px]">3</span>
        </div>
      </CardFooter>
    </Card>
  );
}

export default UserPostCard;