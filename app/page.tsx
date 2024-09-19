import UserProfileCard from "@/components/cards/user-profile";
import { Button } from "@/components/ui/button";
import UserPostCard from "@/components/cards/user-post";
import FollowCard from "@/components/cards/follow";
import FollowSkeleton from "@/components/skeletons/follows";
import UserProfileSkeleton from "@/components/skeletons/user-profile";
import UserPostSkeleton from "@/components/skeletons/user-post";

export default function Home() {
  return (
    <main className="max-w-[1100px] mx-auto flex flex-col gap-8 row-start-2 items-center sm:items-start">
      <h1 className="font-extrabold text-4xl md:text-5xl">Hello Boxo Why?</h1>
      <p>
        Lorem ipsum dolor sit amet consectetur adipisicing elit. Laboriosam esse
        inventore modi minus porro quo rem earum sit nulla. Repellendus?
      </p>
      <UserPostSkeleton />
      <UserProfileSkeleton />
      <FollowSkeleton />
      <FollowCard />
      <UserPostCard />
      <Button>Primary</Button>
      <Button variant="outline">Outline</Button>
      <UserProfileCard />
    </main>
  );
}
