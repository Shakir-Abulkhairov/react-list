import React from 'react';
import PostListItem from '../post-list-item';
import './post-list.css';
const PostList =({posts, onDelete,toggleLikedItem,toggleImportantItem}) =>{
    const postList = posts.map((item)=>{
        const {id,...itemProps} = item
        return(
            <li key={id}>
                <PostListItem
                 toggleLikedItem={()=>toggleLikedItem(id)}
                 toggleImportantItem={()=>toggleImportantItem(id)}
                 onDelete={()=>onDelete(id)}
                {...itemProps} />
            </li>
        )
    })
    return(
        <ul>
            {postList}
        </ul>
    )
}
export default PostList;