import React, {createContext, useReducer, useContext} from 'react'

const AppStateContext = createContext
  <AppStateContextProps>({} as AppStateContextProps)

interface AppStateContextProps {
  state: AppState
}

export const AppStateProvider = ({children}: React.PropsWithChildren<{}>) => {
  return (
    <AppStateContext.Provider value={{state: appData}}>
      {children}
    </AppStateContext.Provider>
  )
}

const appData: AppState = {
  lists: [
    {
      id: "0",
      text: "To Do",
      tasks: [{ id: "c0", text: "Generate app scaffold" }]
    },
    {
      id: "1",
      text: "In Progress",
      tasks: [{ id: "c2", text: "Learn Typescript" }]
    },
      {
        id: "2",
      text: "Done",
      tasks: [{ id: "c3", text: "Begin to use static typing" }]
    }
  ]
}

interface List {
  id: string
  text: string
  tasks: Task[]
}

interface Task {
  id: string
  text: string
}

export interface AppState {
  lists: List[]
}

export const useAppState = () => {
  return useContext(AppStateContext)
}