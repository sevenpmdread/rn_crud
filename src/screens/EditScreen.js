import React,{useContext,useState} from 'react'
import { StyleSheet, Text, TextInput, View,Button } from 'react-native'
import { Context } from '../context/BlogContext'
import BlogPost from '../comps/BlogPost'
import { NavigationActions } from 'react-navigation'
export default function EditScreen({navigation}) {
  const {state,editBlogPost} = useContext(Context)


  const blogPost = state.find(
    blogPost => blogPost.id === navigation.getParam('id')
  )
  const [title,setTitle] = useState(blogPost.title)
  const [content,setContent] = useState(blogPost.content)
  return (
    <BlogPost initialValues = {{title:blogPost.title,content:blogPost.content}}
    onSubmit={(title,content)=>
      editBlogPost(navigation.getParam('id'),title,content,()=> navigation.pop())
    }
      />
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
