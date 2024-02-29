"use client";
import axios from "axios";
import { useRouter } from "next/navigation";
import React, { useState } from "react";

const EditTopic = ({ id, title, message }) => {
  const router = useRouter();
  const [newTitle, setNewTitle] = useState(title);
  const [newMessage, setNewMessage] = useState(message);

  const handleSubmit = async (e) => {
    e.preventDefault();
    try {
      const res = await axios.put(`/api/todos/${id}`, {
        newTitle,
        newMessage,
      });
    //   console.log(res.data);

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
          value={newTitle}
          onChange={(e) => setNewTitle(e.target.value)}
          className="w-full px-3 py-2 bg-transparent outline-none border-b-4 border-b-teal-400"
        />
        <textarea
          type="text"
          placeholder="Add Message..."
          rows={10}
          value={newMessage}
          onChange={(e) => setNewMessage(e.target.value)}
          className="w-full px-3 py-2 bg-transparent outline-none rounded-md border-2 border-teal-400"
        />
        <button
          type="submit"
          className="w-fit px-5 py-2 rounded-md text-black font-semibold bg-teal-500 hover:bg-teal-700"
        >
          Update Topic
        </button>
      </form>
    </main>
  );
};

export default EditTopic;
