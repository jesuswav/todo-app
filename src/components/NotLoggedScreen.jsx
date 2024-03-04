import React, { useState } from 'react'
import { useContext } from 'react'
import { View, Text, Pressable } from 'react-native'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faFaceFrown } from '@fortawesome/free-regular-svg-icons'
import { TodoContext } from '../context'
import LoginForm from './LoginForm'

const NotLoggedScreen = () => {
  const { logged, setLogged } = useContext(TodoContext)
  const { loginModal, setLoginModal } = useContext(TodoContext)

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
            Sing in to have access to all the functions
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
            Login
          </Text>
        </Pressable>
      </View>
      <LoginForm />
    </>
  )
}

export default NotLoggedScreen
