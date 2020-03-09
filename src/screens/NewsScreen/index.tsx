import React, { useEffect } from 'react'
import { useDispatch } from 'react-redux'
import { Text, StyleSheet } from 'react-native'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fetchHeadLines } from './actions'

const NewsScreen: React.FunctionComponent = () => {
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHeadLines())
  })

  return (
    <SafeAreaView style={styles.wrapper}>
      <Text>News!</Text>
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NewsScreen
