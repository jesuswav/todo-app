import react from 'react'
import { StatusBar } from 'expo-status-bar'
import { StyleSheet, Text, View } from 'react-native'
import Main from './src/Layouts/main'
import { TodoProvider } from './src/context'

export default function App() {
  return (
    <View>
      <StatusBar style='auto' />
      <TodoProvider>
        <Main />
      </TodoProvider>
    </View>
  )
}
