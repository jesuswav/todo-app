import React, { useEffect } from 'react'
import { useContext, useState } from 'react'
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native'
import { TodoContext } from '../context'

const NoteModal = () => {
  const { noteModal, setNoteModal } = useContext(TodoContext)
  const { modalData } = useContext(TodoContext)

  const { updateNotes } = useContext(TodoContext)
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')
  const [lastTitle, setLastTitle] = useState('')

  useEffect(() => {
    setTitle(modalData.title)
    setNote(modalData.note)
    setLastTitle(modalData.title)
  }, [modalData])
  console.log('Titulo: ', title)

  const editNote = () => {
    console.log('Last title: ', lastTitle)
    updateNotes({ title: title, note: note }, lastTitle)
  }

  return (
    <View>
      <Modal animationType='slide' transparent={true} visible={noteModal}>
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
            height: '100%',
          }}
        >
          <View style={styles.modalView}>
            <Text style={{ fontSize: 22, fontWeight: '500', marginBottom: 8 }}>
              Edit your note
            </Text>
            <TextInput
              style={{
                fontSize: 20,
                fontWeight: '500',
                borderColor: 'rgba(193, 193, 193, 0.67)',
                borderWidth: 2,
                padding: 10,
                width: '100%',
                borderRadius: 22,
                textAlign: 'center',
                marginBottom: 16,
                color: 'gray',
              }}
              // onChange={}
              placeholder='Title'
              value={title}
              onChange={(event) => setTitle(event.nativeEvent.text)}
            />
            {/* Text area */}
            <TextInput
              style={{
                fontSize: 20,
                fontWeight: '500',
                borderColor: 'rgba(193, 193, 193, 0.67)',
                borderWidth: 2,
                padding: 10,
                width: '100%',
                height: 204,
                borderRadius: 22,
                textAlign: 'center',
                marginBottom: 16,
                color: 'gray',
              }}
              // onChange={}
              placeholder='Note'
              multiline={true}
              numberOfLines={4}
              value={note}
              onChange={(event) => setNote(event.nativeEvent.text)}
            />
            <Pressable
              style={{
                display: 'flex',
                flexDirection: 'row',
                borderRadius: 32,
                padding: 10,
                elevation: 2,
                height: 48,
                width: '100%',
                alignItems: 'center',
                justifyContent: 'center',
                borderColor: 'rgba(224, 125, 249, 0.5)',
                borderWidth: 3.5,
                marginHorizontal: 8,
              }}
              onPress={() => editNote()}
            >
              <Text
                style={{
                  color: 'rgba(224, 125, 278, 1)',
                  fontWeight: '700',
                  textAlign: 'center',
                }}
              >
                Update
              </Text>
            </Pressable>
            <Pressable
              style={[styles.button]}
              onPress={() => setNoteModal(!noteModal)}
            >
              <Text style={styles.textStyle}>Close</Text>
            </Pressable>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
  modalView: {
    margin: 20,
    backgroundColor: 'white',
    borderRadius: 20,
    width: '90%',
    padding: 18,
    paddingTop: 24,
    alignItems: 'center',
    justifyContent: 'space-between',
    shadowColor: '#000',
    shadowOffset: {
      width: 0,
      height: 2,
    },
    shadowOpacity: 0.25,
    shadowRadius: 4,
    elevation: 5,
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 42,
    width: '100%',
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(224, 125, 249, 0.5)',
    marginTop: 10,
  },
  textStyle: {
    color: 'rgba(164, 32, 197, 1)',
    fontWeight: 'bold',
    textAlign: 'center',
  },
})
export default NoteModal
