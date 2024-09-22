import { Card, CardContent, CardFooter } from "@/components/ui/card";
import userAvatar from "@/public/images/Avatar.png";
import { UserPost } from "@/types";
import { Eye, Send, ThumbsUp } from "lucide-react";
import Image from "next/image";
import Link from "next/link";

//This componet is different from user-post.tsx as it renders the post made by an individual on their profile route/page.
//Since the user will be the same across his profile route/page, there is no need to data fetch everytime we render it, hence the rationale for a seperate component.
interface pageProps {
  post: UserPost;
}

const IndividualPostCard = ({ post }: pageProps) => {
  return (
    <Card className="max-w-[340px] md:min-w-full border flex flex-col justify-center items-start text-center rounded-2xl">
      <CardContent className="flex gap-3 p-4">
        <div className="flex flex-col justify-between">
          <Link
            href={`/profile/${post.userId}`}
            className="rounded-full w-10 h-10 relative"
          >
            <Image
              src={userAvatar}
              alt="meta-social_user_avatar"
              className="rounded-full hover:opacity-50"
              fill
              sizes="40px"
            />
          </Link>
          <div className="w-full h-auto"></div>
        </div>

        <div className="flex flex-col gap-3 text-left">
          <div className="">
            <Link href={`/profile/${post.userId}`}>
              <div
                role="profile-anchor-text"
                className="font-extrabold hover:underline hover:underline-offset-4"
              >
                {post.user.firstName} {post.user.lastName}
              </div>
            </Link>

            <p className="text-[12px] text-muted-foreground">
              @{post.user.username}
            </p>
          </div>

          <p className="text-muted-foreground text-sm font-medium max-w-[260px] md:max-w-[calc(100%-12px)]">
            {/* {post.body.substring(0, 201)}{"..."} */}
            {post.body}
          </p>

          <div className="space-x-3">
            {post.tags.map((tag) => (
              <span className="text-[12px] text-[#4426D6]" key={tag}>
                #{tag}
              </span>
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

export default IndividualPostCard;
