import { ThemeStyle, ThemeType } from './types'

export const themeStyles = {
  light: {
    headerBackgroundColor: '#fff'
  },
  dark: {
    headerBackgroundColor: '#333'
  }
}

export function getThemeStyles(themeType: ThemeType): ThemeStyle {
  return themeStyles[themeType] || themeStyles.light
}
