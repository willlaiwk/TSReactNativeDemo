import React from 'react'
import 'react-native-gesture-handler'
import { Provider } from 'react-redux'
import { SafeAreaProvider } from 'react-native-safe-area-context'
import { NavigationContainer } from '@react-navigation/native'
import { createStackNavigator } from '@react-navigation/stack'
import LaunchScreen from './screens/LaunchScreen'
import HomeScreen from './screens/HomeScreen'
import { store } from './store'

const Stack = createStackNavigator()

const Root: React.FunctionComponent = () => (
  <SafeAreaProvider>
    <Provider store={store}>
      <NavigationContainer>
        <Stack.Navigator headerMode="none" initialRouteName="Launch">
          <Stack.Screen name="Launch" component={LaunchScreen} />
          <Stack.Screen name="Home" component={HomeScreen} />
        </Stack.Navigator>
      </NavigationContainer>
    </Provider>
  </SafeAreaProvider>
)

export default Root
