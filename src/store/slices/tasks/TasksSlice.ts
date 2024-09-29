import { ActionReducerMapBuilder, createSlice, PayloadAction } from "@reduxjs/toolkit";
import { getAllTasks } from "./TasksReducers";
import initialState from "./tasksInitialState";
import { GetAllTasksResponse, TasksInitialState } from "./task-type";

const TasksSlice = createSlice({
  name: "Tasks",
  initialState: initialState,
  reducers: {},
  extraReducers: (builder:ActionReducerMapBuilder<TasksInitialState>) => {
    builder
      .addCase(getAllTasks.pending, (state) => {
        state.tasksDataLoading = true;
      })
      .addCase(getAllTasks.fulfilled, (state, { payload }:PayloadAction<GetAllTasksResponse>) => {
        state.tasksDataLoading = false;
        state.tasksData = payload;
      })
      .addCase(getAllTasks.rejected, (state) => {
        state.tasksDataLoading = false;
      })



  },
});

export default TasksSlice.reducer;
