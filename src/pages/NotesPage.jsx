import react from 'react'
import { useState } from 'react'
import {
  ScrollView,
  Pressable,
  Modal,
  View,
  Text,
  TextInput,
  StyleSheet,
} from 'react-native'
// Icon imports
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faPlus } from '@fortawesome/free-solid-svg-icons'
import TodoItem from '../components/TodoItem'

const NotesPage = () => {
  const [modalVisible, setModalVisible] = useState(false)

  return (
    <View style={styles.container}>
      <ScrollView style={styles.scrollView}>
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
                <Text style={styles.modalText}>Add a new task!</Text>
                <TextInput value='name' />
                <Pressable
                  style={[styles.button, styles.buttonClose]}
                  onPress={() => setModalVisible(!modalVisible)}
                >
                  <Text style={styles.textStyle}>Add</Text>
                </Pressable>
              </View>
            </View>
          </Modal>
        </View>
        {/* Lista de tareas */}
        <TodoItem />
      </ScrollView>
      {/* Button to add a new task */}
      <Pressable
        style={[styles.buttonOpen, styles.bottomLeft]}
        onPress={() => setModalVisible(true)}
      >
        <View>
          <FontAwesomeIcon icon={faPlus} size={18}/>
        </View>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '85%',
  },
  scrollView: {
    paddingHorizontal: 10,
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
    padding: 35,
    alignItems: 'center',
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
  },
  buttonOpen: {
    backgroundColor: '#F194FF',
    height: 48,
    width: 48,
    borderRadius: '50%',
    display: 'flex',
    alignItems: 'center',
    justifyContent: 'center',
  },
  addButton: {},
  bottomLeft: {
    position: 'absolute',
    bottom: 10,
    right: 10,
  },
  buttonClose: {
    backgroundColor: '#2196F3',
  },
  textStyle: {
    color: 'white',
    fontWeight: 'bold',
    textAlign: 'center',
  },
  modalText: {
    marginBottom: 15,
    textAlign: 'center',
  },
})

export default NotesPage
