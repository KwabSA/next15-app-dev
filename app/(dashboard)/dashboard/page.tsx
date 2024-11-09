import Link from "next/link";

const DashboardPage = () => {
  return (
    <>
      <h1 className="text-2xl font-bold">
        Main Dashboard UI {"|"} &nbsp;
        <Link href={"/"} className="text-sm underline underline-offset-4">
          Home
        </Link>{" "}
      </h1>
      <div className="space-y-2 mt-4">
        <li>
          <Link
            href={"/dashboard/analytics"}
            className="underline underline-offset-4"
          >
            Analytics
          </Link>
        </li>
        <li>
          <Link
            href={"/dashboard/users"}
            className="underline underline-offset-4"
          >
            Users
          </Link>
        </li>
      </div>
    </>
  );
};

export default DashboardPage;
