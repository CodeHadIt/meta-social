import { fetchPosts } from "@/actions";
import AllPosts from "@/components/all-posts";
import FeedHeader from "@/components/headers/feed";
import SuggestedPostSkeleton from "@/components/skeletons/suggested-post-skeleton";
import TopFollowsSkeleton from "@/components/skeletons/top-follows-skeleton";
import SuggestedPosts from "@/components/suggested-posts";
import UsersFollow from "@/components/user-follow";
import {
  dehydrate,
  HydrationBoundary,
  QueryClient,
} from "@tanstack/react-query";
import { Suspense, useEffect } from "react";

export default async function HomePage() {
  //Since React-Query uses hooks to fetch data client-side, it limits certain benefits of SSR
  //To not totally miss out on that, we need to prefecth and dehydrate the data especially in prod.
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) => fetchPosts(pageParam, 5),
    initialPageParam: 0,
  });

  return (
    <>
      <FeedHeader />
      <main className="max-w-[700px] mx-auto flex flex-col items-center">
        <div className="py-8 px-4 space-y-12">
          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold">Suggested Post</h2>
            <Suspense fallback={<SuggestedPostSkeleton />}>
              <SuggestedPosts />
            </Suspense>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold">Who To Follow</h2>
            <Suspense fallback={<TopFollowsSkeleton />}>
              <UsersFollow />
            </Suspense>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold">Recent</h2>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <AllPosts />
            </HydrationBoundary>
          </section>
        </div>
      </main>
    </>
  );
}
