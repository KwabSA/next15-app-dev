import Link from "next/link";
import React from "react";

const AnalyticsPage = () => {
  return (
    <>
      <div className="text-2xl font-bold">Analytics Page</div>
      <Link href={"/dashboard"}>Dashboard</Link>
    </>
  );
};

export default AnalyticsPage;
