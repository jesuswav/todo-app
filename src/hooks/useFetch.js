import react, { useState } from 'react'
import { useEffect } from 'react'
import axios from 'axios'

const useFetch = (email) => {
  const [userData, setUserData] = useState()
  const [error, setError] = useState()

  useEffect(() => {
    const fetchLogin = async () => {
      try {
        const url = `http://localhost:9000/api/login?email=${email}`
        console.log(url)
        const response = await axios.get(url)
        console.log(response.data)
        setUserData(response)
      } catch (error) {
        setError(error)
        console.error('Errorrr', error)
      }
    }

    fetchLogin()
  }, [email])

  console.log('user', userData)

  return { userData, error }
}

export default useFetch
