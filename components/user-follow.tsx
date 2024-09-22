import { UserToFollow } from "@/types";
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

  const usersToFollow = await Promise.all(
    cleanedUserPostCount.map(async (user) => {
      const userResponse = await fetch(
        `https://dummyjson.com/users/${user.userId}?select=firstName,lastName,username`
      );
      //Check if the response for each user is valid for granular error handling
      //  if there was a problem fetching any given user, we populate the return array with null.
      if (!userResponse.ok) {
        return null;
      } else {
        const currentuser: UserToFollow = await userResponse.json();
        return currentuser;
      }
    })
  );

  //Check if fectch for every single user erred.
  //  If they err, we show error message
  //  If at least one doesnt err, we still show the component
  const allErred = usersToFollow.every((user) => user === null);

  if (allErred) {
    return <NotFoundCard purpose="error" dataType="user" />;
  } else {
    let topFollows: JSX.Element[];

    //Check if at least one erred, if so, filter the userToFollow array.
    const someErred = usersToFollow.some((user) => user === null);

    if (someErred) {
      //If at least one user erred, we filter the array to remove them before rendering
      const filteredUsersToFollow = usersToFollow.filter(
        (user) => user !== null
      );
      topFollows = filteredUsersToFollow.map((user) => (
        <FollowCard key={user!.id} user={user} />
      ));
    } else {
      topFollows = usersToFollow.map((user) => (
        <FollowCard key={user!.id} user={user} />
      ));
    }
    return (
      <div className="flex flex-col md:flex-row flex-wrap gap-4">
        {topFollows}
      </div>
    );
  }
};

export default UsersFollow;
