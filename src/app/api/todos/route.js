import { connect } from "@/dbConfig/dbConfig";
import Todo from "@/models/todoModel";
import { NextResponse } from "next/server";

connect();

export async function POST(req) {
  try {
    const {  title, message } = await req.json();
    const todo = await Todo.create({ title, message });
    return NextResponse.json(
      {
        message: "Todo created successfully",
        success: true,
        todo,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while creating Todo List",
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function GET() {
  try {
    const todos = await Todo.find();
    return NextResponse.json(
      {
        message: "Todos found successfully",
        success: true,
        todos,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while finding Todos List",
        success: false,
      },
      { status: 500 }
    );
  }
}

export async function DELETE(req) {
  try {
    const id = req.nextUrl.searchParams.get("id");
    const todo = await Todo.findByIdAndDelete(id);
    return NextResponse.json(
      {
        message: "Todos deleted successfully",
        success: true,
        todo,
      },
      { status: 200 }
    );
  } catch (error) {
    return NextResponse.json(
      {
        message: "Error while deleting Todo List",
        success: false,
      },
      { status: 500 }
    );
  }
}
