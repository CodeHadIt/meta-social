import React from 'react'
import UserPostCard from './cards/user-post';

const AllPosts = async() => {
  const postResponse = await fetch(`https://dummyjson.com/posts`);
  const allPosts = await postResponse.json();

  //Pagination to follow
  const slicedPosts: [] = allPosts.posts.slice(0, 6);
    const AllUserPosts = slicedPosts.map((post) => (
      <UserPostCard key={post.id} post={post} />
    ));
  return <div className="space-y-4">{AllUserPosts}</div>;
}

export default AllPosts