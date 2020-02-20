import React from 'react'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Brand from './Brand'

const isAndroid = Platform.OS === 'android'

const LaunchScreen: React.FunctionComponent = () => (
  <SafeAreaView style={styles.wrapper}>
    {isAndroid && <StatusBar backgroundColor="#ef5350" />}
    <Brand />
  </SafeAreaView>
)

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
})

export default LaunchScreen
