import { fetchUser } from "@/actions";
import { PostResponse, UserPost } from "@/types";
import NotFoundCard from "./cards/not-found";
import UserPostCard from "./cards/user-post";

const SuggestedPosts = async () => {
  const postResponse = await fetch("https://dummyjson.com/posts?limit=251");
  const allPosts: PostResponse = await postResponse.json();

  if (!postResponse.ok) {
    return <NotFoundCard purpose="error" dataType="post" />;
  }

  const posts = await Promise.all(
    allPosts.posts.map(async (post) => {
      const postAuthor = await fetchUser(post.userId);
      const modifiedUserData = {
        ...post,
        user: postAuthor,
      };
      return modifiedUserData;
    })
  );

  //sorts the top 2 posts by most likes. - sort(desc order) first, then slice.
  const sortedPosts: UserPost[] = posts
    .sort(
      (firstPost, secondPost) =>
        secondPost.reactions.likes - firstPost.reactions.likes
    )
    .slice(0, 2);
  const UsersPosts = sortedPosts.map((post: UserPost) => (
    <UserPostCard key={post.id} post={post} />
  ));
  return <div className="space-y-4">{UsersPosts}</div>;
};

export default SuggestedPosts;
