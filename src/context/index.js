import React, { useState, useEffect } from 'react'
import useAsyncStorage from '../hooks/useAsyncStorage'

const TodoContext = React.createContext()

function TodoProvider({ children }) {
  const [todos, setTodos] = useState([])
  const [notes, setNotes] = useState([])
  const [users, setUsers] = useState([])

  const [loggedUser, setLoggedUser] = useState({})

  const [logged, setLogged] = useState(false)
  const [loginModal, setLoginModal] = useState(false)
  const [registerModal, setRegisterModal] = useState(false)
  const [noteModal, setNoteModal] = useState(false)
  const [newNoteModal, setNewNoteModal] = useState(false)
  const [modalData, setModalData] = useState({})
  console.log('modal data', modalData.title)

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
    setUsers(usersList)
  }, [todoList, notesList])

  console.log('users', users)
  console.log('notes', notes)

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

  const updateNotes = (update, lastTitle) => {
    const newNotes = [...notes]
    console.log('Value to update: ', update.title)
    console.log('Last title from the function: ', lastTitle)
    const noteIndex = newNotes.findIndex((note) => note.title === lastTitle)
    const noteTitle = newNotes.findIndex((note) => console.log(note.title))
    console.log('Titulo de la nota a actualizar: ', noteTitle)
    console.log('Indice para actualizar: ', noteIndex)
    console.log('notas para actualizar: ', newNotes)
    console.log(newNotes[noteIndex])
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

  // FUNTIONS FOR USERS --------
  const addUser = (newUser) => {
    setUsers((prevUsers) => {
      const newUsers = [
        ...prevUsers,
        { username: newUser.username, password: newUser.password },
      ]
      saveUser(newUsers)
      return newUsers
    })
  }

  // const updateUsers = (update) => {
  //   const newUsers = [...users]
  //   const userIndex = newUsers.findIndex(
  //     (user) => user.username === update.username
  //   )
  //   newUsers[userIndex].username = update.username
  //   newUsers[userIndex].password = update.password
  //   setUsers(newUsers)
  //   saveUser(newUsers)
  // }

  return (
    <TodoContext.Provider
      value={{
        todos,
        notes,
        users,
        loggedUser,
        setLoggedUser,
        setUsers,
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
        modalData,
        setModalData,
        addTodos,
        deleteTodo,
        completeTodo,
        addNotes,
        updateNotes,
        deleteNote,
        addUser,
      }}
    >
      {children}
    </TodoContext.Provider>
  )
}

export { TodoContext, TodoProvider }
