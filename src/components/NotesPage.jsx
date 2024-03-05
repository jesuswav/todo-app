import React from 'react'
import { View, Text } from 'react-native'
import NoteItem from './NoteItem'
import NewNote from './NewNote'

const note = {
  title: 'Note title',
  note: 'Note content',
}

const NotesPage = () => {
  return (
    <View>
      <NoteItem data={note} />
      <NewNote />
    </View>
  )
}

export default NotesPage
