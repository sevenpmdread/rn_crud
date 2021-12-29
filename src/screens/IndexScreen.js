import React, {useContext,useEffect} from 'react'
import { StyleSheet, Text, View, FlatList,Button,TouchableOpacity } from 'react-native'
import {Context as BlogContext,Provider} from '../context/BlogContext'
import { Feather } from '@expo/vector-icons';
const IndexScreen = ({navigation}) => {
  const {state,deleteBlogPost, getBlogPosts} = useContext(BlogContext);

  useEffect(() => {
    getBlogPosts()

    navigation.addListener('didFocus', ()=> {
      getBlogPosts();
    })

    return ()=> {
      listener.remove();
    }
  },[])

  return (
    <View>
      <Text>IndexScreen</Text>
      <FlatList
        data = {state}
        keyExtractor={state => state.id}
        renderItem={({item}) => {
          return <TouchableOpacity
          onPress={ ()=> navigation.navigate('Show',{id:item.id})}
          >
            <View style={styles.row}>
            <Text style={styles.title}>
              {item.title}
              {console.log(item)}
            </Text>
            <TouchableOpacity onPress={()=>deleteBlogPost(item.id)}>
            <Feather name="trash-2" size={24} color="black"  />
            </TouchableOpacity>
            </View>
            </TouchableOpacity>
        }}
      />
    </View>
  )
}

IndexScreen.navigationOptions = ({navigation})=> {
  return {
    headerRight: () => (
      <TouchableOpacity onPress={() => navigation.navigate('Create')}>
        <Feather name="plus" size={24} color="black" />
      </TouchableOpacity>
    ),
  };
}
const styles = StyleSheet.create({

  row: {
    flexDirection:'row',
    justifyContent:'space-between',
    paddingVertical:20,
    paddingHorizontal:12,
    borderTopWidth:1,
    borderColor:'black'
  },
  title: {
    fontSize:18
  }

})

export default IndexScreen

