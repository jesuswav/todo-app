import React, { useState, useEffect } from 'react'
import AsyncStorage from '@react-native-async-storage/async-storage'

const todoModel = {
  id: 1,
  title: 'Clean my room',
  completed: false,
}

const useAsyncStorage = () => {
  const [data, setData] = useState([])

  // Get all the todos
  // Use useEffect to fetch data only once when the component mounts
  useEffect(() => {
    const fetchData = async () => {
      try {
        const jsonTodos = await AsyncStorage.getItem('todos')
        setData(jsonTodos != null ? JSON.parse(jsonTodos) : [])
      } catch (error) {
        console.error('Error al obtener datos de AsyncStorage:', error)
      }
    }

    fetchData()
  }, [])

  // Create a new todo
  function createTodo(todos) {
    AsyncStorage.setItem('todos', JSON.stringify(todos))
  }
  return { data, createTodo }
}

export default useAsyncStorage
