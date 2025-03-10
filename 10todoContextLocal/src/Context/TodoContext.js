import {createContext,UseContext} from "react"


export const TodoContext = createContext({
    Todos:[
        {
            id: 1,
            todo: "Todo msg",
            completed: false,
        }
    ],
    addTodo:(todo) => {},
    updateTodo:(id,todo) => {},
    deleteTodo:(id) => {},
    toggleComplete: (id) =>{},
})

export const useTodo = () => {
    return UseContext(TodoContext)
}

export const TodoProvider = TodoContext.Provider