import { ThemeStyle } from '../../types'
import * as color from '../base/color'

const lightTheme: ThemeStyle = {
  color: {
    primary: color.primary[500],
    secondary: color.secondary[500],
    primaryVariant: color.primary[700],
    secondaryVariant: color.secondary[700],
    background: color.white,
    surface: color.white,
    success: color.green[500],
    warning: color.orange[500],
    error: color.red[500],
    onPrimary: color.white,
    onSecondary: color.white,
    onBackground: 'rgba(0, 0, 0, .87)',
    onSurface: 'rgba(0, 0, 0, .87)',
    onSuccess: color.white,
    onWarning: color.white,
    onError: color.white,
    backdrop: 'rgba(0, 0, 0, .24)'
  },
  textColor: {
    primary: color.primary[500],
    secondary: color.secondary[500],
    success: color.green[500],
    warning: color.orange[500],
    error: color.red[700],
    content: 'rgba(0, 0, 0, .87)',
    hint: 'rgba(0, 0, 0, .6)',
    disabled: 'rgba(0, 0, 0, .38)'
  }
}

export default lightTheme
