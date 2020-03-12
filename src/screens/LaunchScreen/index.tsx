import React, { useState, useEffect } from 'react'
import { StyleSheet, StatusBar, Platform } from 'react-native'
import { useNavigation } from '@react-navigation/native'
import { SafeAreaView } from 'react-native-safe-area-context'
import Brand from './components/Brand'

const isAndroid = Platform.OS === 'android'

function useAppInit(): boolean {
  const [isDone, setIsDone] = useState(false)

  useEffect(() => {
    const timer = setTimeout(() => !isDone && setIsDone(true), 2000)
    return (): void => clearTimeout(timer)
  })

  return isDone
}

const LaunchScreen: React.FunctionComponent = () => {
  const navigation = useNavigation()
  const isDone = useAppInit()

  if (isDone) {
    navigation.replace('Home', undefined)
  }

  return (
    <SafeAreaView style={styles.wrapper}>
      {isAndroid && <StatusBar backgroundColor="#ef5350" />}
      <Brand />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#FFFFFF'
  }
})

export default LaunchScreen
