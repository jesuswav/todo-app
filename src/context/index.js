import React, { useState, useEffect } from 'react'
import useAsyncStorage from '../hooks/useAsyncStorage'

const TodoContext = React.createContext()

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])
  const [logged, setLogged] = useState(false)
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)

  const { data: todoList, createTodo: saveTodos } = useAsyncStorage()
  useEffect(() => {
    setTodos(todoList)
  }, [todoList])

  // FUNCTIONS FOR TODOS
  const addTodos = (text) => {
    setTodos((prevTodos) => {
      // En esta función, prevTodos representa el estado actual de "todos"
      const newTodos = [...prevTodos, { text, completed: false }]
      saveTodos(newTodos)
      return newTodos // Devolvemos el nuevo estado que queremos establecer
    })
  }

  // Function to update the completed state
  const completeTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos[todoIndex].completed = !newTodos[todoIndex].completed
    setTodos(newTodos)
    saveTodos(newTodos)
  }

  // Delete todo function
  const deleteTodo = (text) => {
    const newTodos = [...todos]
    const todoIndex = newTodos.findIndex((todo) => todo.text === text)
    newTodos.splice(todoIndex, 1)
    saveTodos(newTodos)
    setTodos(newTodos)
    console.log('Todo borrado')
  }

  // FUNCTIONS FOR USERS

  return (
    <TodoContext.Provider
      value={{
        todos,
        setTodos,
        logged,
        setLogged,
        loginModal,
        setLoginModal,
        registerModal,
        setRegisterModal,
        addTodos,
        deleteTodo,
        completeTodo,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
