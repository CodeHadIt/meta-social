'use client'
import { useEffect } from "react";
import { PostResponse, User, UserPost } from "@/types";
import IndividualPostCard from "./cards/individual-post";
import { useInView } from "react-intersection-observer";
import { useInfiniteQuery } from "@tanstack/react-query";
import { fetchPost, fetchPosts } from "@/actions";
import LoadingSpinner from "./ui/loading-spinner";
import AllPostSkeleton from "./skeletons/all-posts-skeleton";

//Responsible for fetching and rending all of an individual's posts
const AllIndividualUserPost = ({ userId }: { userId: string }) => {
    const { data, status, error, fetchNextPage, isFetching } = useInfiniteQuery(
      {
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
      }
    );

    const { ref, inView } = useInView();

    useEffect(() => {
      if (inView) {
        fetchNextPage();
      }
    }, [inView, fetchNextPage]);

    return status === "pending" ? (
      <AllPostSkeleton />
    ) : status === "error" ? (
      <div>{error.message}</div>
    ) : (
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
    );


  // const UserPosts = allPosts.posts.map((post: UserPost) => (
  //   <IndividualPostCard key={post.id} post={post} user={user} />
  // ));
  // return <div className="space-y-4">{UserPosts}</div>;
};

export default AllIndividualUserPost;
