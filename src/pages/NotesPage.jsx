import react, { useContext, useEffect, useState } from 'react'
import { View, StyleSheet } from 'react-native'
import LoggedScreen from '../components/LoggedScreeen'
import NotLoggedScreen from '../components/NotLoggedScreen'
import { TodoContext } from '../context'

const NotesPage = () => {
  // const [user, setUser] = useState()

  // const { userData: fetchedUser, error: error } = useFetch(
  //   'jonhsteven@email.com'
  // )

  // useEffect(() => {
  //   setUser(fetchedUser)
  //   console.log(user)
  // }, [])

  const { logged, setLogged } = useContext(TodoContext)

  return (
    <View style={styles.container}>
      {(logged && <LoggedScreen />) || <NotLoggedScreen></NotLoggedScreen>}
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '85%',
  },
})

export default NotesPage
