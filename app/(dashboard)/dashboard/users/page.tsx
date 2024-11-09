import Link from "next/link";
import React from "react";

const UsersPage = () => {
  return (
    <>
      <div className="text-2xl">
        Users Dashboard
        <span className="text-sm">
          &nbsp; &nbsp; &nbsp;
          <Link href={"/dashboard"} className="underline underline-offset-4">
            Main Dashboard
          </Link>
        </span>
      </div>

      <ul className="mt-8 space-y-2">
        <li>
          <Link href={"/dashboard/users/1"}>User 1</Link>
        </li>
        <li>
          <Link href={"/dashboard/users/2"}>User 2</Link>
        </li>
        <li>
          <Link href={"/dashboard/users/3"}>User 3</Link>
        </li>
        <li>
          <Link href={"/dashboard/users/4"}>User 4</Link>
        </li>
      </ul>
    </>
  );
};

export default UsersPage;
