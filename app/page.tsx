import UserProfileCard from "@/components/cards/user-profile";
import { Button } from "@/components/ui/button";
import UserPostCard from "@/components/cards/user-post";
import FollowCard from "@/components/cards/follow";
import FollowSkeleton from "@/components/skeletons/follows";
import UserProfileSkeleton from "@/components/skeletons/user-profile";
import UserPostSkeleton from "@/components/skeletons/user-post";
import FeedHeader from "@/components/headers/feed";
import { Suspense } from "react";
import UserPosts from "@/components/user-posts";
import UsersFollow from "@/components/user-follow";
import AllPosts from "@/components/all-posts";

export default function Home() {
  return (
    <>
      <FeedHeader />
      <main className="max-w-[1100px] mx-auto flex flex-col gap-12 items-start py-8 px-4">
        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold">Suggested Post</h2>
          <Suspense fallback={<UserPostSkeleton />}>
            <UserPosts />
          </Suspense>
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold">Who To Follow</h2>
          <UsersFollow />
        </section>

        <section className="space-y-4">
          <h2 className="text-2xl font-extrabold">Recent</h2>
          <AllPosts />
        </section>
      </main>
    </>
  );
}
