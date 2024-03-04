import React from 'react'
import { StyleSheet, ScrollView, View, Text, BackHandler } from 'react-native'
import Constants from 'expo-constants'
import { FontAwesomeIcon } from '@fortawesome/react-native-fontawesome'
import { faNoteSticky } from '@fortawesome/free-solid-svg-icons'

const AppBar = () => {
  return (
    <View style={styles.container}>
      <FontAwesomeIcon
        icon={faNoteSticky}
        size={44}
        style={{ marginRight: 2 }}
      />
      <Text style={styles.text}>Notes</Text>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    display: 'flex',
    flexDirection: 'row',
    alignItems: 'center',
    paddingTop: Constants.statusBarHeight,
    marginTop: 4,
    paddingLeft: 14,
  },
  scroll: {
    display: 'flex',
    flexDirection: 'row',
    width: '100%',
    paddingBottom: 10,
  },
  text: {
    fontWeight: '900',
    fontSize: 36,
  },
})

export default AppBar
