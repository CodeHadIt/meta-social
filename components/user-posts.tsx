import React from "react";
import UserPostCard from "./cards/user-post";

const UserPosts = async () => {
  const postResponse = await fetch(`https://dummyjson.com/posts`);
  const posts = await postResponse.json();

  //sorting the top 2 posts by most likes. - sort(desc order) first, then slice.
  const sortedPosts: [] = posts.posts
    .sort(
      (firstPost, secondPost) =>
        secondPost.reactions.likes - firstPost.reactions.likes
    )
    .slice(0, 2);
  const UsersPosts = sortedPosts.map((post) => (
    <UserPostCard key={post.id} post={post} />
  ));
  return <div className="space-y-4">{UsersPosts}</div>;
};

export default UserPosts;
