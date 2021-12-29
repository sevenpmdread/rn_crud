import React,{useContext, useState} from 'react'
import { StyleSheet, Text, View,TextInput,Button } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPost from '../comps/BlogPost'
export default function CreateScreen({navigation}) {

  const {state} = useContext(Context)

  const [title,SetTitle] = useState('')
  const [content,SetContent] = useState('')

  const {addBlogPost}  = useContext(Context)

  const blogPost = state.find((blogpost)=> blogpost.id === navigation.getParam('id'))

  return (
   <BlogPost onSubmit= { (title,content) => addBlogPost(title,content,()=> navigation.navigate('Index')) }/>
  )
}

const styles = StyleSheet.create({

  input: {
    fontSize:18,
    borderWidth:1,
    borderColor:'black',
    marginBottom:15,
    padding:5,
    margin:5
  },
  label: {
    fontSize:20,
    marginBottom:10,
    marginLeft:5
  }


})
