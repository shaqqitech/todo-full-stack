"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const AddTopic = () => {
  const router = useRouter();
  const [title, setTitle] = useState("");
  const [message, setMessage] = useState("");

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.post("/api/todos", { title, message });
      console.log(res.data);

      router.refresh();
      router.push("/");
    } catch (error) {
      console.log("Error while adding topic", error);
    }
  };
  return (
    <main className="w-full h-screen py-10 px-4 flex justify-center items-start">
      <form className="w-full h-full space-y-4" onSubmit={handleSubmit}>
        <input
          type="text"
          placeholder="Add Title"
          value={title}
          onChange={(e) => setTitle(e.target.value)}
          className="w-full px-3 py-2 bg-transparent outline-none border-b-4 border-b-teal-400"
        />
        <textarea
          type="text"
          placeholder="Add Message..."
          rows={10}
          value={message}
          onChange={(e) => setMessage(e.target.value)}
          className="w-full px-3 py-2 bg-transparent outline-none rounded-md border-2 border-teal-400"
        />
        <button
          type="submit"
          className="w-fit px-5 py-2 rounded-md text-black font-semibold bg-teal-500 hover:bg-teal-700"
        >
          Add Topic
        </button>
      </form>
    </main>
  );
};

export default AddTopic;
