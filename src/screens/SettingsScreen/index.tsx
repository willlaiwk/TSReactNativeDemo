import React from 'react'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'

const SettingsScreen: React.FunctionComponent = () => (
  <SafeAreaView style={styles.wrapper}>
    <Text>Settings!</Text>
  </SafeAreaView>
)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default SettingsScreen
