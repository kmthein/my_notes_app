import React, { useContext, useState } from "react";
import { ContextData } from "../store/Context";
import { AiFillDelete } from "react-icons/ai"

const Card = ({ blog }) => {
  const [checked, setChecked] = useState(false);

  const {toggleDone, deleteTask} = useContext(ContextData);

  return (
    <div className="w-[100%] sm:w-[80%] lg:w-[62%] mx-auto p-3 py-5 mb-[30px] rounded-md bg-pink-100">
      <div className="flex justify-between">
        {blog.done ? (
          <del>
            <h3>{blog.task}</h3>
          </del>
        ) : (
          <h3>{blog.task}</h3>
        )}
        <div className="flex items-start">
        {checked ? (
          <input
            type="checkbox"
            className="w-4 cursor-pointer mt-1"
            checked
            onChange={(e) => {
              setChecked(!checked);
              toggleDone(blog.id, e.target.checked)
            }}
            value={checked}
          />
        ) : (
          <input
            type="checkbox"
            className="w-4 cursor-pointer mt-1"
            onChange={(e) => {
              setChecked(!checked);
              toggleDone(blog.id, e.target.checked)
            }}
            value={checked}
          />
        )}
        <AiFillDelete className="ml-3 text-red-700 text-xl cursor-pointer" title="Remove" onClick={() => deleteTask(blog.id)} />
        </div>
      </div>
    </div>
  );
};

export default Card;
