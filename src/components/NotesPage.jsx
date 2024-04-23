import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import NoteItem from './NoteItem'
import NewNote from './NewNote'
import NoteModal from './NoteModal'
import { TodoContext } from '../context'

const note = {
  title: 'Note title',
  note: 'Note content',
}

const NotesPage = () => {
  const { notes } = useContext(TodoContext)

  return (
    <>
      <View>
        {(notes.length !== 0 &&
          notes.map((note, index) => <NoteItem key={index} data={note} />)) || (
          <View
            style={{
              width: '100%',
              display: 'flex',
              flexDirection: 'row',
              justifyContent: 'center',
              alignItems: 'center',
              marginVertical: 17,
            }}
          >
            <FontAwesomeIcon
              icon={faSquarePlus}
              size={26}
              color='gray'
              style={{ marginRight: 6 }}
            />
            <Text style={{ fontSize: 18, fontWeight: '600', color: 'gray' }}>
              Create your first note!!
            </Text>
          </View>
        )}
        <NewNote />
      </View>
      <NoteModal />
    </>
  )
}

export default NotesPage
