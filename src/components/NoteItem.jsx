import React, { useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPenToSquare } from '@fortawesome/free-solid-svg-icons'
import { faTrashAlt } from '@fortawesome/free-regular-svg-icons'
import { TodoContext } from '../context'

const NoteItem = (data) => {
  const { deleteNote } = useContext(TodoContext)
  const { noteModal, setNoteModal } = useContext(TodoContext)
  const { modalData, setModalData } = useContext(TodoContext)

  return (
    <>
      <View
        style={{
          display: 'flex',
          flexDirection: 'row',
          alignItems: 'center',
          justifyContent: 'space-between',
          marginHorizontal: 10,
          marginVertical: 10,
          marginRight: 38,
        }}
      >
        <Pressable
          style={{ width: '100%' }}
          onPress={() => {
            setNoteModal(!noteModal)
            setModalData(data.data)
          }}
        >
          <View
            style={{
              flex: 1,
              width: '90%',
              display: 'flex',
              flexDirection: 'row',
              alignItems: 'center',
            }}
          >
            <FontAwesomeIcon
              icon={faPenToSquare}
              size={32}
              style={{ marginRight: 10 }}
            />
            <Text style={{ fontSize: 18, fontWeight: '600',  }}>
              {data.data.title}
            </Text>
          </View>
        </Pressable>
        <Pressable onPress={() => deleteNote(data.data.title)}>
          <FontAwesomeIcon icon={faTrashAlt} size={28} />
        </Pressable>
      </View>
    </>
  )
}

export default NoteItem
