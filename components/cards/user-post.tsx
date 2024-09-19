import React from "react";
import Image from "next/image";
import userAvatar from "@/public/images/Avatar.png";
import {
  Card,
  CardContent,
  CardFooter,
  CardHeader,
} from "@/components/ui/card";
import { Eye, Send, ThumbsUp } from "lucide-react";

type post = {
  id: number;
  title: string;
  body: string;
  tags: string[];
  reactions: { likes: number; dislikes: number };
  views: number;
  userId: number;
};

interface pageProps {
  post: post;
}

const UserPostCard = async ({ post }: pageProps) => {
  const userResponse = await fetch(
    `https://dummyjson.com/users/${post.userId}`
  );
  const user = await userResponse.json();

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
            {post.body.substring(0, 201)}{"..."}
          </p>

          <div className="space-x-3">
            {post.tags.map((tag) => (
              <span className="text-[12px] text-[#4426D6]" key={tag}>#{tag}</span>
            ))}
          </div>
        </div>
      </CardContent>
      <CardFooter className="w-full border p-4 rounded-b-xl flex items-center gap-6">
        <div className="flex items-center gap-1">
          <ThumbsUp
            size={16}
            className="text-muted-foreground hover:cursor-pointer"
          />
          <span className="text-muted-foreground text-[16px]">
            {post.reactions.likes}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Send
            size={16}
            className="text-muted-foreground hover:cursor-pointer"
          />
          <span className="text-muted-foreground text-[16px]">
            {post.reactions.dislikes}
          </span>
        </div>
        <div className="flex items-center gap-1">
          <Eye
            size={16}
            className="text-muted-foreground hover:cursor-pointer"
          />
          <span className="text-muted-foreground text-[16px]">
            {post.views}
          </span>
        </div>
      </CardFooter>
    </Card>
  );
};

export default UserPostCard;
