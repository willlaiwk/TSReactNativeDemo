import React from 'react'
import { View, Text, StyleSheet, TouchableWithoutFeedback } from 'react-native'
import Article from 'src/models/Article'

const HeadLine: React.FunctionComponent<{
  article: Article
}> = props => (
  <TouchableWithoutFeedback onPress={() => console.log('ggg')}>
    <View style={styles.container}>
      <Text>{props.article.title}</Text>
    </View>
  </TouchableWithoutFeedback>
)

const styles = StyleSheet.create({
  container: {
    flex: 1,
    padding: 20,
    backgroundColor: '#fff'
  }
})

export default HeadLine
