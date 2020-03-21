import React, { useEffect } from 'react'
import { View, StyleSheet, FlatList } from 'react-native'
import { useSelector, useDispatch } from 'react-redux'
import { useSafeArea } from 'react-native-safe-area-context'
import { fetchHeadLines } from './actions'
import { RootState } from 'src/store'
import Header from 'src/components/Header'
import Item from './components/HeadLine'

const NewsScreen: React.FunctionComponent = () => {
  const articles = useSelector((state: RootState) => state.screens.news.articles)
  const insets = useSafeArea()
  const dispatch = useDispatch()

  useEffect(() => {
    dispatch(fetchHeadLines())
  }, [dispatch])

  const contentStyle = {
    ...styles.content,
    paddingLeft: insets.left,
    paddingRight: insets.right
  }

  return (
    <View style={styles.container}>
      <Header title="News" />
      <View style={contentStyle}>
        <FlatList
          data={articles}
          renderItem={({ item }) => <Item article={item} />}
          keyExtractor={(item, index) => `${index}`}
        />
      </View>
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    flex: 1
  },
  content: {
    flex: 1,
    justifyContent: 'center',
    alignItems: 'center'
  }
})

export default NewsScreen
