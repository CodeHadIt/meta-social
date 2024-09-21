'use client'
import React from 'react'
import { useRouter } from 'next/navigation';

const ProfilePage = () => {

  //Page redirects users back to homepage. Could change to possibly show all users or logged in users.  
  const router = useRouter();
  router.push("/");
  
  return null;
}

export default ProfilePage;