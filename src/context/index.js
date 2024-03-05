import React, { useState, useEffect } from 'react'
import useAsyncStorage from '../hooks/useAsyncStorage'

const TodoContext = React.createContext()

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])
  const [notes, setNotes] = useState([])
  // const [users, setUsers] = useState([])

  const [logged, setLogged] = useState(false)
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [noteModal, setNoteModal] = useState(false)
  const [newNoteModal, setNewNoteModal] = useState(false)

  const {
    data: todoList,
    notes: notesList,
    users: usersList,
    createTodo: saveTodos,
    createNote: saveNotes,
    createUser: saveUser,
  } = useAsyncStorage()
  useEffect(() => {
    setTodos(todoList)
    setNotes(notesList)
    // setUsers(usersList)
  }, [todoList, notesList])

  console.log(notes)

  // FUNCTIONS FOR TODOS ----------
  const addTodos = (text) => {
    setTodos((prevTodos) => {
      // En esta función, prevTodos representa el estado actual de "todos"
      const newTodos = [...prevTodos, { text, completed: false }]
      saveTodos(newTodos)
      return newTodos // Devolvemos el nuevo estado que queremos establecer
    })
  }

  // Function to update todo completed state
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
  }

  // FUNCTIONS FOR NOTES --------
  const addNotes = (note) => {
    setNotes((prevNotes) => {
      const newNotes = [...prevNotes, { title: note.title, note: note.note }]
      saveNotes(newNotes)
      return newNotes
    })
  }

  const updateNotes = (update) => {
    const newNotes = [...notes]
    const noteIndex = newNotes.findIndex((note) => note.title === update.title)
    newNotes[noteIndex].title = update.title
    newNotes[noteIndex].note = update.note
    setNotes(newNotes)
    saveNotes(newNotes)
  }

  const deleteNote = (toDelete) => {
    const newNotes = [...notes]
    const noteIndex = newNotes.findIndex(
      (note) => note.title === toDelete.title
    )
    newNotes.splice(noteIndex, 1)
    saveNotes(newNotes)
    setNotes(newNotes)
    console.log('Nota borrada')
  }

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
        noteModal,
        setNoteModal,
        newNoteModal,
        setNewNoteModal,
        addTodos,
        deleteTodo,
        completeTodo,
        addNotes,
        updateNotes,
        deleteNote,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
