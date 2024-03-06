import React, { useContext, useState } from 'react'
import {
  View,
  Text,
  TextInput,
  Pressable,
  StyleSheet,
  Modal,
  TouchableWithoutFeedback,
  Keyboard,
} from 'react-native'
import { TodoContext } from '../context'

const NewNote = () => {
  const { addNotes } = useContext(TodoContext)
  const { newNoteModal, setNewNoteModal } = useContext(TodoContext)
  const [title, setTitle] = useState('')
  const [note, setNote] = useState('')

  const createNote = () => {
    addNotes({ title: title, note: note })
  }

  return (
    <>
      <View>
        <TouchableWithoutFeedback onPress={() => Keyboard.dismiss()}>
          <Modal
            animationType='slide'
            transparent={true}
            visible={newNoteModal}
          >
            <View
              style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
              }}
            >
              <View style={styles.modalView}>
                <Text
                  style={{ fontSize: 20, fontWeight: '700', marginBottom: 8 }}
                >
                  Create a new note!
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
                  onChange={(event) => setTitle(event.nativeEvent.text)}
                  placeholder='Title'
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
                  onChange={(event) => setNote(event.nativeEvent.text)}
                  placeholder='Note'
                  multiline={true}
                  numberOfLines={4}
                />
                <View
                  style={{
                    borderBottomWidth: 2,
                    width: '90%',
                    borderRadius: 10,
                    borderColor: 'rgba(193, 193, 193, 0.67)',
                    marginBottom: 18,
                  }}
                ></View>
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
                  onPress={() => {
                    createNote()
                    setNewNoteModal(false)
                  }}
                >
                  <Text
                    style={{
                      color: 'rgba(224, 125, 278, 1)',
                      fontWeight: '700',
                      textAlign: 'center',
                    }}
                  >
                    Create
                  </Text>
                </Pressable>
                <Pressable
                  style={[styles.button]}
                  onPress={() => setNewNoteModal(!newNoteModal)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </TouchableWithoutFeedback>
      </View>
      <Pressable style={styles.container} onPress={() => setNewNoteModal(true)}>
        <Text style={styles.text}>Add a new note!</Text>
      </Pressable>
    </>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    justifyContent: 'center',
    width: '100%',
    height: 46,
    backgroundColor: 'rgba(224, 125, 249, 0.5)',
    borderRadius: 28,
    marginTop: 16,
  },
  text: {
    color: 'rgba(164, 32, 197, 1)',
    fontWeight: 'bold',
    padding: 12,
  },
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

export default NewNote
