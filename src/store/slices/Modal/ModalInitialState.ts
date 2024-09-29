
export type ModalInitialState = {
       isOpen : boolean
       modalType:string,
       selectedTaskInfo:{
              id:number
              title:string
              description:string
              completed:boolean
       }
}
export const initialState:ModalInitialState = {
       isOpen : false,
       modalType:"",
      selectedTaskInfo:{
       id:0,
       completed:false,
       description:"",
       title:""
      }
}