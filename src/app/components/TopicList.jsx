"use client";
import axios from "axios";
import Link from "next/link";
import React, { useEffect, useState } from "react";
import { FaPenAlt } from "react-icons/fa";
import RemoveBtn from "./RemoveBtn";

const TopicList = () => {
  const [todos, setTodos] = useState([]);

  useEffect(() => {
    const getData = async () => {
      try {
        const res = await axios.get("/api/todos");
        setTodos(res.data.todos);
      } catch (error) {
        console.log("Error while adding topic", error);
      }
    };
    getData();
  });

  return (
    <main className="w-full h-full flex justify-center items-center flex-wrap py-6 px-2 gap-6">
      {todos.map((todo) => (
        <div
          key={todo._id}
          className="w-60 h-48 px-2 py-4 space-y-3 flex justify-start items-center flex-col rounded-md border-2 border-teal-500 relative"
        >
          <h1 className="font-bold text-xl border-b-2 border-b-teal-500 w-full flex justify-center items-center pb-2">
            {todo.title}
          </h1>
          <p className="text-xs">
            {" "}
            {todo.message.length > 130
              ? `${todo.message.slice(0, 130)}...`
              : todo.message}
          </p>
          <div className="w-full flex justify-center items-center space-x-4 absolute bottom-5">
            <Link href={`/updatetopic/${todo._id}`}>
              <FaPenAlt size={20} />
            </Link>
            <RemoveBtn id={todo._id} />
          </div>
        </div>
      ))}
    </main>
  );
};

export default TopicList;
