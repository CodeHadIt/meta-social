import React from "react";
import FollowCard from "./cards/follow";

type userPostCount = {
  userId: string, 
  posts: number,
}

const UsersFollow = async () => {
  //Fetch all posts
  const reponse = await fetch("https://dummyjson.com/posts?limit=251");
  const allPosts = await reponse.json();

  //create a record of the users post count then sort them in descending order and ultimaley, return the top 4
  const cleanedUserPostCount = allPosts.posts.reduce((acc: userPostCount[], post:userPostCount) => {
    //check if user already exists in our accumulator
    const userExists = acc.find((user) => user.userId === post.userId);
    if (userExists) {
      // If user does exist, increment their post count
      userExists.posts += 1;
    } else {
      // If the user isnt yet in our accumulator, add a new object for the user
      acc.push({ userId: post.userId, posts: 1 });
    }
    return acc;
  }, []).sort((userAPosts: userPostCount, userBPosts: userPostCount) => userBPosts.posts - userAPosts.posts)
    .slice(0, 4);

  const topFollows = cleanedUserPostCount.map((user) => (
    <FollowCard key={user.userId} userId={user.userId} />
  ));

  return <div className="space-y-4">{topFollows}</div>;
};

export default UsersFollow;
