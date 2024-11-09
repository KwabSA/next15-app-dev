import Link from "next/link";
import React from "react";

const DashboardPage = () => {
  return (
    <>
      <div className="text-3xl font-bold">Dashboard</div>
      <li>
        <Link href={"/dashboard/analytics"}>Analytics</Link>
      </li>
      <li>
        <Link href={"/dashboard/users"}>Users</Link>
      </li>
    </>
  );
};

export default DashboardPage;
