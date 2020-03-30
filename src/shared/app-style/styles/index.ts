import * as colorBase from './base/color'
import lightTheme from './theme/light'
import darkTheme from './theme/dark'

export const color = colorBase

// App theme styles
export const theme = {
  light: lightTheme,
  dark: darkTheme
}

// App styles
const styles = {
  color,
  theme
}

export default styles
