"use server";
import { PostResponse, User } from "@/types";

//DO NOT UNCOMMENT!!! without first seeing lines 38-41
// const delay = (ms: number): Promise<void> =>
//   new Promise((resolve) => setTimeout(resolve, ms));

export const fetchPosts = async (param?: number, limit?: number) => {
  //Function could be called from all-post.tsx(for homepage infite scroll)
  //    Or from suggested-posts.tsx(to get posts with the most engagements)
  //    If the former, we use pagination, if the later, we fetch everything
  let fetchUrl: string;

  if (limit) {
    const skip = param! * limit!;
    fetchUrl = `https://dummyjson.com/posts?limit=${limit}&skip=${skip}`;
  } else {
    fetchUrl = "https://dummyjson.com/posts?limit=251";
  }

  const postResponse = await fetch(fetchUrl);
  const allPosts: PostResponse = await postResponse.json();

  const returnData = await Promise.all(
    allPosts.posts.map(async (post) => {
      const postAuthor = await fetchUser(post.userId);
      const modifiedUserData = {
        ...post,
        user: postAuthor,
      };
      return modifiedUserData;
    })
  );

  //This delay isnt need/not part of the code.
  //    It was added to test the suspense boundary/loading skeleton in place.
  //    Only uncomment it if you want to test that
  //   await delay(10000);
  return returnData;
};

export const fetchUser = async (userId: number) => {
  const userResponse = await fetch(`https://dummyjson.com/users/${userId}`);
  const user: User = await userResponse.json();
  return user;
};

//Responsible for fetching individual post
export const fetchPost = async (
  param?: number,
  limit?: number,
  userId?: string
) => {
  const skip = param! * limit!;
  const postResponse = await fetch(
    `https://dummyjson.com/posts/user/${userId}?limit=${limit}&skip=${skip}`
  );
  const allPosts: PostResponse = await postResponse.json();

  const returnData = await Promise.all(
    allPosts.posts.map(async (post) => {
      const postAuthor = await fetchUser(post.userId);
      const modifiedUserData = {
        ...post,
        user: postAuthor,
      };
      return modifiedUserData;
    })
  );
  return returnData;
};
