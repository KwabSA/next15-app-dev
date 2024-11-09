import Link from "next/link";
import React from "react";

const UsersPage = () => {
  return (
    <>
      <div className="text-2xl">Users Page</div>
      <Link href={"/dashboard"}>Dashboard</Link>
    </>
  );
};

export default UsersPage;
