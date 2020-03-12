import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { SafeAreaView } from 'react-native-safe-area-context'
import { fetchHeadLines } from './actions'
import { RootState } from 'src/store'
import Item from './components/HeadLine'

const NewsScreen: React.FunctionComponent = () => {
  const articles = useSelector((state: RootState) => state.screens.news.articles)
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHeadLines())
  }, [dispatch])

  return (
    <SafeAreaView style={styles.wrapper}>
      <FlatList
        data={articles}
        renderItem={({ item }) => <Item article={item} />}
        keyExtractor={(item, index) => `${index}`}
      />
    </SafeAreaView>
  )
}

const styles = StyleSheet.create({
  wrapper: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center',
    backgroundColor: '#fff'
  }
})

export default NewsScreen
