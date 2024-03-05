import React, { useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import NoteModal from './NoteModal'
import { TodoContext } from '../context'

const NoteItem = (data) => {
  const { noteModal, setNoteModal } = useContext(TodoContext)
  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          width: '100%',
          paddingHorizontal: 10,
          marginBottom: 12,
        }}
      >
        <Pressable onPress={() => setNoteModal(!noteModal)}>
          <View
            style={{
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon
              icon={faPenToSquare}
              size={32}
              style={{ marginRight: 6 }}
            />
            <Text style={{ fontSize: 18 }}>{data.data.title}</Text>
          </View>
        </Pressable>
        <View>
          <FontAwesomeIcon icon={faTrashAlt} size={28} />
        </View>
      </View>
      <NoteModal data={data.data} />
    </>
  )
}

export default NoteItem
