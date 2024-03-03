import React, { useState, useEffect } from 'react'
import useAsyncStorage from '../hooks/useAsyncStorage'

const TodoContext = React.createContext()

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])

  const { data: todoList, createTodo: saveTodos } = useAsyncStorage()
  useEffect(() => {
    setTodos(todoList)
  }, [todoList])

  const addTodos = (text) => {
    setTodos((prevTodos) => {
      // En esta función, prevTodos representa el estado actual de "todos"
      const newTodos = [...prevTodos, { text, completed: false }]
      saveTodos(newTodos)
      return newTodos // Devolvemos el nuevo estado que queremos establecer
    })
  }

  return (
    <TodoContext.Provider value={{ todos, setTodos, addTodos }}>
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
