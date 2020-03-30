import React from 'react'
import { View, Text, Platform, StatusBar, ViewStyle, TextStyle } from 'react-native'
import { appStyles, useStyle, CreateStyle } from 'src/shared/app-style'

const isAndroid = Platform.OS === 'android'

interface HeaderProps {
  title?: string
}

const Header: React.FunctionComponent<HeaderProps> = ({ title }) => {
  const styles = useStyle(createStyle)

  return (
    <View style={styles.container}>
      {isAndroid && <StatusBar backgroundColor="#fff" barStyle="dark-content" />}
      {/* TODO: leftToolbar content */}
      <View style={styles.leftToolbar} />
      <View style={styles.titleWrapper}>
        <Text style={styles.title}>{title}</Text>
      </View>
      {/* TODO: rightToolbar content */}
      <View style={styles.rightToolbar} />
    </View>
  )
}

interface Style {
  container: ViewStyle
  titleWrapper: ViewStyle
  leftToolbar: ViewStyle
  rightToolbar: ViewStyle
  title: TextStyle
}

const createStyle: CreateStyle<Style> = (theme, insets) => ({
  container: {
    flexDirection: 'row',
    borderColor: '#ddd',
    borderBottomWidth: 1,
    paddingTop: insets.top,
    paddingLeft: insets.left,
    paddingRight: insets.right,
    height: insets.top + 44,
    backgroundColor: theme.styles.color.background
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
