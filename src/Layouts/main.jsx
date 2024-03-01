import React, { useState } from 'react'
import {
  View,
  Text,
  Modal,
  Pressable,
  StyleSheet,
  TextInput,
} from 'react-native'
import AppBar from '../components/AppBar'
import NotesPage from '../pages/NotesPage'

const Main = () => {
  return (
    <View style={styles.container}>
      <AppBar />
      <NotesPage />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    height: '100%',
  }
})

export default Main
