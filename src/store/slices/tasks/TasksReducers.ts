import { createAsyncThunk } from "@reduxjs/toolkit";
import { Http } from "../../../configs/axiosConfig";
import {
  craeteNewTaskResponse,
  CreateNewTaskRequestData,
  GetAllTasksResponse,
  UpdateTaskRequestData,
} from "./task-type";
import { TasksUrl } from "./Taks-url";
import { closeModal } from "../Modal/ModalSlice";

export const getAllTasks = createAsyncThunk<GetAllTasksResponse>(
  "Tasks/getAllTasks",
  async (_, { rejectWithValue }) => {
    try {
      const response = await Http.get(TasksUrl.getAll)
        .then((res) => {
          if (res.status === 200) {
            return res.data;
          }
        })
        .catch((error: Error) => {
          return rejectWithValue(error);
        });
      return response;
    } catch (error) {
      return rejectWithValue(error);
    }
  }
);

export const CreateNewTask = createAsyncThunk<
  craeteNewTaskResponse,
  { data: CreateNewTaskRequestData }
>("Tasks/CreateNewTask", async ({ data }, { dispatch, rejectWithValue }) => {
  try {
    const response = await Http.post(TasksUrl.CreateNewTask, data)
      .then((res) => {
        if (res.status === 201) {
          dispatch(getAllTasks());
          dispatch(closeModal());

          return res.data;
        }
      })
      .catch((error: Error) => {
        return rejectWithValue(error);
      });
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const completeTask = createAsyncThunk<
  craeteNewTaskResponse,
  { data: UpdateTaskRequestData }
>("Tasks/completeTask", async ({ data }, { dispatch, rejectWithValue }) => {
  const updatedData = {
    title: data.title,
    description: data.description,
    completed: !data.completed,
  };
  try {
    const response = await Http.put(
      `${TasksUrl.CreateNewTask}${data.id}`,
      updatedData
    )
      .then((res) => {
        if (res.status === 200) {
          dispatch(getAllTasks());
          dispatch(closeModal());

          return res.data;
        }
      })
      .catch((error: Error) => {
        return rejectWithValue(error);
      });
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const deleteTask = createAsyncThunk<
  craeteNewTaskResponse,
  { id: string }
>("Tasks/deleteTask", async ({ id }, { dispatch, rejectWithValue }) => {
  try {
    const response = await Http.delete(`${TasksUrl.CreateNewTask}${id}`)
      .then((res) => {
        if (res.status === 204) {
          dispatch(getAllTasks());
          dispatch(closeModal());

          return res.data;
        }
      })
      .catch((error: Error) => {
        return rejectWithValue(error);
      });
    return response;
  } catch (error) {
    return rejectWithValue(error);
  }
});

export const EditTask = createAsyncThunk<
  craeteNewTaskResponse,
  {  data: UpdateTaskRequestData}
>("Tasks/EditTask", async ({ data }, { dispatch, rejectWithValue }) => {
       const updatedData = {
              title: data.title,
              description: data.description,
              completed: data.completed,
            };
            try {
              const response = await Http.put(
                `${TasksUrl.CreateNewTask}${data.id}`,
                updatedData
              )
                .then((res) => {
                  if (res.status === 200) {
                    dispatch(getAllTasks());
                    dispatch(closeModal());
          
                    return res.data;
                  }
                })
                .catch((error: Error) => {
                  return rejectWithValue(error);
                });
              return response;
            } catch (error) {
              return rejectWithValue(error);
            }
});
