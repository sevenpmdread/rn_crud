import React,{useContext} from 'react'
import { StyleSheet, Text, View,TouchableOpacity } from 'react-native'
import { Context } from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';

export default function ShowScreen({navigation}) {

  const {state} = useContext(Context)

  const blogPost = state.find((blogpost)=> blogpost.id === navigation.getParam('id'))

  return (
    <View>
      <Text>{blogPost.title}</Text>
      <Text>{blogPost.content}</Text>
    </View>
  )
}

ShowScreen.navigationOptions = ({navigation})=> {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Edit',{id: navigation.getParam('id')})}>
      <Feather name="edit" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
}
const styles = StyleSheet.create({})
