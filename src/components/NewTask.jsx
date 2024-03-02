import react from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'

const NewTask = () => {
  return (
    <Pressable style={styles.container}>
      <Text style={styles.text}>Add a new task!</Text>
    </Pressable>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    backgroundColor: 'rgba(224, 125, 249, 0.5)',
    borderRadius: 22,
  },
  text: {
    color: 'rgba(164, 32, 197, 1)',
    fontWeight: 'bold',
    padding: 12,
  },
})

export default NewTask
