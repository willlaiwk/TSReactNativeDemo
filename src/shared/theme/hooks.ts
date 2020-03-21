import { useSelector } from 'react-redux'
import { RootState } from 'src/store'
import { ThemeState } from './reducer'

export function useTheme(): ThemeState {
  const theme = useSelector((state: RootState) => state.shared.theme)

  return theme
}
