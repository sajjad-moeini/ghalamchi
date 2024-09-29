import "./App.css";
import { useEffect } from "react";
import { getAllTasks } from "./store/slices/tasks/TasksReducers";
import { useAppDispatch, useAppSelector } from "./store";
import Loader from "./components/Loader/Loader";
import TaskItem from "./components/TaskItem";
import PlusIcon from "./components/icons/PlusIcon";
import Modal from "./components/Modal/Modal";
import { openModal, setModalType } from "./store/slices/Modal/ModalSlice";

function App() {
  const dispatch = useAppDispatch();
  const { tasksData, tasksDataLoading } = useAppSelector((state) => state.tasks);

  useEffect(() => {
    dispatch(getAllTasks());
  }, [dispatch]);

  const addNewTaskHandler = () => {
    dispatch(openModal());
    dispatch(setModalType({ type: "add" }));
  };

  return (
    <div className="w-full h-screen flex flex-col gap-8 justify-center items-center bg-slate-800 relative">
      <div className="w-11/12 md:w-5/6 lg:w-1/2 flex justify-between items-center">
        <h1 className="text-xl md:text-2xl lg:text-4xl text-white">Tasks</h1>
        <button className="w-fit h-fit" onClick={addNewTaskHandler}>
          <PlusIcon />
        </button>
      </div>
      {tasksDataLoading ? (
        <Loader />
      ) : (
        <div className="w-11/12 md:w-5/6 lg:w-1/2 rounded-lg overflow-x-hidden h-[70vh] overflow-y-auto">
          {tasksData.results.slice().reverse().map((task) => (
            <TaskItem {...task} key={task.id} />
          ))}
        </div>
      )}
      <Modal />
    </div>
  );
}

export default App;
