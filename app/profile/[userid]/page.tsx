import AllIndividualUserPost from "@/components/all-individual-user-posts";
import UserProfileCard from "@/components/cards/user-profile";
import ProfileHeader from "@/components/headers/profile";
import { Suspense } from "react";

export default async function UserProfilePage({
  params,
}: {
  params: { userid: string };
}) {
  return (
    <>
      <ProfileHeader />
      <main className="max-w-[700px] mx-auto flex flex-col items-center">
        <div className="py-16 md:py-8 px-4 space-y-12">
          <section className="">
            <Suspense>
              <UserProfileCard userId={params.userid} />
            </Suspense>
          </section>

          <section className="space-y-4">
            <h2 className="text-2xl font-extrabold">Recent</h2>
            <AllIndividualUserPost userId={params.userid} />
          </section>
        </div>
      </main>
    </>
  );
}
