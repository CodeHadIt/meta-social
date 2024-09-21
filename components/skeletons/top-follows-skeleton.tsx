import React from "react";
import FollowSkeleton from "./follows";

const TopFollowsSkeleton = () => {
  return (
    <div className="flex flex-col md:flex-row flex-wrap gap-4">
      <FollowSkeleton />
      <FollowSkeleton />
      <FollowSkeleton />
      <FollowSkeleton />
    </div>
  );
};

export default TopFollowsSkeleton;
