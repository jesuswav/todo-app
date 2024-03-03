import react, { useContext } from 'react'
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
import { faSquarePlus } from '@fortawesome/free-regular-svg-icons'
import UserPorfile from '../components/UserPorfile'
import TodoItem from '../components/TodoItem'
import NewTask from '../components/NewTask'
import { TodoContext } from '../context'

const NotesPage = () => {
  const [modalVisible, setModalVisible] = useState(false)
  const { todos, setTodos } = useContext(TodoContext)

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
                <View style={styles.porfileContainer}>
                  <View style={styles.header}>
                    <Text style={styles.modalText}>User information</Text>
                  </View>
                  <UserPorfile />
                </View>
                <View style={{ width: '100%' }}>
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
        <View style={{marginTop: 18}}>
          {(todos.length !== 0 &&
            todos.map((todo, i) => <TodoItem key={i} data={todo} />)) || (
            <View
              style={{
                width: '100%',
                display: 'flex',
                flexDirection: 'row',
                justifyContent: 'center',
                alignItems: 'center',
                marginTop: 18,
              }}
            >
              <FontAwesomeIcon
                icon={faSquarePlus}
                size={26}
                color='gray'
                style={{ marginRight: 6 }}
              />
              <Text style={{ fontSize: 18, fontWeight: '600', color: 'gray' }}>
                Create your first todo!!
              </Text>
            </View>
          )}
        </View>
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
    width: '90%',
    height: '80%',
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
  addButton: {},
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

export default NotesPage
