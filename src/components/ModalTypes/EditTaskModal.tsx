import React from "react";
import { useAppDispatch, useAppSelector } from "../../store";
import { enterTaskInfo } from "../../store/slices/Modal/ModalSlice";
import { EditTask } from "../../store/slices/tasks/TasksReducers";

function EditTaskModal() {
  const dispatch = useAppDispatch();
  const { completed, description, id, title } = useAppSelector(
    (state) => state.modal.selectedTaskInfo
  );

  const handleTitleChange = (e: React.ChangeEvent<HTMLInputElement>) => {
    dispatch(enterTaskInfo({ id, completed, description, title: e.target.value }));
  };

  const handleDescriptionChange = (e: React.ChangeEvent<HTMLTextAreaElement>) => {
    dispatch(enterTaskInfo({ id, completed, description: e.target.value, title }));
  };

  const handleStatusChange = () => {
    dispatch(enterTaskInfo({ id, completed: !completed, description, title }));
  };

  const editTaskHandler =()=>{
       const data = {
              title,description,completed,id:String(id)
       }
       dispatch(EditTask({data}))
  }

  return (
    <div>
      <input
        type="text"
        value={title}
        className="px-4 py-2 text-white bg-gray-500 rounded-lg w-full outline-blue-500 my-2"
        onChange={handleTitleChange}
      />
      <textarea
        value={description}
        className="px-4 py-2 text-white bg-gray-500 rounded-lg w-full outline-blue-500 my-2"
        onChange={handleDescriptionChange}
      />
      <div className="flex gap-2 items-center">
        <div className="text-black text-lg">Status:</div>
        <div className="flex items-center">
          <span className={`ml-3 text-sm font-medium ${completed ? "text-gray-900" : "text-blue-700"} me-2`}>
            In Progress
          </span>
          <label className="relative inline-flex items-center cursor-pointer">
            <input
              type="checkbox"
              checked={completed}
              onChange={handleStatusChange}
              className="sr-only peer"
            />
            <div className="w-11 h-6 bg-gray-300 rounded-full peer peer-focus:ring-4 peer-focus:ring-blue-300 dark:peer-focus:ring-blue-800 peer-checked:bg-blue-600 peer-checked:after:translate-x-full peer-checked:after:border-white after:content-[''] after:absolute after:top-[2px] after:left-[2px] after:bg-white after:border-gray-300 after:border after:rounded-full after:h-5 after:w-5 after:transition-all"></div>
          </label>
          <span className={`ml-3 text-sm font-medium ${completed ? "text-blue-700" : "text-gray-900"} me-2`}>
            Done
          </span>
        </div>
      </div>

      <button className="bg-blue-700 text-white py-2 w-full rounded-lg mt-5" onClick={editTaskHandler}>Edit</button>
    </div>
  );
}

export default EditTaskModal;
