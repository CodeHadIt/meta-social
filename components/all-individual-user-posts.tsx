"use client";
import { fetchPost } from "@/actions";
import { useInfiniteQuery } from "@tanstack/react-query";
import { useEffect } from "react";
import { useInView } from "react-intersection-observer";
import IndividualPostCard from "./cards/individual-post";
import NotFoundCard from "./cards/not-found";
import AllPostSkeleton from "./skeletons/all-posts-skeleton";
import LoadingSpinner from "./ui/loading-spinner";
import NoPostCard from "./cards/no-post";

//Responsible for fetching and rending all of an individual's posts
const AllIndividualUserPost = ({ userId }: { userId: string }) => {
  const { data, status, error, fetchNextPage, isFetching, hasNextPage } =
    useInfiniteQuery({
      queryKey: ["userpost"],
      queryFn: ({ pageParam }) => fetchPost(pageParam, 3, userId),
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
  ) : data.pages[0].length > 0 ? (
    <div className="space-y-4 flex flex-col">
      {data.pages.map((page, index) => (
        <div key={index} className="space-y-4">
          {page.map((post) => (
            <IndividualPostCard key={post.id} post={post} />
          ))}
        </div>
      ))}
      <div ref={ref} className="self-center">
        {isFetching && <LoadingSpinner />}
      </div>
    </div>
  ) : (
    <div>
      <NoPostCard />
    </div>
  );
};

export default AllIndividualUserPost;
