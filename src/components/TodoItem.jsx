import react, { useContext } from 'react'
import { useState } from 'react'
import { View, Text, StyleSheet, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faCheckSquare } from '@fortawesome/free-solid-svg-icons'
import { faSquare, faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { TodoContext } from '../context'

const TodoItem = (data) => {
  const { deleteTodo, completeTodo } = useContext(TodoContext)
  return (
    <View style={styles.itemContainer}>
      <View
        style={{ display: 'flex', flexDirection: 'row', alignItems: 'center' }}
      >
        <Pressable onPress={() => completeTodo(data.data.text)}>
          {(data.data.completed === false && (
            <FontAwesomeIcon
              icon={faSquare}
              size={38}
              style={{ marginRight: 4 }}
            />
          )) || (
            <FontAwesomeIcon
              icon={faCheckSquare}
              size={38}
              style={{ marginRight: 4, color: 'rgba(164, 32, 197, 1)' }}
            />
          )}
        </Pressable>
        <View>
          <Text style={{ fontSize: 18, fontWeight: '600' }}>
            {data.data.text}
          </Text>
        </View>
      </View>
      <Pressable onPress={() => deleteTodo(data.data.text)}>
        <FontAwesomeIcon icon={faTrashAlt} size={28} />
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  itemContainer: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'space-between',
    width: '100%',
    marginBottom: 10,
  },
})

export default TodoItem
