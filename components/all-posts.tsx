"use client";
import { fetchPosts } from "@/actions";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import NotFoundCard from "./cards/not-found";
import UserPostCard from "./cards/user-post";
import AllPostSkeleton from "./skeletons/all-posts-skeleton";
import LoadingSpinner from "./ui/loading-spinner";

const AllPosts = () => {
  const { data, status, fetchNextPage, isFetching } = useInfiniteQuery({
    queryKey: ["posts"],
    queryFn: ({ pageParam }) => fetchPosts(pageParam, 5),
    initialPageParam: 0,
    getNextPageParam: (lastPage, allPages, lastPageParam) => {
      if (lastPage.length === 0) {
        return undefined;
      }
      return lastPageParam + 1;
    },
    getPreviousPageParam: (firstPage, allPages, firstPageParam) => {
      if (firstPageParam <= 1) {
        return undefined;
      }
      return firstPageParam - 1;
    },
  });

  const { ref, inView } = useInView();

  //Checks to see when our ref(last item on page) is in view
  //Calls the fetchNextPage function when true.
  useEffect(() => {
    if (inView) {
      fetchNextPage();
    }
  }, [inView, fetchNextPage]);

  return status === "pending" ? (
    <AllPostSkeleton />
  ) : status === "error" ? (
    <div>
      <NotFoundCard purpose="error" dataType="post" />
    </div>
  ) : (
    <div className="space-y-4 flex flex-col">
      {data.pages.map((page, index) => (
        <div key={index} className="space-y-4">
          {page.map((post) => (
            <UserPostCard key={post.id} post={post} />
          ))}
        </div>
      ))}
      <div ref={ref} className="self-center">
        {isFetching && <LoadingSpinner />}
      </div>
    </div>
  );

  //Pagination to follow
  //   const slicedPosts: UserPost[] = allPosts.posts.slice(0, 6);
  //   const AllUserPosts = slicedPosts.map((post: UserPost) => (
  //     <UserPostCard key={post.id} post={post} />
  //   ));
  //   return <div className="space-y-4">{AllUserPosts}</div>;
};

export default AllPosts;
