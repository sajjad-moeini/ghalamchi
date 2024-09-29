import { combineReducers } from "@reduxjs/toolkit";
import TasksSlice from "./slices/tasks/TasksSlice";
import ModalSlice from "./slices/Modal/ModalSlice";

const reducers = combineReducers({
  tasks: TasksSlice,
  modal:ModalSlice
});

export default reducers;
