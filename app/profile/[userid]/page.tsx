import { fetchPost } from "@/actions";
import AllIndividualUserPost from "@/components/all-individual-user-posts";
import UserProfileCard from "@/components/cards/user-profile";
import ProfileHeader from "@/components/headers/profile";
import UserProfileSkeleton from "@/components/skeletons/user-profile";
import {
    dehydrate,
    HydrationBoundary,
    QueryClient,
} from "@tanstack/react-query";
import { Suspense } from "react";

export default async function UserProfilePage({
  params,
}: {
  params: { userid: string };
}) {
  const queryClient = new QueryClient();

  await queryClient.prefetchInfiniteQuery({
    queryKey: ["userpost"],
    queryFn: ({ pageParam }) => fetchPost(pageParam, 5, params.userid),
    initialPageParam: 0,
  });
  return (
    <>
      <ProfileHeader />
      <main className="max-w-[700px] mx-auto flex flex-col items-center">
        <div className="py-16 md:py-8 px-4 space-y-12">
          <section className="">
            <Suspense fallback={<UserProfileSkeleton />}>
              <UserProfileCard userId={params.userid} />
            </Suspense>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold">Recent</h2>
            <HydrationBoundary state={dehydrate(queryClient)}>
              <AllIndividualUserPost userId={params.userid} />
            </HydrationBoundary>
          </section>
        </div>
      </main>
    </>
  );
}
