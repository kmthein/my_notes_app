import React, { useContext, useRef } from "react";
import { ContextData } from "../store/Context";

const InputForm = () => {
  const today = new Date();
  console.log(today);
  const currentTime = `${today.getHours()}:${today.getMinutes()}`;
  console.log(currentTime);

  const {blogs, addTask} = useContext(ContextData);

  const taskRef = useRef();

  const submitNewTask = (e) => {
    e.preventDefault();
    let newTask = taskRef.current.value;
    const newId = blogs.length + 1;
    addTask({
        id: newId,
        task: newTask,
        done: false
    })
    console.log(blogs);
    taskRef.current.value = "";
  }

  return (
        <div className="flex justify-center py-5 mb-[15px]">
      <form onSubmit={submitNewTask}>
          <input
            type="text"
            placeholder="Type your next task here..."
            className="rounded-tl-md rounded-bl-md p-2 w-[250px] sm:w-[400px] lg:w-[530px]"
            ref={taskRef}
            required
          />
          <button className=" bg-slate-600 p-2 text-white rounded-tr-md rounded-br-md ">
            ADD
          </button>
      </form>
    </div>
  );
};

export default InputForm;
