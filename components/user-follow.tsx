import FollowCard from "./cards/follow";
import NotFoundCard from "./cards/not-found";

type userPostCount = {
  userId: string;
  posts: number;
};

const UsersFollow = async () => {
  //Fetch all posts
  const postResponse = await fetch("https://dummyjson.com/posts?limit=251");
  const allPosts = await postResponse.json();

  if (!postResponse.ok) {
    return <NotFoundCard purpose="error" dataType="user" />;
  }

  //create a record of the users post count then sort them in descending order and ultimaley, return the top 4
  const cleanedUserPostCount: userPostCount[] = allPosts.posts
    .reduce((acc: userPostCount[], post: userPostCount) => {
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
    }, [])
    .sort(
      (userAPosts: userPostCount, userBPosts: userPostCount) =>
        userBPosts.posts - userAPosts.posts
    )
    .slice(0, 4);

  const topFollows = cleanedUserPostCount.map((user: userPostCount) => (
    <FollowCard key={user.userId} userId={user.userId} />
  ));

  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4">
      {topFollows}
    </div>
  );
};

export default UsersFollow;
