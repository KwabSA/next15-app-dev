import Link from "next/link";
import React from "react";

const Layout = ({ children }: { children: React.ReactNode }) => {
  return (
    <div>
      <h1 className="text-3xl">
        Navbar Here{" "}
        <Link href={"/dashboard"} className="text-sm">
          Dashboard
        </Link>{" "}
      </h1>
      {children}
    </div>
  );
};

export default Layout;
