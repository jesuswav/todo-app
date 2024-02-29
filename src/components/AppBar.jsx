import React from 'react'
import { StyleSheet, ScrollView, View, Text } from 'react-native'
import Constants from 'expo-constants'

const AppBar = () => {
  return (
    <View style={styles.container}>
      <ScrollView style={styles.scroll}>
        <Text style={styles.text}>
          Notes
        </Text>
      </ScrollView>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    backgroundColor: 'black',
    paddingTop: Constants.statusBarHeight + 10,
    paddingLeft: 10,
  },
  scroll: {
    paddingBottom: 10,
  },
  text: {
    color: 'white',
    fontWeight: '900',
    fontSize: 28,
  },
})

export default AppBar
