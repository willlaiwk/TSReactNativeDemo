import React from 'react'
import { View, Text, StyleSheet, Platform, StatusBar } from 'react-native'
import { useSafeArea } from 'react-native-safe-area-context'

const isAndroid = Platform.OS === 'android'

interface HeaderProps {
  title?: string
}

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
  const insets = useSafeArea()
  const containerStyle = {
    ...styles.container,
    paddingTop: insets.top,
    paddingLeft: insets.left,
    paddingRight: insets.right,
    height: insets.top + 44
  }

  return (
    <View style={containerStyle}>
      {isAndroid && <StatusBar backgroundColor="#fff" barStyle="dark-content" />}
      <View style={styles.leftToolbar}>
        {/* TODO: leftToolbar content */}
        <Text style={styles.title} />
      </View>
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {/* TODO: rightToolbar content */}
      <View style={styles.rightToolbar} />
    </View>
  )
}

const styles = StyleSheet.create({
  container: {
    backgroundColor: '#fff',
    flexDirection: 'row',
    borderColor: '#ddd',
    borderBottomWidth: 1
  },
  titleWrapper: {
    flex: 1,
    justifyContent: 'center'
  },
  leftToolbar: {
    flex: 1,
    alignItems: 'flex-start'
  },
  rightToolbar: {
    flex: 1,
    alignItems: 'flex-end'
  },
  title: {
    fontSize: 18,
    textAlign: 'center',
    color: '#333',
    fontWeight: '500'
  }
})

export default Header
