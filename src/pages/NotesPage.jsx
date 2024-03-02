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
import { faList, faUser } from '@fortawesome/free-solid-svg-icons'
import TodoItem from '../components/TodoItem'
import NewTask from '../components/NewTask'

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
        <View
          style={{
            display: 'flex',
            flexDirection: 'row',
          }}
        >
          <FontAwesomeIcon icon={faList} size={24} style={{ marginRight: 6 }} />
          <Text
            style={{
              fontSize: 22,
              fontWeight: 'bold',
              marginBottom: 12,
            }}
          >
            Tasks to finish
          </Text>
        </View>
        <TodoItem />
        <NewTask />
      </ScrollView>
      {/* Button to add a new task */}
      <Pressable
        style={[styles.buttonOpen, styles.bottomLeft]}
        onPress={() => setModalVisible(true)}
      >
        <View>
          <FontAwesomeIcon
            icon={faUser}
            size={20}
            style={{ color: 'rgba(164, 32, 197, 1)' }}
          />
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
    paddingHorizontal: 22,
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
    backgroundColor: 'rgba(224, 125, 249, 0.5)',
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
    bottom: 0,
    right: 18,
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
