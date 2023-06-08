import React, { useContext, useState } from "react";
import { AiFillDelete } from "react-icons/ai"
import { useDispatch } from "react-redux";
import { taskAction } from "../store";

const Card = ({ task }) => {
  const [checked, setChecked] = useState(false);

  const dispatch = useDispatch();

  const deleteHandler = (id) => {
    dispatch(taskAction.removeTask(id))
  }

  return (
    <div className="w-[100%] sm:w-[80%] lg:w-[62%] mx-auto p-3 py-5 mb-[30px] rounded-md bg-pink-100">
      <div className="flex justify-between">
        {task.done ? (
          <del>
            <h3>{task.task}</h3>
          </del>
        ) : (
          <h3>{task.task}</h3>
        )}
        <div className="flex items-start">
        {checked ? (
          <input
            type="checkbox"
            className="w-4 cursor-pointer mt-1"
            checked
            onChange={(e) => {
              setChecked(!checked);
              dispatch(taskAction.toggleDone({id: task.id, checked: e.target.checked}))
              // toggleDone(task.id, e.target.checked)
            }}
            value={checked}
          />
        ) : (
          <input
            type="checkbox"
            className="w-4 cursor-pointer mt-1"
            onChange={(e) => {
              setChecked(!checked);
              dispatch(taskAction.toggleDone({id: task.id, checked: e.target.checked}))
              // toggleDone(task.id, e.target.checked)
            }}
            value={checked}
          />
        )}
        <AiFillDelete onClick={() => deleteHandler(task.id)} className="ml-3 text-red-700 text-xl cursor-pointer" title="Remove"/>
        </div>
      </div>
    </div>
  );
};

export default Card;
