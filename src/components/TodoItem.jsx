import react from 'react'
import { View, Text, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'

const TodoItem = () => {
  return (
    <View style={styles.itemContainer}>
      <FontAwesomeIcon icon={faCheckSquare} />
      <Text>Todo item</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
  },
})

export default TodoItem
