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
        const jsonValue = await AsyncStorage.getItem('todos')
        setData(jsonValue != null ? JSON.parse(jsonValue) : [])
      } catch (error) {
        console.error('Error al obtener datos de AsyncStorage:', error)
      }
    }

    fetchData()
  }, [])

  const limpiarAsyncStorage = async () => {
    try {
      await AsyncStorage.clear()
      console.log('AsyncStorage limpiado exitosamente')
    } catch (error) {
      console.error('Error al limpiar AsyncStorage:', error)
    }
  }

  // Create a new todo
  async function createTodo(todos) {
    await AsyncStorage.setItem('todos', JSON.stringify(todos))
  }
  return { data, createTodo }
}

export default useAsyncStorage
