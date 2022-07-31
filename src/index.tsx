import { StatusBar } from 'react-native'

import { GestureHandlerRootView } from 'react-native-gesture-handler'

import { Home } from './pages/Home'

export default function AppSrc() {
  return (
    <GestureHandlerRootView style={{ flex: 1 }}>
      <Home />
      <StatusBar barStyle="light-content" backgroundColor="transparent" translucent />
    </GestureHandlerRootView>
  )
}
