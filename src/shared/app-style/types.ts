export type ThemeMode = 'light' | 'dark'

export type ThemeStyle = {
  color: {
    primary: string
    secondary: string
    primaryVariant: string
    secondaryVariant: string
    background: string
    surface: string
    success: string
    warning: string
    error: string
    onPrimary: string
    onSecondary: string
    onBackground: string
    onSurface: string
    onSuccess: string
    onWarning: string
    onError: string
    backdrop: string
  }

  textColor: {
    primary: string
    secondary: string
    success: string
    warning: string
    error: string
    content: string
    hint: string
    disabled: string
  }
}

export type Theme = {
  mode: ThemeMode
  styles: ThemeStyle
}
