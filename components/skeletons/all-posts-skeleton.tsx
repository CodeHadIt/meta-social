import React from 'react'
import UserPostSkeleton from './user-post'

const AllPostSkeleton = () => {
  return (
    <div className="space-y-4 flex flex-col">
      <UserPostSkeleton />
      <UserPostSkeleton />
      <UserPostSkeleton />
    </div>
  );
}

export default AllPostSkeleton