import React, {useState,useReducer} from 'react'
import createDataContext from './createDataContext';
import jsonServer from '../api/jsonServer';


const BlogReducer = (state,action) => {

  switch(action.type)
    {
      case 'get_blogposts':
          return action.payload
      case 'add_blogpost':
        return [...state,
          {
            id: Math.floor(Math.random() * 99999),
            title: action.payload.title,
            content: action.payload.content
          }
        ]
      case 'delete_blogpost':
          return state.filter(blogPost=> blogPost.id !== action.payload)
      case 'edit_blogPost':
        return state.map((blogPost)=> {
          if(blogPost.id == action.payload.id)
          return action.payload
          else
          return blogPost
        })

      default:
        return state;
    }

}

const getBlogPosts = (dispatch) => {

  return async ()=> {
    const response = await jsonServer.get('/blogPosts')

    dispatch({type:'get_blogposts',payload:response.data})

  }
}

const addBlogPost = (dispatch) => {
  return async (title,content,callback)=> {
    await jsonServer.post('/blogPosts',{title,content})
     //dispatch({type:'add_blogpost',payload:{title,content}})
  //   getBlogPosts();
     callback()
  }
}

const editBlogPost = (dispatch) => {
  return async (id,title,content,callback) => {
    await jsonServer.put(`/blogPosts/${id}`,{title,content})

    dispatch({type:"edit_blogPost",payload:{id,title,content}})
    callback()
  }
}

const deleteBlogPost = (dispatch) => {
  return async (id)=> {
    await jsonServer.delete(`/blogPosts/${id}`)
    dispatch({type:'delete_blogpost',payload:id})
  }
}
 export const {Context,Provider} = createDataContext(BlogReducer,{addBlogPost,deleteBlogPost,editBlogPost,getBlogPosts},[])
