import react, { useContext, useEffect, useState } from 'react'
import {
  View,
  Text,
  StyleSheet,
  Pressable,
  Modal,
  TextInput,
} from 'react-native'
import { TodoContext } from '../context'

const todo = {
  id: 2,
  title: 'Clean my room',
  completed: false,
}

const NewTask = () => {
  const { addTodos } = useContext(TodoContext)
  const [modalVisible, setModalVisible] = useState(false)
  const [inputValue, setInputValue] = useState('')

  return (
    <View>
      {/* Modal --------------------- */}
      <View style={styles.centeredView}>
        <Modal
          animationType='slide'
          transparent={true}
          visible={modalVisible}
          onRequestClose={() => {
            Alert.alert('Modal has been closed.')
            setModalVisible(!modalVisible)
          }}
        >
          <View style={styles.centeredView}>
            <View style={styles.modalView}>
              <View style={styles.porfileContainer}>
                <View style={styles.header}>
                  <Text style={styles.modalText}>Create a new TODO</Text>
                </View>
                <View
                  style={{
                    display: 'flex',
                    justifyContent: 'center',
                    width: 300,
                  }}
                >
                  <TextInput
                    style={{
                      fontSize: 20,
                      fontWeight: '600',
                      borderColor: 'rgba(193, 193, 193, 0.67)',
                      borderWidth: 2,
                      padding: 10,
                      width: '100%',
                      borderRadius: 22,
                      marginBottom: 16,
                    }}
                    onChange={(event) => setInputValue(event.nativeEvent.text)}
                    placeholder='Title'
                  />
                </View>
              </View>
              <View style={{ width: '100%' }}>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => {
                    addTodos(inputValue)
                    setModalVisible(!modalVisible)
                  }}
                >
                  <Text style={styles.textStyle}>Add</Text>
                </Pressable>
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Close</Text>
                </Pressable>
              </View>
            </View>
          </View>
        </Modal>
      </View>
      {/* Modal --------------------- */}
      <Pressable style={styles.container} onPress={() => setModalVisible(true)}>
        <Text style={styles.text}>Add a new task!</Text>
      </Pressable>
    </View>
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
  },
  text: {
    color: 'rgba(164, 32, 197, 1)',
    fontWeight: 'bold',
    padding: 12,
  },
  centeredView: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    marginTop: 22,
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
  porfileContainer: {
    display: 'flex',
    justifyContent: 'center',
    alignItems: 'center',
  },
  header: {
    display: 'flex',
    flexDirection: 'row',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(224, 125, 249, 0.5)',
  },
  buttonOpen: {
    backgroundColor: 'rgba(224, 125, 249, 0.5)',
    height: 48,
    width: 48,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  buttonClose: {
    marginBottom: 10,
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 0,
    right: 18,
  },
  textStyle: {
    color: 'rgba(164, 32, 197, 1)',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
})

export default NewTask
