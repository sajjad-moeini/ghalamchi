import React from "react";
import TrashIcon from "./icons/TrashIcon";
import CheckIcon from "./icons/CheckIcon";
import { useAppDispatch } from "../store";
import { completeTask } from "../store/slices/tasks/TasksReducers";
import { enterTaskInfo, openModal, setModalType } from "../store/slices/Modal/ModalSlice";

interface props {
  completed: boolean;
  title: string;
  id: number;
  description: string;
}

function TaskItem({ completed, title, id, description }: props) {
  const dispatch = useAppDispatch();


  const compeleteTaskHandler = () => {
    const data = {
      title,
      description,
      completed,
      id:String(id),
    };
    dispatch(completeTask({data}))
  };

  const deleteTaskHandler = ()=>{
    dispatch(openModal());
    dispatch(enterTaskInfo({completed,description,id,title}))
    dispatch(setModalType({ type: "delete" }));
  }

  const editTaskHandler = ()=>{
    dispatch(openModal());
    dispatch(enterTaskInfo({completed,description,id,title}))
    dispatch(setModalType({ type: "edit" }));
  }

  return (
    <div className="my-1 rounded-lg overflow-hidden">
      <div
        className={`${
          completed ? "bg-[#ffffffa8]" : "bg-white"
        } flex justify-between items-center p-2`}
      >
        <div
          className={`text-black font-semibold text-lg md:text-xl lg:text-2xl flex ${
            completed && "line-through"
          }`}
        >
          {title}
        </div>
        <div className="flex justify-center items-center">
          <button className="bg-blue-500 text-white px-4 py-2 rounded-lg mx-1" onClick={editTaskHandler}>
            Edit
          </button>
          {
            completed ? null:(
              <button
            className="bg-green-500 text-white  p-2 rounded-lg mx-1"
            onClick={compeleteTaskHandler}
          >
            <CheckIcon />
          </button>
            )
          }
          
          <button className="bg-red-500 text-white  p-2 rounded-lg mx-1" onClick={deleteTaskHandler}>
            <TrashIcon />
          </button>
        </div>
      </div>
      <div className="bg-[#abaaaa5b] p-2 text-slate-300">{description}</div>
    </div>
  );
}

export default TaskItem;
