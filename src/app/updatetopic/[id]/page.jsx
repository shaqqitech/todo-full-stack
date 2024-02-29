import EditTopic from "@/app/components/EditTopic";
import axios from "axios";
import React from "react";


const getTodoById = async (id) => {
  try {
    const res = await axios.get(`http://localhost:3000/api/todos/${id}`, {
      headers: { "Cache-control": "no-store" },
    });
    console.log(res.data);
    return res.data
  } catch (error) {
    console.log("Error getting the Todo", error);
  }
};

const UpdateTopic = async ({ params }) => {
  const { id } = params;
  console.log(id);
  const {todo} = await getTodoById(id);
  console.log(todo);
  const { date, title, message } = todo;
  return <EditTopic id={id} title={title} message={message} date={date} />;
};

export default UpdateTopic;
