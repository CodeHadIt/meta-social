import { PostResponse, User, UserPost } from "@/types";
import NotFoundCard from "./cards/not-found";
import UserPostCard from "./cards/user-post";

const SuggestedPosts = async () => {
  const postResponse = await fetch("https://dummyjson.com/posts?limit=251");

  if (!postResponse.ok) {
    return <NotFoundCard purpose="error" dataType="post" />;
  }
  const allPosts: PostResponse = await postResponse.json();

  const posts = await Promise.all(
    allPosts.posts.map(async (post) => {
      const userResponse = await fetch(
        `https://dummyjson.com/users/${post.id}`
      );
      //Check if the response for each user is valid for granular error handling
      //  if there was a problem fetching any given user, we populate the return array with null.
      if (!userResponse.ok) {
        return null;
      } else {
        const postAuthor: User = await userResponse.json();
        const modifiedUserData = {
          ...post,
          user: postAuthor,
        };
        return modifiedUserData;
      }
    })
  );

  //Check if fectch for every single user erred.
  //  If they err, we show error message
  //  If at least one DOESNT err, we still show the component
  const allErred = posts.every((post) => post === null);

  if (allErred) {
    return <NotFoundCard purpose="error" dataType="post" />;
  } else {
    let UsersPosts: JSX.Element[];
    //Check if at least one erred, if so, filter the posts array.
    const someErred = posts.some((post) => post === null);

    if (someErred) {
      //First, filter to remove any erring user from fetch, then sort posts with most likes in desc order and then slice for top 2.
      const filteredAndSortedPosts = posts
        .filter((post) => post != null)
        .sort(
          (firstPost, secondPost) =>
            secondPost.reactions.likes - firstPost.reactions.likes
        )
        .slice(0, 2);
      UsersPosts = filteredAndSortedPosts.map((post: UserPost) => (
        <UserPostCard key={post.id} post={post} />
      ));
    } else {
      //If no user fetch erred, straight up sort and slice
      const sortedPosts = posts
        .sort(
          (firstPost, secondPost) =>
            secondPost!.reactions.likes - firstPost!.reactions.likes
        )
        .slice(0, 2);
      UsersPosts = sortedPosts.map((post) => (
        <UserPostCard key={post!.id} post={post!} />
      ));
    }

    return <div className="space-y-4">{UsersPosts}</div>;
  }
};

export default SuggestedPosts;
