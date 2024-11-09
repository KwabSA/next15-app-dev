import Link from "next/link";

const Home = () => {
  return (
    <>
      <div className="text-2xl mx-24">Welcome to NEXT 15.</div>
      <button className="rounded-full">
        <Link href={"/about"} className="underline">
          About
        </Link>
      </button>
    </>
  );
};

export default Home;
