import 'react-native'
import React from 'react'
import renderer from 'react-test-renderer'

import Brand from '../../../src/screens/LaunchScreen/Brand'

it('renders correctly', () => {
  renderer.create(<Brand />)
})
