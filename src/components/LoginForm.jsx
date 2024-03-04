import React, { useContext } from 'react'
import {
  View,
  Modal,
  Text,
  StyleSheet,
  Pressable,
  TextInput,
} from 'react-native'
import { TodoContext } from '../context'

const LoginForm = () => {
  const { logged, setLogged } = useContext(TodoContext)
  const { loginModal, setLoginModal } = useContext(TodoContext)

  return (
    <View style={styles.centeredView}>
      <Modal animationType='slide' transparent={true} visible={loginModal}>
        <View style={styles.centeredView}>
          <View style={styles.modalView}>
            <View style={styles.porfileContainer}>
              <View style={styles.header}>
                <Text style={styles.modalText}>Log in!!</Text>
                <Text
                  style={{
                    margin: 6,
                    paddingHorizontal: 10,
                    fontWeight: '500',
                    color: 'gray',
                    textAlign: 'center',
                  }}
                >
                  Log in with your account to have access to the aplitation!
                </Text>
                <TextInput
                  style={{
                    marginTop: 8,
                    paddingLeft: 18,
                    fontSize: 20,
                    fontWeight: '600',
                    borderColor: 'rgba(193, 193, 193, 0.67)',
                    borderWidth: 2,
                    padding: 10,
                    width: '100%',
                    textAlign: 'center',
                    borderRadius: 22,
                    marginBottom: 16,
                    color: 'gray',
                  }}
                  placeholder='user'
                />
                <TextInput
                  style={{
                    paddingLeft: 18,
                    fontSize: 20,
                    fontWeight: '600',
                    borderColor: 'rgba(193, 193, 193, 0.67)',
                    borderWidth: 2,
                    padding: 10,
                    width: '100%',
                    textAlign: 'center',
                    borderRadius: 22,
                    marginBottom: 16,
                    color: 'gray',
                  }}
                  placeholder='password'
                  secureTextEntry={true}
                />
              </View>
            </View>
            <View
              style={{
                borderBottomWidth: 2,
                width: '90%',
                borderRadius: 10,
                borderColor: 'rgba(193, 193, 193, 0.67)',
                marginBottom: 8,
              }}
            ></View>
            <View style={{ width: '100%' }}>
              <Pressable
                style={{
                  borderRadius: 20,
                  padding: 10,
                  elevation: 2,
                  height: 42,
                  alignItems: 'center',
                  justifyContent: 'center',
                  borderColor: 'rgba(224, 125, 249, 0.5)',
                  borderWidth: 2,
                  marginTop: 10,
                }}
                onPress={() => {
                  setLogged(!logged)
                  setLoginModal(false)
                }}
              >
                <Text
                  style={{
                    color: 'rgba(224, 125, 278, 1)',
                    fontWeight: 'bold',
                    textAlign: 'center',
                  }}
                >
                  Log in
                </Text>
              </Pressable>
              <Pressable
                style={[styles.button, styles.buttonClose]}
                onPress={() => setLoginModal(!loginModal)}
              >
                <Text style={styles.textStyle}>Cancel</Text>
              </Pressable>
            </View>
          </View>
        </View>
      </Modal>
    </View>
  )
}

const styles = StyleSheet.create({
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
    width: '100%',
  },
  header: {
    display: 'flex',
    width: '100%',
  },
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 42,
    alignItems: 'center',
    justifyContent: 'center',
    backgroundColor: 'rgba(224, 125, 249, 0.5)',
    marginTop: 10,
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
    marginBottom: 8,
    textAlign: 'center',
    fontSize: 22,
    fontWeight: 'bold',
  },
})

export default LoginForm
