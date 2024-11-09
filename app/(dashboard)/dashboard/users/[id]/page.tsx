import Link from "next/link";
import React from "react";

const UserProfile = ({ params }: { params: { id: string } }) => {
  const { id } = params;
  // params.id;
  return (
    <>
      <div className="text-3xl font-bold border-b-2 mb-4">User Details</div>
      <h1 className="text-2xl mb-8">User {id} Profile</h1>
      <Link href={"/dashboard/users"}>Back</Link>
    </>
  );
};

export default UserProfile;
