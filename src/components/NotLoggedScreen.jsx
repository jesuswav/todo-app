import React, { useState } from 'react'
import { useContext } from 'react'
import { View, Text, Pressable, StyleSheet } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons'
import { TodoContext } from '../context'
import LoginForm from './LoginForm'
import RegisterForm from './RegisterForm'

const NotLoggedScreen = () => {
  const { logged, setLogged } = useContext(TodoContext)
  const { loginModal, setLoginModal } = useContext(TodoContext)
  const { registerModal, setRegisterModal } = useContext(TodoContext)

  return (
    <>
      <View
        style={{
          width: '100%',
          height: '100%',
          display: 'flex',
          justifyContent: 'center',
          alignItems: 'center',
        }}
      >
        <View
          style={{
            display: 'flex',
            justifyContent: 'center',
            alignItems: 'center',
          }}
        >
          <Text
            style={{
              fontSize: 16,
              fontWeight: '600',
              color: 'rgba(164, 32, 197, 1)',
            }}
          >
            Ups, it seems like you are not logged
          </Text>
          <Text
            style={{
              fontSize: 12,
              fontWeight: '600',
              color: 'rgba(164, 32, 197, 0.50)',
            }}
          >
            Sing in to have access to all the functions!
          </Text>
          <FontAwesomeIcon
            icon={faFaceFrown}
            size={72}
            style={{
              marginTop: 22,
              color: 'rgba(224, 125, 249, 0.8)',
            }}
          />
        </View>
        <Pressable
          onPress={() => setLoginModal(!loginModal)}
          style={{
            borderRadius: 26,
            padding: 10,
            elevation: 2,
            width: '72%',
            alignItems: 'center',
            justifyContent: 'center',
            borderColor: 'rgba(224, 125, 249, 0.5)',
            borderWidth: 3,
            marginTop: 22,
          }}
        >
          <Text
            style={{
              fontSize: 16,
              color: 'rgba(224, 125, 278, 1)',
              fontWeight: 'bold',
              textAlign: 'center',
            }}
          >
            Sing in
          </Text>
        </Pressable>
        <View style={{ display: 'flex', flexDirection: 'row', marginTop: 10 }}>
          <View
            style={{
              borderBottomWidth: 2,
              width: '29%',
              borderRadius: 10,
              borderColor: 'rgba(193, 193, 193, 0.67)',
              marginBottom: 8,
            }}
          ></View>
          <Text
            style={{
              fontWeight: '600',
              color: 'rgba(193, 193, 193, 0.67)',
              marginHorizontal: 6,
            }}
          >
            Or
          </Text>
          <View
            style={{
              borderBottomWidth: 2,
              width: '29%',
              borderRadius: 10,
              borderColor: 'rgba(193, 193, 193, 0.67)',
              marginBottom: 8,
            }}
          ></View>
        </View>
        <Pressable
          style={[styles.button, styles.buttonClose]}
          onPress={() => setRegisterModal(!registerModal)}
        >
          <Text style={styles.textStyle}>Sing up</Text>
        </Pressable>
      </View>
      <LoginForm />
      <RegisterForm />
    </>
  )
}

const styles = StyleSheet.create({
  button: {
    borderRadius: 20,
    padding: 10,
    elevation: 2,
    height: 42,
    width: '72%',
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

export default NotLoggedScreen
