import React,{useState} from 'react'
import { StyleSheet, Text, View,TextInput,Button } from 'react-native'

const BlogPost = ({onSubmit, initialValues}) => {

  const[title,SetTitle] = useState(initialValues.title)
  const [content,SetContent] = useState(initialValues.content)

  return (
    <View>
      <Text style = {styles.label}>Title</Text>
      <TextInput style = {styles.input} value={title} onChangeText={(text)=> SetTitle(text)}/>
      <Text style = {styles.label}>Enter Text</Text>
      <TextInput style={styles.input} value={content} onChangeText={(text)=> SetContent(text)}></TextInput>
      <Button title = "Save blog Post" onPress={()=> onSubmit(title,content)}/>
    </View>
  )
}

BlogPost.defaultProps = {
  initialValues: {
    title:'',
    content:''
  }
}

export default BlogPost

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
