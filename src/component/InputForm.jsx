import React, { useContext, useRef } from "react";
import { useDispatch, useSelector } from "react-redux";
import { taskAction } from "../store";

const InputForm = () => {
  const today = new Date();
  const currentTime = `${today.getHours()}:${today.getMinutes()}`;

  const tasks = useSelector(state => state.tasks);

  const taskRef = useRef();

  const dispatch = useDispatch();

  const submitNewTask = (e) => {
    e.preventDefault();
    let newTask = taskRef.current.value;
    const newId = tasks.length + 1;
    dispatch(taskAction.addTask({
      id: newId,
      task: newTask,
      done: false
    }))
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
