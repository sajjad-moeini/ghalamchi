import React, { useState } from "react";
import CustomInput from "../CustomInput";
import { useAppDispatch } from "../../store";
import { CreateNewTask } from "../../store/slices/tasks/TasksReducers";

function AddTaskModal() {
  const [title, setTitle] = useState("");
  const [description, setDescription] = useState("");
  const [err, setErr] = useState(false);
  const dispatch = useAppDispatch();
  const addNewTaskHandler = () => {
    if (title.trim().length > 0 && description.trim().length) {
       console.log('first')
      const data = {
        title,
        description,
        completed: false,
      };
      dispatch(CreateNewTask({ data }));
    } else {
      setErr(true);
    }
  };
  return (
    <div className="flex flex-col justify-center items-center gap-4 my-5">
      <CustomInput
        setTitle={setTitle}
        removeErr={setErr}
        title={title}
        placeholder="Enter Title ..."
        type="input"
      />
      <CustomInput
        setTitle={setDescription}
        removeErr={setErr}
        title={description}
        placeholder="Enter Description ..."
        type="textArea"
      />
      {
       err && <span className="text-red-600">Invalid Title Or Description</span>
      }
      <button
        className="w-full bg-blue-700 text-white py-2 rounded-lg"
        onClick={addNewTaskHandler}
      >
        Submit
      </button>
    </div>
  );
}

export default AddTaskModal;
