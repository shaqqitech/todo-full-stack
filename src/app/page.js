import Link from "next/link";
import { FaPlus } from "react-icons/fa";
import TopicList from "./components/TopicList";

export default function Home() {
  return (
    <main className="w-full h-screen space-x-4 flex justify-center items-center flex-col">
      <div className="w-full space-x-5 flex justify-center items-center">
        <h1 className="font-bold text-4xl text-teal-500">Todo List</h1>
        <Link
          href={"/addtopic"}
          className="p-3 animate-pulse rounded-full text-black bg-teal-500 hover:bg-teal-600"
        >
          <FaPlus size={20} />
        </Link>
      </div>
      <div>
        <TopicList />
      </div>
    </main>
  );
}
