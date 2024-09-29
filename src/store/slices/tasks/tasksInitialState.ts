import { TasksInitialState } from "./task-type";

const initialState:TasksInitialState = {
  tasksDataLoading: false,
  tasksData: {
    count: 3,
    next: null,
    previous: null,
    results: [],
  },
};
export default initialState;
