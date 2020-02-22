import React from 'react'
import { createBottomTabNavigator } from '@react-navigation/bottom-tabs'

import NewsScreen from '../NewsScreen'
import SettingsScreen from '../SettingsScreen'

const Tab = createBottomTabNavigator()

const HomeScreen: React.FunctionComponent = () => (
  <Tab.Navigator initialRouteName="News">
    <Tab.Screen name="News" component={NewsScreen} />
    <Tab.Screen name="Settings" component={SettingsScreen} />
  </Tab.Navigator>
)

export default HomeScreen
