import React from "react";
import UserPostSkeleton from "./user-post";

const SuggestedPostSkeleton = () => {
  return (
    <div className="space-y-4 flex flex-col">
      <UserPostSkeleton />
      <UserPostSkeleton />
    </div>
  );
};

export default SuggestedPostSkeleton;
