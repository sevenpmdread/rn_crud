import React from 'react'
import { StyleSheet, Text, View } from 'react-native'
import { createAppContainer } from 'react-navigation'
import {createStackNavigator} from 'react-navigation-stack'
import IndexScreen from './src/screens/IndexScreen'
import ShowScreen from './src/screens/ShowScreen'
import CreateScreen from './src/screens/CreateScreen'
import EditScreen from './src/screens/EditScreen'
import { Provider as BlogProvider } from './src/context/BlogContext'
const navigator = createStackNavigator({
  Index:IndexScreen,
  Show:ShowScreen,
  Create:CreateScreen,
  Edit:EditScreen

}, {
  initalRouteName:'Index',
  defaultNavigationOptions: {
    title: 'Blogs'
  }
})

const App =  createAppContainer(navigator)
export default () => {
 return <BlogProvider>
        <App />
        </BlogProvider>
}

const styles = StyleSheet.create({})
