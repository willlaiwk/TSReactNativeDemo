import 'react-native'
import React from 'react'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import renderer from 'react-test-renderer'

import LaunchScreen from '../../../src/screens/LaunchScreen'

it('renders correctly', () => {
  renderer.create(
    <SafeAreaProvider>
      <LaunchScreen />
    </SafeAreaProvider>
  )
})
