import { useEffect, useState } from 'react'
import { StyleSheet } from 'react-native'
import { useSelector } from 'react-redux'
import { useSafeArea, EdgeInsets } from 'react-native-safe-area-context'
import { RootState } from 'src/store'
import { Theme } from './types'

/**
 * The style creator function.
 */
export type CreateStyle<T> = (theme: Theme, insets: EdgeInsets) => T

/**
 * A hook that generates dynamic styles through themes and safe-area edges.
 *
 * @param createStyle the style creator function
 *
 * @returns styles
 *
 * @example
 *
 * import React from 'react';
 * import { View, Text, ViewStyle, TextStyle } from 'react-native'
 * import { useStyle, CreateStyle } from 'src/shared/app-style'
 *
 * interface Style {
 *   container: ViewStyle
 *   text: TextStyle
 * }
 *
 * export const HomeScreen = () => {
 *   const styles = useStyle<Style>(createStyle)
 *
 *   return (
 *     <View style={styles.container}>
 *        <Text style={styles.text}>Home</Text>
 *     </View>
 *   )
 * }
 *
 * const createStyle: CreateStyle<Style> = (theme, insets) => ({
 *   container: {
 *     flex: 1,
 *     paddingLeft: insets.left,
 *     paddingRight: insets.right,
 *     backgroundColor: theme.styles.color.background
 *   },
 *   text: {
 *     fontSize: 16,
 *     color: theme.styles.color.onBackground
 *   }
 * })
 */
export function useStyle<T>(createStyle: CreateStyle<T>): T {
  const [styles, setStyles] = useState({})
  const insets = useSafeArea()
  const theme = useSelector((state: RootState) => state.shared.appStyle.theme)

  useEffect(() => {
    const newStyles = StyleSheet.create(createStyle(theme, insets))
    setStyles(newStyles)
  }, [createStyle, insets, theme])

  return styles as T
}

/**
 * A hook to get current theme.
 *
 * @returns theme
 */
export function useTheme(): Theme {
  const theme = useSelector((state: RootState) => state.shared.appStyle.theme)
  return theme
}
