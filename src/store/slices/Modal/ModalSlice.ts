import { createSlice, PayloadAction } from "@reduxjs/toolkit";
import { initialState } from "./ModalInitialState";

type modalType ={
  type : "add"|"edit" | "delete"
}

type task ={
  id:number
  completed:boolean
  description:string
  title:string
}

const modalSlice = createSlice({
  name: "modal",
  initialState,
  reducers: {
    openModal: (state) => {
      state.isOpen = true;
    },
    closeModal: (state) => {
      state.isOpen = false;
    },
    setModalType: (state, {payload}:PayloadAction<modalType>) => {
      state.modalType = payload.type;
    },
    enterTaskInfo: (state, {payload}:PayloadAction<task>) => {
      state.selectedTaskInfo = payload;
    },

  },
});

export const { openModal, closeModal,setModalType,enterTaskInfo } = modalSlice.actions;
export default modalSlice.reducer;
