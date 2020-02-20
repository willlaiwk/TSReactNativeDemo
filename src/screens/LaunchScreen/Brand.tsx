import React from 'react'
import { Text, View, StyleSheet } from 'react-native'

const Brand: React.FunctionComponent = () => (
  <View style={styles.wrapper}>
    <Text style={styles.text}>Fake News</Text>
  </View>
)

const styles = StyleSheet.create({
  wrapper: {
    paddingVertical: 15,
    paddingHorizontal: 12,
    backgroundColor: '#ef5350',
    borderRadius: 2
  },
  text: {
    fontSize: 28,
    fontWeight: '700',
    color: '#FFFFFF'
  }
})

export default Brand
