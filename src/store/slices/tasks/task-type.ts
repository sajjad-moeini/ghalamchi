type result ={
       id:number
       title: string
       description: string
       completed: boolean
     }

export type TasksInitialState =  {
       tasksDataLoading: boolean
       tasksData: {
         count: number
         next: null
         previous: null
         results: result[]
       },
     };

     export type GetAllTasksResponse ={
       count: number
       next: null
       previous: null
       results: result[]
     }

     export type craeteNewTaskResponse ={
      id: number
      title: string
      description: string
      completed: boolean
    }
    export type CreateNewTaskRequestData={
      title:string
      description: string
      completed: boolean
    }
    export type UpdateTaskRequestData={
      id:string
      title:string
      description: string
      completed: boolean
    }