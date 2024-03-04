import react, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import LoggedScreen from '../components/LoggedScreeen'
import getFetch from '../hooks/useFetch'
import useFetch from '../hooks/useFetch'

const NotesPage = () => {
  const [user, setUser] = useState()

  const { userData: fetchedUser, error: error } = useFetch(
    'jonhsteven@email.com'
  )

  useEffect(() => {
    setUser(fetchedUser)
    console.log(user)
  }, [])

  return (
    <View style={styles.container}>
      <LoggedScreen></LoggedScreen>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '85%',
  },
})

export default NotesPage
