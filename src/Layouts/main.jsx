import React, { useState } from 'react'
import { View, Text, Modal, Pressable, StyleSheet, TextInput } from 'react-native'
import AppBar from '../components/AppBar'

const Main = () => {
  const [modalVisible, setModalVisible] = useState(false)
  return (
    <View style={styles.container}>
      <AppBar />
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
      <Pressable
        style={[styles.buttonOpen, styles.bottomLeft]}
        onPress={() => setModalVisible(true)}
      >
        <Text style={styles.addText}>+</Text>
      </Pressable>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  },
  centeredView: {
    flex: 1,
    height: 100,
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
  addText: {
    color: 'white',
    fontWeight: '900',
    fontSize: 26
  },
  bottomLeft: {
    position: 'absolute',
    bottom: 38,
    right: 10
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

export default Main
