import { useEffect, useState } from 'react'
import reactLogo from './assets/react.svg'
import viteLogo from '/vite.svg'
import './App.css'
import { TodoProvider } from './Context/TodoContext'
import TodoForm from './Component/TodoFrom'

function App() {
  const [Todos,setTodos] = useState([])

  const addTodo = (todo) => {
    setTodos((prev) => [{id: Date.now(), ...todo}, ...prev]
  )}

  const updateTodo = (id,todo) => {
  setTodos((prev) => prev.map((prevTodo) => (prevTodo.id === id ? todo : prevTodo)))     
  }

  const deleteTodo = (id) => {
    setTodos((prev) => prev.filter((todo) => todo.id !== id))
  }

  const toggleComplete = (id) => {
    setTodos((prev) => prev.map ((prevTodo) => prevTodo === id ? {...prevTodo,completed: !prevTodo.completed} : prevTodo ))
  }

  useEffect(() =>{
    const todos = JSON.parse(localStorage.getItem("Todos"))

    if(todos && todos.lenght > 0){
      setTodos(Todos)
    }
  },[])

  useEffect(() => {
    localStorage.setItem("Todos", JSON.stringify(Todos))
  },[Todos])

  return (
    <TodoProvider value={{Todos,addTodo,updateTodo,deleteTodo,toggleComplete}}>
    <div className="bg-[#172842] min-h-screen py-8">
    <div className="w-full max-w-2xl mx-auto shadow-md rounded-lg px-4 py-3 text-white">
        <h1 className="text-2xl font-bold text-center mb-8 mt-2">Manage Your Todos</h1>
        <div className="mb-4">
            {/* Todo form goes here */} 
            <TodoForm/>
        </div>
        <div className="flex flex-wrap gap-y-3">
            {/*Loop and Add TodoItem here */}
            
        </div>
    </div>
</div>
</TodoProvider>
  )
}

export default App
