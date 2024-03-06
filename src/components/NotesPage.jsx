import React, { useContext } from 'react'
import { View, Text } from 'react-native'
import NoteItem from './NoteItem'
import NewNote from './NewNote'
import NoteModal from './NoteModal'
import { TodoContext } from '../context'

const note = {
  title: 'Note title',
  note: 'Note content',
}

const NotesPage = () => {
  const { notes, setNotes } = useContext(TodoContext)
  const { modalData, setModalData } = useContext(TodoContext)

  return (
    <>
      <View>
        {notes &&
          notes.map((note, index) => <NoteItem key={index} data={note} />)}
        <NewNote />
      </View>
      <NoteModal />
    </>
  )
}

export default NotesPage
