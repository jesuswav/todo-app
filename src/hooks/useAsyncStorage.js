import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const todoModel = {
  id: 1,
  title: 'Clean my room',
  completed: false,
}

const userModel = {
  username: 'jesuswav',
  password: '1234',
}

const noteModel = {
  title: 'lista de compras',
  note: 'Contenido de la nota',
}

const useAsyncStorage = () => {
  const [data, setData] = useState([])
  const [notes, setNotes] = useState([])
  const [users, setUsers] = useState([])

  // Get all the todos
  // Use useEffect to fetch data only once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        // get todos
        const jsonTodos = await AsyncStorage.getItem('todos')
        setData(jsonTodos != null ? JSON.parse(jsonTodos) : [])

        // get notes
        const jsonNotes = await AsyncStorage.getItem('notes')
        setNotes(jsonNotes != null ? JSON.parse(jsonNotes) : [])
        console.log('Notas-----------: ', notes)

        // get users
        const jsonUsers = await AsyncStorage.getItem('users')
        console.log('Users from the hook:', jsonUsers)
        setUsers(jsonUsers != null ? JSON.parse(jsonUsers) : [])
        // setUsers(JSON.parse(jsonUsers))
        console.log('Users from the hook state: ', users)
      } catch (error) {
        console.error('Error al obtener datos de AsyncStorage:', error)
      }
    }

    fetchData()
  }, [])

  async function borrarTodosLosElementos() {
    try {
      // Obtén todas las claves almacenadas
      const claves = await AsyncStorage.getAllKeys()

      // Elimina todas las claves
      await AsyncStorage.multiRemove(claves)

      console.log('Todos los elementos de AsyncStorage han sido eliminados.')
    } catch (error) {
      console.error('Error al intentar eliminar elementos:', error)
    }
  }
  // borrarTodosLosElementos()

  // Create a new todo
  function createTodo(todos) {
    AsyncStorage.setItem('todos', JSON.stringify(todos))
  }
  // Create create note
  function createNote(note) {
    AsyncStorage.setItem('notes', JSON.stringify(note))
  }
  // Create user
  function createUser(user) {
    AsyncStorage.setItem('users', JSON.stringify(user))
  }
  return { data, notes, users, createTodo, createNote, createUser }
}

export default useAsyncStorage
